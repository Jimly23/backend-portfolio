const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  section: { type: String, enum: ['home', 'about'] },
  text: String
});

module.exports = mongoose.model('Content', contentSchema);
