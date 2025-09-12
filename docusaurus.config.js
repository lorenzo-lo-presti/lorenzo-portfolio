// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lorenzo • Portfolio & Learning Log',
  tagline: 'Portfolio, Learning Log e Knowledge Base',
  url: 'https://lorenzo-lo-presti.github.io',
  baseUrl: '/lorenzo-portfolio/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  favicon: 'img/favicon.ico',

  organizationName: 'lorenzo-lo-presti', // GitHub user/org name
  projectName: 'lorenzo-portfolio',      // Repo name

  themeConfig: {
    navbar: {
      title: 'Lorenzo Portfolio',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/docs/knowledge/',
label: 'Knowledge Base', position: 'left' },
        { to: '/docs/learning-log', label: 'Learning Log', position: 'left' },
        { to: '/contatti', label: 'Contatti', position: 'right' },
        { href: 'https://github.com/lorenzo-lo-presti', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© {new Date().getFullYear()} Lorenzo`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },

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
};

module.exports = config;
