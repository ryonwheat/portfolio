import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = (props: any) => {
  console.log("BlogPage: ", props)
  const { nodes } = props.data.allMarkdownRemark

  return (
    <Layout location={props.location}>
      <div>
        <SEO title="Blog" />
        <div>
          <h1 className="center upper">Blog</h1>

          {nodes &&
            nodes.map((node: any, i: number) => {
              console.log("node: ", node)
              const { frontmatter } = node
              return (
                <div key={i}>
                  <Link to={frontmatter.slug}>{frontmatter.title}</Link>
                </div>
              )
            })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        html
        id
      }
    }
  }
`

export default BlogPage
