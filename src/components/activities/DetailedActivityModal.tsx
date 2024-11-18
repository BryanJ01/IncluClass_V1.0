import React, { useState, useEffect } from 'react';
import { X, Clock, Target, List, Link as LinkIcon, Heart, Share2, MessageCircle, Send } from 'lucide-react';
import { Activity, Comment } from '../../types/activity';
import { useAuth } from '../auth/AuthContext';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { toast } from 'react-hot-toast';
import { getDefaultImageBySubject } from '../../utils/defaultImages';

interface DetailedActivityModalProps {
  activity: Activity;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedActivity: Activity) => void;
}

const DetailedActivityModal: React.FC<DetailedActivityModalProps> = ({ 
  activity, 
  isOpen, 
  onClose,
  onUpdate 
}) => {
  const { user } = useAuth();
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(activity);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    setCurrentActivity(activity);
    if (user) {
      setHasLiked(activity.likes.some(like => like.userId === user.id));
    }
  }, [activity, user]);

  if (!isOpen) return null;

  // Parse JSON strings to arrays if needed
  const objectives = Array.isArray(currentActivity.objectives) 
    ? currentActivity.objectives 
    : typeof currentActivity.objectives === 'string'
    ? JSON.parse(currentActivity.objectives)
    : [];

  const materials = Array.isArray(currentActivity.materials)
    ? currentActivity.materials
    : typeof currentActivity.materials === 'string'
    ? JSON.parse(currentActivity.materials)
    : [];

  const handleLike = async () => {
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

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5001/api/activities/${currentActivity.id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content: newComment })
      });

      if (!response.ok) throw new Error('Error al enviar el comentario');

      const newCommentData = await response.json();
      const updatedActivity = {
        ...currentActivity,
        comments: [newCommentData, ...currentActivity.comments]
      };

      setCurrentActivity(updatedActivity);
      onUpdate(updatedActivity);
      setNewComment('');
      toast.success('Comentario añadido exitosamente');
    } catch (error) {
      toast.error('Error al enviar el comentario');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex">
        {/* Contenido Principal */}
        <div className="flex-1 overflow-y-auto">
          <div className="relative">
          <img
              src={currentActivity.image || getDefaultImageBySubject(currentActivity.subject)}
              alt={currentActivity.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <span className="bg-white/90 backdrop-blur-sm text-purple-600 px-3 py-1 rounded-full text-sm">
                {currentActivity.subject}
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-indigo-600 px-3 py-1 rounded-full text-sm">
                {currentActivity.specialNeed}
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src={currentActivity.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(currentActivity.author.name)}`}
                  alt={currentActivity.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{currentActivity.author.name}</h3>
                  <p className="text-gray-500 text-sm">{currentActivity.author.specialty}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    hasLiked ? 'bg-red-50 text-red-500' : 'hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  <Heart className="h-5 w-5" fill={hasLiked ? 'currentColor' : 'none'} />
                  <span>{currentActivity.likes.length} me gusta</span>
                </button>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MessageCircle className="h-5 w-5" />
                  <span>{currentActivity.comments.length} comentarios</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentActivity.title}</h2>
            <p className="text-gray-600 mb-8">{currentActivity.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center text-purple-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <h3 className="font-semibold">Duración</h3>
                </div>
                <p className="text-gray-600">{currentActivity.duration}</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <div className="flex items-center text-indigo-600 mb-2">
                  <Target className="h-5 w-5 mr-2" />
                  <h3 className="font-semibold">Objetivos</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {objectives.map((objective: string, index: number) => (
                    <li key={index} className="text-sm">{objective}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-pink-50 rounded-lg p-4">
                <div className="flex items-center text-pink-600 mb-2">
                  <List className="h-5 w-5 mr-2" />
                  <h3 className="font-semibold">Materiales</h3>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {materials.map((material: string, index: number) => (
                    <li key={index} className="text-sm">{material}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Descripción Detallada</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 whitespace-pre-line">{currentActivity.detailedDescription}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Explicación Paso a Paso</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 whitespace-pre-line">{currentActivity.explanation}</p>
                </div>
              </div>

              {currentActivity.sourceUrl && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <LinkIcon className="h-5 w-5 mr-2 text-purple-600" />
                    Fuente Original
                  </h3>
                  <a
                    href={currentActivity.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 underline"
                  >
                    {currentActivity.sourceUrl}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sección de Comentarios */}
        <div className="w-96 border-l bg-gray-50 overflow-y-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Comentarios ({currentActivity.comments.length})
            </h3>

            {user && (
              <form onSubmit={handleSubmitComment} className="mb-6">
                <div className="flex items-start space-x-2">
                  <img
                    src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Escribe un comentario..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      rows={3}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || !newComment.trim()}
                      className="mt-2 flex items-center justify-center w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Comentar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div className="space-y-4">
              {currentActivity.comments.map((comment: Comment) => (
                <div key={comment.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={comment.user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.user.name)}`}
                      alt={comment.user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{comment.user.name}</p>
                      <p className="text-xs text-gray-500">
                        {format(new Date(comment.createdAt), "d 'de' MMMM, yyyy", { locale: es })}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedActivityModal;