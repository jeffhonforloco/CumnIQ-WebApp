import React from 'react';
import { Network } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500" />
        <Network className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      {showText && (
        <div className="ml-2">
          <h1 className="text-2xl font-bold text-gray-900">CUMNIQ</h1>
          <p className="text-xs text-gray-600">BUILDING SMARTER COMMUNITIES</p>
        </div>
      )}
    </div>
  );
}