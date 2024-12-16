import React from 'react';
import { User, UserProfile } from '../types';
import { UserAvatar } from './UserAvatar';
import { MapPin, Link as LinkIcon, Calendar } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface UserProfileCardProps {
  user: User;
  profile?: UserProfile;
}

export function UserProfileCard({ user, profile }: UserProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start space-x-4">
        <UserAvatar user={user} size="lg" />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">
            {user.displayName || 'Community Member'}
          </h2>
          <p className="text-gray-500">{user.email}</p>
          
          {profile?.bio && (
            <p className="mt-2 text-gray-600">{profile.bio}</p>
          )}
          
          <div className="mt-4 space-y-2">
            {profile?.location && (
              <div className="flex items-center text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{profile.location}</span>
              </div>
            )}
            
            {profile?.socialLinks && Object.entries(profile.socialLinks).length > 0 && (
              <div className="flex items-center text-gray-500">
                <LinkIcon className="w-4 h-4 mr-2" />
                <div className="flex space-x-3">
                  {Object.entries(profile.socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Joined {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}