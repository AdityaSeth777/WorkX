// freelance-marketplace-backend/routes/users.js

const express = require('express');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const User = require('../models/User');
const router = express.Router();

// Example: Get all users (admin only)
router.get('/', verifyToken, isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a user (if handled via server-side)
router.post('/', async (req, res) => {
  const { uid, email, admin } = req.body;

  try {
    const user = new User({ uid, email, admin });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
