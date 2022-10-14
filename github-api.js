exports.githubApiQuery = `
query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
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
`

exports.githubApiVariables = {
    number_of_repos: 20,
    //   github_login: process.env.GITHUB_LOGIN,
    //   q: "author:ryonwheat state:closed type:pr sort:comments",
    //   author: "ryonwheat"
}


// exports.githubApiQuery = `
// query($github_login: String!) {
// 	user(login: $github_login) {
// 		  repositories(first: 10) {
// 			 nodes {
// 				id
// 				name
// 				description
// 				url
// 				updatedAt
// 				forkCount
// 				openGraphImageUrl
// 				stargazers {
// 					totalCount
// 				}
// 				readme: object(expression: "master:README.md") {
// 					... on Blob {
// 						text
// 					}
// 				}
// 				licenseInfo {
// 					id
// 				}
// 				primaryLanguage {
// 					name
// 				}
// 				languages(first: 10) {
// 					nodes {
// 						name
// 					}
// 				}
// 			 }
// 		  }
// 		}
// }
// `
