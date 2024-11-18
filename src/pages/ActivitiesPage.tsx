import React, { useState, useEffect } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import { Activity } from '../types/activity';
import { useAuth } from '../components/auth/AuthContext';
import { toast } from 'react-hot-toast';
import ActivityCard from '../components/activities/ActivityCard';
import NewActivityModal from '../components/activities/NewActivityModal';
import FilterModal from '../components/FilterModal';
import { useSearchParams } from 'react-router-dom';

const ActivitiesPage = () => {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get filters from URL params
  const currentSubject = searchParams.get('subject') || '';
  const currentSpecialNeed = searchParams.get('specialNeed') || '';

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5001/api/activities', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Error al cargar las actividades');
      }

      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error('Error fetching activities:', error);
      toast.error('Error al cargar las actividades');
    } finally {
      setIsLoading(false);
    }
  };

  const handleActivityUpdate = (updatedActivity: Activity) => {
    setActivities(prevActivities => 
      prevActivities.map(activity => 
        activity.id === updatedActivity.id ? updatedActivity : activity
      )
    );
  };

  const handleNewActivity = (newActivity: Activity) => {
    setActivities(prev => [newActivity, ...prev]);
    setIsModalOpen(false);
  };

  const handleFilterChange = (newFilters: { subject: string; specialNeed: string }) => {
    const params = new URLSearchParams(searchParams);
    
    if (newFilters.subject) {
      params.set('subject', newFilters.subject);
    } else {
      params.delete('subject');
    }
    
    if (newFilters.specialNeed) {
      params.set('specialNeed', newFilters.specialNeed);
    } else {
      params.delete('specialNeed');
    }
    
    setSearchParams(params);
    setIsFilterModalOpen(false);
  };

  const filteredActivities = activities.filter(activity => {
    const matchesTab = activeTab === 'my' ? activity.author.id === user?.id : true;
    const matchesSearch = 
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = currentSubject ? activity.subject === currentSubject : true;
    const matchesSpecialNeed = currentSpecialNeed ? activity.specialNeed === currentSpecialNeed : true;

    return matchesTab && matchesSearch && matchesSubject && matchesSpecialNeed;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Actividades Educativas</h1>
            <p className="text-gray-600 mt-1">
              {activeTab === 'my' ? 'Gestiona tus actividades educativas' : 'Explora actividades de la comunidad'}
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>Nueva Actividad</span>
          </button>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'all'
                ? 'bg-purple-100 text-purple-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Todas las Actividades
          </button>
          <button
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'my'
                ? 'bg-purple-100 text-purple-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Mis Actividades
          </button>
        </div>

        <div className="flex space-x-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar actividades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button 
            onClick={() => setIsFilterModalOpen(true)}
            className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
              currentSubject || currentSpecialNeed
                ? 'border-purple-500 text-purple-600 bg-purple-50 hover:bg-purple-100'
                : 'border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Filter className="h-5 w-5" />
            <span>Filtros {(currentSubject || currentSpecialNeed) && '(Activos)'}</span>
          </button>
        </div>

        {filteredActivities.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">
              {searchTerm || currentSubject || currentSpecialNeed
                ? 'No se encontraron actividades que coincidan con tu búsqueda'
                : activeTab === 'my'
                ? 'Aún no has creado ninguna actividad'
                : 'No hay actividades disponibles'}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 text-purple-600 hover:text-purple-700"
            >
              Crear tu primera actividad
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity) => (
              <ActivityCard 
                key={activity.id} 
                activity={activity} 
                onUpdate={handleActivityUpdate}
              />
            ))}
          </div>
        )}

        <NewActivityModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          onActivityCreated={handleNewActivity}
        />

        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
          currentFilters={{
            subject: currentSubject,
            specialNeed: currentSpecialNeed
          }}
          onApplyFilters={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default ActivitiesPage;