import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Taskflow API',
  tagline: 'Simple, powerful API documentation for developers',
  favicon: 'img/favicon.ico',
  future: { v4: true },
  url: 'https://Moneykanta.github.io',
  baseUrl: '/my-api-docs/',
  organizationName: 'Moneykanta',
  projectName: 'my-api-docs',
  onBrokenLinks: 'throw',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [['classic', ({ docs: { sidebarPath: './sidebars.js' }, blog: false, theme: { customCss: './src/css/custom.css' } })]],
  themeConfig: ({
    navbar: {
      title: 'Taskflow API',
      logo: { alt: 'Taskflow API Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentation' },
        { href: 'https://github.com/Moneykanta/my-api-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: { style: 'dark', links: [], copyright: `Copyright © ${new Date().getFullYear()} Taskflow API.` },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  }),
};

export default config;
