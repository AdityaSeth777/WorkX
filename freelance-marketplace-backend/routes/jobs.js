// freelance-marketplace-backend/routes/jobs.js

const express = require('express');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const Job = require('../models/Job');
const router = express.Router();

// Admin posts a job
router.post('/post', verifyToken, isAdmin, async (req, res) => {
  const { title, description } = req.body;

  try {
    const job = new Job({ title, description });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Apply for a job
router.post('/apply/:id', verifyToken, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    // Assuming you have a way to store applications
    job.applicants.push(req.user.uid);
    await job.save();
    res.json({ message: 'Applied successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
