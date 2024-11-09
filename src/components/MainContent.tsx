import React from 'react';
import { Heart, MessageCircle, Share2, Star } from 'lucide-react';

const MainContent = () => {
  const topActivities = [
    {
      id: 1,
      title: "Matemáticas Divertidas con Bloques",
      description: "Actividad interactiva para aprender matemáticas básicas usando bloques de colores.",
      author: "María García",
      rating: 4.9,
      subject: "Matemáticas",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500"
    },
    {
      id: 2,
      title: "Lectura Comprensiva con Pictogramas",
      description: "Método innovador para mejorar la comprensión lectora usando apoyo visual.",
      author: "Juan Pérez",
      rating: 4.8,
      subject: "Lenguaje",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500"
    },
    {
      id: 3,
      title: "Ciencias a través del Juego",
      description: "Experimentos sencillos y seguros para aprender conceptos científicos básicos.",
      author: "Ana Martínez",
      rating: 4.7,
      subject: "Ciencias",
      image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=500"
    },
    {
      id: 4,
      title: "Arte y Motricidad Fina",
      description: "Actividades artísticas para desarrollar la motricidad fina y la creatividad.",
      author: "Carlos López",
      rating: 4.6,
      subject: "Arte",
      image: "https://images.unsplash.com/photo-1499892477393-f675706cbe6e?w=500"
    },
    {
      id: 5,
      title: "Música y Movimiento",
      description: "Ejercicios de coordinación y ritmo a través de la música.",
      author: "Laura Sánchez",
      rating: 4.5,
      subject: "Música",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500"
    }
  ];

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Actividades Mejor Valoradas</h2>
          <div className="space-y-6">
            {topActivities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-48 h-48 object-cover rounded-l-xl"
                  />
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                        <p className="text-gray-600 mb-4">{activity.description}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-700">{activity.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                        {activity.subject}
                      </span>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600">
                          <Heart className="h-5 w-5" />
                          <span>Me gusta</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600">
                          <MessageCircle className="h-5 w-5" />
                          <span>Comentar</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600">
                          <Share2 className="h-5 w-5" />
                          <span>Compartir</span>
                        </button>
                      </div>
                    </div>
                  </div>
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