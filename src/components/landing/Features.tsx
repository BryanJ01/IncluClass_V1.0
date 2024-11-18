import React from 'react';
import { BookOpen, Users, Layout, Target, Clock, Star, Shield, Zap, Heart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      title: "Recursos Especializados",
      description: "Biblioteca completa con materiales adaptados para diferentes necesidades educativas especiales.",
      bgColor: "bg-indigo-100"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Comunidad Colaborativa",
      description: "Conecta con expertos y comparte experiencias en nuestra red de educadores especializados.",
      bgColor: "bg-purple-100"
    },
    {
      icon: <Layout className="h-6 w-6 text-pink-600" />,
      title: "Actividades Personalizadas",
      description: "Crea y adapta actividades según las necesidades específicas de cada estudiante.",
      bgColor: "bg-pink-100"
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Seguimiento Individual",
      description: "Monitorea el progreso de cada estudiante con herramientas de evaluación especializadas.",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Planificación Eficiente",
      description: "Optimiza tu tiempo con plantillas y herramientas de planificación intuitivas.",
      bgColor: "bg-green-100"
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      title: "Contenido Premium",
      description: "Accede a recursos exclusivos y materiales desarrollados por expertos en educación especial.",
      bgColor: "bg-yellow-100"
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Respaldo Profesional",
      description: "Soporte y asesoramiento de especialistas en educación especial.",
      bgColor: "bg-red-100"
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      title: "Actualización Continua",
      description: "Nuevos recursos y capacitaciones mensuales para mantenerte al día.",
      bgColor: "bg-orange-100"
    },
    {
      icon: <Heart className="h-6 w-6 text-rose-600" />,
      title: "Impacto Real",
      description: "Transforma la vida de tus estudiantes con herramientas efectivas y probadas.",
      bgColor: "bg-rose-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Todo lo que necesitas para una{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            educación inclusiva
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre todas las herramientas y recursos que te ayudarán a transformar
          la experiencia educativa de tus estudiantes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 animate-fade-in-up group hover:-translate-y-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;