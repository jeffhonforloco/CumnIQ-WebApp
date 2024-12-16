import React from 'react';
import { User } from '../types';

interface UserAvatarProps {
  user: User;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function UserAvatar({ user, size = 'md', className = '' }: UserAvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl'
  };

  if (user.photoURL) {
    return (
      <img
        src={user.photoURL}
        alt={user.displayName || 'User'}
        className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
      />
    );
  }

  return (
    <div className={`rounded-full bg-emerald-100 flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <span className="text-emerald-600 font-medium">
        {(user.displayName || user.email || '?')[0].toUpperCase()}
      </span>
    </div>
  );
}