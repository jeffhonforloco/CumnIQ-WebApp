import { Community, CreateCommunityData } from '../types';
import { API_URL } from '@/config';

export const communitiesApi = {
  async getAll(): Promise<Community[]> {
    const response = await fetch(`${API_URL}/communities`);
    if (!response.ok) {
      throw new Error('Failed to fetch communities');
    }
    return response.json();
  },

  async create(data: CreateCommunityData): Promise<Community> {
    const response = await fetch(`${API_URL}/communities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create community');
    }
    return response.json();
  },
};