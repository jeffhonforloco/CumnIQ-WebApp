import { WebPage, WebContent } from '../types';
import { api } from '@/lib/api';

export const webService = {
  async getPages(): Promise<WebPage[]> {
    return api.get('/web/pages');
  },

  async getPageBySlug(slug: string): Promise<WebPage> {
    return api.get(`/web/pages/${slug}`);
  },

  async createPage(pageData: Partial<WebPage>): Promise<WebPage> {
    return api.post('/web/pages', pageData);
  },

  async updatePage(pageId: string, pageData: Partial<WebPage>): Promise<WebPage> {
    return api.put(`/web/pages/${pageId}`, pageData);
  },

  async deletePage(pageId: string): Promise<void> {
    return api.delete(`/web/pages/${pageId}`);
  },

  async getContents(): Promise<WebContent[]> {
    return api.get('/web/contents');
  },

  async createContent(contentData: Partial<WebContent>): Promise<WebContent> {
    return api.post('/web/contents', contentData);
  },

  async updateContent(contentId: string, contentData: Partial<WebContent>): Promise<WebContent> {
    return api.put(`/web/contents/${contentId}`, contentData);
  },

  async deleteContent(contentId: string): Promise<void> {
    return api.delete(`/web/contents/${contentId}`);
  }
};