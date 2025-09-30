import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Leo Veiga',
  description: 'Professional Brazilian photographer based in Vancouver, BC. Specializing in event photography, portraits, and family sessions. I capture unique moments with sensitivity and technical expertise. Services available in English and Portuguese.',
  keywords: 'photographer, Vancouver, Brazilian photographer, fotógrafo, wedding photography, portrait photography, family, events, wedding photographer Vancouver',
  openGraph: {
    title: 'Brazilian Photographer in Vancouver | Leo Veiga Photography',
    description: 'Professional photography portfolio in Vancouver. Weddings, portraits, and events.',
    type: 'website',
    locale: 'en_CA',
    // images: ['/url-for-featured-image.jpg'], // ESSENTIAL for social media
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brazilian Photographer in Vancouver | Leo Veiga Photography',
    description: 'Professional photography portfolio in Vancouver.',
    // images: ['/url-for-featured-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto w-full max-w-[70%] sm:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 6).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> d0f1fcb03f8ef425dbfdb76a90d8aea856fd51bf
