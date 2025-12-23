const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  pass: String,
  role: { type: String, default: 'Developer' },
  org: String
});

module.exports = mongoose.model('User', userSchema);