import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">IncluClass</div>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/activities" className="hover:text-indigo-200">Actividades</Link>
              <Link to="/adaptations" className="hover:text-indigo-200">Adaptaciones</Link>
              <Link to="/community" className="hover:text-indigo-200">Comunidad</Link>
              <Link to="/resources" className="hover:text-indigo-200">Recursos</Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-64 px-4 py-1 rounded-full bg-indigo-500 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute right-3 top-1.5 h-5 w-5 text-indigo-200" />
            </div>
            <Bell className="h-6 w-6 hover:text-indigo-200 cursor-pointer" />
            <User className="h-6 w-6 hover:text-indigo-200 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;