import React from 'react';
import { CommunityCard } from './CommunityCard';
import { CommunitySearch } from './CommunitySearch';
import { useCommunities } from '../hooks/useCommunities';
import { useCommunitySearch } from '../hooks/useCommunitySearch';
import { sortCommunities } from '../utils/communityHelpers';

export function CommunityList() {
  const { communities, loading, error } = useCommunities();
  const { search, setSearch, filteredCommunities } = useCommunitySearch(communities);

  if (loading) {
    return <div className="text-center">Loading communities...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  const sortedCommunities = sortCommunities(filteredCommunities);

  return (
    <div className="space-y-6">
      <CommunitySearch value={search} onChange={setSearch} />
      
      {sortedCommunities.length === 0 ? (
        <div className="text-center text-gray-500">
          {search ? 'No communities found matching your search.' : 'No communities yet.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCommunities.map((community) => (
            <CommunityCard key={community._id} community={community} />
          ))}
        </div>
      )}
    </div>
  );
}