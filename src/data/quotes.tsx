import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

interface Quote {
  id: string,
  a: string,
  c: string,
  h: string,
  q: string
}

const Quotes = (props: any) => {
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
  // console.log("Quotes data: ", data)

  const randomItem = (items: Quote[]) => {
    return items[Math.floor(Math.random() * items.length)]
  }

  const [quote, setQuote] = useState(randomItem(data.allQuote.nodes))

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuote(randomItem(data.allQuote.nodes))
    }, 5000)
    return () => clearTimeout(timer)
  })

  const StyledQuote = styled.div`
    background-color: #ffffb1; // #ccc;
    border-radius: 8px;
    padding: 20px;
    color: #333;

    > div {
      animation: fadeIn ease 3s;
    }

    .author {
      margin: 4px 0 4px 20px;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `

  return (
    // <StaticQuery
    //     query={graphql`
    //       query HeadingQuery {
    //         allQuote {
    //           nodes {
    //             id
    //             a
    //             c
    //             h
    //             q
    //           }
    //         }
    //       }
    //     `}
    //     render={data => (
    <StyledQuote>
      <div>
        <div>
          <i>"{quote.q}"</i>
        </div>
        <div className="author">- {quote.a}</div>
        {/* <i>{data.allQuote.nodes[0].q}</i> - {data.allQuote.nodes[0].a} */}
      </div>
    </StyledQuote>
    // )}
    // />
  )
}

// export const query = graphql`
//   {
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
