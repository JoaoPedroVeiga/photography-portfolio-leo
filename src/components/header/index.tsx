import Link from "next/link";
import HeaderClient from "./HeaderClient";
import { photoCategories, videoCategories } from "@/data/navData";


const Header = () => {
  return (
    <header className="bg-black shadow-md pt-6 py-4 px-6 flex items-center relative">
      {/* Logo/Nome do Fotógrafo */}
      <Link
        href="/"
        className="font-bold font-boska text-4xl text-gray-100 hover:text-white transition-colors duration-300 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
      >
        <span className="opacity-80 hover:opacity-100 transition-opacity">Leo Veiga</span>
      </Link>

      {/* Renderiza a parte client-side */}
      <HeaderClient photoCategories={photoCategories} videoCategories={videoCategories} />
    </header>
  );
};

export default Header;