import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Bell, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from './auth/AuthContext';
import UserProfileModal from './UserProfileModal';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <img
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || '')}`}
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      navigate('/profile');
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Ver Perfil
                  </button>
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      handleLogout();
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <UserProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;