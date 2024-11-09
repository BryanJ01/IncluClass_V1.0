import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, ArrowRight } from 'lucide-react';
import { Activity } from '../types/activity';
import { Link } from 'react-router-dom';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Implement share logic
  };

  const handleCommentToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowComments(!showComments);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
            {activity.subject}
          </span>
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
            {activity.specialNeed}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {activity.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {activity.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50"
              alt={activity.author}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-gray-600">Por {activity.author}</span>
          </div>
          <span className="text-sm text-gray-500">{activity.timeAgo}</span>
        </div>

        <Link
          to={`/activity/${activity.id}`}
          className="w-full flex items-center justify-center py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 mb-4 group"
        >
          Ver más
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
        </Link>

        <div className="flex justify-between items-center pt-4 border-t">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200
                     ${liked ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Heart className="h-5 w-5" fill={liked ? 'currentColor' : 'none'} />
            <span className="text-sm">Me gusta</span>
          </button>

          <button
            onClick={handleCommentToggle}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm">Comentar</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Share2 className="h-5 w-5" />
            <span className="text-sm">Compartir</span>
          </button>
        </div>
      </div>

      {showComments && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 animate-fade-in-up">
          <div className="p-4">
            <form onSubmit={handleSubmitComment} className="mb-4">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Añade un comentario..."
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                onClick={(e) => e.stopPropagation()}
              />
            </form>
            <div className="space-y-2">
              {comments.map((comment, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded-lg animate-fade-in">
                  <p className="text-sm text-gray-700">{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;