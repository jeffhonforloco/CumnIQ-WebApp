const API_URL = 'http://localhost:5000/api';

export interface Community {
  _id: string;
  name: string;
  description: string;
  members: string[];
  createdAt: string;
}

export const api = {
  async getCommunities(): Promise<Community[]> {
    const response = await fetch(`${API_URL}/communities`);
    if (!response.ok) {
      throw new Error('Failed to fetch communities');
    }
    return response.json();
  },

  async createCommunity(data: Pick<Community, 'name' | 'description'>): Promise<Community> {
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