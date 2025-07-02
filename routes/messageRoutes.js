const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST message from contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Pesan berhasil disimpan' });
  } catch (err) {
    res.status(500).json({ error: 'Gagal menyimpan pesan' });
  }
});

module.exports = router;
