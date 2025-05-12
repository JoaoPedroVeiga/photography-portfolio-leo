import { Category, Photo } from '../types/types';

export const categories: Category[] = [
  {
    id: 'Preta e branca',
    name: 'Preta e branca',
    description: 'Expressões humanas capturadas com sensibilidade',
    imageUrl: '/images/preta.jpg',
    photos: [
      { id: '1', title: 'Preta e branca-01', imageUrl: '/images/preta.jpg', category: 'Preta-e-branca' },
      { id: '2', title: 'Preta e branca-02', imageUrl: '/images/preta-2.jpg', category: 'Preta-e-branca' },
      // Adicione mais fotos conforme necessário
    ]
  },
  {
    id: 'naturesa',
    name: 'naturesa',
    description: 'Cenários naturais que contam histórias',
    imageUrl: '/images/naturesa.jpg',
    photos: [
      { id: '3', title: 'Paisagem 1', imageUrl: '/images/paisagem1.jpg', category: 'paisagens' },
      { id: '4', title: 'Paisagem 2', imageUrl: '/images/paisagem2.jpg', category: 'paisagens' },
    ]
  },
   {
    id: 'cidade',
    name: 'cidade',
    description: 'Cenários naturais que contam histórias',
    imageUrl: '/images/cidade.jpg',
    photos: [
      { id: '3', title: 'Paisagem 1', imageUrl: '/images/paisagem1.jpg', category: 'cidade' },
      { id: '4', title: 'Paisagem 2', imageUrl: '/images/paisagem2.jpg', category: 'cidade' },
    ]
  },
  // Adicione mais categorias conforme necessário
];

export const getAllPhotos = (): Photo[] => {
  return categories.flatMap(category => category.photos || []);
};

export const getPhotosByCategory = (categoryId: string): Photo[] => {
  const category = categories.find(cat => cat.id === categoryId);
  return category?.photos || [];
};