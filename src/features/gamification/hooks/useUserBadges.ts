import { useState, useEffect } from 'react';
import { UserBadge } from '../types';
import { gamificationService } from '../services/gamificationService';
import { useAuth } from '@/features/auth/hooks/useAuth';

export function useUserBadges() {
  const [badges, setBadges] = useState<UserBadge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    async function loadBadges() {
      try {
        setLoading(true);
        const userBadges = await gamificationService.getUserBadges(user.id);
        setBadges(userBadges);
      } catch (err) {
        setError('Failed to load badges');
        console.error('Error loading badges:', err);
      } finally {
        setLoading(false);
      }
    }

    loadBadges();
  }, [user]);

  return { badges, loading, error };
}