import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobre o Fotógrafo - Leo Veiga',
  description: 'Conheça mais sobre o fotógrafo Leo Veiga e seu trabalho',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-white text-black p-4">Sobre Leo Veiga</h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden border-4 border-white w-64 h-64 mx-auto">
                {/* Substitua pela imagem real do fotógrafo */}
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-600">Foto do Fotógrafo</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-6">
              <div className="bg-white text-black p-6">
                <p className="text-lg leading-relaxed">
                  Olá, eu sou Leo Veiga, um fotógrafo apaixonado por capturar momentos únicos e transformá-los em memórias eternas.
                </p>
              </div>
              
              <div className="bg-white text-black p-6">
                <p className="text-lg leading-relaxed">
                  Com mais de 10 anos de experiência no mercado, meu trabalho se concentra em retratar a essência de cada pessoa, lugar ou evento com sensibilidade e técnica apurada.
                </p>
              </div>
              
              <div className="bg-white text-black p-6">
                <p className="text-lg leading-relaxed">
                  Minha abordagem combina o olhar artístico com a precisão técnica, resultando em imagens que contam histórias e evocam emoções genuínas.
                </p>
              </div>
              
              <div className="pt-4 bg-white text-black p-6">
                <h2 className="text-2xl font-semibold mb-4">Minha Filosofia</h2>
                <p className="text-lg leading-relaxed italic">
                  Acredito que a fotografia vai além de simples registros - é uma forma de arte que congela o tempo e preserva a beleza efêmera da vida.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-center bg-white text-black p-4">Experiência e Formação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white text-black p-6 border-2 border-gray-300">
                <h3 className="text-xl font-medium mb-3">Formação</h3>
                <ul className="space-y-2">
                  <li>Bacharelado em Fotografia - Escola de Artes Visuais</li>
                  <li>Curso Avançado de Iluminação - Instituto Internacional de Fotografia</li>
                  <li>Workshop de Fotografia de Retrato - Masterclass Fotográfica</li>
                </ul>
              </div>
              
              <div className="bg-white text-black p-6 border-2 border-gray-300">
                <h3 className="text-xl font-medium mb-3">Experiência</h3>
                <ul className="space-y-2">
                  <li>Fotógrafo freelancer - 10+ anos</li>
                  <li>Fotógrafo oficial do Festival de Arte Contemporânea</li>
                  <li>Exposições individuais em 3 países</li>
                  <li>Colaborações com marcas internacionais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}