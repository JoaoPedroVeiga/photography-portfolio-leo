// src/components/VideoPlayer/VideoPlayer.tsx
'use client';

import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  thumbnailUrl?: string;
  width: number;
  height: number;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export const VideoPlayer = ({
  src,
  thumbnailUrl,
  width,
  height,
  className = '',
  autoPlay = false,
  muted = true,
  loop = true,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showThumbnail, setShowThumbnail] = useState(!!thumbnailUrl && !autoPlay);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowThumbnail(false);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {showThumbnail && thumbnailUrl && (
        <div className="absolute inset-0 cursor-pointer" onClick={togglePlay}>
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-black ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        src={src}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        onClick={togglePlay}
      />
      
      {!isPlaying && !showThumbnail && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/10 hover:bg-black/20 transition-colors"
        >
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black ml-1"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};