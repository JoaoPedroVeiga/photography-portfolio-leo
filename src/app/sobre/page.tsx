import { Metadata } from "next";
import { FiInstagram, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-6 py-16 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Seção About */}
          <h1 className="text-4xl tracking-wider mb-12 text-center md:text-left border-b border-white pb-4 animate-fade-in text-gray-100 px-6 font-louis font-bold">
            ABOUT
          </h1>

          <section className="px-6 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-white">
                  Leonardo Veiga is a Brazilian filmmaker and photographer based
                  in Vancouver.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  He has worked on music videos, events, documentaries, and
                  branded content — always aiming to combine storytelling with
                  strong visuals.
                </p>
                <p className="text-lg leading-relaxed text-white">
                  Leonardo handles shooting, editing, and post-production,
                  bringing projects from start to finish with a simple and
                  effective approach.
                </p>
              </div>

              <div className="relative h-96 w-full">
                <Image
                  alt="Fotógrafo em ação"
                  src="/images/sobre/Screen Shot 2022-01-05 at 16.35.37.png"
                  fill
                  className="object-scale-down rounded-lg"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Seção Contact */}
          <section className="mt-20 animate-fade-in delay-700">
            <h2 className="text-3xl tracking-wider mb-8 text-center md:text-left border-b border-white pb-4 text-gray-100 font-louis font-bold">
              CONTACT
            </h2>

            <div className="text-white">
              <div className="p-6 transition-all duration-300">
                <div className="flex flex-col space-y-6">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/leoveigamartins/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:text-gray-400 transition-colors"
                  >
                    <FiInstagram className="text-2xl" />
                    <span>@leoveigamartins</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/leoveiga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:text-gray-400 transition-colors"
                  >
                    <FiLinkedin className="text-2xl" />
                    <span>linkedin.com/in/leoveiga/</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@leolaraporai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:text-gray-400 transition-colors"
                  >
                    <FiYoutube className="text-2xl" />
                    <span>youtube.com/@LeoELaraPorAí</span>
                  </a>

                  {/* Email */}
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
