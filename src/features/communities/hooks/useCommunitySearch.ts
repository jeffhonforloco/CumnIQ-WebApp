import { useState, useMemo } from 'react';
import { Community } from '../types';
import { filterCommunitiesBySearch } from '../utils/communityHelpers';

export function useCommunitySearch(communities: Community[]) {
  const [search, setSearch] = useState('');

  const filteredCommunities = useMemo(() => 
    filterCommunitiesBySearch(communities, search),
    [communities, search]
  );

  return {
    search,
    setSearch,
    filteredCommunities,
  };
}