import { Router } from 'express';
import communitiesRouter from './api/communities.js';
import contentRouter from './api/content.js';
import badgesRouter from './api/badges.js';
import { authenticateUser } from '../middleware/auth.js';

const router = Router();

// Public routes
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Protected routes
router.use('/communities', authenticateUser, communitiesRouter);
router.use('/content', authenticateUser, contentRouter);
router.use('/badges', authenticateUser, badgesRouter);

export default router;