const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoute = require('./routes/auth'); // This tells the office where the door is

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', authRoute); // This says: all user doors start with /api/user

mongoose.connect(process.env.URL)
.then(() => console.log("DB OK"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server OK"));