import subprocess
import json
import sys
import os
import sqlite3
import zlib
import tarfile
import io
import re
import hashlib
from datetime import datetime
from PIL import Image
from PIL.ExifTags import TAGS, GPSTAGS
import time
import xml.etree.ElementTree as ET # Built-in XML parser

class ForensicEngine:
    def __init__(self, serial):
        self.serial = serial
        self.evidence_path = f"evidence/{serial}"
        if not os.path.exists(self.evidence_path):
            os.makedirs(self.evidence_path)
        self.contact_book = self.extract_contact_book()

    def safe_str(self, obj):
        if obj is None: return ""
        try:
            s = str(obj)
            s = "".join(c for c in s if c.isprintable() or c in ['\n', '\t', ' '])
            return s.encode('utf-8', 'ignore').decode('utf-8')
        except: return "ENCODING_ERROR"

    def sanitize_number(self, num):
        if not num: return ""
        cleaned = re.sub(r'\D', '', str(num))
        return cleaned[-10:] if len(cleaned) >= 10 else cleaned

    def resolve_contact(self, raw_number):
        sanitized = self.sanitize_number(raw_number)
        if sanitized in self.contact_book:
            return f"{self.safe_str(self.contact_book[sanitized])} ({self.safe_str(raw_number)})"
        return self.safe_str(raw_number)

    def extract_contact_book(self):
        contacts = {}
        subprocess.run(['adb', '-s', self.serial, 'shell', 'content query --uri content://com.android.contacts/data/phones > /sdcard/fd_contacts.txt'], shell=True)
        local_dump = os.path.join(self.evidence_path, "fd_contacts.txt")
        subprocess.run(['adb', '-s', self.serial, 'pull', '/sdcard/fd_contacts.txt', local_dump], capture_output=True)
        
        if os.path.exists(local_dump):
            with open(local_dump, 'r', encoding='utf-8', errors='ignore') as f:
                for line in f:
                    if "Row:" in line:
                        try:
                            name_match = re.search(r'display_name=(.*?)(?:, [a-z0-9_]+=|$)', line)
                            num_match = re.search(r'data1=(.*?)(?:, [a-z0-9_]+=|$)', line)
                            name = name_match.group(1) if name_match else ""
                            num = num_match.group(1) if num_match else ""
                            if name and num:
                                contacts[self.sanitize_number(num)] = self.safe_str(name)
                        except: continue
            os.remove(local_dump)
        subprocess.run(['adb', '-s', self.serial, 'shell', 'rm /sdcard/fd_contacts.txt'], capture_output=True)
        return contacts

    def generate_file_hash(self, filepath):
        if not os.path.exists(filepath): return "FILE_NOT_FOUND"
        sha256_hash = hashlib.sha256()
        try:
            with open(filepath, "rb") as f:
                for byte_block in iter(lambda: f.read(4096), b""):
                    sha256_hash.update(byte_block)
            return sha256_hash.hexdigest()
        except: return "HASH_ERROR"

    def extract_file_structure(self):
        file_tree = []
        dl_dir = os.path.join(self.evidence_path, "Downloads")
        if not os.path.exists(dl_dir): os.makedirs(dl_dir)
        subprocess.run(['adb', '-s', self.serial, 'pull', '/sdcard/Download/', dl_dir], capture_output=True)

        for root, dirs, files in os.walk(dl_dir):
            for file in files:
                rel_path = os.path.relpath(root, dl_dir).replace('\\', '/')
                full_rel_path = f"{rel_path}/{file}" if rel_path != "." else file
                disp_path = "/sdcard/Download" if rel_path == "." else f"/sdcard/Download/{rel_path}"
                file_tree.append({
                    "path": self.safe_str(disp_path), 
                    "name": self.safe_str(file),
                    "local_path": self.safe_str(full_rel_path)
                })
        return file_tree

    def parse_whatsapp_sqlite(self, db_path):
        messages = []
        if not os.path.exists(db_path): return messages
        try:
            db_uri = f"file:{os.path.abspath(db_path)}?mode=ro"
            conn = sqlite3.connect(db_uri, uri=True, timeout=10)
            cursor = conn.cursor()
            try:
                query = "SELECT chat.raw_string_jid, message.text_data, datetime(message.timestamp/1000, 'unixepoch', 'localtime') FROM chat JOIN message ON chat._id = message.chat_row_id WHERE message.text_data IS NOT NULL ORDER BY message.timestamp DESC;"
                cursor.execute(query)
            except sqlite3.OperationalError:
                query = "SELECT jid.user, messages.text_data, datetime(messages.timestamp/1000, 'unixepoch', 'localtime') FROM jid JOIN messages ON jid._id = messages.jid_row_id WHERE messages.text_data IS NOT NULL ORDER BY messages.timestamp DESC;"
                cursor.execute(query)
            for row in cursor.fetchall():
                messages.append({"sender": self.resolve_contact(row[0]), "text": self.safe_str(row[1]), "time": self.safe_str(row[2]), "source": "SQLite DB"})
            conn.close()
        except: pass
        return messages

    # ==========================================
    # NEW: UI AUTOMATOR BYPASS ENGINE
    # ==========================================
    def uiautomator_whatsapp_scrape(self):
        """Bypasses DB locks by dumping the Android View Hierarchy XML"""
        print("[*] DB Locked. Initiating UI Automator Dump Protocol...", file=sys.stderr)
        messages = []
        
        # 1. Force open WhatsApp
        subprocess.run(['adb', '-s', self.serial, 'shell', 'monkey', '-p', 'com.whatsapp', '-c', 'android.intent.category.LAUNCHER', '1'], capture_output=True)
        time.sleep(2) # Wait for app to launch
        
        # 2. Scrape Loop (3 swipes for demo speed)
        for _ in range(3):
            # Dump the screen UI to an XML file on the device
            res = subprocess.run(['adb', '-s', self.serial, 'shell', 'uiautomator', 'dump', '/sdcard/window_dump.xml'], capture_output=True, text=True)
            if "UI hierchary dumped to" not in res.stdout:
                continue # Dump failed, try next loop
                
            # Pull the XML file to our machine
            local_xml = os.path.join(self.evidence_path, "window_dump.xml")
            subprocess.run(['adb', '-s', self.serial, 'pull', '/sdcard/window_dump.xml', local_xml], capture_output=True)
            
            if os.path.exists(local_xml):
                try:
                    tree = ET.parse(local_xml)
                    root = tree.getroot()
                    
                    # Search the XML for text nodes
                    for node in root.iter('node'):
                        text = node.attrib.get('text', '')
                        # Filter out common UI elements (time, battery, generic buttons)
                        if text and len(text) > 2 and text not in ["Type a message", "WhatsApp", "Calls", "Chats", "Status"]:
                            # In a real scenario, you'd correlate bounding boxes to figure out sender vs receiver.
                            # For triage, we just dump the text block.
                            messages.append({
                                "sender": "UI Intercept (Active Screen)",
                                "text": self.safe_str(text),
                                "time": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                                "source": "UI Automator"
                            })
                except Exception as e:
                    print(f"[!] XML Parse Error: {e}", file=sys.stderr)
                finally:
                    os.remove(local_xml) # Clean up local
                    
            # Scroll up to load older messages
            subprocess.run(['adb', '-s', self.serial, 'shell', 'input', 'swipe', '500', '500', '500', '1500', '300'], capture_output=True)
            time.sleep(1) # Let UI settle
            
        # Clean up device
        subprocess.run(['adb', '-s', self.serial, 'shell', 'rm', '/sdcard/window_dump.xml'], capture_output=True)

        # Deduplicate
        unique_msgs = []
        seen = set()
        for m in messages:
            if m['text'] not in seen:
                seen.add(m['text'])
                unique_msgs.append(m)
                
        return unique_msgs

    def unpack_backup(self, backup_path):
        extract_path = os.path.join(self.evidence_path, "extracted_data")
        if not os.path.exists(extract_path): os.makedirs(extract_path)
        try:
            with open(backup_path, 'rb') as f:
                f.read(24) 
                data = f.read()
                decompressed = zlib.decompress(data)
                with tarfile.open(fileobj=io.BytesIO(decompressed)) as tar:
                    if hasattr(tarfile, 'data_filter'):
                        tar.extractall(path=extract_path, filter='data')
                    else:
                        tar.extractall(path=extract_path)
                    return extract_path
        except: return None

    def extract_whatsapp_data(self):
        results = {"messages": [], "media_count": 0, "db_hash": None, "method": "NONE"}
        local_db = os.path.join(self.evidence_path, "msgstore.db")
        
        res = subprocess.run(['adb', '-s', self.serial, 'pull', "/data/data/com.whatsapp/databases/msgstore.db", local_db], capture_output=True)
        if res.returncode == 0 and os.path.exists(local_db):
            results["messages"] = self.parse_whatsapp_sqlite(local_db)
            results["db_hash"] = self.generate_file_hash(local_db)
            results["method"] = "ROOT_DIRECT"
        else:
            backup_file = os.path.join(self.evidence_path, "whatsapp_backup.ab")
            subprocess.run(['adb', '-s', self.serial, 'backup', '-f', backup_file, '-noapk', 'com.whatsapp'], capture_output=True)
            if os.path.exists(backup_file):
                extracted_dir = self.unpack_backup(backup_file)
                if extracted_dir:
                    db_p = os.path.join(extracted_dir, "apps", "com.whatsapp", "db", "msgstore.db")
                    if os.path.exists(db_p):
                        results["messages"] = self.parse_whatsapp_sqlite(db_p)
                        results["db_hash"] = self.generate_file_hash(db_p)
                        results["method"] = "ADB_BACKUP"

        # 3. TRIGGER UI AUTOMATOR IF DB FAILS
        if not results["messages"]:
            results["messages"] = self.uiautomator_whatsapp_scrape()
            results["method"] = "UI_AUTOMATOR"

        l_media = os.path.join(self.evidence_path, "Photos")
        if not os.path.exists(l_media): os.makedirs(l_media)
        subprocess.run(['adb', '-s', self.serial, 'pull', "/sdcard/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Images/", l_media], capture_output=True)
        results["media_count"] = len(os.listdir(l_media)) if os.path.exists(l_media) else 0
        return results

    def extract_media_metadata(self):
        photos_dir = os.path.join(self.evidence_path, "Photos")
        metadata_list = []
        if not os.path.exists(photos_dir): return []
        def _convert(v): return float(v[0]) + (float(v[1]) / 60.0) + (float(v[2]) / 3600.0)
        for root, dirs, files in os.walk(photos_dir):
            for file in files:
                if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                    filepath = os.path.join(root, file)
                    rel_path = os.path.relpath(filepath, photos_dir).replace('\\', '/')
                    try:
                        f_hash = self.generate_file_hash(filepath)
                        img = Image.open(filepath)
                        exif = img._getexif()
                        meta = {
                            "filename": self.safe_str(file), 
                            "filepath": self.safe_str(rel_path), 
                            "date": "Unknown", 
                            "hash": f_hash, 
                            "gps": None
                        }
                        if exif:
                            gps_info = {}
                            for tag, val in exif.items():
                                decoded = TAGS.get(tag, tag)
                                if decoded == "DateTimeOriginal": 
                                    raw_date = self.safe_str(val)
                                    try:
                                        dt_obj = datetime.strptime(raw_date, "%Y:%m:%d %H:%M:%S")
                                        meta["date"] = dt_obj.strftime('%Y-%m-%d %H:%M:%S')
                                    except:
                                        meta["date"] = raw_date
                                if decoded == "GPSInfo":
                                    for t in val: gps_info[GPSTAGS.get(t, t)] = val[t]
                            if 'GPSLatitude' in gps_info:
                                lat = _convert(gps_info['GPSLatitude'])
                                lon = _convert(gps_info['GPSLongitude'])
                                if gps_info.get('GPSLatitudeRef') != 'N': lat = -lat
                                if gps_info.get('GPSLongitudeRef') != 'E': lon = -lon
                                meta["gps"] = {"lat": round(lat, 6), "lon": round(lon, 6)}
                        metadata_list.append(meta)
                    except: continue
        return metadata_list

    def extract_carrier_data(self):
        data = {"sms": []}
        subprocess.run(['adb', '-s', self.serial, 'shell', 'content query --uri content://sms > /sdcard/fd_sms.txt'], shell=True)
        local_dump = os.path.join(self.evidence_path, "fd_sms.txt")
        subprocess.run(['adb', '-s', self.serial, 'pull', '/sdcard/fd_sms.txt', local_dump], capture_output=True)
        
        if os.path.exists(local_dump):
            with open(local_dump, 'r', encoding='utf-8', errors='ignore') as f:
                for line in f:
                    if "Row:" in line:
                        try:
                            addr_match = re.search(r'address=(.*?)(?:, [a-z_]+=|$)', line)
                            addr = addr_match.group(1) if addr_match else "Unknown"
                            date_match = re.search(r'date=(\d+)', line)
                            d_ms = int(date_match.group(1)) if date_match else 0
                            dt = datetime.fromtimestamp(d_ms / 1000.0).strftime('%Y-%m-%d %H:%M:%S') if d_ms else "Unknown"

                            body_split = line.split('body=')
                            body = ""
                            if len(body_split) > 1:
                                body_remainder = body_split[1]
                                for garbage in [', date=', ', locked=', ', spam_type=', ', re_original_key=']:
                                    if garbage in body_remainder:
                                        body_remainder = body_remainder.split(garbage)[0]
                                body = body_remainder

                            data["sms"].append({
                                "contact": self.resolve_contact(addr), 
                                "text": self.safe_str(body), 
                                "time": dt
                            })
                        except: continue
            os.remove(local_dump)
        subprocess.run(['adb', '-s', self.serial, 'shell', 'rm /sdcard/fd_sms.txt'], capture_output=True)
        return data

    def run_bloodhound_scanner(self, data_dict):
        RULES = {
            "FINANCIAL": {
                "patterns": [r'\b(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}\b', r'\b(?:\d[ -]*?){13,16}\b'],
                "keywords": ["transfer", "wire", "payment", "crypto", "bitcoin", "btc", "wallet", "bank"]
            },
            "URGENT_DESTRUCTION": {
                "patterns": [r'\b(delete|wipe|burn|clear|remove)\b'],
                "keywords": ["urgent", "immediately", "cops", "police", "raid", "hide"]
            },
            "COORDINATION": {
                "patterns": [r'(-?\d{1,2}\.\d+),\s*(-?\d{1,3}\.\d+)'],
                "keywords": ["meet", "location", "airport", "drop", "package", "border"]
            }
        }

        def analyze(text):
            categories = []
            found_words = []
            text_lower = text.lower()
            
            for category, rule in RULES.items():
                # Check Keywords
                for k in rule["keywords"]:
                    if k in text_lower:
                        categories.append(category)
                        # Find the original casing of the word in the text for the highlighter
                        match = re.search(re.escape(k), text, re.IGNORECASE)
                        if match: found_words.append(match.group())
                
                # Check Patterns
                for p in rule["patterns"]:
                    match = re.search(p, text)
                    if match:
                        categories.append(category)
                        found_words.append(match.group())
                        
            return list(set(categories)), list(set(found_words))

        # Apply to all message streams
        sources = ["whatsapp", "carrier_data"]
        for src_key in sources:
            if src_key in data_dict:
                # WhatsApp uses 'messages', SMS uses 'sms' in our previous code
                msg_list = data_dict[src_key].get("messages", []) if src_key == "whatsapp" else data_dict[src_key].get("sms", [])
                for msg in msg_list:
                    cats, words = analyze(msg.get("text", ""))
                    msg["risk_flags"] = cats      # Used for Stats/Graph
                    msg["trigger_words"] = words  # Used for UI Highlighting
        
        return data_dict

if __name__ == "__main__":
    serial = sys.argv[1] if len(sys.argv) > 1 else "DEVICE"
    engine = ForensicEngine(serial)
    
    raw = {
        "metadata": {"device": serial, "extracted_at": datetime.now().isoformat()},
        "contacts": [{"name": v, "number": k} for k, v in engine.contact_book.items()],
        "file_system": engine.extract_file_structure(),
        "whatsapp": engine.extract_whatsapp_data(),
        "media_metadata": engine.extract_media_metadata(),
        "carrier_data": engine.extract_carrier_data()
    }
    
    analyzed_data = engine.run_bloodhound_scanner(raw)
    sys.stdout.buffer.write(json.dumps(analyzed_data, ensure_ascii=False).encode('utf-8', 'ignore'))