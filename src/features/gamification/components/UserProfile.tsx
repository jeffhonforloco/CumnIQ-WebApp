import React from 'react';
import { useUserBadges } from '../hooks/useUserBadges';
import { BadgeDisplay } from './BadgeDisplay';
import { AchievementProgress } from './AchievementProgress';
import { User } from '@/features/auth/types';

interface UserProfileProps {
  user: User;
}

export function UserProfile({ user }: UserProfileProps) {
  const { badges, loading, error } = useUserBadges();

  if (loading) {
    return <div className="text-center">Loading profile...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
        <div className="flex items-center">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User'}
              className="w-16 h-16 rounded-full"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-2xl text-emerald-600">
                {(user.displayName || user.email || '?')[0].toUpperCase()}
              </span>
            </div>
          )}
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900">
              {user.displayName || 'Community Member'}
            </h3>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {badges.map((userBadge) => (
            <BadgeDisplay
              key={userBadge._id}
              badge={userBadge.badgeId}
              earned={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}