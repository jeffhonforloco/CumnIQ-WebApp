import React from 'react';
import { Achievement } from '../types';

interface AchievementProgressProps {
  achievement: Achievement;
}

export function AchievementProgress({ achievement }: AchievementProgressProps) {
  const percentage = (achievement.progress / achievement.total) * 100;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-900">{achievement.name}</h3>
        <span className="text-sm text-gray-500">
          {achievement.progress} / {achievement.total}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}