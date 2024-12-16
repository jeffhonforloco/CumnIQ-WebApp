import express from 'express';
import { Content } from '../../models/Content.js';

const router = express.Router();

// Get all content for a community
router.get('/', async (req, res) => {
  try {
    const { communityId } = req.query;
    const content = await Content.find({ communityId })
      .sort({ createdAt: -1 });
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new content
router.post('/', async (req, res) => {
  const content = new Content({
    title: req.body.title,
    body: req.body.body,
    communityId: req.body.communityId,
    authorId: req.body.authorId
  });

  try {
    const newContent = await content.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;