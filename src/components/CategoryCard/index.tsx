import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/types/types';


interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link href={`/categories/${category.id}`} passHref>
      <div className="group cursor-pointer">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-white font-semibold text-lg">{category.name}</h3>
          <p className="text-gray-400 text-sm mt-1">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

