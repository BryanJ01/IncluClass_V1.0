import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle } from 'lucide-react';

const CTA = () => {
  const benefits = [
    "Acceso a más de 5,000 recursos educativos",
    "Soporte personalizado de expertos",
    "Actualizaciones mensuales de contenido",
    "Comunidad activa de educadores"
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-12">
          <Award className="h-16 w-16 text-purple-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Únete a la revolución en{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              educación especial
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comienza hoy mismo a transformar la vida de tus estudiantes con herramientas
            innovadoras y recursos especializados
          </p>

          <div className="flex flex-col items-center space-y-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/register"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg animate-fade-in w-full sm:w-auto text-center"
            >
              Comenzar Gratis
            </Link>
            <div className="text-sm text-gray-500">
              14 días de prueba gratuita
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;