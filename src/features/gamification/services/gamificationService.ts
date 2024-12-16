import { Badge, UserBadge } from '../types';
import { api } from '@/lib/api';

export const gamificationService = {
  async getUserBadges(userId: string): Promise<UserBadge[]> {
    return api.get(`/badges/user/${userId}`);
  },

  async getAllBadges(): Promise<Badge[]> {
    return api.get('/badges');
  },

  async awardBadge(userId: string, badgeId: string): Promise<void> {
    return api.post('/badges/award', { userId, badgeId });
  }
};