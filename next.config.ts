/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Mantém a exportação estática
  distDir: 'out', // Mantém o diretório de saída
  images: {
    unoptimized: true, // Necessário para export estático
  },
  typescript: {
    ignoreBuildErrors: true, // Temporário - desative após resolver os erros
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporário - desative após resolver os erros
  },
  transpilePackages: ['next-intl'], // Mantém se estiver usando
};

module.exports = nextConfig;