import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, ThumbsUp } from 'lucide-react';
import type { Content } from '../types';

interface ContentCardProps {
  content: Content;
}

export function ContentCard({ content }: ContentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h3>
      <p className="text-gray-600 mb-4">{content.body}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 hover:text-emerald-600">
            <ThumbsUp className="w-4 h-4" />
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-emerald-600">
            <MessageSquare className="w-4 h-4" />
            <span>Comment</span>
          </button>
        </div>
        <span>
          {formatDistanceToNow(new Date(content.createdAt), { addSuffix: true })}
        </span>
      </div>
    </div>
  );
}