const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Discordeno Separate Cache Rest',
  tagline: 'Discordeno Best Lib',
  url: 'https://triformine.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'triformine', // Usually your GitHub org/user name.
  projectName: 'dscr-wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Discordeno Separate Cache Rest',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/triformine/discordeno-separate-cache-rest',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Discordeno',
              href: 'https://github.com/discordeno/discordeno',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TriForMine. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/triformine/dcsr-wiki/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  trailingSlash: true,
  plugins: [
    '@docusaurus/plugin-ideal-image'
  ],
};
