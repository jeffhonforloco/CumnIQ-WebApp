import { Content, CreateContentData } from '../types';
import { API_URL } from '@/config';

export const contentApi = {
  async getAll(communityId: string): Promise<Content[]> {
    const response = await fetch(`${API_URL}/content?communityId=${communityId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }
    return response.json();
  },

  async create(data: CreateContentData): Promise<Content> {
    const response = await fetch(`${API_URL}/content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create content');
    }
    return response.json();
  },
};