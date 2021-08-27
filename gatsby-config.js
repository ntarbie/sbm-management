const linkResolver = require('./src/utils/linkResolver')


module.exports = {
  siteMetadata: {
    title: 'SBM Management',
    description: 'Changing the way services are delivered.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
          layout: require.resolve(`./src/components/Layout.js`),
          // injectPageProps: false,
        }
   },
  //  {
  //     resolve: `gatsby-plugin-layout`,
  //     options: {
  //       component: require.resolve(`./src/components/Layout.js`),
  //     },
  //   },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'sbmmanagement',
        prismicToolbar: true,
        linkResolver: () => linkResolver,
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true
        },
        schemas: {
           homepage: require("./custom_types/homepage.json"),
           navigation: require("./custom_types/navigation.json"),
           page: require("./custom_types/page.json"),
           news: require("./custom_types/news.json"),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          `Lato\:400,400,700,700i,900`,`Amiri\:400,400,700,700i`
        ],
      },
    },
    {
      resolve: "gatsby-plugin-hubspot",
      options: {
          trackingCode: "20124157",
          respectDNT: false,
          productionOnly: false,
      },
    },
  ],
}
