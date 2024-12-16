import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  body: {
    type: String,
    required: true
  },
  communityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
    required: true
  },
  authorId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const Content = mongoose.model('Content', contentSchema);