import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

interface Props {
  data: any
}

interface Quote {
  id: string
  a: string
  c: string
  h: string
  q: string
}

const Quotes = (props: any) => {
//   const data = props.data
    const data = useStaticQuery(graphql`
      query HeadingQuery {
        allQuote {
          nodes {
            id
            a
            c
            h
            q
          }
        }
      }
    `)
  console.log("Quotes data: ", data)

  const randomItem = (items: Quote[]) => {
    return items[Math.floor(Math.random() * items.length)]
  }

  const [quote, setQuote] = useState(randomItem(data.allQuote.nodes))
  console.log("quotes: ", JSON.stringify(quote))

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuote(randomItem(data.allQuote.nodes))
    }, 5000)
    return () => clearTimeout(timer)
  })

  const StyledQuote = styled.div`
    background-color: #b1d3ff; // #ffffb1; // #ccc;
    border: 0px solid #fff;
    border-radius: 8px;
    padding: 20px;
    color: #333;

    > div {
      animation: fadeIn ease 3s;
    }

    .author {
      margin: 4px 0 4px 20px;
    }
  `

  return (
    <StyledQuote>
      <div>
        <div>
          <i>"{quote.q}"</i>
        </div>
        <div className="author">- {quote.a}</div>
      </div>
    </StyledQuote>
  )
}

// export const query = graphql`
//   query HeadingQuery {
//     allQuote {
//       nodes {
//         id
//         a
//         c
//         h
//         q
//       }
//     }
//   }
// `

export default Quotes
