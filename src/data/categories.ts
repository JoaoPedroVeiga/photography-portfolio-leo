// em data/categories.ts
import { Category, Photo } from '../types/types';

export const categories: Category[] = [
  {
    id: 'bw',
    name: 'B&W',
    description: '',
    imageUrl: '/images/preto/IMG_0562-preto-01.jpg',
    photos: [
      { id: 'preto-2', title: '', imageUrl: '/images/preto/IMG_0562-preto-01.jpg', category: 'bw', width: 1024, height: 683 },
      { id: 'preto-5', title: '', imageUrl: '/images/preto/IMG_0663-preto-05.jpg', category: 'bw', width: 683, height: 1024 },
      { id: 'preto-7', title: '', imageUrl: '/images/preto/preto-07.jpg', category: 'bw', width: 683, height: 1024 },
      { id: 'preto-3', title: '', imageUrl: '/images/preto/IMG_0640-preto-03.jpg', category: 'bw', width: 683, height: 1024 },
      { id: 'preto-6', title: '', imageUrl: '/images/preto/preto-06.jpg', category: 'bw', width: 683, height: 1024 },
      { id: 'preto-9', title: '', imageUrl: '/images/preto/preto-09.jpg', category: 'bw', width: 683, height: 1024 },
      { id: 'preto-4', title: '', imageUrl: '/images/preto/IMG_0640-preto-04.jpg', category: 'bw', width: 683, height: 1024 },
      { id: 'preto-10', title: '', imageUrl: '/images/preto/preto-10.jpg', category: 'bw', width: 683, height: 1024 },
      { id: 'preto-8', title: '', imageUrl: '/images/preto/preto-08.jpg', category: 'bw', width: 683, height: 1024 },
      { id: 'preto-1', title: '', imageUrl: '/images/preto/IMG_0608-preto-02.jpg', category: 'bw', width: 1024, height: 683 },
    ]
  },
  {
    id: 'nature',
    name: 'Nature',
    description: '',
    imageUrl: '/images/natureza/IMG_0916-natureza-01.jpg',
    photos: [
      { id: 'natureza-1', title: '', imageUrl: '/images/natureza/IMG_0916-natureza-01.jpg', category: 'nature', width: 737, height: 1024 },
      { id: 'natureza-8', title: '', imageUrl: '/images/natureza/IMG_1271-natureza-08.jpg', category: 'nature', width: 1024, height: 683 },
      { id: 'natureza-7', title: '', imageUrl: '/images/natureza/IMG_0563-natureza-06.jpg', category: 'nature', width: 1024, height: 683 },
      { id: 'natureza-9', title: '', imageUrl: '/images/natureza/DSC_0632-natureza-09.jpg', category: 'nature', width: 1024, height: 683 },
      { id: 'natureza-5', title: '', imageUrl: '/images/natureza/IMG_0729-natureza-05.jpg', category: 'nature', width: 683, height: 1024 },
      { id: 'natureza-6', title: '', imageUrl: '/images/natureza/IMG_0708-natureza-07.jpg', category: 'nature', width: 1024, height: 683 },
      { id: 'natureza-4', title: '', imageUrl: '/images/natureza/IMG_0825-natureza-04.jpg', category: 'nature', width: 683, height: 1200 },
      { id: 'natureza-3', title: '', imageUrl: '/images/natureza/IMG_0869-natureza-03.jpg', category: 'nature', width: 1024, height: 683 },
      { id: 'natureza-2', title: '', imageUrl: '/images/natureza/IMG_0885-natureza-02.jpg', category: 'nature', width: 1024, height: 683 },
    ]
  },
  {
    id: 'mushrooms',
    name: 'Mushrooms',
    description: '',
    imageUrl: '/images/cogumelo/IMG_6877-cogumelo-12.png',
    photos: [
      { id: 'cogumelo-1', title: '', imageUrl: '/images/cogumelo/IMG_2282-cogumelo-01.png', category: 'mushrooms', width: 1200, height: 800 },
      { id: 'cogumelo-12', title: '', imageUrl: '/images/cogumelo/IMG_6877-cogumelo-12.png', category: 'mushrooms', width: 800, height: 1200 },
      { id: 'cogumelo-3', title: '', imageUrl: '/images/cogumelo/IMG_3339-cogumelo-03.jpg', category: 'mushrooms', width: 1200, height: 800 },
      { id: 'cogumelo-8', title: '', imageUrl: '/images/cogumelo/IMG_5623-cogumelo-08.png', category: 'mushrooms', width: 800, height: 1200 },
      { id: 'cogumelo-10', title: '', imageUrl: '/images/cogumelo/IMG_6097-cogumelo-10.jpg', category: 'mushrooms', width: 800, height: 1200 },
      { id: 'cogumelo-5', title: '', imageUrl: '/images/cogumelo/IMG_3911-cogumelo-05.png', category: 'mushrooms', width: 1200, height: 800 },
      { id: 'cogumelo-11', title: '', imageUrl: '/images/cogumelo/IMG_6101-cogumelo-11.jpg', category: 'mushrooms', width: 1200, height: 800 },
      { id: 'cogumelo-4', title: '', imageUrl: '/images/cogumelo/IMG_3340-cogumelo-04.jpg', category: 'mushrooms', width: 800, height: 1200 },
      { id: 'cogumelo-2', title: '', imageUrl: '/images/cogumelo/IMG_2504-cogumelo-02.jpg', category: 'mushrooms', width: 800, height: 1200 },
      { id: 'cogumelo-6', title: '', imageUrl: '/images/cogumelo/IMG_4187-cogumelo-06.png', category: 'mushrooms', width: 800, height: 1200 },
      { id: 'cogumelo-9', title: '', imageUrl: '/images/cogumelo/IMG_6096-cogumelo-09.jpg', category: 'mushrooms', width: 1200, height: 800 },
      { id: 'cogumelo-7', title: '', imageUrl: '/images/cogumelo/IMG_4208-cogumelo-07.png', category: 'mushrooms', width: 1200, height: 800 },
    ]
  },
  {
    id: 'analog',
    name: 'Analog',
    description: '',
    imageUrl: '/images/filtros/img131-filtros-01.jpg',
    photos: [
      { id: 'filtros-1', title: '', imageUrl: '/images/filtros/img131-filtros-01.jpg', category: 'analog', width: 1200, height: 800 },
      { id: 'filtros-2', title: '', imageUrl: '/images/filtros/img133-filtros-02.jpg', category: 'analog', width: 800, height: 1200 },
      { id: 'filtros-3', title: '', imageUrl: '/images/filtros/img135-filtros-03.jpg', category: 'analog', width: 1200, height: 800 },
      { id: 'filtros-4', title: '', imageUrl: '/images/filtros/img136-filtros-04.jpg', category: 'analog', width: 800, height: 1200 },
      { id: 'filtros-9', title: '', imageUrl: '/images/filtros/filtros-07.jpg', category: 'analog', width: 1200, height: 800 },
      { id: 'filtros-5', title: '', imageUrl: '/images/filtros/filtros-10.jpg', category: 'analog', width: 1200, height: 800 },
      { id: 'filtros-7', title: '', imageUrl: '/images/filtros/filtros-08.jpg', category: 'analog', width: 1200, height: 800 },
      { id: 'filtros-8', title: '', imageUrl: '/images/filtros/filtros-06.jpg', category: 'analog', width: 1200, height: 800 },
      { id: 'filtros-10', title: '', imageUrl: '/images/filtros/filtros-09.jpg', category: 'analog', width: 1200, height: 800 },
      { id: 'filtros-6', title: '', imageUrl: '/images/filtros/filtros-05.jpg', category: 'analog', width: 1200, height: 800 },
    ]
  },
  {
    id: 'urban',
    name: 'Urban',
    description: '',
    imageUrl: '/images/urbano/111eaaa-urbano-02.jpeg',
    photos: [
      { id: 'urbano-1', title: '', imageUrl: '/images/urbano/111eaaa-urbano-02.jpeg', category: 'urban', width: 1200, height: 800 },
      { id: 'urbano-2', title: '', imageUrl: '/images/urbano/IMG_6975-urbano-01.jpg', category: 'urban', width: 1200, height: 800 },
      { id: 'urbano-3', title: '', imageUrl: '/images/urbano/urbano-03.jpg', category: 'urban', width: 1200, height: 800 },
      { id: 'urbano-4', title: '', imageUrl: '/images/urbano/urbano-04.jpg', category: 'urban', width: 1200, height: 800 },
      { id: 'urbano-5', title: '', imageUrl: '/images/urbano/urbano-05.jpg', category: 'urban', width: 1200, height: 800 },
    ]
  },
  {
    id: 'night',
    name: 'Night',
    description: '',
    imageUrl: '/images/noturna/noturna-02.jpg',
    photos: [
      { id: 'noturna-1', title: '', imageUrl: '/images/noturna/noturna-01.jpg', category: 'night', width: 1200, height: 800 },
      { id: 'noturna-2', title: '', imageUrl: '/images/noturna/noturna-02.jpg', category: 'night', width: 1200, height: 800 },
      { id: 'noturna-3', title: '', imageUrl: '/images/noturna/noturna-03.jpg', category: 'night', width: 1200, height: 800 },
      { id: 'noturna-4', title: '', imageUrl: '/images/noturna/noturna-04.jpg', category: 'night', width: 1200, height: 800 },
    ]
  },
  {
    id: 'basket',
    name: 'Basket',
    description: '',
    imageUrl: '/images/basket/IMG_0986-basket-01.jpg',
    photos: [
      { id: 'basket-1', title: '', imageUrl: '/images/basket/IMG_0986-basket-01.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-2', title: '', imageUrl: '/images/basket/IMG_0988-basket-02.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-3', title: '', imageUrl: '/images/basket/IMG_1015-basket-03.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-4', title: '', imageUrl: '/images/basket/IMG_1184-basket-04.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-5', title: '', imageUrl: '/images/basket/IMG_1187-basket-05.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-6', title: '', imageUrl: '/images/basket/IMG_1198-basket-06.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-7', title: '', imageUrl: '/images/basket/IMG_1280-basket-07.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-8', title: '', imageUrl: '/images/basket/IMG_8140-basket-08.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-9', title: '', imageUrl: '/images/basket/IMG_8182-basket-09.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-10', title: '', imageUrl: '/images/basket/IMG_8212-basket-10.jpg', category: 'basket', width: 1200, height: 800 },
      { id: 'basket-11', title: '', imageUrl: '/images/basket/IMG_8246-basket-11.jpg', category: 'basket', width: 1200, height: 800 },
    ]
  },
];

export const getAllPhotos = (): Photo[] => {
  return categories.flatMap(category => category.photos || []);
};

export const getPhotosByCategory = (categoryId: string): Photo[] => {
  const category = categories.find(cat => cat.id === categoryId);
  return category?.photos || [];
};