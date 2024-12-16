export interface Content {
  _id: string;
  title: string;
  body: string;
  communityId: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContentData {
  title: string;
  body: string;
  communityId: string;
}