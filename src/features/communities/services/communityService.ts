import { Community, CreateCommunityData } from '../types';
import { api } from '@/lib/api';

export const communityService = {
  async getAll(): Promise<Community[]> {
    return api.get('/communities');
  },

  async create(data: CreateCommunityData): Promise<Community> {
    return api.post('/communities', data);
  },

  async join(communityId: string): Promise<void> {
    return api.post(`/communities/${communityId}/join`);
  },

  async leave(communityId: string): Promise<void> {
    return api.post(`/communities/${communityId}/leave`);
  }
};