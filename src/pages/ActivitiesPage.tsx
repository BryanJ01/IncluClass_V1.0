import React from 'react';
import { Plus, Filter, Search } from 'lucide-react';

const ActivitiesPage = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Actividades Educativas</h1>
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <Plus className="h-5 w-5" />
            <span>Nueva Actividad</span>
          </button>
        </div>

        <div className="flex space-x-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar actividades..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filtros</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img
                src={`https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500`}
                alt="Activity"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    Matemáticas
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    TDAH
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Actividad de Aprendizaje {i}
                </h3>
                <p className="text-gray-600 mb-4">
                  Descripción breve de la actividad y sus objetivos principales.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50"
                      alt="Author"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-600">Por María García</span>
                  </div>
                  <span className="text-sm text-gray-500">Hace 2 días</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;