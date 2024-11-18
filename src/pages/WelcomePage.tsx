import React from 'react';
import { useAuth } from '../components/auth/AuthContext';
import { Book, Users, Target, ArrowRight, Star, Calendar, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      title: "Crear Actividad",
      description: "Diseña una nueva actividad educativa",
      icon: <Activity className="h-6 w-6 text-purple-600" />,
      link: "/activities/new",
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      title: "Explorar Recursos",
      description: "Descubre materiales educativos",
      icon: <Book className="h-6 w-6 text-indigo-600" />,
      link: "/resources",
      color: "bg-indigo-50 hover:bg-indigo-100"
    },
    {
      title: "Unirse a la Comunidad",
      description: "Conecta con otros educadores",
      icon: <Users className="h-6 w-6 text-pink-600" />,
      link: "/community",
      color: "bg-pink-50 hover:bg-pink-100"
    }
  ];

  const stats = [
    { label: "Actividades Creadas", value: "150+" },
    { label: "Educadores Activos", value: "1,000+" },
    { label: "Recursos Disponibles", value: "500+" }
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 mb-6">
            <Star className="h-4 w-4 mr-2" />
            <span>¡Bienvenido de nuevo, {user?.name}!</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tu próxima clase comienza aquí
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubre recursos especializados, comparte experiencias y crea actividades 
            que transformarán la vida de tus estudiantes.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <Link
              key={action.title}
              to={action.link}
              className={`${action.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-sm text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Tu Actividad Reciente</h2>
            <Calendar className="h-6 w-6 text-gray-400" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Activity className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Nueva actividad creada</h3>
                <p className="text-sm text-gray-500">Hace 2 días</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Users className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Te uniste a un nuevo grupo</h3>
                <p className="text-sm text-gray-500">Hace 3 días</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-pink-100 rounded-lg">
                <Star className="h-5 w-5 text-pink-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">Recibiste un nuevo reconocimiento</h3>
                <p className="text-sm text-gray-500">Hace 5 días</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/activities"
              className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700"
            >
              <span>Ver todas tus actividades</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;