// src/components/CategoryCard/index.tsx
export { CategoryCardClient as default } from './CategoryCardClient';

interface CategoryCardProps {
  featured?: boolean;
  children?: React.ReactNode;
}

export const CategoryCard = ({ featured = false, children }: CategoryCardProps) => {
  return (
    <div className={`relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${featured ? 'ring-2 ring-amber-400' : ''}`}>
      <div className="overflow-hidden relative aspect-square md:h-32 md:aspect-auto sm:h-40 md:h-48 lg:h-56 xl:h-64">
        {featured && (
          <div className="absolute top-2 right-2 bg-amber-400 text-black px-2 py-0.5 rounded-full text-xs font-bold z-30">
            Destaque
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
