import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Fotógrafo - Portfólio',
  description: 'Portfólio de fotografia profissional',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto w-full max-w-[70%] sm:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
}
