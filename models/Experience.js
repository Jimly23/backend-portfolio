const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  role: String,
  description: String,
  year: Number
});

module.exports = mongoose.model('Experience', experienceSchema);
