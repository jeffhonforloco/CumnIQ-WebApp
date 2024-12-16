import { Community } from '../types';

export function sortCommunities(communities: Community[]): Community[] {
  return [...communities].sort((a, b) => {
    // Sort by member count first
    const memberDiff = b.members.length - a.members.length;
    if (memberDiff !== 0) return memberDiff;
    
    // Then by creation date
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export function filterCommunitiesBySearch(communities: Community[], search: string): Community[] {
  const searchLower = search.toLowerCase();
  return communities.filter(
    community => 
      community.name.toLowerCase().includes(searchLower) ||
      community.description.toLowerCase().includes(searchLower)
  );
}