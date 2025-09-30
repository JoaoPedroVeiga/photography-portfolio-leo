"use client";


import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";


interface Category {
  name: string;
  href: string;
}

interface HeaderClientProps {
  photoCategories: Category[];
  videoCategories: Category[];
}
const HeaderClient = ({ photoCategories }: HeaderClientProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isPhotosMenuOpen, setIsPhotosMenuOpen] = useState(false);
  const photosMenuRef = useRef<HTMLDivElement>(null);

  // Função para fechar o menu de fotos
  const closePhotosMenu = useCallback(() => {
    setIsPhotosMenuOpen(false);
  }, []);

  // Verifica o tamanho da tela e atualiza o estado
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adiciona event listener para o scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isPhotosMenuOpen && !isMobile) {
        closePhotosMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPhotosMenuOpen, closePhotosMenu, isMobile]);

  // Fecha o menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (photosMenuRef.current && !photosMenuRef.current.contains(event.target as Node)) {
        closePhotosMenu();
      }
    };

    if (isPhotosMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPhotosMenuOpen, closePhotosMenu]);

  const togglePhotosMenu = () => {
    setIsPhotosMenuOpen(!isPhotosMenuOpen);
  };

  return (
    <>
      {/* Menu Desktop (aparece apenas em telas maiores) */}
      {!isMobile && (
        <nav className="ml-auto hidden md:flex space-x-6 items-center">
          {/* Dropdown Fotos e Vídeos */}
          <div className="relative" ref={photosMenuRef}>
            <button 
              onClick={togglePhotosMenu}
              className="text-gray-100 hover:text-white transition-colors duration-300 ease-in-out relative group flex items-center"
            >
              Photos
              <svg 
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${isPhotosMenuOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* Dropdown Menu */}
            {isPhotosMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-50 border border-gray-700">
                {photoCategories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="block px-4 py-2 text-gray-100 hover:bg-gray-800 hover:text-white transition-colors"
                    onClick={() => setIsPhotosMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/videos" 
            className="text-gray-100 hover:text-white transition-colors duration-300 ease-in-out relative group"
          >
            Videos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link 
            href="/sobre" 
            className="text-gray-100 hover:text-white transition-colors duration-300 ease-in-out relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      )}

      {/* Menu Hamburguer (aparece apenas em mobile) */}
      {isMobile && (
        <>
          {/* Botão Hamburguer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto text-white hover:text-gray-400 focus:outline-none md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu Mobile - Overlay e Conteúdo */}
          <div
            className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Overlay escuro */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-50" : "opacity-0"
              }`}
              onClick={() => setIsOpen(false)}
            />

            {/* Conteúdo do Menu */}
            <div
              className={`fixed inset-y-0 left-0 z-50 w-full max-w-full bg-black shadow-xl transform transition-transform duration-500 ease-in-out ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Cabeçalho com botão de fechar */}
              <div className="flex justify-end items-center p-4 ">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-400 focus:outline-none"
                  aria-label="Fechar menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Links do Menu */}
              <div className="p-4">
                <nav className="flex flex-col space-y-4">
                  {/* Dropdown Fotos Mobile */}
                  <div className="flex flex-col">
                    <button
                      onClick={togglePhotosMenu}
                      className="text-gray-100 hover:text-gray-900 py-3 px-4 rounded hover:bg-gray-100 transition-colors flex justify-between items-center"
                    >
                      <span>Photos</span>
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          isPhotosMenuOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Submenu */}
                    {isPhotosMenuOpen && (
                      <div className="ml-4 mt-2 flex flex-col space-y-2">
                        {photoCategories.map((category) => (
                          <Link
                            key={category.href}
                            href={category.href}
                            className="text-gray-100 hover:text-gray-900 py-2 px-6 rounded hover:bg-gray-100 transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setIsPhotosMenuOpen(false);
                            }}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/videos"
                    className="text-gray-100 hover:text-gray-900 py-3 px-4 rounded hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      setIsPhotosMenuOpen(false);
                    }}
                  >
                    Videos
                  </Link>

                  <Link
                    href="/sobre"
                    className="text-gray-100 hover:text-gray-900 py-3 px-4 rounded hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      setIsPhotosMenuOpen(false);
                    }}
                  >
                    About
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderClient;