const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// POST create
router.post('/', async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

// PUT update
router.put('/:id', async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
});

module.exports = router;
