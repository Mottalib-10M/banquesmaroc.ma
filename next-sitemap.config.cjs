/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://banquesmaroc.ma',
  generateRobotsTxt: true,
  trailingSlash: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/*?*'] },
    ],
  },
};
