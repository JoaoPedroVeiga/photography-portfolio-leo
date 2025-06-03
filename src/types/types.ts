
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

// Adicione isso ao seu arquivo de tipos
export interface Video {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: string;
  description?: string;
  duration?: string;
  date?: string;
  tags?: string[];
}