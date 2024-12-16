import { useState, useEffect } from 'react';
import { User } from '../types';
import { usersApi } from '../api/users';
import { useAuth } from '@/features/auth/hooks/useAuth';

export function useUser(userId?: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user: authUser } = useAuth();

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        const userData = userId 
          ? await usersApi.getUserById(userId)
          : await usersApi.getCurrentUser();
        setUser(userData);
      } catch (err) {
        setError('Failed to load user data');
        console.error('Error loading user:', err);
      } finally {
        setLoading(false);
      }
    }

    if (authUser) {
      loadUser();
    }
  }, [userId, authUser]);

  return { user, loading, error };
}