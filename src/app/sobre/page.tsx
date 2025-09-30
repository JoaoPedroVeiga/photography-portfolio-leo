import { Metadata } from "next";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import Image from "next/image"; // Importe o componente Image

export const metadata: Metadata = {
  title: "Sobre o Fotógrafo",
  description: "Conheça mais sobre o fotógrafo e seu trabalho",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-6 py-16 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl tracking-wider mb-12 text-left md:text-left border-b border-white pb-4 animate-fade-in text-gray-100 px-6 text-center md:text-left font-boska font-bold">
            ABOUT
          </h1>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 space-y-12">
              <div className="animate-fade-in delay-100">
                <div className="rounded-lg overflow-hidden w-80 h-80 mx-auto relative">
                  <Image
                    src="/images/preto/preto-09.jpg"
                    alt="Fotógrafo trabalhando"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="md:w-2/3 space-y-8 text-white">
              <div className="p-6 border-l-2 border-white hover:border-gray-400 transition-all duration-300 animate-fade-in delay-300">
                <p className="text-lg leading-relaxed font-light tracking-wide">
                  Olá, eu sou um fotógrafo apaixonado por capturar momentos
                  únicos e transformá-los em memórias eternas.
                </p>
              </div>

              <div className="p-6 border-l-2 border-white hover:border-gray-400 transition-all duration-300 animate-fade-in delay-400">
                <p className="text-lg leading-relaxed font-light tracking-wide">
                  Com mais de 10 anos de experiência no mercado, meu trabalho se
                  concentra em retratar a essência de cada pessoa, lugar ou
                  evento com sensibilidade e técnica apurada.
                </p>
              </div>

              <div className="p-6 border-l-2 border-white hover:border-gray-400 transition-all duration-300 animate-fade-in delay-500">
                <p className="text-lg leading-relaxed font-light tracking-wide">
                  Minha abordagem combina o olhar artístico com a precisão
                  técnica, resultando em imagens que contam histórias e evocam
                  emoções genuínas.
                </p>
              </div>
            </div>
          </div>

          {/* Foto centralizada no meio da tela */}
          <div className="w-full flex justify-center my-10 animate-fade-in delay-600">
            <div className="w-full md:w-96 max-w-2xl relative aspect-[4/3]">
              <Image
                src="/images/sobre/Screen Shot 2022-01-05 at 16.35.37.png"
                alt="Fotógrafo em ação"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Área de Contato - Simplificada */}
          <section className="mt-20 animate-fade-in delay-700">
            <h2 className="text-3xl tracking-wider mb-8 text-center md:text-left border-b border-white pb-4 text-gray-100 font-boska font-bold">
              CONTACT
            </h2>

            <div className="text-white">
              <div className="p-6 border-l-2 border-white hover:border-gray-400 transition-all duration-300">
                <h3 className="text-xl font-medium mb-6">Social Media</h3>
                <div className="flex flex-col space-y-6">
                  <a 
                    href="https://www.instagram.com/leoveigamartins/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:text-gray-400 transition-colors"
                  >
                    <FiInstagram className="text-2xl" />
                    <span>@leoveigamartins</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/leoveiga/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:text-gray-400 transition-colors"
                  >
                    <FiLinkedin className="text-2xl" />
                    <span>linkedin.com/in/leoveiga/</span>
                  </a>
                  
                  <a 
                    href="mailto:contatoleoveiga@gmail.com" 
                    className="flex items-center space-x-4 hover:text-gray-400 transition-colors"
                  >
                    <FiMail className="text-2xl" />
                    <span>contatoleoveiga@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}