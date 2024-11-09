import React, { useState } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import NewActivityModal from '../components/NewActivityModal';
import ActivityCard from '../components/ActivityCard';
import { Activity } from '../types/activity';

const ActivitiesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);

  const activities: Activity[] = [
    {
      id: 1,
      title: "Suma y Resta con Objetos Cotidianos",
      description: "Descripción breve de la actividad y sus objetivos principales.",
      subject: "Matemáticas",
      specialNeed: "TDAH",
      author: "María García",
      timeAgo: "Hace 2 días",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500",
      detailedDescription: "Esta actividad está diseñada para ayudar a los estudiantes a comprender conceptos básicos de suma y resta utilizando objetos familiares.",
      objectives: [
        "Desarrollar comprensión básica de suma y resta",
        "Mejorar la concentración y atención",
        "Practicar habilidades motoras finas"
      ],
      duration: "30 minutos",
      materials: [
        "Objetos cotidianos (lápices, botones, etc.)",
        "Hojas de trabajo",
        "Materiales visuales de apoyo"
      ]
    },
    // Duplicar la actividad 5 veces más para tener 6 en total
    {
      id: 2,
      title: "Lectura Comprensiva Interactiva",
      description: "Actividad de lectura con elementos interactivos y visuales.",
      subject: "Lectura y Escritura",
      specialNeed: "Autismo",
      author: "Carlos Ruiz",
      timeAgo: "Hace 3 días",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500",
      detailedDescription: "Actividad diseñada para mejorar la comprensión lectora mediante elementos visuales.",
      objectives: ["Mejorar comprensión lectora", "Desarrollar vocabulario", "Fomentar la participación"],
      duration: "45 minutos",
      materials: ["Libros ilustrados", "Tarjetas visuales", "Material didáctico"]
    },
    {
      id: 3,
      title: "Experimentos Científicos Básicos",
      description: "Experimentos sencillos para entender conceptos científicos.",
      subject: "Ciencias Naturales",
      specialNeed: "TDAH",
      author: "Ana Martínez",
      timeAgo: "Hace 4 días",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500",
      detailedDescription: "Serie de experimentos científicos adaptados para mantener la atención.",
      objectives: ["Comprender conceptos científicos", "Desarrollar pensamiento crítico", "Fomentar la curiosidad"],
      duration: "40 minutos",
      materials: ["Material de laboratorio básico", "Guías de experimentos", "Equipo de seguridad"]
    },
    {
      id: 4,
      title: "Historia a través del Arte",
      description: "Aprendizaje de historia mediante expresión artística.",
      subject: "Historia",
      specialNeed: "Discapacidades Físicas",
      author: "Pedro Sánchez",
      timeAgo: "Hace 5 días",
      image: "https://images.unsplash.com/photo-1544867885-2333f61544ad?w=500",
      detailedDescription: "Actividad que combina historia y arte para un aprendizaje más significativo.",
      objectives: ["Aprender eventos históricos", "Desarrollar creatividad", "Mejorar motricidad fina"],
      duration: "50 minutos",
      materials: ["Materiales de arte", "Imágenes históricas", "Líneas de tiempo"]
    },
    {
      id: 5,
      title: "Ejercicios Adaptados",
      description: "Actividades físicas adaptadas para diferentes capacidades.",
      subject: "Educación Física",
      specialNeed: "Discapacidades Físicas",
      author: "Laura González",
      timeAgo: "Hace 6 días",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
      detailedDescription: "Rutina de ejercicios adaptados para diferentes niveles de movilidad.",
      objectives: ["Mejorar coordinación", "Aumentar resistencia", "Fomentar trabajo en equipo"],
      duration: "35 minutos",
      materials: ["Equipo adaptado", "Colchonetas", "Pelotas especiales"]
    },
    {
      id: 6,
      title: "Matemáticas con Música",
      description: "Aprendizaje de conceptos matemáticos a través del ritmo.",
      subject: "Matemáticas",
      specialNeed: "Autismo",
      author: "Miguel Torres",
      timeAgo: "Hace 1 semana",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500",
      detailedDescription: "Actividad que combina matemáticas y música para un aprendizaje multisensorial.",
      objectives: ["Aprender patrones matemáticos", "Desarrollar ritmo", "Mejorar memoria auditiva"],
      duration: "40 minutos",
      materials: ["Instrumentos musicales", "Tarjetas numéricas", "Material audiovisual"]
    }
  ];

  const handleToggleExpand = (id: number) => {
    setExpandedActivity(expandedActivity === id ? null : id);
  };

  return (
    <div className="flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Actividades Educativas</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
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
        {activities.map((activity) => (
        <ActivityCard 
          key={activity.id} 
          activity={activity}
        />
      ))}
        </div>

        <NewActivityModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default ActivitiesPage;