import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Quotes from "../components/quotes"
import SEO from "../components/seo"
import styled from "styled-components"
import Taglines from "../components/taglines"
import ThemeContext from "../components/themeContext"

const IndexPage = (props: any) => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           taglines
  //         }
  //       }
  //     }
  //   `)
  //   console.log("index props: ", props)

  //   const [taglines, setTaglines] = useState(props.data.site.siteMetadata.taglines)
  //   const [tag, setTag] = useState(props.data.site.siteMetadata.taglines[0])

  //   const { taglines } = data.site.siteMetadata
  //   const [tagIndex, setTagIndex] = useState(0)

  //   useEffect(() => {
  //     console.log("useEffect - taglines: ", tagIndex, taglines[tagIndex])
  //     let timout: any
  //     if (tagIndex < taglines.length - 1) {
  //         timout = setTimeout(
  //           () => setTagIndex(tagIndex + 1),
  //           2000 / (tagIndex + 1)
  //         )
  //     }
  //     return () => {
  //       clearTimeout(timout)
  //     }
  //   }, [taglines, tagIndex])

  //   useEffect(() => {
  //     props.data.site.siteMetadata.taglines.map((item, index) => {
  //       console.log("tag: ", count, props.data.site.siteMetadata.taglines.length, item)
  //       if (count < props.data.site.siteMetadata.taglines.length - 1) {
  //         let timer = setTimeout(() => {
  //             setCount(count + 1)
  //             setTag(item)
  //             // setTag(randomItem(props.data.site.siteMetadata.taglines))
  //         }, 1000 * index)
  //         return () => clearTimeout(timer)
  //       }
  //     })
  //   },[tag])

  const StyledIndex = styled.div`
    .tagline {
      animation: fadeIn ease 3s;
    }

    .dark .tx-grad {
      background: linear-gradient(to right, #ffcb00, #ff0000);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .light .tx-grad {
      background: linear-gradient(to right, blue, pink);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `

  return (
    <StyledIndex>
      <Layout location={props.location}>
        <div className="row flex-align-start">
          <div className="col8">
            <SEO title="Home" />
            <h3>Hi! I'm</h3>
            <h1>
              <PageTitle
                title="Ryan Heath"
                className="main-page-header elastic"
                animate={true}
              />
            </h1>
            <Taglines />
          </div>
          <div className="col3">
            <Quotes />
          </div>
        </div>
      </Layout>
    </StyledIndex>
  )
}

export default IndexPage
