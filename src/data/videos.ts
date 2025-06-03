import { Video } from '@/types/types';

export const videos: Video[] = [
  {
    id: 'video-1',
    title: 'Documentário Natureza',
    videoUrl: 'videos/MODULAR BREAKFAST.mp4',
    thumbnailUrl: '/images/video-thumbnails/natureza-thumb.jpg',
    category: 'documentarios',
    description: 'Documentário sobre a vida selvagem com fotografia em 4K',
    duration: '00:37',
    date: '2023-05-15',
    tags: ['natureza', 'wildlife', 'documentário']
  },
  {
    id: 'video-2',
    title: 'Bastidores - Sessão de Fotos',
    videoUrl: 'https://example.com/videos/sessao-fotos.mp4',
    thumbnailUrl: '/images/video-thumbnails/sessao-thumb.jpg',
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
  { id: 'documentarios', name: 'Documentários' },
  { id: 'bastidores', name: 'Bastidores' },
  { id: 'tutoriais', name: 'Tutoriais' }
];