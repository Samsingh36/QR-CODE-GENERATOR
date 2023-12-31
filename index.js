// index.js
import express from 'express';
import qr from 'qr-image';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.get('/generate', (req, res) => {
    const url = req.query.q;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const qr_svg = qr.image(url, { type: 'png' });
        
        // Set the content type to PNG
        res.type('png');
        
        // Pipe the QR code image directly to the response
        qr_svg.pipe(res);
    } catch (error) {
        console.error('QR code generation error:', error);
        res.status(500).json({ error: 'Failed to generate QR code' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
