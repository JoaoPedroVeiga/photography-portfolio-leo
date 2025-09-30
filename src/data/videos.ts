import { Video } from '@/types/types';

export const videos: Video[] = [
  {
    id: 'video-1',
    title: 'Above 90 - Vibia breakfast',
    videoUrl: 'videos/MODULAR BREAKFAST.mp4',
    thumbnailUrl: '/images/fotos-videos/pexels-pixabay-355978.jpg',
    category: 'above',
    description: 'Above 90 Lighting hosted a breakfast with Vibia, showcasing some of their latest lighting designs recently launched in the market.',
    duration: '00:37',
    date: '2023-05-15',
  },
  {
    id: 'video-2',
    title: 'Bastidores - Sessão de Fotos',
    videoUrl: 'https://example.com/videos/sessao-fotos.mp4',
    thumbnailUrl: '/images/natureza/IMG_0916-natureza-01.jpg',
    category: 'bastidores',
    description: 'Making of da sessão fotográfica na praia',
    duration: '8:45',
    date: '2023-06-22',
    tags: ['bastidores', 'making-of', 'fotografia']
  }
];

export const getVideosByCategory = (categoryId: string): Video[] => {
  return videos.filter(video => video.category === categoryId);
};

export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};

export const videoCategories = [
  { id: 'above', name: 'Above 90' },
  { id: 'documentarios', name: 'Documentários' },
  { id: 'bastidores', name: 'Bastidores' }
];