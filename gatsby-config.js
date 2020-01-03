/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `BC Chênois`,
    siteUrl: `https://www.bcchenois.ch`,
    description: `Site internet du club BC Chenois basé à Thônex et Chêne-Bourg.`,
    twitterUsername: "@Jon_Praxie",
    image:"/logo.png",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/documents/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BC Chênois`,
        short_name: `BCC`,
        icon: `src/images/iconWebApp.png`,
        start_url: `/`,
        background_color: `#363636`,
        theme_color: `#35B0F6`,
        display: `standalone`,
      },
    },
    {
        resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/interclub/`, `/news/*`, `/informations/*`],
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.bcchenois.ch',
        sitemap: 'https://www.bcchenois.ch/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
