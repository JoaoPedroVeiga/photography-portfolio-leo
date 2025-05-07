export interface Photo {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    link: string;
  }
  
  export interface PhotoCardProps {
    photo: Photo;
  }