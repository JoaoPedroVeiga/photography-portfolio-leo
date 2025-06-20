// app/videos/[id]/page.tsx
import React from 'react';
import { getVideoById, videoCategories } from '@/data/videos';
import Link from 'next/link';
import { VideoPlayer } from '@/components/VideoCard/VideoPlayer';

export default function VideoPage({ params }: { params: { id: string } }) {
  const video = getVideoById(params.id);
  
  if (!video) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vídeo não encontrado</h1>
          <Link 
            href="/videos" 
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
          >
            Back to Videos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <VideoPlayer 
              video={video} 
              autoPlay 
              controls 
              className="rounded-lg overflow-hidden"
            />
          </div>
          
          {/* Restante do seu código permanece o mesmo */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold font-boska mb-2">{video.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
              {video.category && (
                <span className="bg-gray-800 px-3 py-1 rounded-full capitalize">
                  {videoCategories.find(c => c.id === video.category)?.name}
                </span>
              )}
            </div>
            
            {video.description && (
              <p className="text-gray-300 mb-4">{video.description}</p>
            )}
          </div>
          
          <div className="flex justify-between items-center border-t border-gray-800 pt-6">
            <Link 
              href="/videos" 
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
            >
              Back to Videos
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}