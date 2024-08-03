const express = require('express');
const auth = require('../middleware/authMiddleware');
const Job = require('../models/Job');

const router = express.Router();

// Create a new job listing
router.post('/', auth, async (req, res) => {
    const { title, description } = req.body;
    try {
        const job = new Job({ title, description, user: req.user.id });
        await job.save();
        res.json(job);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

// Get all job listings
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find().populate('user', 'name');
        res.json(jobs);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
