const data = require("./src/data/data")
console.log("data: ", data)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log("process.env: ", process.env)

// const { githubApiQuery } = require("./github-api")
// console.log("githubApiQuery: ", githubApiQuery)

module.exports = {
  siteMetadata: {
    title: data.siteTitle,
    author: data.siteAuthor,
    siteUrl: data.siteUrl,
    menuLinks: data.siteMenuLinks,
    skills: data.skills,
    socialMedia: data.siteSocialMedia,
    siteContact: data.siteContact,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-page-transitions`,
      options: {
        transitionTime: 500,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // url: API URL to use. Defaults to  https://api.github.com/graphql
        // url: "https://api.github.com/graphql",

        // token: required by the GitHub API
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: data.githubApiQuery,
        variables: data.githubApiVariables,
        // graphQLQuery: `
        // query ($number_of_repos: Int!) {
        //   viewer {
        //     name
        //     avatarUrl
        //     isHireable
        //     resourcePath
        //     repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        //       nodes {
        //         name
        //         description
        //         homepageUrl
        //         forkCount
        //         createdAt
        //         updatedAt
        //         resourcePath
        //         languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
        //           edges {
        //             node {
        //               name
        //               color
        //             }
        //           }
        //         }
        //         licenseInfo {
        //           name
        //         }
        //         stargazers {
        //           totalCount
        //         }
        //       }
        //     }
        //   }
        // }
        // `,
        // variables: defaults to variables needed for a search query
        // variables: {
        //   github_login: process.env.GITHUB_LOGIN,
        //   q: "author:ryonwheat state:closed type:pr sort:comments",
        //   author: "ryonwheat"
        // }
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cambay:400,700`,
          `arvo:400,700`,
          `ubuntu mono:400,700`,
          `Fira Code`,
          `Inter`,
          `Roboto`,
          `Montserrat`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
