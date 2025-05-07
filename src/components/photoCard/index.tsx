import Link from 'next/link';
import Image from 'next/image';
import { PhotoCardProps } from './types';

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Link href={photo.link} passHref>
      <div className="group block overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] bg-gray-100">
        {/* Container da imagem com aspect ratio 3:4 (comum para fotos verticais) */}
        <div className="relative w-full pt-[133.33%]"> {/* 4/3 = 1.3333 */}
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
        
        {/* Texto abaixo da foto */}
        <div className="bg-white p-4">
          <h3 className="text-lg font-semibold text-gray-800">{photo.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{photo.description}</p>
        </div>
      </div>
    </Link>
  );
}