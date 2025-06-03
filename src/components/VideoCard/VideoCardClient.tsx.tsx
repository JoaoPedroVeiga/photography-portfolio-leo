'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Video } from '@/types/types';
import { videoCategories } from '@/data/videos';

interface VideoCardProps {
  video: Video;
  layout?: 'grid' | 'list';
}

export const VideoCard = ({ video, layout = 'grid' }: VideoCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (layout === 'list') {
    return (
      <Link href={`/videos/${video.id}`} passHref>
        <div className="flex flex-col sm:flex-row gap-4 group rounded-lg overflow-hidden hover:bg-gray-900/50 transition-all duration-300 cursor-pointer p-2">
          <div className="relative aspect-video sm:w-64 flex-shrink-0 rounded-lg overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg z-10" />
            )}
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              width={640}
              height={360}
              className="w-full h-full object-cover"
              onLoadingComplete={() => setIsLoading(false)}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                <PlayIcon />
              </div>
            </div>
            {video.duration && (
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
              {video.title}
            </h3>
            {video.date && (
              <p className="text-gray-400 text-sm mb-2">{video.date}</p>
            )}
            {video.description && (
              <p className="text-gray-300 text-sm line-clamp-2">
                {video.description}
              </p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/videos/${video.id}`} passHref>
      <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer bg-gray-900">
        <div className="relative aspect-video overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl z-10" />
          )}
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            onLoadingComplete={() => setIsLoading(false)}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayIcon />
            </div>
          </div>
          
          {video.duration && (
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
              {video.duration}
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="p-4">
          <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          <div className="flex justify-between text-gray-400 text-sm">
            {video.category && (
              <span className="capitalize">
                {videoCategories.find(c => c.id === video.category)?.name}
              </span>
            )}
            {video.date && <span>{video.date}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);