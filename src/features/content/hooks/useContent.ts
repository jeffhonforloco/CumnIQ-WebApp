import { useState, useEffect } from 'react';
import { Content } from '../types';
import { contentApi } from '../api/content';

export function useContent(communityId: string) {
  const [content, setContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent();
  }, [communityId]);

  async function loadContent() {
    try {
      const data = await contentApi.getAll(communityId);
      setContent(data);
    } catch (err) {
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  }

  return {
    content,
    loading,
    error,
    refresh: loadContent,
  };
}