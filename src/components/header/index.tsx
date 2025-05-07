"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Verifica o tamanho da tela e atualiza o estado
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px é o breakpoint comum para tablet/desktop
    };

    // Executa uma vez quando o componente monta
    handleResize();

    // Adiciona listener para redimensionamento
    window.addEventListener('resize', handleResize);

    // Remove listener quando o componente desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-black shadow-md py-4 px-6 flex justify-between items-center">
    {/* Logo/Nome do Fotógrafo */}
    <Link href="/" className="text-2xl font-bold text-gray-100">
      Leo Veiga
    </Link>
  
    {/* Menu Desktop (aparece apenas em telas maiores) */}
    {!isMobile && (
      <nav className=" hidden md:flex space-x-6">
        <Link href="/sobre" className="text-gray-100 hover:text-gray-400">
          Sobre
        </Link>
        <Link href="/portfolio" className="text-gray-100 hover:text-gray-400">
          Portfólio
        </Link>
        <Link href="/contato" className="text-gray-100 hover:text-gray-400">
          Contato
        </Link>
      </nav>
    )}
  
    {/* Menu Hamburguer (aparece apenas em mobile) */}
    {isMobile && (
      <>
        {/* Botão Hamburguer */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-400 focus:outline-none"
            aria-label="Abrir menu"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
  
        {/* Menu Mobile - Overlay e Conteúdo */}
        <div className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Overlay escuro */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Conteúdo do Menu */}
          <div className={`fixed inset-y-0 left-0 z-50 w-full max-w-full bg-black shadow-xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
                <Link
                  href="/sobre"
                  className="text-gray-100 hover:text-gray-900 py-3 px-4 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre
                </Link>
                <Link
                  href="/portfolio"
                  className="text-gray-100 hover:text-gray-900 py-3 px-4 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Portfólio
                </Link>
                <Link
                  href="/contato"
                  className="text-gray-100 hover:text-gray-900 py-3 px-4 rounded hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </>
    )}
  </header>
  );
};

export default Header;