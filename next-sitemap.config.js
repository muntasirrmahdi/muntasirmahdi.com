/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://muntasirmahdi.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/studio/*", "/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://muntasirmahdi.com/server-sitemap.xml"],
  },
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/blog": 0.9,
      "/now": 0.7,
      "/contact": 0.5,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
