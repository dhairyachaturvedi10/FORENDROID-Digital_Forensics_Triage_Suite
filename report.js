const PDFDocument = require('pdfkit');
const fs = require('fs');
const crypto = require('crypto');
const db = require('./db');

async function generate65B(artifactId) {
    // 1. Fetch data from DB
    const res = await db.query(
        'SELECT a.data, a.extracted_at, d.serial FROM artifacts a JOIN devices d ON a.device_id = d.id WHERE a.id = $1',
        [artifactId]
    );

    if (res.rows.length === 0) {
        console.error("Artifact not found.");
        return;
    }

    const { data, extracted_at, serial } = res.rows[0];
    const dataString = JSON.stringify(data);
    
    // 2. Generate Forensic Hash (SHA-256)
    const hash = crypto.createHash('sha256').update(dataString).digest('hex');

    // 3. Create PDF
    const doc = new PDFDocument();
    const fileName = `Forensic_Report_Case_${artifactId}.pdf`;
    doc.pipe(fs.createWriteStream(fileName));

    // PDF Content
    doc.fontSize(20).text('CERTIFICATE UNDER SECTION 65B', { align: 'center' });
    doc.fontSize(16).text('OF THE INDIAN EVIDENCE ACT', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Date of Extraction: ${extracted_at}`);
    doc.text(`Device Serial Number: ${serial}`);
    doc.text(`Forensic Hash (SHA-256): ${hash}`);
    doc.moveDown();
    doc.text('------------------------------------------------------------');
    doc.moveDown();
    doc.text('I hereby certify that the electronic record described above was produced by a computer/mobile device during the period over which the computer was used regularly to store or process information...');
    doc.moveDown();
    doc.text('Summary of Data Extracted:', { underline: true });
    doc.fontSize(10).text(dataString.substring(0, 1000) + '... [TRUNCATED FOR REPORT]');
    
    doc.moveDown(5);
    doc.text('Signature of Digital Forensic Investigator', { align: 'right' });

    doc.end();
    console.log(`[+] Legal Report Generated: ${fileName}`);
}

// Generate report for the artifact ID you just created (ID: 2)
generate65B(2);