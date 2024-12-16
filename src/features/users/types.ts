export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  bio?: string;
  location?: string;
  interests: string[];
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface UserSettings {
  emailNotifications: boolean;
  theme: 'light' | 'dark' | 'system';
  privacyLevel: 'public' | 'private' | 'friends';
}