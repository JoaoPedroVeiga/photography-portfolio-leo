import React from 'react';
import Image from 'next/image';
import { Photo } from '@/types/types';


interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {photos.map((photo) => (
        <div key={photo.id} className="group cursor-pointer">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              width={600}
              height={600}
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
            />
          </div>
          <p className="text-white mt-2 text-sm">{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;