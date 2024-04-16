// server.js
const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/config', (req, res) => {
    res.json({
        botToken: process.env.BOT_TOKEN,
        chatId: process.env.CHAT_ID
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
