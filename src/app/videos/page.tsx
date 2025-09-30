"use client";

import React, { useState } from "react";

import { videos, videoCategories } from "@/data/videos";
import { VideoCard } from "@/components/VideoCard/VideoCardClient.tsx";

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-boska mb-2">
                Videos
              </h1>
              <p className="text-gray-400">
                Documentaries, behind the scenes and tutorials
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid"
                    ? "bg-white text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
                aria-label="Visualização em grade"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list"
                    ? "bg-white text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
                aria-label="Visualização em lista"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-1 py-2 text-sm font-medium transition-colors relative ${
                activeCategory === "all"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Todos
              {activeCategory === "all" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
              )}
            </button>
            {videoCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-1 py-2 text-sm font-medium transition-colors relative ${
                  activeCategory === category.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {category.name}
                {activeCategory === category.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
                )}
              </button>
            ))}
          </div>

          {filteredVideos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">
                No videos found in this category.
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} layout="grid" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} layout="list" />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
