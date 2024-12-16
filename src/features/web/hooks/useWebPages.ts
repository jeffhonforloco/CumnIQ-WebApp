import { useState, useCallback } from 'react';
import { WebPage } from '../types';
import { webService } from '../services/webService';
import { toast } from 'react-hot-toast';

export function useWebPages() {
  const [pages, setPages] = useState<WebPage[]>([]);
  const [loading, setLoading] = useState(false);

  const loadPages = useCallback(async () => {
    try {
      setLoading(true);
      const data = await webService.getPages();
      setPages(data);
    } catch (error) {
      toast.error('Failed to load pages');
    } finally {
      setLoading(false);
    }
  }, []);

  const createPage = async (pageData: Partial<WebPage>) => {
    try {
      const newPage = await webService.createPage(pageData);
      setPages((prev) => [...prev, newPage]);
      return newPage;
    } catch (error) {
      toast.error('Failed to create page');
      throw error;
    }
  };

  const updatePage = async (pageId: string, pageData: Partial<WebPage>) => {
    try {
      const updatedPage = await webService.updatePage(pageId, pageData);
      setPages((prev) => prev.map((p) => (p.id === pageId ? updatedPage : p)));
      return updatedPage;
    } catch (error) {
      toast.error('Failed to update page');
      throw error;
    }
  };

  const deletePage = async (pageId: string) => {
    try {
      await webService.deletePage(pageId);
      setPages((prev) => prev.filter((p) => p.id !== pageId));
    } catch (error) {
      toast.error('Failed to delete page');
      throw error;
    }
  };

  return {
    pages,
    loading,
    loadPages,
    createPage,
    updatePage,
    deletePage,
  };
}