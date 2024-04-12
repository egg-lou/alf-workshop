require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = 8080;

connectDB();

app.get('/', async (req, res) => {
    res.status(200).json({
        message : "Alf's Blog server is running..."
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})