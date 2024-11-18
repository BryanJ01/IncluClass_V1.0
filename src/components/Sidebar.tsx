import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../components/auth/AuthContext';
import { 
  Calculator, 
  BookOpen, 
  TestTube,
  BookMarked,
  Dumbbell,
  Users,
  Tag,
  MessageSquare
} from 'lucide-react';

const Sidebar = () => {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSubject = searchParams.get('subject');
  const currentSpecialNeed = searchParams.get('specialNeed');

  const handleFilterClick = (type: 'subject' | 'specialNeed', value: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (type === 'subject') {
      if (currentSubject === value) {
        params.delete('subject');
      } else {
        params.set('subject', value);
      }
      params.delete('specialNeed');
    } else {
      if (currentSpecialNeed === value) {
        params.delete('specialNeed');
      } else {
        params.set('specialNeed', value);
      }
      params.delete('subject');
    }
    
    setSearchParams(params);
  };

  return (
    <div className="w-64 bg-white h-[calc(100vh-4rem)] shadow-lg">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-8">
          <img
            src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || '')}`}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{user?.name}</h3>
            <p className="text-sm text-gray-500">{user?.specialty}</p>
          </div>
        </div>

        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Materias</h4>
          <button
            onClick={() => handleFilterClick('subject', 'Matemáticas')}
            className={`flex items-center space-x-3 px-4 py-2 w-full text-left rounded-lg transition-colors ${
              currentSubject === 'Matemáticas' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Calculator className="h-5 w-5" />
            <span>Matemáticas</span>
          </button>
          <button
            onClick={() => handleFilterClick('subject', 'Lectura y Escritura')}
            className={`flex items-center space-x-3 px-4 py-2 w-full text-left rounded-lg transition-colors ${
              currentSubject === 'Lectura y Escritura' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span>Lectura y Escritura</span>
          </button>
          <button
            onClick={() => handleFilterClick('subject', 'Ciencias Naturales')}
            className={`flex items-center space-x-3 px-4 py-2 w-full text-left rounded-lg transition-colors ${
              currentSubject === 'Ciencias Naturales' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <TestTube className="h-5 w-5" />
            <span>Ciencias Naturales</span>
          </button>
          <button
            onClick={() => handleFilterClick('subject', 'Historia')}
            className={`flex items-center space-x-3 px-4 py-2 w-full text-left rounded-lg transition-colors ${
              currentSubject === 'Historia' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <BookMarked className="h-5 w-5" />
            <span>Historia</span>
          </button>
          <button
            onClick={() => handleFilterClick('subject', 'Educación Física')}
            className={`flex items-center space-x-3 px-4 py-2 w-full text-left rounded-lg transition-colors ${
              currentSubject === 'Educación Física' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Dumbbell className="h-5 w-5" />
            <span>Educación Física</span>
          </button>
        </div>

        <div className="mt-8 space-y-1">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">Necesidades Especiales</h4>
          <button
            onClick={() => handleFilterClick('specialNeed', 'Autismo')}
            className={`flex items-center space-x-3 px-4 py-2 w-full text-left rounded-lg transition-colors ${
              currentSpecialNeed === 'Autismo' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>Autismo</span>
          </button>
          <button
            onClick={() => handleFilterClick('specialNeed', 'TDAH')}
            className={`flex items-center space-x-3 px-4 py-2 w-full text-left rounded-lg transition-colors ${
              currentSpecialNeed === 'TDAH' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Tag className="h-5 w-5" />
            <span>TDAH</span>
          </button>
          <button
            onClick={() => handleFilterClick('specialNeed', 'Discapacidad Física')}
            className={`flex items-center space-x-3 px-4 py-2 w-full text-left rounded-lg transition-colors ${
              currentSpecialNeed === 'Discapacidad Física' ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            <span>Discapacidad Física</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;