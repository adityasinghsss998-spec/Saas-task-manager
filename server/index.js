const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoute = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', authRoute);

// Added a check to see if URL is loading
if (!process.env.URL) {
  console.log("Error: URL not found in .env file");
} else {
  mongoose.connect(process.env.URL)
    .then(() => console.log("DB OK"))
    .catch(err => console.log("DB Error:", err));
}

app.listen(5000, () => console.log("Server OK"));