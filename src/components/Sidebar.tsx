import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Brain, 
  Palette, 
  Dumbbell,
  Users,
  Tag,
  MessageSquare
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-[calc(100vh-4rem)] shadow-lg">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-8">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">Jane Doe</h3>
            <p className="text-sm text-gray-500">Maestra de Educación Especial</p>
          </div>
        </div>

        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Categorías</h4>
          <Link to="/subjects/math" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <BookOpen className="h-5 w-5" />
            <span>Matemáticas</span>
          </Link>
          <Link to="/subjects/science" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <Brain className="h-5 w-5" />
            <span>Ciencia</span>
          </Link>
          <Link to="/subjects/art" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <Palette className="h-5 w-5" />
            <span>Arte</span>
          </Link>
          <Link to="/subjects/pe" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <Dumbbell className="h-5 w-5" />
            <span>Educación Física</span>
          </Link>
        </div>

        <div className="mt-8 space-y-1">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Necesidades Especiales</h4>
          <Link to="/special-needs/autism" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <Users className="h-5 w-5" />
            <span>Autismo</span>
          </Link>
          <Link to="/special-needs/adhd" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <Tag className="h-5 w-5" />
            <span>TDAH</span>
          </Link>
          <Link to="/special-needs/physical" className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <MessageSquare className="h-5 w-5" />
            <span>Discapacidades Físicas</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;