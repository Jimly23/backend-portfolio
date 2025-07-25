const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
