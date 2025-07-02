const express = require('express');
const router = express.Router();
const Content = require('../models/Content');

// GET content by section (home or about)
router.get('/:section', async (req, res) => {
  const content = await Content.findOne({ section: req.params.section });
  res.json(content);
});

// POST or PUT content
router.post('/:section', async (req, res) => {
  const updated = await Content.findOneAndUpdate(
    { section: req.params.section },
    { text: req.body.text },
    { upsert: true, new: true }
  );
  res.json(updated);
});

module.exports = router;
