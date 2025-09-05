// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require('remark-math');
const katex = require('rehype-katex');
require('dotenv').config();
// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer').themes.github
const darkCodeTheme = require('prism-react-renderer').themes.dracula
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ThorPham',
  tagline: 'Wellcome to my blog !',
  url: 'https://thorpham.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/emoticon_big.png',
  organizationName: 'thorpham', // Usually your GitHub org/user name.
  projectName: 'thorpham.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch : "master",
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ThorPham',
          remarkPlugins: [math],
          rehypePlugins: [katex],

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
           blogSidebarCount: 0,
          editUrl:
            'https://github.com/ThorPham',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
      

    ],
    
  ],
 plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cs',
        path: 'cs',
        routeBasePath: 'cs',
        sidebarPath: './sidebars.cs.js',
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Thorpham',
        logo: {
          alt: 'My Site Logo',
          src: 'img/emoticon_big.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            to: '/cs/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'CS',
            activeBaseRegex: `/cs/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // { to: 'Archive', label: 'Archive', position: 'right' },
          {
            href: 'https://github.com/ThorPham',
            label: 'GitHub',
            position: 'right',
          },
         
        ],
      },
     
      footer: {
        style: 'dark',
       
        copyright: `Copyright © ${new Date().getFullYear()} Thorpham`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // additionalLanguages: ['python']
      },
    }),
    customFields: {
      // Put your custom environment here
      gitUser: process.env.GIT_USER,
    },
};
// console.log("------------",process.env.GIT_USER)
module.exports = config;
