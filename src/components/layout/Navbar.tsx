import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LayoutDashboard } from 'lucide-react';
import { Logo } from '../ui/Logo';

const navigation = [
  { name: 'Home', to: '/', icon: Home },
  { name: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
];

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="flex space-x-4">
            {navigation.map(({ name, to, icon: Icon }) => (
              <Link
                key={name}
                to={to}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                <Icon className="h-5 w-5 mr-1.5" />
                <span className="font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}