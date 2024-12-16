export interface Community {
  _id: string;
  name: string;
  description: string;
  members: string[];
  createdAt: string;
}

export interface CreateCommunityData {
  name: string;
  description: string;
}