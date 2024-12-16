import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { communitiesApi } from '../api/communities';
import type { CreateCommunityData } from '../types';

export function useCreateCommunity() {
  const [loading, setLoading] = useState(false);

  const createCommunity = async (data: CreateCommunityData) => {
    setLoading(true);
    try {
      await communitiesApi.create(data);
      toast.success('Community created successfully!');
    } catch (error) {
      toast.error('Failed to create community');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createCommunity, loading };
}