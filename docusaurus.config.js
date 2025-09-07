// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
export const config = {
  title: 'Lorenzo — Portfolio & Learning Log',
  tagline: 'Portfolio, Learning Log e Knowledge Base',
  url: 'https://lorenzo-lo-presti.github.io',
  baseUrl: '/lorenzo-portfolio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  fivicon: 'img/favicon.ico',

  organizationName: 'lorenzo-lo-presti', // GitHub user name
  projectName: 'lorenzo-portfolio', // Repo name

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