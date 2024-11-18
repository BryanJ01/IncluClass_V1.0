import React from 'react';
import { Book, Video, FileText, Download, Search, Filter } from 'lucide-react';

const ResourcesPage = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Recursos Educativos</h1>
          <div className="flex space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar recursos..."
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>Filtros</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
            <Book className="h-8 w-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Guías Didácticas</h2>
            <p className="text-blue-100">50+ guías disponibles</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
            <Video className="h-8 w-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Videos Educativos</h2>
            <p className="text-green-100">100+ videos</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-lg p-6">
            <FileText className="h-8 w-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Materiales Imprimibles</h2>
            <p className="text-yellow-100">200+ recursos</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Guías Didácticas */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Guías Didácticas Destacadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Book className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Guía de Adaptaciones Curriculares</h4>
                    <p className="text-sm text-gray-600 mb-2">Estrategias para personalizar el aprendizaje</p>
                    <button className="text-blue-600 text-sm hover:text-blue-700 flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Descargar PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videos Educativos */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Videos Educativos Populares</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Video className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Técnicas de Enseñanza Multisensorial</h4>
                    <p className="text-sm text-gray-600 mb-2">Aprende estrategias efectivas</p>
                    <button className="text-green-600 text-sm hover:text-green-700 flex items-center">
                      Ver Video
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Materiales Imprimibles */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Materiales Imprimibles Nuevos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <FileText className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Fichas de Trabajo Adaptadas</h4>
                    <p className="text-sm text-gray-600 mb-2">Material listo para imprimir</p>
                    <button className="text-yellow-600 text-sm hover:text-yellow-700 flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;