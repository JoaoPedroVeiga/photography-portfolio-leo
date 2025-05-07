import PhotoCard from "../photoCard";
import { Photo } from "../photoCard/types";

const photos: Photo[] = [
    {
      id: 1,
      imageUrl: '/images/photo1.jpg', // Substitua pelo caminho real da sua imagem
      title: 'Caminho da Serenidade',
      description: 'Paisagem capturada ao amanhecer nas montanhas',
      link: '/portfolio/1'
    },
    {
      id: 2,
      imageUrl: '/images/photo2.jpg',
      title: 'Retrato Urbano',
      description: 'Expressões autênticas na vida da cidade',
      link: '/portfolio/2'
    },
    {
      id: 3,
      imageUrl: '/images/photo3.jpg',
      title: 'Natureza Viva',
      description: 'Detalhes da flora em macrofotografia',
      link: '/portfolio/3'
    },
    // Adicione mais fotos conforme necessário
  ];
  
  export default function PhotoGallery() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
  }