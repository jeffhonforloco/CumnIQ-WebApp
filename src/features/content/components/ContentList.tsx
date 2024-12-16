import React from 'react';
import { useContent } from '../hooks/useContent';
import { ContentCard } from './ContentCard';

interface ContentListProps {
  communityId: string;
}

export function ContentList({ communityId }: ContentListProps) {
  const { content, loading, error } = useContent(communityId);

  if (loading) {
    return <div className="text-center">Loading content...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (content.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No content yet. Be the first to post!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {content.map((item) => (
        <ContentCard key={item._id} content={item} />
      ))}
    </div>
  );
}