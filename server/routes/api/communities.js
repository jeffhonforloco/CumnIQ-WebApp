import express from 'express';
import { Community } from '../../models/Community.js';

const router = express.Router();

// Get all communities
router.get('/', async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new community
router.post('/', async (req, res) => {
  const community = new Community({
    name: req.body.name,
    description: req.body.description
  });

  try {
    const newCommunity = await community.save();
    res.status(201).json(newCommunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;