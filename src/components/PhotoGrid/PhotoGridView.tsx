// src/components/PhotoGrid/PhotoGridView.tsx
import React from 'react';
import Image from 'next/image';
import { Photo } from '@/types/types';

interface PhotoGridViewProps {
  photos: Photo[];
  selectedPhoto: Photo | null;
  onPhotoClick: (photo: Photo, index: number) => void;
  onCloseModal: () => void;
  onNavigatePhotos: (direction: 'prev' | 'next') => void;
}

const PhotoGridView: React.FC<PhotoGridViewProps> = ({
  photos,
  selectedPhoto,
  onPhotoClick,
  onCloseModal,
  onNavigatePhotos,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="cursor-pointer group"
            onClick={() => onPhotoClick(photo, index)}
          >
            <div className="overflow-hidden rounded-lg transition-all duration-300 group-hover:opacity-90">
              <Image
                src={photo.imageUrl}
                alt={photo.title}
                width={600}
                height={600}
                className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            {photo.title && (
              <p className="text-white mt-2 text-sm">{photo.title}</p>
            )}
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <div className="relative max-h-screen">
              <button
                onClick={onCloseModal}
                className="absolute right-2 top-2 bg-transparent md:bg-gray-900/70 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:md:bg-gray-800/90 transition-all z-50"
                aria-label="Fechar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <button
                onClick={() => onNavigatePhotos('prev')}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-transparent md:bg-gray-900/50 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:md:bg-gray-800/70 transition-all z-50"
                aria-label="Anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => onNavigatePhotos('next')}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-transparent md:bg-gray-900/50 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:md:bg-gray-800/70 transition-all z-50"
                aria-label="Próximo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="flex justify-center items-center h-full">
                <Image
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[90vh] object-contain"
                  priority
                />
              </div>
            </div>
            
            {selectedPhoto.title && (
              <div className="text-white text-center mt-3 text-sm md:text-base">
                {selectedPhoto.title}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGridView;