import Link from "next/link";
import HeaderClient from "./HeaderClient";
import { photoCategories } from "@/data/navData";
import { videoCategories } from "@/data/videos";

const Header = () => {
  return (
    <header className="bg-black shadow-md pt-6 py-4 px-6 flex items-center relative">
      {/* Logo/Nome do Fotógrafo */}
      <Link
        href="/"
        className="font-bold font-boska text-4xl text-white md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
      >
        Leo Veiga
      </Link>

      {/* Renderiza a parte client-side */}
      <HeaderClient
        photoCategories={photoCategories}
        videoCategories={videoCategories}
      />
    </header>
  );
};

export default Header;
