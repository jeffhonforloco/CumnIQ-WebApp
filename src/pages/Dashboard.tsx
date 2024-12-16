import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { CommunityList } from '@/features/communities/components/CommunityList';
import { CreateCommunityModal } from '@/features/communities/components/CreateCommunityModal';

export function Dashboard() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Communities</h1>
        <button 
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-emerald-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-emerald-600"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Community
        </button>
      </div>
      
      <CommunityList />
      
      <CreateCommunityModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
}