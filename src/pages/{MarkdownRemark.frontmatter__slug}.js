import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// const Template = (data) => {
export default function Template(props) {
  console.log("Template: ", props)
  const { frontmatter, html } = props.data.markdownRemark
  return (
    <Layout location={props.location}>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
// export const pageQuery = graphql`
//   query ($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `

// export default Template
