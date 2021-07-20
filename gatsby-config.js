require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "Kit's Dev Store",
    siteTitleDefault: "Headless Shopify with Gatsby",
    siteUrl: "https://shopify-demo.gatsbyjs.com",
    hrefLang: "en",
    siteDescription: "A headless shopify proof of concept",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/icons/logo.svg`,
      },
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    // process.env.GOOGLE_ANALYTICS_ID && {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_ID,
    //   },
    // },
  ].filter(Boolean),
}
