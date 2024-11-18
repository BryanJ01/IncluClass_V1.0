import React from 'react';
import { useAuth } from '../components/auth/AuthContext';
import { Users, MessageSquare, Star, UserPlus, Share2, ChevronRight } from 'lucide-react';

const CommunityPage = () => {
  const { user } = useAuth();

  const featuredGroups = [
    {
      id: 1,
      name: "Especialistas en TDAH",
      members: 234,
      description: "Grupo dedicado a compartir estrategias y recursos para estudiantes con TDAH",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=500"
    },
    {
      id: 2,
      name: "Innovación en Autismo",
      members: 189,
      description: "Compartiendo métodos innovadores para la enseñanza de estudiantes con autismo",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500"
    },
    {
      id: 3,
      name: "Recursos Adaptados",
      members: 156,
      description: "Intercambio de materiales y recursos adaptados para diferentes necesidades",
      image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=500"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Perfil del Usuario en la Comunidad */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || '')}`}
                alt={user?.name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-purple-100"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{user?.name}</h1>
                <p className="text-purple-600 mb-2">{user?.specialty}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    3 grupos
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    12 discusiones
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    8 contribuciones
                  </span>
                </div>
              </div>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200">
              <UserPlus className="h-4 w-4" />
              <span>Unirse a un Grupo</span>
            </button>
          </div>
        </div>

        {/* Mis Grupos */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Mis Grupos</h2>
            <button className="text-purple-600 hover:text-purple-700 flex items-center text-sm">
              Ver todos <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {user?.specialty && (
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">{`Grupo de ${user.specialty}`}</h3>
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">Activo</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Compartiendo experiencias y recursos especializados</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">156 miembros</span>
                  <button className="text-purple-600 hover:text-purple-700">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Grupos Destacados */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Grupos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGroups.map((group) => (
              <div key={group.id} className="group bg-white border rounded-lg overflow-hidden hover:shadow-md transition-all duration-200">
                <div className="relative h-48">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-1">{group.name}</h3>
                    <p className="text-white/80 text-sm">{group.members} miembros</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                  <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Unirse al Grupo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;