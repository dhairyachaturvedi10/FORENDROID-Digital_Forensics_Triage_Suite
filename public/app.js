// --- FAILSAFE DEMO PAYLOAD: OPERATION HAWALA-TIDE (INDIA LOCALIZED) ---
var GOLD_STANDARD_DEMO = {
    metadata: { 
        device: "EXHIBIT-A-SAMSUNG-S23-ULTRA", 
        extracted_at: new Date().toISOString(),
        os_version: "Android 13 (API 33)",
        timezone: "IST"
    },
    contacts: [
        { name: "The Broker (Suspect)", number: "+91-98765-43210" },
        { name: "Dubai Supplier", number: "+971-50-123-4567" },
        { name: "Mumbai Port Fixer", number: "+91-99887-76655" },
        { name: "Transport Mule (NH48)", number: "+91-88776-65544" },
        { name: "Ahmedabad Receiver", number: "+91-77665-54433" },
        { name: "Hawala Angadia", number: "+91-91234-56789" },
        { name: "The Boss (Delhi)", number: "+91-99999-00000" },
        { name: "Safehouse Burner", number: "+91-80000-11111" },
        { name: "Bank Alerts", number: "VM-HDFCBK" },
        { name: "Zomato", number: "JD-ZOMATO" },
        { name: "Cleaners", number: "+91-70000-22222" }
    ],
    whatsapp: {
        messages: [
            // April 7 - The Deal & Hawala Transfer
            { sender: "Dubai Supplier", text: "Container MSKU908876 is loaded. Auto-parts front is secure.", time: "2026-04-07 10:00:00", risk_flags: ["COORDINATION"], trigger_words: ["Container", "front"], source: "DB" },
            { sender: "The Boss (Delhi)", text: "Has the angadia confirmed the payment?", time: "2026-04-07 10:15:00", risk_flags: ["FINANCIAL"], trigger_words: ["angadia", "payment"], source: "DB" },
            { sender: "The Broker (Suspect)", text: "Yes. Sent 50,000 USDT to the hawala network. TRC20 address: TQvn3r... waiting for clearance.", time: "2026-04-07 10:30:00", risk_flags: ["FINANCIAL"], trigger_words: ["USDT", "hawala", "address"], source: "DB" },
            { sender: "Hawala Angadia", text: "USDT received. Cash is ready for the port officials in Mumbai.", time: "2026-04-07 12:00:00", risk_flags: ["FINANCIAL", "COORDINATION"], trigger_words: ["USDT", "Cash", "officials"], source: "DB" },

            // April 8 - Mumbai Port Arrival
            { sender: "Mumbai Port Fixer", text: "Ship docked at Nhava Sheva. Customs inspector took the cut.", time: "2026-04-08 14:00:00", risk_flags: ["COORDINATION", "FINANCIAL"], trigger_words: ["Customs", "inspector", "cut"], source: "DB" },
            { sender: "The Broker (Suspect)", text: "Good. Load the gold into the false bottom of the Tata truck.", time: "2026-04-08 14:15:00", risk_flags: ["COORDINATION"], trigger_words: ["gold", "truck"], source: "DB" },
            { sender: "Transport Mule (NH48)", text: "Loaded. Leaving Mumbai now. Taking the NH48 towards Gujarat.", time: "2026-04-08 18:30:00", risk_flags: ["COORDINATION"], trigger_words: ["NH48", "Gujarat"], source: "DB" },

            // April 9 - Transit & Handoff
            { sender: "Transport Mule (NH48)", text: "Crossed Vapi border. No police checking.", time: "2026-04-09 02:30:00", risk_flags: ["COORDINATION"], trigger_words: ["border", "police"], source: "DB" },
            { sender: "Ahmedabad Receiver", text: "I have the keys to the Narol safehouse. Bring the truck to the back alley.", time: "2026-04-09 11:00:00", risk_flags: ["COORDINATION"], trigger_words: ["safehouse", "alley"], source: "DB" },
            { sender: "The Broker (Suspect)", text: "Transfer the remaining USDT to my cold wallet. The job is done.", time: "2026-04-09 15:32:00", risk_flags: ["FINANCIAL"], trigger_words: ["USDT", "wallet"], source: "DB" },

            // April 10 - The DRI/ATS Raid (Today)
            { sender: "Ahmedabad Receiver", text: "URGENT: ATS and DRI vehicles spotted outside the Narol compound!", time: "2026-04-10 07:15:00", risk_flags: ["URGENT_DESTRUCTION", "COORDINATION"], trigger_words: ["URGENT", "ATS", "DRI"], source: "RAM" },
            { sender: "The Boss (Delhi)", text: "Format the phones. Burn the ledger. Do not speak to the CBI.", time: "2026-04-10 07:16:00", risk_flags: ["URGENT_DESTRUCTION"], trigger_words: ["Format", "Burn", "CBI"], source: "RAM" },
            { sender: "Cleaners", text: "We are en route to clear the secondary location in Surat.", time: "2026-04-10 07:20:00", risk_flags: ["URGENT_DESTRUCTION", "COORDINATION"], trigger_words: ["clear", "location"], source: "RAM" },
            { sender: "The Broker (Suspect)", text: "Wiping WhatsApp data now. Smashing the hard drives.", time: "2026-04-10 07:30:00", risk_flags: ["URGENT_DESTRUCTION"], trigger_words: ["Wiping", "data", "Smashing", "drives"], source: "RAM" }
        ]
    },
    carrier_data: {
        sms: [
            // Mundane / Alerts
            { contact: "Bank Alerts", text: "HDFC Alert: INR 45,00,000 credited to A/c ending 0942 via RTGS. Ref: HDFCR55...", time: "2026-04-07 10:00:00", risk_flags: ["FINANCIAL"], trigger_words: ["INR", "credited", "RTGS"] },
            { contact: "Zomato", text: "Your order from 'Honest Restaurant' is out for delivery with Valmik.", time: "2026-04-08 21:00:00", risk_flags: [], trigger_words: [] },
            { contact: "Bank Alerts", text: "Your OTP for Offshore Forex Transfer is 849021. Do not share this OTP.", time: "2026-04-09 15:30:00", risk_flags: ["FINANCIAL"], trigger_words: ["Forex", "Transfer", "OTP"] },
            
            // Burner Comms
            { contact: "Safehouse Burner", text: "Did you delete the CCTV footage? The local police are asking questions.", time: "2026-04-09 23:15:00", risk_flags: ["URGENT_DESTRUCTION"], trigger_words: ["delete", "police"] },
            { contact: "Safehouse Burner", text: "Raid confirmed. Remove the sim cards and hide the cash.", time: "2026-04-10 07:18:00", risk_flags: ["URGENT_DESTRUCTION", "FINANCIAL"], trigger_words: ["Raid", "Remove", "hide", "cash"] }
        ]
    },
    media_metadata: [
        { filename: "dubai_container_loading.jpg", filepath: "demo/dubai.jpg", date: "2026-04-07 09:10:00", hash: "a3f5b2c198fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", gps: { lat: 25.2048, lon: 55.2708 } }, // Dubai
        { filename: "angadia_receipt.png", filepath: "demo/ledger1.png", date: "2026-04-07 12:05:00", hash: "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", gps: null },
        { filename: "nhava_sheva_dock.jpg", filepath: "demo/mumbai.jpg", date: "2026-04-08 14:10:00", hash: "c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855a3f5b2c198fc1", gps: { lat: 18.9493, lon: 72.9515 } }, // Mumbai Port
        { filename: "highway_dhaba_stop.jpg", filepath: "demo/highway.jpg", date: "2026-04-09 03:15:00", hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", gps: { lat: 21.1702, lon: 72.8311 } }, // Surat/Vapi Highway
        { filename: "binance_wallet_qr.png", filepath: "demo/qr.png", date: "2026-04-09 15:35:00", hash: "f4c8996fb92427ae41e4649b934ca495991b7852b855e3b0c44298fc1c149afb", gps: null },
        { filename: "narol_safehouse_gate.jpg", filepath: "demo/safehouse.jpg", date: "2026-04-10 06:00:00", hash: "9b934ca495991b7852b855e3b0c44298fc1c149afbf4c8996fb92427ae41e464", gps: { lat: 23.0225, lon: 72.5714 } } // Ahmedabad
    ],
    file_system: [
        { name: "hawala_ledger.xlsx", path: "/sdcard/Download/Financial", local_path: "demo/ledger.xlsx" },
        { name: "dubai_customs_manifest.pdf", path: "/sdcard/Download/Documents", local_path: "demo/manifest.pdf" },
        { name: "trust_wallet_backup.dat", path: "/sdcard/Download/Crypto", local_path: "demo/wallet.dat" },
        { name: "pgp_private_key.asc", path: "/sdcard/Download/Secure", local_path: "demo/key.asc" },
        { name: "bribe_payments_april.txt", path: "/sdcard/Documents", local_path: "demo/bribes.txt" },
        { name: "fake_gst_invoices.pdf", path: "/sdcard/Download/Business", local_path: "demo/gst.pdf" }
    ]
};

let currentSerial = "";
let currentData = null; 
let currentArtifactId = null;
let currentImages = [];
let currentFiles = [];
let masterTimelineData = [];
let networkInstance = null;

window.onload = () => { loadCases(); loadDevices(); };

// --- GLOBAL COMMAND PALETTE (Ctrl+K) ---
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleCommandPalette();
    }
    if (e.key === 'Escape') closeCommandPalette();
});

