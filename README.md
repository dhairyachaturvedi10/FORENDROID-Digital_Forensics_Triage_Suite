# 🚨 FORENDROID: Rapid Forensic Triage Suite

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

**FORENDROID** is a lightweight, browser-based digital forensics triage tool designed for First Responders. 

Traditional digital forensics labs are often backed up for months. In time-sensitive investigations (e.g., kidnappings, cryptocurrency heists, or organized crime raids), waiting for a lab extraction means the trail goes cold. FORENDROID bridges this gap by providing field agents with an immediate, visualized intelligence dashboard directly at the scene of the crime.

## ✨ Key Features

* **Heuristic "Bloodhound" Engine:** Goes beyond simple keyword searching. Uses Regex and categorized heuristics to actively flag *Financial*, *Coordination*, and *Urgent Destruction* intents within SQLite message databases.
* **Live Link Analysis (Vis.js):** Automatically generates an interactive, physics-based network graph mapping the frequency and threat-level of communications between the suspect and their accomplices.
* **Master Chronological Timeline:** Merges WhatsApp logs, Carrier SMS, and Photo EXIF metadata into a single, filterable chronological timeline.
* **Geospatial Correlation:** Extracts GPS coordinates from media EXIF data and plots them on an interactive OpenStreetMap to track suspect movement.
* **Cryptographic Integrity:** Generates SHA-256 hashes for all extracted evidence to maintain a strict chain of custody.
* **Court-Ready Exports:** One-click generation of paginated, hash-verified, and non-repudiable PDF evidence reports via `jsPDF`.

---

## 📂 Project Architecture

The suite is built on a decoupled architecture, separating the heavy forensic extraction scripts from the Node.js API and the client-side Bento UI.

* **`/public`**: Contains the frontend Single Page Application (SPA).
  * `index.html` - The modern "Bento Box" UI.
  * `app.js` - Client-side rendering, graph physics, and demo payloads.
  * `style.css` - Custom UI styling.
* **`server.js`**: The Express API backend that bridges the UI and the Python engine.
* **`db.js`**: PostgreSQL connection pooling and query logic.
* **`forensic_worker.py`**: The core extraction engine utilizing ADB (Android Debug Bridge), SQLite parsing, and Regex analysis.

---

## ⚙️ Prerequisites

To run FORENDROID locally or deploy it to a field-ready VM (like Kali Linux), ensure you have the following installed:

1. **Node.js** (v18 or higher)
2. **Python** (v3.8 or higher)
3. **PostgreSQL** (v14 or higher)
4. **Android SDK Platform-Tools** (Specifically `adb` added to your system PATH)
5. *(Optional)* **Tesseract OCR** (For optical database bypass features)

---

## 🚀 Installation & Setup

**1. Clone the repository and install dependencies:**
```bash
git clone [https://github.com/YOUR_USERNAME/forendroid.git](https://github.com/YOUR_USERNAME/forendroid.git)
cd forendroid
npm install
```

**2. Python Dependencies:**
Ensure Python has the required image and OCR libraries:

```bash
pip install Pillow pytesseract opencv-python numpy
```

**3. Database Configuration:**
Create a .env file in the root directory and add your PostgreSQL credentials:

```code
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=forendroid_db
```

**4. Start the Application:**

```bash
npm start
The application will be available at http://localhost:3000.
```

---
## 💻 Usage Instructions
FORENDROID operates in two modes: Live Extraction Mode (for real devices) and Presentation Demo Mode (for hackathons/showcases).

*Option A: The "Operation High-Tide" Demo Mode (Recommended for Pitches)*
To demonstrate the full capability of the Link Analysis and Threat engines without requiring a physical device:

Open Google Chrome in App Mode for a native desktop feel:

Windows: "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:3000

Mac: /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --app=http://localhost:3000

In the top navigation bar, click the "Select Investigation..." dropdown.

Select "🚨 DEMO: Operation High-Tide".

The dashboard will instantly populate with a pre-certified, highly complex data payload demonstrating money laundering and smuggling communications.

*Option B: Live Device Extraction*
Ensure the target Android device is powered on, unlocked, and has USB Debugging enabled.

Connect the device to your machine via USB.

Open the FORENDROID dashboard.

Click "+ Case" to initialize a new investigation.

Select the connected device from the target dropdown.

Click EXTRACT. The forensic_worker.py script will spool the data, bypass the sandbox, and populate the UI upon completion.

---

## ⚠️ Disclaimer

For Educational and Authorized Use Only. FORENDROID was developed as a proof-of-concept for the 2026 Hackathon. It is designed to demonstrate rapid triage capabilities. It should not be used on devices without explicit, legal authorization or a valid search warrant.