export interface Author {
  id: number;
  name: string;
  specialty: string;
  email?: string;
  avatar?: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  user: {
    name: string;
    avatar?: string;
  };
}

export interface Like {
  id: number;
  userId: number;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  subject: string;
  specialNeed: string;
  detailedDescription: string;
  explanation: string;
  sourceUrl?: string;
  objectives: string[] | string;
  duration: string;
  materials: string[] | string;
  image: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
  likes: Like[];
  comments: Comment[];
}