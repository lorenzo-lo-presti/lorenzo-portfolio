// ducusaurus.config.js
module.exports = {
  title: 'Lorenzo Portfolio',
  tagline: 'Knowledge Base — Learning Log — Portfolio',
  url: 'https://lorenzo-lo-presti.github.io',
  baseUrl: '/lorenzo-portfolio/',
  favicon: 'img/favicon.ico',
  organizationName: 'lorenzo-lo-presti',
  projectName: 'lorenzo-portfolio',

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Logo Lorenzo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/knowledge/', label: 'Knowledge Base', position: 'left' },
        { to: '/docs/learning-log', label: 'Learning Log', position: 'left' },
        { to: '/portfolio', label: 'Portfolio', position: 'left' },
        { to: '/contatti', label: 'Contatti', position: 'right' },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },

  stylesheets: [
    {
      href: '/css/custom.css',
      type: 'text/css',
    },
  ],
};
