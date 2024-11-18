import React, { useState, useEffect } from 'react';
import { Heart, Share2, ArrowRight, MessageCircle } from 'lucide-react';
import { Activity } from '../../types/activity';
import DetailedActivityModal from './DetailedActivityModal';
import { useAuth } from '../auth/AuthContext';
import { toast } from 'react-hot-toast';
import { getDefaultImageBySubject } from '../../utils/defaultImages';

interface ActivityCardProps {
  activity: Activity;
  onUpdate: (updatedActivity: Activity) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onUpdate }) => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(activity);

  useEffect(() => {
    setCurrentActivity(activity);
    if (user) {
      setHasLiked(activity.likes.some(like => like.userId === user.id));
    }
  }, [activity, user]);

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast.error('Debes iniciar sesión para dar me gusta');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5001/api/activities/${currentActivity.id}/like`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) throw new Error('Error al procesar me gusta');

      const data = await response.json();
      const updatedActivity = {
        ...currentActivity,
        likes: data.liked 
          ? [...currentActivity.likes, { id: Date.now(), userId: user.id }]
          : currentActivity.likes.filter(like => like.userId !== user.id)
      };

      setCurrentActivity(updatedActivity);
      setHasLiked(data.liked);
      onUpdate(updatedActivity);
    } catch (error) {
      toast.error('Error al procesar me gusta');
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Implement share logic
  };

  const handleActivityUpdate = (updatedActivity: Activity) => {
    setCurrentActivity(updatedActivity);
    onUpdate(updatedActivity);
  };

  const activityImage = currentActivity.image || getDefaultImageBySubject(currentActivity.subject);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        <div 
          className="relative cursor-pointer" 
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={activityImage}
            alt={currentActivity.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <span className="bg-white/90 backdrop-blur-sm text-purple-600 text-xs px-2 py-1 rounded-full">
              {currentActivity.subject}
            </span>
            {currentActivity.specialNeed && (
              <span className="bg-white/90 backdrop-blur-sm text-indigo-600 text-xs px-2 py-1 rounded-full">
                {currentActivity.specialNeed}
              </span>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-2 mb-2">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 ${hasLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
            >
              <Heart className="h-4 w-4" fill={hasLiked ? 'currentColor' : 'none'} />
              <span className="text-sm">{currentActivity.likes.length}</span>
            </button>
            <MessageCircle className="h-4 w-4 text-purple-500 ml-2" />
            <span className="text-sm text-gray-600">{currentActivity.comments.length}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 cursor-pointer hover:text-purple-600" onClick={() => setIsModalOpen(true)}>
            {currentActivity.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {currentActivity.description}
          </p>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 text-sm ${
                  hasLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                }`}
              >
                <Heart className="h-4 w-4" fill={hasLiked ? 'currentColor' : 'none'} />
                <span>Me gusta</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-1 text-sm text-gray-500 hover:text-purple-600"
              >
                <Share2 className="h-4 w-4" />
                <span>Compartir</span>
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium"
            >
              <span>Ver actividad</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <DetailedActivityModal
        activity={currentActivity}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleActivityUpdate}
      />
    </>
  );
};

export default ActivityCard;