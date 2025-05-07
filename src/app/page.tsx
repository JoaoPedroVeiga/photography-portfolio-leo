import PhotoGallery from "@/components/photoGallery";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fotógrafo - Portfólio</title>
        <meta name="description" content="Portfólio de fotografia profissional" />
      </Head>
      
      {/* Seu header já existente viria aqui */}
      
      <main className="min-h-screen bg-black">
        <PhotoGallery />
      </main>
    </>
  )
}