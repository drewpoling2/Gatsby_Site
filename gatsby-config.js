module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "ZiSjJI4pzm5D-fkx_Y4vEHxR96SWixyxjHJ8cQZL2Ww",
        spaceId: "d3binx2rnqui",
      },
    },
  ],
};
