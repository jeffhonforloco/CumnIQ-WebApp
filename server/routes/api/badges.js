import express from 'express';
import { Badge } from '../../models/Badge.js';
import { UserBadge } from '../../models/UserBadge.js';

const router = express.Router();

// Get all badges
router.get('/', async (req, res) => {
  try {
    const badges = await Badge.find();
    res.json(badges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user badges
router.get('/user/:userId', async (req, res) => {
  try {
    const userBadges = await UserBadge.find({ userId: req.params.userId })
      .populate('badgeId');
    res.json(userBadges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Award badge to user
router.post('/award', async (req, res) => {
  const { userId, badgeId } = req.body;
  
  try {
    const existingBadge = await UserBadge.findOne({ userId, badgeId });
    if (existingBadge) {
      return res.status(400).json({ message: 'User already has this badge' });
    }

    const userBadge = new UserBadge({ userId, badgeId });
    await userBadge.save();
    
    const badge = await Badge.findById(badgeId);
    res.status(201).json({ userBadge, badge });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;