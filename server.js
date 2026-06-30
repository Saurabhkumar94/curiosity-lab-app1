const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Node.js ko batana ki css, images, aur app.js static files hain, inhe browser tak bheje
app.use(express.static(__dirname));

// Jab koi user browser me http://localhost:3000/ par aaye toh hamari index.html file load ho
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Server ko port 3000 par activate (listen) karne ke liye
app.listen(PORT, () => {
    console.log(`===================================================`);
    console.log(` Node.js Backend Server is running beautifully!`);
    console.log(` Open your browser and go to: http://localhost:${PORT}`);
    console.log(`===================================================`);
});