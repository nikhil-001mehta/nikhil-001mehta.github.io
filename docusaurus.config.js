module.exports = {
  title: "technikhil314",
  tagline: "A self taught web developer from india. I am mathematician, drummer, failed singer who likes to work on open source projects and believe in free education. I am also a proud lefty.",
  url: 'https://technikhil314.surge.sh',
  baseUrl: '/',
  favicon: 'img/avatar.jpeg',
  organizationName: 'technikhil314', // Usually your GitHub org/user name.
  projectName: 'Portfolio for technikhil314', // Usually your repo name.
  themeConfig: {
    image: 'img/avatar.jpeg',
    googleAnalytics: {
      trackingID: 'UA-171436787-1',
    },
    gtag: {
      trackingID: 'UA-171436787-1',
    },
    defaultDarkMode: true,
    sidebarCollapsible: true,
    navbar: {
      title: 'TechNikhil314',
      logo: {
        alt: 'My avatar',
        src: 'img/avatar.jpeg',
      },
      links: [
        {
          label: 'My Work',
          position: 'left',
          items: [{
            to: "carousel",
            label: "Carousel Component",
          }, {
            to: "daterangepicker",
            label: "Angular Date Range Picker",
          }, {
            to: "autobadger",
            label: "Auto Badger",
          }]
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'contactme', label: 'Contact me', position: 'right' }
      ],
    },
    footer: {
      links: [
        {
          title: 'My Open Source Work',
          items: [{
            to: "carousel",
            label: "Carousel Component",
          }, {
            to: "daterangepicker",
            label: "Date Range Picker",
          }]
        },
        {
          title: 'Follow me',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/technikhil314',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/2503826/nikhil-mehta',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/technikhil314',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/nikhil001mehta/',
            },
            {
              label: 'Dev.to',
              href: 'https://dev.to/technikhil314',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@nikhil.001mehta',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'My Music Work',
              href: 'https://www.youtube.com/user/nikhil7868',
            },
            {
              label: 'My Portfolio',
              to: 'portfolio',
            }
          ],
        },
        {
          title: 'Contact me',
          items: [
            {
              label: 'Email',
              href: 'mailto:nikhil.001mehta@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020${new Date().getFullYear() === 2020 ? '' : `-${new Date().getFullYear()}`} Nikhil Mehta. Built with  <big><b>&#9825;</b></big>  using Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
