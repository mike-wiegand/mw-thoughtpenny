const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const cors = require('cors');
const fs = require('fs');
const uuid = require('uuid');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("", require("./routes/entries"));

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});