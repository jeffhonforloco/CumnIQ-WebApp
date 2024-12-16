import { useState, useEffect, useCallback } from 'react';
import { Community } from '../types';
import { communityService } from '../services/communityService';
import { useAuth } from '@/features/auth/hooks/useAuth';

export function useCommunities() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const loadCommunities = useCallback(async () => {
    try {
      setLoading(true);
      const data = await communityService.getAll();
      setCommunities(data);
      setError(null);
    } catch (err) {
      setError('Failed to load communities');
      console.error('Error loading communities:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCommunities();
  }, [loadCommunities]);

  const joinCommunity = async (communityId: string) => {
    if (!user) return;
    
    try {
      await communityService.join(communityId);
      await loadCommunities(); // Refresh the list
    } catch (err) {
      console.error('Error joining community:', err);
      throw err;
    }
  };

  const leaveCommunity = async (communityId: string) => {
    if (!user) return;
    
    try {
      await communityService.leave(communityId);
      await loadCommunities(); // Refresh the list
    } catch (err) {
      console.error('Error leaving community:', err);
      throw err;
    }
  };

  return {
    communities,
    loading,
    error,
    refresh: loadCommunities,
    joinCommunity,
    leaveCommunity,
  };
}