require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = 8080;

connectDB();
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).json({
        message : "Alf's Blog server is running..."
    });
});

// POST ROUTES
const postView = require('./views/postView');
app.use('/posts', postView);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})