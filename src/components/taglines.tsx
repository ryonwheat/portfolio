import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

interface Props {
  data: any
}

const Taglines = (props: any) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          taglines
        }
      }
    }
  `)
  console.log("Tagline data: ", data)

  const { taglines } = data.site.siteMetadata
  const [tagIndex, setTagIndex] = useState(0)

  useEffect(() => {
    let timout: any
    if (tagIndex < taglines.length - 1) {
      timout = setTimeout(
        () => setTagIndex(tagIndex + 1),
        2000
        // 2000 / (tagIndex + 1)
      )
    }
    return () => {
      clearTimeout(timout)
    }
  }, [taglines, tagIndex])

  const StyledTagline = styled.div`
    // background-color: #b1d3ff;
    // border: 0px solid #fff;
    // border-radius: 8px;
    // padding: 20px;
    // color: #333;


  `

  return (
    <StyledTagline>
      <h2 className="tagline tx-grad">{taglines[tagIndex]}</h2>
    </StyledTagline>
  )
}

export default Taglines
