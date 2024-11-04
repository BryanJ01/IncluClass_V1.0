import React from 'react';
import { BookOpen, Users, Brain, Download } from 'lucide-react';

const AdaptationsPage = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Adaptaciones Curriculares</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Adaptaciones Disponibles</h2>
            <p className="text-indigo-100">150+ adaptaciones curriculares</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Materias</h2>
            <p className="text-purple-100">12 áreas temáticas</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Necesidades Especiales</h2>
            <p className="text-pink-100">8 tipos de adaptaciones</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Adaptación para Matemáticas - Multiplicación
                </h3>
                <p className="text-gray-600 mb-4">
                  Material adaptado para estudiantes con dificultades de aprendizaje en multiplicación.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    Matemáticas
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    TDAH
                  </span>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="h-5 w-5" />
                <span>Descargar</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Adaptación para Lectura Comprensiva
                </h3>
                <p className="text-gray-600 mb-4">
                  Material adaptado con apoyo visual para mejorar la comprensión lectora.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Lenguaje
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Autismo
                  </span>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="h-5 w-5" />
                <span>Descargar</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Brain className="h-6 w-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Adaptación para Ciencias Naturales
                </h3>
                <p className="text-gray-600 mb-4">
                  Material adaptado con experimentos prácticos y visuales.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    Ciencias
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Discapacidad Física
                  </span>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="h-5 w-5" />
                <span>Descargar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdaptationsPage;