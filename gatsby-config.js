/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Hi",
    projects: [
      {
        name: "MyProject1",
        tech: ["Javascript", "React", "Gatsby"],
        description: "나의 첫번째 프로젝트",
        term: "2021.01 - 2021.02",
        link: "project1",
      },
      {
        name: "MyProject2",
        tech: ["Javascript", "React", "Gatsby", "Python"],
        description: "나의 두번째 프로젝트",
        term: "2021.01 - 2021.02",
        link: "project2",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/md/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
