import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
          <div className="absolute inset-0 bg-grid-pattern animate-grid-movement"></div>
        </div>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{
              backgroundColor: i % 2 ? '#c084fc' : '#818cf8',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              width: '30rem',
              height: '30rem',
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center relative z-10">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <Star className="h-4 w-4 mr-2" />
              Plataforma líder en educación especial
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 animate-fade-in">
            Transformando la{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Educación Especial
            </span>
            {' '}con Tecnología
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 animate-slide-up max-w-3xl mx-auto">
            Únete a más de 1,000 educadores que están revolucionando la manera de enseñar
            con recursos personalizados y herramientas innovadoras.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link
              to="/register"
              className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg animate-fade-in flex items-center justify-center"
            >
              Comenzar Gratis
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg animate-fade-in flex items-center justify-center"
            >
              Ver Demo
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 animate-fade-in-up">
              <div className="font-bold text-2xl text-purple-600 mb-1">1000+</div>
              <div className="text-gray-600">Educadores Activos</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="font-bold text-2xl text-indigo-600 mb-1">5000+</div>
              <div className="text-gray-600">Recursos Educativos</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="font-bold text-2xl text-pink-600 mb-1">98%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;