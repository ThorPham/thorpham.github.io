// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// const math = require('remark-math');
// const katex = require('rehype-katex');
import { themes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
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
  organizationName: 'ThorPham', // Usually your GitHub org/user name.
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
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
           remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
           blogSidebarCount: 0,
          editUrl:
            'https://github.com/ThorPham',
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'data-structure',
        path: 'data-structure',
        routeBasePath: 'data-structure',
        sidebarPath: './sidebars.data-structure.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'design-pattern',
        path: 'design-pattern',
        routeBasePath: 'design-pattern',
        sidebarPath: './sidebars.design-pattern.js',
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
            to: '/cs/intro',
            position: 'left',
            label: 'CS',
            activeBaseRegex: `/cs/`,
          },
          {
            to: '/data-structure/intro',
            position: 'left',
            label: 'Data Structure',
            activeBaseRegex: `/data-structure/`,
          },
          {
            to: '/design-pattern/intro',
            position: 'left',
            label: 'Design Pattern',
            activeBaseRegex: `/design-pattern/`,
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
        // theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
         theme: themes.github,
        darkTheme: themes.dracula,
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
