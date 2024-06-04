/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/quem-somos': { page: '/quem-somos' },
      '/onde-estamos': { page: '/onde-estamos' },
      '/ofertas': { page: '/ofertas' },
      // Adicione outras rotas conforme necessário
    };
  },
};

module.exports = nextConfig;