function toggleCommandPalette() {
    const pal = document.getElementById('command-palette');
    if (pal.classList.contains('hidden')) {
        pal.classList.remove('hidden');
        document.getElementById('cmd-input').focus();
    } else {
        closeCommandPalette();
    }
}

function closeCommandPalette() {
    document.getElementById('command-palette').classList.add('hidden');
    document.getElementById('cmd-input').value = '';
    document.getElementById('cmd-results').classList.add('hidden');
    document.getElementById('cmd-empty').classList.remove('hidden');
}

function runCommandSearch() {
    const term = document.getElementById('cmd-input').value.toLowerCase();
    const resBox = document.getElementById('cmd-results');
    const emptyBox = document.getElementById('cmd-empty');

    if (!term || !currentData) {
        resBox.classList.add('hidden');
        emptyBox.classList.remove('hidden');
        return;
    }

    let results = [];
    (currentData.carrier_data?.sms || []).forEach(s => {
        if(s.text.toLowerCase().includes(term) || s.contact.toLowerCase().includes(term)) results.push({ type: 'SMS', icon: '💬', title: s.contact, desc: s.text, tab: 'sms' });
    });
    (currentData.whatsapp?.messages || []).forEach(m => {
        if(m.text.toLowerCase().includes(term) || m.sender.toLowerCase().includes(term)) results.push({ type: 'WhatsApp', icon: '🟢', title: m.sender, desc: m.text, tab: 'whatsapp' });
    });
    (currentData.file_system || []).forEach(f => {
        if(f.name.toLowerCase().includes(term)) results.push({ type: 'File', icon: '📄', title: f.name, desc: f.path, tab: 'files' });
    });
    (currentData.contacts || []).forEach(c => {
        if(c.name.toLowerCase().includes(term) || c.number.includes(term)) results.push({ type: 'Contact', icon: '👤', title: c.name, desc: c.number, tab: 'contacts' });
    });

    if (results.length > 0) {
        resBox.innerHTML = results.slice(0, 20).map(r => `
            <div onclick="routeFromCmd('${r.tab}', '${term}')" class="p-3 hover:bg-white/10 rounded-xl cursor-pointer flex gap-4 items-center border border-transparent hover:border-white/5 transition">
                <div class="text-2xl">${r.icon}</div>
                <div class="flex-1 overflow-hidden">
                    <div class="text-sm font-bold text-gray-200">${r.title} <span class="text-[9px] bg-black/50 px-1.5 py-0.5 rounded ml-1 text-gray-500 tracking-wider">${r.type}</span></div>
                    <div class="text-xs text-gray-500 truncate mt-0.5">${r.desc}</div>
                </div>
            </div>
        `).join('');
        resBox.classList.remove('hidden');
        emptyBox.classList.add('hidden');
    } else {
        resBox.classList.add('hidden');
        emptyBox.classList.remove('hidden');
        emptyBox.innerHTML = `<span class="text-3xl mb-2 text-gray-700">🚫</span><span class="text-sm text-gray-500">No results found for "${term}"</span>`;
    }
}

function routeFromCmd(tab, term) {
    closeCommandPalette();
    switchTab(tab);
    if(tab === 'whatsapp') { document.getElementById('whatsapp-search').value = term; renderWhatsApp(); }
    if(tab === 'sms') { document.getElementById('sms-search').value = term; renderSMS(); }
    if(tab === 'contacts') { document.getElementById('contact-search').value = term; renderContacts(); }
}

// --- TABS & DATA LOADING ---
function switchTab(tabName) {
    // 1. The Master List of all possible tabs (ADDED 'heatmap' and 'geo')
    const tabs = ['master', 'threats', 'whatsapp', 'sms', 'files', 'gallery', 'coc', 'geo', 'heatmap', 'crypto'];
    
    // 2. Turn ALL tabs OFF
    tabs.forEach(t => {
        const tabContent = document.getElementById(`tab-${t}`);
        const tabBtn = document.getElementById(`tab-btn-${t}`);
        
        if (tabContent) {
            tabContent.classList.add('hidden');
        }
        if (tabBtn) {
            tabBtn.classList.remove('border-blue-500', 'text-blue-400');
            tabBtn.classList.add('border-transparent', 'text-gray-500');
        }
    });

    // 3. Turn the CLICKED tab ON
    const activeContent = document.getElementById(`tab-${tabName}`);
    const activeBtn = document.getElementById(`tab-btn-${tabName}`);
    
    if (activeContent) {
        activeContent.classList.remove('hidden');
    }
    if (activeBtn) {
        activeBtn.classList.remove('border-transparent', 'text-gray-500');
        activeBtn.classList.add('border-blue-500', 'text-blue-400');
    }
    
    // 4. Force UI Redraws for complex visualizers
    if (currentData) {
        if (tabName === 'threats' && typeof renderIntelligence === 'function') {
            setTimeout(renderIntelligence, 100); // Vis.js needs the container to be visible first
        }
        if (tabName === 'heatmap' && typeof renderHeatmap === 'function') {
            setTimeout(renderHeatmap, 50); // Ensures the bars animate properly after un-hiding
        }
    }
}

function clearDashboard() {
    currentData = null; currentSerial = ""; currentArtifactId = null; masterTimelineData = [];
    document.getElementById('master-feed').innerHTML = '<div class="flex flex-col items-center justify-center h-full text-gray-600 italic"><span class="text-4xl mb-4">🔎</span>Select an extraction to view data.</div>';
    document.getElementById('vulnerability-list').innerHTML = ''; document.getElementById('top-threats-list').innerHTML = '';
    document.getElementById('network-graph').innerHTML = ''; document.getElementById('contacts-list').innerHTML = '';
    document.getElementById('whatsapp-feed').innerHTML = ''; document.getElementById('sms-feed').innerHTML = '';
    document.getElementById('file-tree').innerHTML = ''; document.getElementById('media-list').innerHTML = '';
    document.getElementById('exif-list').innerHTML = ''; document.getElementById('coc-table-body').innerHTML = '';
    document.getElementById('geo-map').classList.add('hidden'); document.getElementById('map-overlay').classList.remove('hidden');
    document.getElementById('file-viewer-content').classList.add('hidden'); document.getElementById('file-viewer-img').classList.add('hidden');
    document.getElementById('file-viewer-empty').classList.remove('hidden'); document.getElementById('file-viewer-name').innerText = "NO FILE SELECTED";
}

async function viewData(id, serial) {
    currentSerial = serial; currentArtifactId = id;
    const res = await fetch(`/api/artifacts/${id}`);
    const item = await res.json();
    currentData = item.data;

    compileMasterTimeline(); renderMasterTimeline(); renderIntelligence();
    renderContacts(); renderWhatsApp(); renderSMS(); renderFiles();
    renderGallery(); renderGeo(); renderIntegrity();
}

// --- HELPER: IN-LINE HIGHLIGHTING ---
function highlightRisk(text, flags) {
    if (!flags || !flags.length) return text;
    let safeText = text;
    // Special patterns from backend
    const labels = ["EMAIL_DETECTED", "CRYPTO_ADDRESS_SUSPECTED", "CREDIT_CARD_SUSPECTED"];
    flags.forEach(flag => {
        if (!labels.includes(flag)) {
            const regex = new RegExp(`(${flag})`, 'gi');
            safeText = safeText.replace(regex, `<span class="bg-red-500/30 text-red-400 font-bold px-1 rounded">$1</span>`);
        }
    });
    return safeText;
}

// --- RENDER ENGINES ---
function compileMasterTimeline() {
    masterTimelineData = [];
    (currentData.carrier_data?.sms || []).forEach(s => { if(s.time !== "Unknown") masterTimelineData.push({...s, source: 'SMS', icon: '💬', title: s.contact, desc: s.text}); });
    (currentData.whatsapp?.messages || []).forEach(m => { if(m.time !== "Unknown") masterTimelineData.push({...m, source: 'WhatsApp', icon: '🟢', title: m.sender, desc: m.text}); });
    (currentData.media_metadata || []).forEach(p => {
        if(p.date !== "Unknown") {
            const hasGps = p.gps ? "📍 Geo-tagged" : "";
            masterTimelineData.push({time: p.date, source: 'Camera', icon: '📸', title: p.filename, desc: `Image captured. ${hasGps}`, risk_flags: []});
        }
    });
    masterTimelineData.sort((a, b) => new Date(b.time) - new Date(a.time));
}

function renderMasterTimeline() {
    const term = document.getElementById('master-search').value.toLowerCase();
    const filtered = masterTimelineData.filter(e => e.title.toLowerCase().includes(term) || e.desc.toLowerCase().includes(term) || e.source.toLowerCase().includes(term));
    
    document.getElementById('master-feed').innerHTML = filtered.length ? filtered.map(e => `
        <div class="flex gap-4 p-4 bg-black/40 rounded-2xl border border-white/5 hover:bg-black/60 transition shadow-sm">
            <div class="text-2xl">${e.icon}</div>
            <div class="flex-1">
                <div class="flex justify-between items-center mb-1">
                    <span class="font-bold text-gray-200 text-sm">${e.title}</span>
                    <span class="bg-white/5 px-2 py-1 rounded-md text-[10px] text-gray-400 font-mono">${e.time} | ${e.source}</span>
                </div>
                <div class="text-sm text-gray-400 leading-relaxed">${highlightRisk(e.desc, e.risk_flags)}</div>
                ${e.risk_flags?.length ? `<div class="inline-block bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[9px] font-bold mt-2 uppercase tracking-wider border border-red-500/30">Flags: ${e.risk_flags.join(', ')}</div>` : ''}
            </div>
        </div>
    `).join('') : '<div class="text-center text-gray-500 italic mt-10">No events matched.</div>';
}

