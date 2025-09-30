import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título centralizado */}
        <h3 className="text-lg md:text-xl font-light text-center mb-4">
          Leo Veiga
        </h3>

        {/* Links sociais */}
        <div className="flex justify-center space-x-5 md:space-x-6">
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/leoveiga/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 text-gray-300 hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/leoveigamartins/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 text-gray-300 hover:text-pink-500"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 md:w-8 md:h-8" />
          </Link>

          {/* YouTube */}
          <Link
            href="https://www.youtube.com/@LeoLaraPorA%C3%AD"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 text-gray-300 hover:text-red-500"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6 md:w-8 md:h-8" />
          </Link>

          {/* Email */}
          <Link
            href="mailto:contato@leoveiga.com"
            className="transition-transform hover:scale-110 text-gray-300 hover:text-red-500"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 md:w-8 md:h-8" />
          </Link>
        </div>

        {/* Direitos autorais */}
        <p className="text-center text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Leo Veiga Photography. All rights
          reserved.
        </p>
        <p className="text-center text-xs text-gray-400 mt-6">
          Website developed by{" "}
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-braga-veiga-40b3a0265/"
            className="text-gray-300 hover:text-white underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            João Pedro Veiga
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;