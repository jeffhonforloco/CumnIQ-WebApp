import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LayoutDashboard } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900">
                <Home className="h-5 w-5 mr-1" />
                <span className="font-medium">Home</span>
              </Link>
              <Link to="/dashboard" className="flex items-center px-2 py-2 text-gray-700 hover:text-gray-900 ml-4">
                <LayoutDashboard className="h-5 w-5 mr-1" />
                <span className="font-medium">Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}