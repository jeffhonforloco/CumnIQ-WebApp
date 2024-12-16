import { User, UserProfile, UserSettings } from '../types';
import { api } from '@/lib/api';

export const usersApi = {
  async getCurrentUser(): Promise<User> {
    return api.get('/users/me');
  },

  async updateProfile(userId: string, profile: Partial<UserProfile>): Promise<User> {
    return api.put(`/users/${userId}/profile`, profile);
  },

  async updateSettings(userId: string, settings: Partial<UserSettings>): Promise<User> {
    return api.put(`/users/${userId}/settings`, settings);
  },

  async getUserById(userId: string): Promise<User> {
    return api.get(`/users/${userId}`);
  }
};