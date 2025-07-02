const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// GET all experiences
router.get('/', async (req, res) => {
  const data = await Experience.find();
  res.json(data);
});

// POST new experience
router.post('/', async (req, res) => {
  const newExp = new Experience(req.body);
  await newExp.save();
  res.json(newExp);
});

// PUT update
router.put('/:id', async (req, res) => {
  const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.json({ message: 'Experience deleted' });
});

module.exports = router;
