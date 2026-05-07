/**
 * Configuración personalizada para next-sitemap con rutas multilenguaje.
 * Las rutas dinámicas (status/[id], download/[id]) se excluyen del sitemap
 * y se bloquean en robots.txt para cumplir con las políticas de AdSense
 * (no indexar pantallas sin contenido del editor).
 */
const locales = ["es", "en", "hi", "ar"];

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mcworldcompressor.vercel.app";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ["/*/status/*", "/*/download/*"],
  robotsTxtOptions: {
    transformRobotsTxt: async (_, robotsTxt) => {
      const hostUrl = siteUrl.replace(/^https?:\/\//, "");
      const sitemapUrl = `https://${hostUrl}/sitemap.xml`;
      return `# *\nUser-agent: *\nAllow: /\nDisallow: /*/status/\nDisallow: /*/download/\n\n# Sitemaps\nSitemap: ${sitemapUrl}`;
    },
  },
  additionalPaths: async (config) => {
    const paths = [];
    locales.forEach((locale) => {
      paths.push({ loc: `/${locale}` });
      paths.push({ loc: `/${locale}/upload` });
      paths.push({ loc: `/${locale}/about` });
      paths.push({ loc: `/${locale}/guide` });
      paths.push({ loc: `/${locale}/privacy` });
      paths.push({ loc: `/${locale}/terms` });
    });
    return paths;
  },
};
