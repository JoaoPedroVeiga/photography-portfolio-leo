// src/components/PhotoGrid/index.tsx
"use client";

import React, { useState } from 'react';
import { Photo } from '@/types/types';
import PhotoGridView from './PhotoGridView';

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  const navigatePhotos = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % photos.length;
    } else {
      newIndex = (currentIndex - 1 + photos.length) % photos.length;
    }
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <PhotoGridView 
      photos={photos}
      selectedPhoto={selectedPhoto}
      onPhotoClick={openModal}
      onCloseModal={closeModal}
      onNavigatePhotos={navigatePhotos}
    />
  );
};

export default PhotoGrid;