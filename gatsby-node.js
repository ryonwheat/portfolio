const { createNode } = require("typescript")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const template = require.resolve("./src/templates/blogTemplate.js")

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                }
              }
            }
          }
        `
      )
    ).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.frontmatter.slug
        createPage({
          slug,
          component: template,
          context: {
            slug: slug,
          },
        })

        resolve()
      })
    })
  })
}

exports.onPreInit = () => {
  console.log("gatsby-node: Loaded gatsby-node")
}

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  console.log("gatsby-node: sourcing nodes")

  console.log("process.env.USE_STUB: ", process.env.USE_STUB)

  let useStub = process.env.USE_STUB === "true"

  if (useStub === true) {
  } else {
  }

  const data = await getQuotes()
  data.map((quote, i) =>
    createNode({
      ...quote,
      id: createNodeId(quote.a),
      internal: {
        type: "Quote",
        contentDigest: createContentDigest(quote),
      },
    })
  )

  // const response = await fetch(
  //     `${process.env.SPOTIFY_AUTHORIZE_URL}?`, {
  //         method: 'GET',
  //         body: `response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URL}`
  //     }
  // )
  // console.log('RESPONSE: ', response)
}

async function getQuotes() {
  const url = "https://zenquotes.io/api/quotes/"
  const response = await fetch(url)
  var data = await response.json()
  // console.log("getQuotes: ", data);
  return data
}
