export const defaultSubjectImages = {
    'Matemáticas': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800',
    'Lectura y Escritura': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800',
    'Ciencias Naturales': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
    'Historia': 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=800',
    'Educación Física': 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
    default: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800'
  };
  
  export const getDefaultImageBySubject = (subject: string): string => {
    return defaultSubjectImages[subject as keyof typeof defaultSubjectImages] || defaultSubjectImages.default;
  };