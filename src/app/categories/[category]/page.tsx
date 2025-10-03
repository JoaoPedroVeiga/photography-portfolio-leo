import type { Metadata } from 'next';
import PhotoGrid from '@/components/PhotoGrid';
import { categories, getPhotosByCategory } from '@/data/categories';

type ParamsType = {
  category: string;
};

export async function generateStaticParams(): Promise<ParamsType[]> {
  return categories.map((category) => ({
    category: category.id,
  }));
}

export const metadata: Metadata = {
  title: 'Photos',
};

export default function CategoryPage({ params }: { params: ParamsType }) {
  const categoryId = decodeURIComponent(params.category);
  const currentCategory = categories.find(cat => cat.id === categoryId);
  const photos = getPhotosByCategory(categoryId);

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Categoria não encontrada: {categoryId}    
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl text-center md:pl-8 md:text-left text-4xl font-bold font-louis mb-12">{currentCategory.name}</h1>
        <PhotoGrid photos={photos} />
      </main>
    </div>
  );
}