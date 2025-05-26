// em data/categories.ts
// em data/categories.ts
import { Category, Photo } from '../types/types';

export const categories: Category[] = [
  {
    id: 'preta-e-branca',
    name: 'Preta e branca',
    description: 'Expressões humanas capturadas com sensibilidade',
    imageUrl: '/images/preto/IMG_0562-preto-01.jpg',
    photos: [
      { id: 'preto-1', title: '', imageUrl: '/images/preto/IMG_0608-preto-02.jpg', category: 'preta-e-branca', width: 1024, height: 683 },
      { id: 'preto-2', title: '', imageUrl: '/images/preto/IMG_0562-preto-01.jpg', category: 'preta-e-branca', width: 1024, height: 683 },
      { id: 'preto-3', title: '', imageUrl: '/images/preto/IMG_0640-preto-03.jpg', category: 'preta-e-branca', width: 683, height: 1024 },
      { id: 'preto-4', title: '', imageUrl: '/images/preto/IMG_0640-preto-04.jpg', category: 'preta-e-branca', width: 683, height: 1024 },
      { id: 'preto-5', title: '', imageUrl: '/images/preto/IMG_0663-preto-05.jpg', category: 'preta-e-branca', width: 683, height: 1024 },
    ]
  },
  {
    id: 'natureza',
    name: 'Natureza',
    description: 'Cenários naturais que contam histórias',
    imageUrl: '/images/natureza/IMG_0916-natureza-01.jpg',
    photos: [
      { id: 'natureza-1', title: '', imageUrl: '/images/natureza/IMG_0916-natureza-01.jpg', category: 'natureza', width: 737, height: 1024 },
      { id: 'natureza-2', title: '', imageUrl: '/images/natureza/IMG_0885-natureza-02.jpg', category: 'natureza', width: 1024, height: 683 },
      { id: 'natureza-3', title: '', imageUrl: '/images/natureza/IMG_0869-natureza-03.jpg', category: 'natureza', width: 1024, height: 683 },
      { id: 'natureza-4', title: '', imageUrl: '/images/natureza/IMG_0825-natureza-04.jpg', category: 'natureza', width: 683, height: 1200 },
      { id: 'natureza-5', title: '', imageUrl: '/images/natureza/IMG_0729-natureza-05.jpg', category: 'natureza', width: 683, height: 1024 },
      { id: 'natureza-6', title: '', imageUrl: '/images/natureza/IMG_0708-natureza-07.jpg', category: 'natureza', width: 1024, height: 683 },
      { id: 'natureza-7', title: '', imageUrl: '/images/natureza/IMG_0563-natureza-06.jpg', category: 'natureza', width: 1024, height: 683 },
    ]
  },
  {
    id: 'cogumelo',
    name: 'Cogumelo',
    description: 'Cenários naturais que contam histórias',
    imageUrl: '/images/cogumelo/IMG_6877-cogumelo-12.png',
    photos: [
      { id: 'cogumelo-1', title: 'Cogumelo 01', imageUrl: '/images/cogumelo/IMG_2282-cogumelo-01.png', category: 'cogumelo', width: 1200, height: 800 },
      { id: 'cogumelo-2', title: 'Cogumelo 02', imageUrl: '/images/cogumelo/IMG_2504-cogumelo-02.jpg', category: 'cogumelo', width: 800, height: 1200 },
      { id: 'cogumelo-3', title: 'Cogumelo 03', imageUrl: '/images/cogumelo/IMG_3339-cogumelo-03.jpg', category: 'cogumelo', width: 1200, height: 800 },
      { id: 'cogumelo-4', title: 'Cogumelo 04', imageUrl: '/images/cogumelo/IMG_3340-cogumelo-04.jpg', category: 'cogumelo', width: 800, height: 1200 },
      { id: 'cogumelo-5', title: 'Cogumelo 05', imageUrl: '/images/cogumelo/IMG_3911-cogumelo-05.png', category: 'cogumelo', width: 1200, height: 800 },
      { id: 'cogumelo-6', title: 'Cogumelo 06', imageUrl: '/images/cogumelo/IMG_4187-cogumelo-06.png', category: 'cogumelo', width: 800, height: 1200 },
      { id: 'cogumelo-7', title: 'Cogumelo 07', imageUrl: '/images/cogumelo/IMG_4208-cogumelo-07.png', category: 'cogumelo', width: 1200, height: 800 },
      { id: 'cogumelo-8', title: 'Cogumelo 08', imageUrl: '/images/cogumelo/IMG_5623-cogumelo-08.png', category: 'cogumelo', width: 800, height: 1200 },
      { id: 'cogumelo-9', title: 'Cogumelo 09', imageUrl: '/images/cogumelo/IMG_6096-cogumelo-09.jpg', category: 'cogumelo', width: 1200, height: 800 },
      { id: 'cogumelo-10', title: 'Cogumelo 10', imageUrl: '/images/cogumelo/IMG_6097-cogumelo-10.jpg', category: 'cogumelo', width: 800, height: 1200 },
      { id: 'cogumelo-11', title: 'Cogumelo 11', imageUrl: '/images/cogumelo/IMG_6101-cogumelo-11.jpg', category: 'cogumelo', width: 1200, height: 800 },
      { id: 'cogumelo-12', title: 'Cogumelo 12', imageUrl: '/images/cogumelo/IMG_6877-cogumelo-12.png', category: 'cogumelo', width: 800, height: 1200 }
    ]
  },
  {
    id: 'filtros',
    name: 'Filtros',
    description: 'Cenários naturais que contam histórias',
    imageUrl: '/images/filtros/img131-filtros-01.jpg',
    photos: [
      { id: 'filtros-1', title: 'Filtros 01', imageUrl: '/images/filtros/img131-filtros-01.jpg', category: 'filtros', width: 1200, height: 800 },
      { id: 'filtros-2', title: 'Filtros 02', imageUrl: '/images/filtros/img133-filtros-02.jpg', category: 'filtros', width: 800, height: 1200 },
      { id: 'filtros-3', title: 'Filtros 03', imageUrl: '/images/filtros/img135-filtros-03.jpg', category: 'filtros', width: 1200, height: 800 },
      { id: 'filtros-4', title: 'Filtros 04', imageUrl: '/images/filtros/img136-filtros-04.jpg', category: 'filtros', width: 800, height: 1200 }
    ]
  },
  {
    id: 'tofino',
    name: 'Tofino',
    description: 'Cenários naturais que contam histórias',
    imageUrl: '/images/tofino/img110-tofino-junho-2023.jpg',
    photos: [
      { id: 'tofino-1', title: 'Tofino 01', imageUrl: '/images/tofino/img110-tofino-junho-2023.jpg', category: 'tofino', width: 1200, height: 800 },
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

