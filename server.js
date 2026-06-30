const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (CSS, images, and app.js) to the browser.
app.use(express.static(__dirname));

// Serve the index.html file when the user visits the root URL (http://localhost:3000/).
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and listen on port 3000.
app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(` Node.js Backend Server is running beautifully!`);
    console.log(` Open your browser and go to: http://localhost:${PORT}`);
    console.log(`===================================================`);
});