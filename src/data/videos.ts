import { Video } from '@/types/types';

export const videos: Video[] = [
  {
    id: 'video-1',
    title: 'Above 90 – Beer & Build with Modular',
    videoUrl: 'videos/MODULAR BREAKFAST.mp4',
    thumbnailUrl: '/images/fotos-videos/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.jpg',
    category: 'above',
    description: 'Another Beer & Build at Above 90, this time hosted by Modular Lighting. The event showcased some of their latest releases and brought together professionals for a creative and relaxed experience.',
    duration: '00:37',
    date: '2023-05-15',
  },
    {
    id: 'video-2',
    title: 'Basketball at Garden Park',
    videoUrl: 'videos/GARDEN PARK FINAL.mp4',
    thumbnailUrl: '/images/fotos-videos/pexels-pixabay-358042.jpg',
    category: 'Basket',
    description: 'The For the Game crew and friends invited me to capture the energy of their basketball event at Garden Park in Vancouver. It was a day filled with music, barbecue, a DJ, friends, and families — pure positive vibes.',
    duration: '01:13',
    date: '2025-08-22',
  },
   {
    id: 'video-3',
    title: 'Above 90 – Beer & Build with RBW',
    videoUrl: 'videos/Above 90 - Beer&Build RBW.mp4',
    thumbnailUrl: '/images/fotos-videos/pexels-szaboviktor-3220994.jpg',
    category: 'above',
    description: ' An amazing afternoon with RBW, where designers and architects got a hands-on look at how to assemble their lighting products in a creative and relaxed setting',
    duration: '01:03',
    date: '2025-08-13',
  },
  {
    id: 'video-4',
    title: 'Above 90 - Interior Design Show',
    videoUrl: 'videos/Above - Interior Design Show.mp4',
    thumbnailUrl: '/images/fotos-videos/pexels-pixabay-266688.jpg',
    category: 'above',
    description: 'Glad to have documented Interior Design Show Vancouver 2025, capturing the energy of the fair and Above 90 Lighting’s presence at this important design gathering.',
    duration: '00:51',
    date: '2025-08-26',
  },
];

export const getVideosByCategory = (categoryId: string): Video[] => {
  return videos.filter(video => video.category === categoryId);
};

export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};

export const videoCategories = [
  { id: 'above', name: 'Above 90' },
  { id: 'Basket', name: 'Basket' },
];