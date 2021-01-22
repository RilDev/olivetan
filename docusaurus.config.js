module.exports = {
  title: 'La Bible d\'Olivétan',
  tagline: 'La première Bible Française.',
  url: 'https://olivetan.fr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rildev', // Usually your GitHub org/user name.
  projectName: 'olivetan', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Olivétan',
      logo: {
        alt: 'Olivétan Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'bible/',
          activeBasePath: 'docs',
          label: 'Bible',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/RilDev/olivetan',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Bible',
          items: [
            {
              label: 'Nouveau Testament',
              to: 'bible/',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/RilDev/olivetan',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://rildev.website" target="_blank">RilDev</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'bible',
          // Please change this to your repo.
          editUrl:
            'https://github.com/RilDev/olivetan/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/RilDev/olivetan/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
