export interface Badge {
  _id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
}

export interface UserBadge {
  _id: string;
  userId: string;
  badgeId: Badge;
  awardedAt: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  progress: number;
  total: number;
  completed: boolean;
}