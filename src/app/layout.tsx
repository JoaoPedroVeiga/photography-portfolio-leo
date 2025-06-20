import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cor preta (#000000) para navegadores modernos (Chrome, Firefox, Edge) */}
        <meta name="theme-color" content="#000000" />
        
        {/* Safari / iOS */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Windows Phone (opcional, pois está em desuso) */}
        <meta name="msapplication-navbutton-color" content="#000000" />
      </head>
      <body className={"antialiased font-arvo"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}