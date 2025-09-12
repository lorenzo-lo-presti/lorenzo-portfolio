// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lorenzo — Portfolio & Learning Log',
  tagline: 'Portfolio, Learning Log e Knowledge Base',
  url: 'https://lorenzo-lo-presti.github.io',
  baseUrl: '/lorenzo-portfolio/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  favicon: 'img/favicon.ico',


  organizationName: 'lorenzo-lo-presti',
  projectName: 'lorenzo-portfolio',

  themeConfig: {
    navbar: {
      items: [
        { to: '/', label: 'Home' },
        { to: '/docs/learning-log', label: 'Learning Log' },
        { to: '/docs/knowledge', label: 'Knowledge Base' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              html: `
                <a href="https://github.com/lorenzo-lo-presti" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" width="24" height="24" alt="GitHub" />
                </a>
              `,
            },
            {
              html: `
                <a href="https://www.linkedin.com/in/lorenzo-lo-presti/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" width="24" height="24" alt="LinkedIn" />
                </a>
              `,
            },
            {
              html: `
                <a href="https://twitter.com/lorenzo" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/twitter.svg" width="24" height="24" alt="Twitter" />
                </a>
              `,
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
  ],
};

module.exports = config;
