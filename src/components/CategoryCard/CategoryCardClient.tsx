'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryCard } from '.';
import { Category } from '@/types/types';

interface CategoryCardClientProps {
  category: Category;
  featured?: boolean;
}

export const CategoryCardClient = ({ category, featured = false }: CategoryCardClientProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/categories/${category.id.replace(/\s+/g, '-').toLowerCase()}`} passHref>
      <CategoryCard category={category} featured={featured}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl z-10" />
        )}
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          onLoadingComplete={() => setIsLoading(false)}
          priority={featured}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 pb-6 text-center z-20">
          <h3 className="text-white font-bold text-lg sm:text-xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {category.name}
          </h3>
          <p className="text-gray-200 text-xs sm:text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {category.description}
          </p>
          <button className="mt-3 px-3 py-1 bg-white text-black rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 hover:bg-gray-100 shadow-md">
            Ver Galeria
          </button>
        </div>
      </CategoryCard>
    </Link>
  );
};