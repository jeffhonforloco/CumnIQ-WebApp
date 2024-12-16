import React from 'react';
import { Community } from '../types';
import { Users } from 'lucide-react';

interface CommunityCardProps {
  community: Community;
}

export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{community.name}</h3>
      <p className="text-gray-600 mb-4">{community.description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <Users className="w-4 h-4 mr-1" />
        <span>{community.members.length} members</span>
      </div>
    </div>
  );
}