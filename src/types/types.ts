
export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  photos?: Photo[];
}

export interface Photo {
  id: string;
  title: string;
  imageUrl: string;
  category: string; // Isso refere-se ao ID da categoria
  width: number;
  height: number;
  description?: string;
}