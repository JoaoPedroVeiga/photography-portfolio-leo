
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import Head from "next/head";
import React from 'react';

// Dados mockados das categorias

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Fotógrafo - Portfólio</title>
        <meta name="description" content="Portfólio de fotografia profissional" />
      </Head>
      
      {/* Seu header já existente viria aqui / o header esta sendo posto aqui em baixa    <Header />    assim  */} 
      
     
     <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-12 text-center">Portfólio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
    </div>
    
  )
}

export default HomePage;