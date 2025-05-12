import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';




import Header from '@/components/header';
import Footer from '@/components/footer';
import PhotoGrid from '@/components/PhotoGrid';
import { categories, getPhotosByCategory } from '@/data/categories';

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  const currentCategory = categories.find(cat => cat.id === category);
  const photos = getPhotosByCategory(category as string);

  if (!currentCategory) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Categoria não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>{currentCategory.name} | Fotógrafo</title>
        <meta name="description" content={currentCategory.description} />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-12">{currentCategory.name}</h1>
        <p className="text-gray-400 mb-8 max-w-2xl">{currentCategory.description}</p>
        
        <PhotoGrid photos={photos} />
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;