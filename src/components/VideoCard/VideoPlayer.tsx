'use client';

// components/VideoCard/VideoPlayer.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Video } from '@/types/types';

interface VideoPlayerProps {
  video: Video;
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  video, 
  autoPlay = false, 
  controls = true,
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVertical, setIsVertical] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;

    const handleLoadedMetadata = () => {
      const { videoWidth, videoHeight } = videoElement;
      
      // Determina se o vídeo é vertical (altura > largura)
      setIsVertical(videoHeight > videoWidth);
      setIsLoading(false);
    };

    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    return () => {
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [video.videoUrl]);

  return (
    <div className={`flex justify-center items-center ${className}`}>
      {isLoading && (
        <div className="bg-gray-800 w-full h-64 flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Carregando vídeo...</div>
        </div>
      )}
      
      <div className={`${isLoading ? 'hidden' : 'block'} ${
        isVertical ? 'max-h-screen max-w-md' : 'w-full max-w-4xl'
      }`}>
        <video
          ref={videoRef}
          className={`w-full ${isVertical ? 'h-screen' : ''}`}
          autoPlay={autoPlay}
          controls={controls}
          playsInline
          muted={autoPlay}
          loop={autoPlay}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
};