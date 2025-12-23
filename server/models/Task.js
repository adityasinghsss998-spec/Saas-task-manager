const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  desc: String,
  status: { type: String, default: 'Pending' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Task', taskSchema);