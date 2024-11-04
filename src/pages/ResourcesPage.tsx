import React from 'react';
import { Book, Video, FileText, Download, ExternalLink } from 'lucide-react';

const ResourcesPage = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Recursos Educativos</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Book className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold">Guías Didácticas</h2>
            </div>
            <p className="text-gray-600 mb-4">Accede a guías especializadas para diferentes necesidades educativas.</p>
            <span className="text-sm text-gray-500">25 recursos disponibles</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Video className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold">Videos Educativos</h2>
            </div>
            <p className="text-gray-600 mb-4">Material audiovisual adaptado para diferentes estilos de aprendizaje.</p>
            <span className="text-sm text-gray-500">40 videos disponibles</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-pink-100 rounded-lg">
                <FileText className="h-6 w-6 text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold">Plantillas</h2>
            </div>
            <p className="text-gray-600 mb-4">Plantillas personalizables para crear material educativo.</p>
            <span className="text-sm text-gray-500">15 plantillas disponibles</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Recurso 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Guía de Adaptaciones Curriculares
                </h3>
                <p className="text-gray-600 mb-4">
                  Manual completo con estrategias y ejemplos prácticos para realizar adaptaciones curriculares efectivas.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    PDF
                  </span>
                  <span className="text-sm text-gray-500">2.5 MB</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Download className="h-5 w-5" />
                <span>Descargar</span>
              </button>
            </div>
          </div>

          {/* Recurso 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Video Tutorial:
                </h3>
                <p className="text-gray-600 mb-4">
                  Video explicativo sobre implementación de sistemas de comunicación aumentativa en el aula.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    Video
                  </span>
                  <span className="text-sm text-gray-500">15 minutos</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                <ExternalLink className="h-5 w-5" />
                <span>Ver Video</span>
              </button>
            </div>
          </div>

          {/* Recurso 3 */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Plantillas de Evaluación Personalizada
                </h3>
                <p className="text-gray-600 mb-4">
                  Conjunto de plantillas editables para crear evaluaciones adaptadas a diferentes necesidades.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
                    DOCX
                  </span>
                  <span className="text-sm text-gray-500">1.8 MB</span>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
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

export default ResourcesPage;