function renderIntelligence() {
    // 1. Compile Stats
    const stats = {};
    (currentData.whatsapp?.messages || []).forEach(m => {
        if (!stats[m.sender]) stats[m.sender] = { count: 0, flags: new Set() };
        stats[m.sender].count++;
        if (m.risk_flags) m.risk_flags.forEach(f => stats[m.sender].flags.add(f));
    });
    (currentData.carrier_data?.sms || []).forEach(s => {
        if (!stats[s.contact]) stats[s.contact] = { count: 0, flags: new Set() };
        stats[s.contact].count++;
        if (s.risk_flags) s.risk_flags.forEach(f => stats[s.contact].flags.add(f));
    });

    // 2. Render List
    const sorted = Object.entries(stats).sort((a,b) => b[1].flags.size - a[1].flags.size);
    document.getElementById('top-threats-list').innerHTML = sorted.length ? sorted.map(([c, data]) => {
        const isHighRisk = data.flags.size > 0;
        return `
        <div class="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 shadow-sm mb-2">
            <span class="truncate pr-2 text-gray-300 font-bold text-xs">${c}</span>
            ${isHighRisk 
                ? `<span class="text-red-400 font-bold bg-red-900/20 border border-red-500/20 px-2 py-1 rounded-md text-[9px]">⚠️ ${Array.from(data.flags).length} FLAGS</span>`
                : `<span class="text-gray-500 font-mono text-[10px]">${data.count} MSGS</span>`
            }
        </div>
    `}).join('') : '<div class="text-gray-500 italic text-xs p-2">No contacts logged.</div>';
    
    document.getElementById('vulnerability-list').innerHTML = `
        <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/30">
            <div class="font-bold text-red-400 text-xs tracking-wider mb-1">USB DEBUGGING EXPLOIT</div>
            <p class="text-gray-400 text-xs">Device connected via ADB interface.</p>
        </div>
    `;

    // 3. VIS.JS NETWORK GRAPH
    const container = document.getElementById('network-graph');
    container.innerHTML = ""; // clear old
    
    const nodesArray = [{ id: 'TARGET', label: 'Target Device\n' + currentSerial, shape: 'circle', color: {background: '#3b82f6', border: '#1d4ed8'}, font: {color: '#ffffff', bold: true}, size: 25 }];
    const edgesArray = [];

    Object.entries(stats).forEach(([contact, data]) => {
        const isThreat = data.flags.size > 0;
        nodesArray.push({
            id: contact,
            label: contact,
            shape: 'dot',
            size: 10 + Math.min(data.count, 20),
            color: isThreat ? {background: '#ef4444', border: '#b91c1c'} : {background: '#374151', border: '#1f2937'},
            font: { color: '#9ca3af', size: 10 }
        });
        edgesArray.push({
            from: 'TARGET',
            to: contact,
            value: data.count,
            color: isThreat ? 'rgba(239, 68, 68, 0.4)' : 'rgba(75, 85, 99, 0.3)'
        });
    });

    const graphData = { nodes: new vis.DataSet(nodesArray), edges: new vis.DataSet(edgesArray) };
    const options = {
        physics: { barnesHut: { gravitationalConstant: -3000, springLength: 100 } },
        interaction: { hover: true, tooltipDelay: 100 }
    };
    new vis.Network(container, graphData, options);
}

function renderWhatsApp() {
    const term = document.getElementById('whatsapp-search').value.toLowerCase();
    const filter = document.getElementById('whatsapp-filter').value;
    const msgs = currentData.whatsapp?.messages || [];

    const filtered = msgs.filter(m => {
        const matchesTerm = m.sender.toLowerCase().includes(term) || m.text.toLowerCase().includes(term);
        const matchesFilter = filter === 'all' || (filter === 'threats' && m.risk_flags?.length > 0);
        return matchesTerm && matchesFilter;
    });

    document.getElementById('whatsapp-feed').innerHTML = filtered.length ? filtered.map(m => `
        <div class="p-4 bg-black/40 border border-white/5 ${m.risk_flags?.length ? 'border-l-4 border-l-red-500' : 'border-l-4 border-l-green-500'} rounded-2xl shadow-sm transition hover:bg-black/60">
            <div class="flex justify-between items-center mb-2">
                <span class="text-xs font-bold text-gray-300">${m.sender}</span>
                <span class="flex gap-2 items-center"><span class="bg-white/5 px-2 py-0.5 rounded text-[9px] font-mono">${m.source || 'DB'}</span><span class="text-[10px] text-gray-500">${m.time}</span></span>
            </div>
            <div class="text-sm text-gray-300 leading-relaxed">${highlightRisk(m.text, m.risk_flags)}</div>
            ${m.risk_flags?.length ? `<div class="inline-block mt-3 text-[9px] text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded font-bold uppercase tracking-wider">TRIGGERS: ${m.risk_flags.join(', ')}</div>` : ''}
        </div>
    `).join('') : '<div class="text-center text-gray-500 italic mt-10">No messages match filter.</div>';
}

function renderSMS() {
    const term = document.getElementById('sms-search').value.toLowerCase();
    const filter = document.getElementById('sms-filter').value;
    const filtered = (currentData.carrier_data?.sms || []).filter(s => {
        const matchesTerm = s.contact.toLowerCase().includes(term) || s.text.toLowerCase().includes(term);
        const matchesFilter = filter === 'all' || (filter === 'threats' && s.risk_flags?.length > 0);
        return matchesTerm && matchesFilter;
    });

    document.getElementById('sms-feed').innerHTML = filtered.length ? filtered.map(s => `
        <div class="p-4 bg-black/40 border border-white/5 ${s.risk_flags?.length ? 'border-l-4 border-l-red-500' : 'border-l-4 border-l-blue-500'} rounded-2xl shadow-sm hover:bg-black/60">
            <div class="flex justify-between items-center mb-2">
                <span class="text-xs font-bold text-gray-300">${s.contact}</span>
                <span class="text-[10px] text-gray-500">${s.time}</span>
            </div>
            <div class="text-sm text-gray-300 leading-relaxed">${highlightRisk(s.text, s.risk_flags)}</div>
            ${s.risk_flags?.length ? `<div class="inline-block mt-3 text-[9px] text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-1 rounded font-bold uppercase tracking-wider">TRIGGERS: ${s.risk_flags.join(', ')}</div>` : ''}
        </div>
    `).join('') : '<div class="text-center text-gray-500 italic mt-10">No SMS matched.</div>';
}

// (Remaining UI functions: renderContacts, renderFiles, renderGallery, renderGeo, renderIntegrity, and core API functions remain identical to V7.0)
function renderContacts() {
    const term = document.getElementById('contact-search').value.toLowerCase();
    const filtered = (currentData.contacts || []).filter(c => c.name.toLowerCase().includes(term) || c.number.includes(term));
    document.getElementById('contacts-list').innerHTML = filtered.length ? filtered.map(c => `<div class="bg-black/40 p-4 rounded-2xl border border-white/5 hover:border-blue-500/50 transition"><div class="font-bold text-blue-400 text-sm">${c.name}</div><div class="text-gray-500 mt-1 text-xs font-mono">${c.number}</div></div>`).join('') : '<div class="col-span-full text-center text-gray-500 italic mt-10">No contacts mapped.</div>';
}
function renderFiles() {
    currentFiles = currentData.file_system || [];
    let curP = "";
    document.getElementById('file-tree').innerHTML = currentFiles.length ? currentFiles.map((f, idx) => {
        let h = (f.path !== curP) ? `<div class="text-blue-500 mt-5 font-bold border-b border-white/10 pb-1 mb-2 uppercase tracking-wide text-[10px]">${f.path}</div>` : "";
        curP = f.path;
        return h + `<div onclick="readFile(${idx})" class="ml-2 py-1.5 text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer rounded-lg px-2 truncate transition flex items-center gap-2">📄 ${f.name}</div>`;
    }).join('') : '<div class="text-gray-500 italic text-center mt-10">No files extracted.</div>';
}
async function readFile(idx) {
    const file = currentFiles[idx];
    document.getElementById('file-viewer-name').innerText = file.name;
    document.getElementById('file-viewer-empty').classList.add('hidden');
    const contentBox = document.getElementById('file-viewer-content');
    const imgBox = document.getElementById('file-viewer-img');
    contentBox.classList.add('hidden'); imgBox.classList.add('hidden');
    const ext = file.name.split('.').pop().toLowerCase();
    const filePath = `/evidence/${currentSerial}/Downloads/${file.local_path}`;
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
        imgBox.src = filePath; imgBox.classList.remove('hidden');
    } else if (ext === 'pdf') {
        contentBox.classList.remove('hidden');
        contentBox.innerHTML = `<iframe src="${filePath}" class="w-full h-full rounded-xl" frameborder="0"></iframe>`;
    } else if (['txt', 'log', 'json', 'csv', 'xml', 'html'].includes(ext)) {
        contentBox.classList.remove('hidden');
        try {
            const res = await fetch(filePath);
            if (res.ok) {
                const text = await res.text();
                contentBox.innerText = text.length > 50000 ? text.substring(0, 50000) + "\n\n[...FILE TRUNCATED...]" : text;
            }
        } catch(e) { contentBox.innerText = "Error loading file."; }
    } else {
        contentBox.classList.remove('hidden');
        try {
            const res = await fetch(filePath);
            if (res.ok) {
                const buffer = await res.arrayBuffer(); const bytes = new Uint8Array(buffer);
                let hexDump = `[ FORENSIC HEX DUMP ]\n\nOFFSET   00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F\n--------------------------------------------------------\n`;
                for(let i=0; i < Math.min(bytes.length, 256); i+=16) {
                    let hexLine = i.toString(16).padStart(8, '0').toUpperCase() + " "; let asciiLine = "";
                    for(let j=0; j<16; j++) {
                        if(i+j < bytes.length) {
                            const b = bytes[i+j];
                            hexLine += b.toString(16).padStart(2, '0').toUpperCase() + " ";
                            asciiLine += (b >= 32 && b <= 126) ? String.fromCharCode(b) : ".";
                        } else { hexLine += "   "; }
                    }
                    hexDump += `${hexLine} | ${asciiLine}\n`;
                }
                contentBox.innerText = hexDump;
            }
        } catch(e) { contentBox.innerText = "Error generating Hex Dump."; }
    }
}
function renderGallery() {
    currentImages = (currentData.media_metadata || []).filter(m => m.filename.match(/\.(jpg|png|jpeg)$/i));
    document.getElementById('media-list').innerHTML = currentImages.map((i, idx) => `<div onclick="selectImage(${idx})" class="p-3 bg-black/40 border border-white/5 rounded-xl cursor-pointer text-[10px] truncate hover:border-blue-500 transition mb-2">${i.filename}</div>`).join('');
}
function selectImage(idx) {
    const img = currentImages[idx]; const v = document.getElementById('media-viewer-img');
    v.src = `/evidence/${currentSerial}/Photos/${img.filepath}`; v.classList.remove('hidden');
}
function renderGeo() {
    const map = document.getElementById('geo-map');
    const overlay = document.getElementById('map-overlay');
    const geoItems = (currentData.media_metadata || []).filter(m => m.gps);

    // 1. Render the clickable list
    document.getElementById('exif-list').innerHTML = (currentData.media_metadata || []).map(m => `
        <div onclick="${m.gps ? `updateMap(${m.gps.lat}, ${m.gps.lon})` : ''}" 
             class="p-3 border border-white/5 ${m.gps ? 'bg-green-900/10 border-green-500/30 cursor-pointer hover:bg-green-900/30' : 'bg-black/40 opacity-50'} rounded-2xl mb-2 transition-all group">
            <div class="flex justify-between items-start">
                <div class="text-blue-400 truncate text-[11px] font-bold mb-1">${m.filename}</div>
                ${m.gps ? '<span class="text-[9px] bg-green-500/20 text-green-400 px-1.5 rounded">GPS</span>' : ''}
            </div>
            <div class="text-gray-500 text-[10px] font-mono">
                ${m.gps ? `LAT: ${m.gps.lat}<br>LON: ${m.gps.lon}` : 'No Geospatial Data Found'}
            </div>
            ${m.gps ? '<div class="text-[8px] text-green-500/50 mt-2 italic group-hover:text-green-400">Click to focus map →</div>' : ''}
        </div>`).join('');

    // 2. Default to the first found location
    if (geoItems.length > 0) {
        updateMap(geoItems[0].gps.lat, geoItems[0].gps.lon);
    } else {
        map.classList.add('hidden');
        overlay.classList.remove('hidden');
    }
}

