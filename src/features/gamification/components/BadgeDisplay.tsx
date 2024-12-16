import React from 'react';
import { Badge } from '../types';
import { Trophy } from 'lucide-react';

interface BadgeDisplayProps {
  badge: Badge;
  earned?: boolean;
}

export function BadgeDisplay({ badge, earned = false }: BadgeDisplayProps) {
  return (
    <div className={`flex items-center p-4 rounded-lg ${earned ? 'bg-emerald-50' : 'bg-gray-50'}`}>
      <div className={`p-2 rounded-full ${earned ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-200 text-gray-500'}`}>
        <Trophy className="w-6 h-6" />
      </div>
      <div className="ml-4">
        <h3 className="font-medium text-gray-900">{badge.name}</h3>
        <p className="text-sm text-gray-500">{badge.description}</p>
      </div>
    </div>
  );
}