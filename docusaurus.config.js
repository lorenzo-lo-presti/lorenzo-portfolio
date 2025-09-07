// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lorenzo — Portfolio & Learning Log',
  tagline: 'Portfolio, Learning Log e Knowledge Base',
  url: 'https://lorenzo-lo-presti.github.io',
  baseUrl: '/lorenzo-portfolio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  favicon: 'img/favicon.ico',


  organizationName: 'lorenzo-lo-presti',
  projectName: 'lorenzo-portfolio', 

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Lorenzo — Portfolio & Learning Log',
      items: [
        { to: '/docs/intro', label: 'Portfolio', position: 'left' },
        { to: '/docs/knowledge/index', label: 'Knowledge Base', position: 'left' },
        { to: '/learning-log', label: 'Learning Log', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },
  },
};

module.exports = config;
