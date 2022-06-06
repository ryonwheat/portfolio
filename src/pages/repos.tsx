import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import styled from "styled-components"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledRepos = styled.div`
  margin: 0 0 100px;
  padding: 0;
  width: 100%;
`

interface Props {
  location: string,
  data: any
}

const ReposPage = ({location, data}: Props) => {
  // const data = useStaticQuery(
  //   graphql`
  //   query onGithub {
  //     allGithubData {
  //       data {
  //         search {
  //           edges {
  //             node {
  //               title
  //               merged
  //               url
  //               state
  //               repository {
  //                 repoUrl
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 name
  //               }
  //             }
  //           }
  //         }
  //         user {
  //           repositories {
  //             edges {
  //               node {
  //                 name
  //                 description
  //                 url
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 readme {
  //                   text
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   `
  // )
  // const data = null;
  console.log("Data: ", data)
  const repositories = data && data.githubData.data.viewer.repositories.nodes
  // const repositories = data && data.allGithubData.nodes[0].data.user.repositories.nodes
  // const projects = data && data.allProjectsJson.edges.filter(node => node.render === true)
  console.log("repositories: ", JSON.stringify(repositories))

  return (
    <Layout location={location}>
      <div>
        <SEO title="Repos" />
        <h1>
          <PageTitle title="Github Repositories" />
        </h1>
        {/* <h1><div className="elastic">Github Repositories</div></h1> */}

        <div className="container-">
          <ul>
          {repositories && repositories.map(( node: any) => (
            <>
            <li key={node.name}>{node.name}: {node.resourcePath}</li>
            </>
          ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default ReposPage

export const gitHubQuery = graphql`
  {
    githubData {
      data {
        viewer {
          name
          avatarUrl
          repositories {
            nodes {
              name
              description
              homepageUrl
              resourcePath
              forkCount
              createdAt
              updatedAt
              languages {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              licenseInfo {
                name
              }
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
// export const query = graphql`
//   query onGithub {
//     githubData {
//       data {
//         user {
//           repositories {
//             edges {
//               node {
//                 name
//                 description
//                 url
//                 forkCount
//                 stargazers {
//                   totalCount
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
