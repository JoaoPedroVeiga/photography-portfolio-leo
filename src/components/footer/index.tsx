import React from "react";
import { FiInstagram, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg md:text-xl font-light text-center mb-4">
          Leo Veiga
        </h3>

        <div className="flex justify-center space-x-5 md:space-x-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/leoveigamartins/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 transition-colors hover:text-pink-500"
          >
            <FiInstagram className="text-3xl md:text-3xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/leoveiga/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 transition-colors hover:text-blue-600"
          >
            <FiLinkedin className="text-2xl md:text-3xl" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@leolaraporai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 transition-colors hover:text-red-600"
          >
            <FiYoutube className="text-3xl md:text-3xl" />
          </a>

          {/* Email */}
          <a
            href="mailto:contatoleoveiga@gmail.com"
            className="flex items-center space-x-4 transition-colors hover:text-red-600"
          >
            <FiMail className="text-3xl md:text-3xl" />
          </a>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          © 2025 Leo Veiga Photography. All rights reserved.
        </p>

        <p className="text-center text-xs text-gray-400 mt-6">
          Website developed by <a
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-braga-veiga-40b3a0265/"
            className="text-gray-300 hover:text-white underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >João Pedro Veiga.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
