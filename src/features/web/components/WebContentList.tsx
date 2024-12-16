import React from 'react';
import { WebContent } from '../types';
import { formatDistanceToNow } from 'date-fns';
import { Edit, Trash2 } from 'lucide-react';

interface WebContentListProps {
  contents: WebContent[];
  onEdit: (content: WebContent) => void;
  onDelete: (contentId: string) => void;
}

export function WebContentList({ contents, onEdit, onDelete }: WebContentListProps) {
  return (
    <div className="space-y-4">
      {contents.map((content) => (
        <div key={content.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{content.title}</h3>
              <p className="text-sm text-gray-500">
                Created {formatDistanceToNow(new Date(content.createdAt), { addSuffix: true })}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(content)}
                className="p-1 text-gray-400 hover:text-emerald-500"
              >
                <Edit className="w-5 h-5" />
              </button>
              <button
                onClick={() => onDelete(content.id)}
                className="p-1 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-gray-600 line-clamp-2">{content.content}</p>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}