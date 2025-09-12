/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'learning-log',
    {
      type: 'category',
      label: 'Knowledge Base',
      items: [
        'knowledge/index',
        'knowledge/2025-09-07-github-learning-log',
        'knowledge/2025-09-12-docusaurus-deploy',
        'k.nowledge/2025-09-12-fix-navbar-position',
        'knowledge/2025-09-12-conventional-commits',
      ],
    },
  ],
};

module.exports = sidebars;
