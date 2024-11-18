import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Activity } from '../../types/activity';
import { 
  ArrowLeft, 
  Heart, 
  MessageCircle, 
  Share2, 
  Clock, 
  Target, 
  Box 
} from 'lucide-react';

interface DetailedActivityViewProps {
  activities: Activity[];
}

const DetailedActivityView: React.FC<DetailedActivityViewProps> = ({ activities }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const activity = activities.find(a => a.id === Number(id));

  if (!activity) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Actividad no encontrada</h2>
          <button
            onClick={() => navigate('/activities')}
            className="mt-4 inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver a actividades
          </button>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  // Parse JSON strings to arrays if needed
  const objectives = typeof activity.objectives === 'string' 
    ? JSON.parse(activity.objectives) 
    : activity.objectives;

  const materials = typeof activity.materials === 'string'
    ? JSON.parse(activity.materials)
    : activity.materials;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/activities')}
          className="mb-6 inline-flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-5 w-5 text-gray-600" />
          <span className="text-gray-600">Volver a actividades</span>
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                {activity.subject}
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                {activity.specialNeed}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">{activity.title}</h1>

            <div className="flex items-center space-x-4 mb-6">
              <img
                src={activity.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(activity.author.name)}`}
                alt={activity.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-gray-900 font-medium">{activity.author.name}</p>
                <p className="text-gray-500 text-sm">{activity.author.specialty}</p>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-gray-600">{activity.detailedDescription}</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="h-6 w-6 mr-2 text-purple-500" />
                  Objetivos
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {objectives.map((objective: string, index: number) => (
                    <li key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-purple-500" />
                  Duración
                </h2>
                <p className="text-gray-600">{activity.duration}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Box className="h-6 w-6 mr-2 text-purple-500" />
                  Materiales Necesarios
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {materials.map((material: string, index: number) => (
                    <li key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200
                             ${liked ? 'text-green-500 bg-green-50' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Heart className="h-5 w-5" fill={liked ? 'currentColor' : 'none'} />
                    <span>Me agrada</span>
                  </button>

                  <button
                    onClick={handleDislike}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200
                             ${disliked ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Heart className="h-5 w-5 transform rotate-180" fill={disliked ? 'currentColor' : 'none'} />
                    <span>No me agrada</span>
                  </button>
                </div>

                <button
                  onClick={() => {}} // Implement share logic
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <Share2 className="h-5 w-5" />
                  <span>Compartir</span>
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-purple-500" />
                  Comentarios
                </h3>

                <form onSubmit={handleSubmitComment} className="space-y-4">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Añade un comentario..."
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    Comentar
                  </button>
                </form>

                <div className="space-y-4 mt-6">
                  {comments.map((comment, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 animate-fade-in">
                      <p className="text-gray-700">{comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedActivityView;