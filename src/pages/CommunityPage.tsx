import React from 'react';
import { MessageCircle, Heart, Share2, Users } from 'lucide-react';

const CommunityPage = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Comunidad Educativa</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Nueva Publicación
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Publicación 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50"
                alt="Author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900">Ana Martínez</h3>
                <p className="text-sm text-gray-500">Especialista en Educación Especial</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">
                ¿Alguien tiene experiencia usando tableros de comunicación aumentativa en clase? Me gustaría compartir experiencias y consejos.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-gray-500 mb-4">
              <button className="flex items-center space-x-2 hover:text-indigo-600">
                <Heart className="h-5 w-5" />
                <span>24 Me gusta</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-indigo-600">
                <MessageCircle className="h-5 w-5" />
                <span>12 Comentarios</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-indigo-600">
                <Share2 className="h-5 w-5" />
                <span>Compartir</span>
              </button>
            </div>

            {/* Comentarios */}
            <div className="space-y-4">
              <div className="flex space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50"
                  alt="Commenter"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">María García</p>
                  <p className="text-gray-600">¡Excelente iniciativa! Yo he usado varios métodos...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grupos Destacados */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Grupos Destacados</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Innovación en Educación Especial</h3>
                      <p className="text-sm text-gray-500">1.2k miembros</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-sm text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
                    Unirse
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;