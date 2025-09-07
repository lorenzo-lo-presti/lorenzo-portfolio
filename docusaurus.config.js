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

  themeConfig: {
    navbar: {
      title: 'Lorenzo — Portfolio & Learning Log',
      items: [
        { to: '/portfolio', label: 'Portfolio', position: 'left' },
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/lorenzo-lo-presti/lorenzo-portfolio',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/lorenzo-lo-presti',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/lorenzo-lo-presti/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lorenzo',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Lorenzo`,
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
  ]
};

module.exports = config;
