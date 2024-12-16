import React from 'react';
import { Logo } from '../components/ui/Logo';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <Logo className="scale-150" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Building Smarter Communities Together
      </h2>
      
      <p className="text-xl text-gray-600 mb-8">
        Join CUMNIQ to connect with your community, share resources, and make a difference.
      </p>
      
      <Link
        to="/dashboard"
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-400 to-blue-500 text-white font-semibold rounded-lg hover:from-emerald-500 hover:to-blue-600 transition-all"
      >
        Explore Communities
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
}