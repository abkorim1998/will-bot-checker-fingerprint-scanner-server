const express = require('express');
const bodyParser = require('body-parser');
const scanner = require('fpscanner');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
// Parse incoming request bodies in a middleware before your handlers, available under req.body
app.use(bodyParser.json());

app.post('/handle-post', (req, res) => {
    const requestBody = req.body;
    try {
        //fingerprint is the fingerprint collected with fp-collect
        scannerResults = scanner.analyseFingerprint(requestBody);
		console.log(scannerResults);
        // User agent of the browser
        res.json({ message: 'result', scannerResults });
    } catch (error) {
        res.json({ message: 'result', undefined });
    }
});

app.get('/', (req, res)=> {
    res.json({ hi: "it's runing"})
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