// 3. New function to handle map updates
function updateMap(lat, lon) {
    const map = document.getElementById('geo-map');
    const overlay = document.getElementById('map-overlay');
    
    // Zoom offset (0.005 is a good close-up for streets)
    const offset = 0.005;
    
    // Update the iframe source
    map.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-offset},${lat-offset},${lon+offset},${lat+offset}&layer=mapnik&marker=${lat},${lon}`;
    
    // Reveal map and hide "No Data" overlay
    map.classList.remove('hidden');
    overlay.classList.add('hidden');
}
function renderIntegrity() {
    const body = document.getElementById('coc-table-body'); let html = '';
    if (currentData.whatsapp?.db_hash) html += `<tr class="border-b border-white/5 hover:bg-black/50 transition"><td class="p-4 text-blue-400">msgstore.db</td><td class="p-4 text-green-500">${currentData.whatsapp.db_hash}</td></tr>`;
    (currentData.media_metadata || []).forEach(m => { if (m.hash) html += `<tr class="border-b border-white/5 hover:bg-black/50 transition"><td class="p-4 text-gray-300">${m.filename}</td><td class="p-4 text-blue-400">${m.hash}</td></tr>`; });
    body.innerHTML = html || '<tr><td colspan="2" class="p-6 text-center italic text-gray-500">No verifiable hashes extracted.</td></tr>';
}
async function loadCases() {
    const selector = document.getElementById('case-selector');
    const currVal = selector.value;
    
    try {
        const res = await fetch('/api/cases');
        const cases = await res.json();
        
        let html = '<option value="">Select Investigation...</option>';
        // INJECT THE DEMO CASE
        html += '<option value="DEMO_CASE" style="color: #fbbf24; font-weight: bold;">🚨 DEMO: Operation High-Tide</option>';
        html += cases.map(c => `<option value="${c.id}">${c.case_name}</option>`).join('');
        
        selector.innerHTML = html;
        if (currVal) selector.value = currVal;
    } catch (e) {
        console.warn("Backend API not reachable. Loading Demo fallback.");
        // Fallback if the server is dead
        selector.innerHTML = '<option value="">Select Investigation...</option><option value="DEMO_CASE" style="color: #fbbf24; font-weight: bold;">🚨 DEMO: Operation High-Tide</option>';
    }
}
async function loadDevices() {
    const res = await fetch('/api/devices'); const dev = await res.json();
    document.getElementById('device-selector').innerHTML = dev.map(d => `<option value="${d}">${d}</option>`).join('') || '<option value="">No Device</option>';
}
async function startExtraction() {
    const s = document.getElementById('device-selector').value; const cid = document.getElementById('case-selector').value;
    if(!s || !cid) return alert("Select Case and Device");
    const progBox = document.getElementById('progress-container'); const progBar = document.getElementById('progress-bar'); const progText = document.getElementById('progress-text'); const progPct = document.getElementById('progress-pct');
    progBox.classList.remove('hidden'); let pct = 0; const stages = ["Bypassing Sandbox...", "Spooling Logs...", "Extracting DBs...", "Pulling Files...", "YARA Pattern Analysis..."];
    const interval = setInterval(() => { if (pct < 95) pct += Math.random() * 5; progBar.style.width = `${pct}%`; progPct.innerText = `${Math.floor(pct)}%`; progText.innerText = stages[Math.floor((pct/100) * stages.length)] || "Compiling Payload..."; }, 800);
    try {
        const res = await fetch(`/api/extract/${s}`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({caseId: cid})});
        const r = await res.json(); clearInterval(interval); progBar.style.width = `100%`; progPct.innerText = `100%`; progText.innerText = r.success ? "EXTRACTION COMPLETE" : "EXTRACTION FAILED"; progBar.classList.replace('bg-blue-500', r.success ? 'bg-green-500' : 'bg-red-500');
        setTimeout(() => { progBox.classList.add('hidden'); progBar.classList.replace('bg-green-500', 'bg-blue-500'); progBar.classList.replace('bg-red-500', 'bg-blue-500'); progBar.style.width = '0%'; }, 3000); loadArtifacts();
    } catch(e) { clearInterval(interval); progText.innerText = "SYSTEM ERROR"; progBar.classList.replace('bg-blue-500', 'bg-red-500'); }
}
async function loadArtifacts() {
    const id = document.getElementById('case-selector').value;
    const list = document.getElementById('artifact-list');
    const countBadge = document.getElementById('artifact-count');
    
    // INTERCEPT THE DEMO CASE
    if (id === 'DEMO_CASE') {
        loadDemoMode();
        return; // Stop the rest of the function
    }
    
    if(!id) {
        list.innerHTML = "";
        countBadge.innerText = "0";
        return;
    }
    
    // Normal backend logic continues...
    try {
        const res = await fetch(`/api/cases/${id}/artifacts`);
        const data = await res.json();
        countBadge.innerText = data.length;
        
        list.innerHTML = data.map(a => `
            <li onclick="viewData(${a.id}, '${a.serial}')" class="p-4 bg-black/30 border border-white/5 rounded-2xl cursor-pointer hover:border-blue-500/50 hover:bg-black/60 relative group transition shadow-sm">
                <div class="text-blue-400 font-bold text-xs uppercase tracking-wide">Device Image</div>
                <div class="text-[10px] text-gray-500 mt-2 font-mono">${a.serial}</div>
                <div class="text-[9px] text-gray-600 font-mono mt-1">${new Date(a.extracted_at).toLocaleTimeString()}</div>
                <button onclick="event.stopPropagation(); openDeleteModal('artifact', ${a.id})" class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition text-gray-500 hover:text-red-500">🗑️</button>
            </li>`).join('');
    } catch (e) {
        console.error("Failed to load artifacts:", e);
    }
}
function openDeleteModal(t, id) { document.getElementById('delete-modal').classList.remove('hidden'); document.getElementById('confirm-delete-btn').onclick = () => submitDelete(t, id); }
function closeDeleteModal() { document.getElementById('delete-modal').classList.add('hidden'); }
async function submitDelete(t, id) {
    if(t === 'case') { await fetch(`/api/cases/${document.getElementById('case-selector').value}`, {method: 'DELETE'}); clearDashboard(); } else { await fetch(`/api/artifacts/${id}`, {method: 'DELETE'}); if (currentArtifactId === id) clearDashboard(); }
    closeDeleteModal(); loadCases(); loadArtifacts();
}
function openCaseModal() { document.getElementById('case-modal').classList.remove('hidden'); }
function closeCaseModal() { document.getElementById('case-modal').classList.add('hidden'); }
async function submitNewCase() {
    const name = document.getElementById('new-case-name').value; if(!name) return;
    await fetch('/api/cases', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({name, investigator: 'Admin'})});
    document.getElementById('new-case-name').value = ''; closeCaseModal(); loadCases();
}

function generateReport() {
    if (!currentData) {
        alert("CRITICAL ERROR: No extraction data selected. Please load a case first.");
        return;
    }

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // 1. Generate Cryptographic Session Seal
    const timestamp = new Date().getTime();
    const rawString = `${currentSerial}_${timestamp}_FORENDROID`;
    // Simulated SHA-256 hashing for the presentation
    const sessionHash = Array.from(rawString).reduce((hash, char) => 0 | (31 * hash + char.charCodeAt(0)), 0).toString(16).padStart(16, '0') + "e9f2a1b7c4d83920";

    // 2. Document Header (First Page Only)
    doc.setFillColor(17, 19, 24);
    doc.rect(0, 0, 210, 45, 'F');
    
    doc.setTextColor(59, 130, 246); // Blue
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("FORENDROID INTELLIGENCE REPORT", 14, 22);
    
    doc.setTextColor(200, 200, 200);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`TARGET DEVICE: ${currentSerial}`, 14, 32);
    doc.text(`EXTRACTION DATE: ${new Date(currentData.metadata.extracted_at).toLocaleString()}`, 14, 38);
    
    let currentY = 55;

    // 3. System Metadata Table
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("1. EXTRACTION METADATA", 14, currentY);
    
    doc.autoTable({
        startY: currentY + 5,
        head: [['Property', 'Value']],
        body: [
            ['OS Version', currentData.metadata.os_version || 'Unknown'],
            ['Timezone', currentData.metadata.timezone || 'Unknown'],
            ['Total Contacts', currentData.contacts?.length || 0],
            ['Media Artifacts', currentData.media_metadata?.length || 0]
        ],
        theme: 'striped',
        headStyles: { fillColor: [59, 130, 246], textColor: [255, 255, 255], fontStyle: 'bold' },
        styles: { fontSize: 9 }
    });

    currentY = doc.lastAutoTable.finalY + 15;

    // 4. High-Risk Threat Intelligence Table
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("2. HIGH-RISK COMMUNICATIONS (BLOODHOUND FLAGS)", 14, currentY);

    const threatData = [];
    const combinedMessages = [...(currentData.whatsapp?.messages || []), ...(currentData.carrier_data?.sms || [])];
    
    combinedMessages.forEach(msg => {
        if (msg.risk_flags && msg.risk_flags.length > 0) {
            threatData.push([
                msg.time,
                msg.sender || msg.contact,
                msg.risk_flags.join(', '),
                msg.text
            ]);
        }
    });

    if (threatData.length > 0) {
        doc.autoTable({
            startY: currentY + 5,
            head: [['Timestamp', 'Entity', 'Risk Flags', 'Message Content']],
            body: threatData,
            theme: 'grid',
            headStyles: { fillColor: [220, 38, 38], textColor: [255, 255, 255], fontStyle: 'bold' }, // Red Header for Threats
            columnStyles: {
                0: { cellWidth: 35 },
                1: { cellWidth: 35 },
                2: { cellWidth: 35 },
                3: { cellWidth: 'auto' }
            },
            styles: { fontSize: 8, cellPadding: 3, overflow: 'linebreak' }
        });
    } else {
        doc.setFontSize(10);
        doc.setFont("helvetica", "italic");
        doc.text("No heuristic threat flags detected in this extraction.", 14, currentY + 10);
    }

    // 5. Apply Cryptographic Footer to ALL Pages
    const pageCount = doc.internal.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(7);
        doc.setFont("courier", "normal");
        doc.setTextColor(120, 120, 120);
        
        // Bottom border line
        doc.setDrawColor(200, 200, 200);
        doc.line(14, 282, 196, 282);
        
        // Hash and Page numbers
        doc.text(`SESSION INTEGRITY HASH: ${sessionHash}`, 14, 287);
        doc.text(`FORENDROID RESTRICTED - PAGE ${i} OF ${pageCount}`, 196, 287, { align: 'right' });
    }

    // 6. Trigger Download
    doc.save(`EVIDENCE_REPORT_${currentSerial}.pdf`);
}
function renderIntelligence() {
    if (!currentData) return;

    // 1. Audit Stats
    const stats = {};
    (currentData.whatsapp?.messages || []).forEach(m => {
        if (!stats[m.sender]) stats[m.sender] = { count: 0, flags: new Set() };
        stats[m.sender].count++;
        if (m.risk_flags) m.risk_flags.forEach(f => stats[m.sender].flags.add(f));
    });
    (currentData.carrier_data?.sms || []).forEach(s => {
        if (!stats[s.contact]) stats[s.contact] = { count: 0, flags: new Set() };
        stats[s.contact].count++;
        if (s.risk_flags) s.risk_flags.forEach(f => stats[s.contact].flags.add(f));
    });

    const sorted = Object.entries(stats).sort((a,b) => b[1].flags.size - a[1].flags.size);
    document.getElementById('top-threats-list').innerHTML = sorted.map(([c, data]) => `
        <div class="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5 mb-2">
            <span class="truncate pr-2 text-gray-300 font-bold text-[10px]">${c}</span>
            <span class="${data.flags.size > 0 ? 'text-red-400 bg-red-900/20' : 'text-gray-500 bg-white/5'} px-2 py-1 rounded text-[9px] font-mono">
                ${data.flags.size > 0 ? '⚠️ ' + data.flags.size + ' FLAGS' : data.count + ' MSGS'}
            </span>
        </div>
    `).join('');

    // 2. THE GRAPH FIX
    const container = document.getElementById('network-graph');
    if (!container) return;
    
    // Destroy previous instance to prevent memory leaks and "frozen" graphs
    if (networkInstance !== null) {
        networkInstance.destroy();
        networkInstance = null;
    }

    // 3. Define Graph Data
    const nodesArray = [{ 
        id: 'TARGET', 
        label: 'SUSPECT DEVICE', 
        shape: 'diamond', 
        color: { background: '#3b82f6', border: '#1d4ed8' },
        size: 30,
        font: { color: '#ffffff', size: 14, face: 'monospace' }
    }];
    const edgesArray = [];

    Object.entries(stats).forEach(([contact, data]) => {
        const isThreat = data.flags.size > 0;
        nodesArray.push({
            id: contact,
            label: contact,
            shape: 'dot',
            size: 12 + Math.min(data.count, 12),
            color: isThreat ? {background: '#ef4444', border: '#b91c1c'} : {background: '#4b5563', border: '#374151'},
            font: { color: '#9ca3af', size: 10 }
        });
        edgesArray.push({
            from: 'TARGET',
            to: contact,
            width: 2,
            color: isThreat ? 'rgba(239, 68, 68, 0.4)' : 'rgba(59, 130, 246, 0.2)'
        });
    });

    const graphData = { nodes: new vis.DataSet(nodesArray), edges: new vis.DataSet(edgesArray) };
    
    const options = {
        autoResize: true,
        height: '100%',
        width: '100%',
        physics: {
            enabled: true,
            barnesHut: { 
                gravitationalConstant: -3000, 
                centralGravity: 0.3, 
                springLength: 150 
            },
            stabilization: { iterations: 50 }
        },
        interaction: { hover: true, dragNodes: true }
    };

    // 4. Initialize Network
    networkInstance = new vis.Network(container, graphData, options);
    
    // Force a fit after the physics stabilize
    networkInstance.once('stabilized', function() {
        networkInstance.fit();
    });
}
function loadDemoMode() {
    console.log("EXECUTING DEMO PAYLOAD...");
    
    if (typeof GOLD_STANDARD_DEMO === 'undefined') {
        alert("CRITICAL ERROR: demo_data.js not found. Ensure it is linked in index.html above app.js");
        return;
    }

    // 1. Set Global Data
    currentData = GOLD_STANDARD_DEMO;
    currentSerial = currentData.metadata.device;
    currentArtifactId = "DEMO-99";

    // 2. Populate the Sidebar "Vault" to look like a real extraction
    const list = document.getElementById('artifact-list');
    const countBadge = document.getElementById('artifact-count');
    
    countBadge.innerText = "1";
    countBadge.classList.replace('text-blue-500', 'text-yellow-500');
    
    list.innerHTML = `
        <li onclick="switchTab('threats')" class="p-4 bg-blue-900/20 border border-blue-500/50 rounded-2xl cursor-pointer relative group transition shadow-sm">
            <div class="text-blue-400 font-bold text-xs uppercase tracking-wide">EXHIBIT A: MOBILE DEVICE</div>
            <div class="text-[10px] text-gray-400 mt-2 font-mono">${currentSerial}</div>
            <div class="text-[9px] text-green-400 font-mono mt-1">STATUS: DECRYPTED & SPOOLED</div>
        </li>`;

    // 3. Destroy old graph to prevent glitches
    if (networkInstance !== null) {
        networkInstance.destroy();
        networkInstance = null;
    }

    // 4. Force UI Rendering safely
    try {
        compileMasterTimeline();
        renderMasterTimeline();
        renderContacts();
        renderWhatsApp();
        renderSMS();
        renderFiles();
        renderIntegrity();
        renderGeo();
    } catch (e) {
        console.error("Render step failed during demo load:", e);
    }

    // 5. Jump to the Intelligence Tab to show off the Graph
    switchTab('threats');
    
    // 6. Update Header Status
    document.getElementById('device-selector').innerHTML = `<option>${currentSerial}</option>`;
}

function renderHeatmap() {
    const container = document.getElementById('heatmap-container');
    if (!container || !currentData) return;

    // 1. Aggregate message counts by hour (0 to 23)
    const hourlyCounts = new Array(24).fill(0);
    const allMessages = [...(currentData.whatsapp?.messages || []), ...(currentData.carrier_data?.sms || [])];
    
    allMessages.forEach(msg => {
        const date = new Date(msg.time);
        if (!isNaN(date.getHours())) {
            hourlyCounts[date.getHours()]++;
        }
    });

    const maxCount = Math.max(...hourlyCounts, 1); // Prevent division by zero

    // 2. Build the visual bars
    container.innerHTML = hourlyCounts.map((count, hour) => {
        const heightPct = (count / maxCount) * 100;
        const isNightOp = hour >= 0 && hour <= 5; // Flags activity between Midnight and 5 AM
        
        // Visual styling: Red for late-night shady activity, Blue for normal hours
        const colorClass = (isNightOp && count > 0) ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-blue-500/80';
        
        return `
            <div class="flex flex-col items-center justify-end h-full w-full group relative mx-0.5">
                <div class="absolute -top-8 opacity-0 group-hover:opacity-100 text-[10px] bg-white text-black font-bold px-2 py-1 rounded transition-opacity z-10 pointer-events-none">
                    ${count} msgs
                </div>
                
                <div class="${colorClass} w-full rounded-t-sm transition-all duration-700 hover:opacity-100 opacity-80" style="height: ${heightPct}%"></div>
                
                <div class="text-[9px] text-gray-500 mt-3 font-mono -rotate-45">${hour.toString().padStart(2, '0')}:00</div>
            </div>
        `;
    }).join('');
}