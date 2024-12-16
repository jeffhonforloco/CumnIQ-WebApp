import mongoose from 'mongoose';

const userBadgeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  badgeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Badge',
    required: true
  },
  awardedAt: {
    type: Date,
    default: Date.now
  }
});

export const UserBadge = mongoose.model('UserBadge', userBadgeSchema);