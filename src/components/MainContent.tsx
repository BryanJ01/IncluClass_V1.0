import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const MainContent = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Actividades Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Actividad Destacada {i}</h3>
                <p className="text-gray-600 mb-4">Esta es una breve descripción de la actividad destacada.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
                    Matemáticas
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Actividades Recientes</h2>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50`}
                    alt="Author"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">Título de la Actividad {i}</h3>
                    <p className="text-sm text-gray-500">por Maestra/o {i}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Esta es una breve descripción de la actividad. Explica qué implica la actividad y sus objetivos.
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
                    Matemáticas
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    Resolución de Problemas
                  </span>
                </div>
                <div className="flex items-center space-x-6 text-gray-500">
                  <button className="flex items-center space-x-2 hover:text-indigo-600">
                    <Heart className="h-5 w-5" />
                    <span>Me gusta</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-indigo-600">
                    <MessageCircle className="h-5 w-5" />
                    <span>Comentar</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-indigo-600">
                    <Share2 className="h-5 w-5" />
                    <span>Compartir</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;