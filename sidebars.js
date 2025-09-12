/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Portfolio',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Learning Log',
      items: ['learning-log'],
    },
    {
      type: 'category',
      label: 'Knowledge Base',
      items: [
        'knowledge/index',
        'knowledge/2025-09-07-github-learning-log',
      ],
    },
  ],
};

  module.exports = sidebars;
