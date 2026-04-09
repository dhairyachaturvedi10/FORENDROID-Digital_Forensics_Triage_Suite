const express = require('express');
const { exec } = require('child_process');
const { Pool } = require('pg');
const path = require('path');
const app = express();
const port = 3000;

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: '<Your_Database_Name_Here>',
    password: '<YourPasswordHere>', // Ensure this matches your DB password
    port: 5432,
});

app.use(express.static('public'));
app.use(express.json());

// Serve the evidence folder statically so UI can render the images
app.use('/evidence', express.static(path.join(__dirname, 'evidence')));

// --- DEVICE DETECTION ROUTE ---
app.get('/api/devices', (req, res) => {
    exec('adb devices', (error, stdout) => {
        if (error) return res.status(500).json({ error: "Failed to detect devices." });
        
        const lines = stdout.split('\n');
        const devices = lines
            .filter(line => line.includes('\tdevice'))
            .map(line => line.split('\t')[0].trim());
            
        res.json(devices);
    });
});

// --- CASE MANAGEMENT ROUTES ---
app.get('/api/cases', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM cases ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/cases', async (req, res) => {
    const { name, investigator } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO cases (case_name, investigator_name) VALUES ($1, $2) RETURNING *',
            [name, investigator]
        );
        res.json(result.rows[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// --- ARTIFACT ROUTES ---
app.get('/api/artifacts', async (req, res) => {
    try {
        const result = await db.query(`
            SELECT a.id, c.case_name, d.serial, a.type, a.extracted_at 
            FROM artifacts a 
            JOIN devices d ON a.device_id = d.id 
            JOIN cases c ON d.case_id = c.id
            ORDER BY a.extracted_at DESC
        `);
        res.json(result.rows);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/cases/:caseId/artifacts', async (req, res) => {
    try {
        const result = await db.query(`
            SELECT a.id, d.serial, a.type, a.extracted_at 
            FROM artifacts a 
            JOIN devices d ON a.device_id = d.id 
            WHERE d.case_id = $1
            ORDER BY a.extracted_at DESC
        `, [req.params.caseId]);
        res.json(result.rows);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/artifacts/:id', async (req, res) => {
    try {
        const result = await db.query('SELECT data FROM artifacts WHERE id = $1', [req.params.id]);
        res.json(result.rows[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.post('/api/extract/:serial', async (req, res) => {
    const serial = req.params.serial;
    const { caseId } = req.body;
    
    if (!caseId) return res.status(400).json({ error: "No Case selected." });

    let deviceId;
    try {
        const devCheck = await db.query('SELECT id FROM devices WHERE serial = $1 AND case_id = $2', [serial, caseId]);
        if (devCheck.rows.length > 0) {
            deviceId = devCheck.rows[0].id;
        } else {
            const newDev = await db.query(
                'INSERT INTO devices (case_id, serial, model) VALUES ($1, $2, $3) RETURNING id',
                [caseId, serial, 'Android Device']
            );
            deviceId = newDev.rows[0].id;
        }
    } catch (dbErr) { 
        console.error("\n[!] DATABASE SYNC ERROR:", dbErr.message); 
        return res.status(500).json({ error: "Database device sync failed." }); 
    }

    const cmd = `python forensic_worker.py ${serial}`;
    console.log(`[SYS] Triggering engine for Case ${caseId} | Device ${serial}...`);
    
    exec(cmd, { maxBuffer: 1024 * 1024 * 100 }, async (error, stdout, stderr) => {
        if (stderr) console.log(`[PYTHON ENGINE]:\n${stderr}`);
        if (error) {
            console.error("\n[!] EXECUTION ERROR:", error.message);
            return res.status(500).json({ error: error.message });
        }
        
        try {
            const forensicData = JSON.parse(stdout);
            await db.query(
                'INSERT INTO artifacts (device_id, type, data) VALUES ($1, $2, $3)',
                [deviceId, 'DEEP_EXTRACTION', forensicData]
            );
            res.json({ success: true, message: "Extraction saved." });
        } catch (dbErr) { 
            console.error("\n[!] PIPELINE/JSON PARSE ERROR:", dbErr.message);
            res.status(500).json({ error: "Pipeline failure. Check terminal." }); 
        }
    });
});

// --- DELETION ROUTES (V2.2) ---

// 1. Delete a specific Extraction (Artifact)
app.delete('/api/artifacts/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM artifacts WHERE id = $1', [req.params.id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. Delete an entire Case and all its Evidence
app.delete('/api/cases/:id', async (req, res) => {
    try {
        const caseId = req.params.id;
        // Delete artifacts first (Foreign Key constraint), then devices, then the case
        await db.query('DELETE FROM artifacts WHERE device_id IN (SELECT id FROM devices WHERE case_id = $1)', [caseId]);
        await db.query('DELETE FROM devices WHERE case_id = $1', [caseId]);
        await db.query('DELETE FROM cases WHERE id = $1', [caseId]);
        
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`[UI] FORENDROID Server Online at http://localhost:${port}`);
}); 