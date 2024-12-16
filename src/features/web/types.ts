export interface WebContent {
  id: string;
  title: string;
  content: string;
  authorId: string;
  communityId: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  status: 'draft' | 'published';
}

export interface WebPage {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
  metadata: {
    keywords: string[];
    ogImage?: string;
    ogDescription?: string;
  };
}