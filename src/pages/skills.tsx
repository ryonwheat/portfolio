import React from "react"
import { graphql } from "gatsby"
// import { Helmet } from "react-helmet";
// import { withPrefix } from "gatsby";
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import styled from "styled-components"
import ThemeContext from "../components/themeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/font-awesome"
import SEO from "../components/seo"
import Icon from "../components/icon"

const StyledSkills = styled.div<{ isDark: boolean }>`
  .icon-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // align-items: center;
    justify-content: flex-start; //space-around;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0d356d; /* #282c34; #112040, #1b3c69; */
    border-radius: 6px;
    box-shadow: 0 10px 30px -15px #020c1bb3;
    color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.primaryColor
        : ({ theme }) => theme.darkMode.primaryColor};
    width: 100px;
    height: 100px;
    padding: 20px;
    margin: 20px;
    // text-align: center;
    // transition: width 2s, height 2s, background-color 2s, transform 0.5s;
    // transition-duration: 0.5s;
    transition: all 2.5s;
  }

  .icon-container:hover {
    background-color: #0d558d; /* #282c34; #112040, #1b3c69; */
    // background: radial-gradient(#ffffff, #ffffff 70%);
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 0.9) 0%,
      transparent 100%
    );
    // background-image: -webkit-linear-gradient(
    //   -45deg,
    //   rgba(255, 255, 220, 0.3) 0%,
    //   transparent 100%
    // );
    border-radius: 50%;
    box-shadow: inset -25px -25px 40px rgb(0, 0, 0, 0.25);
    transition: all 0.75s;
    transform: scale(1.2);
    // transition-duration: 0.5s;
    // transform: scaleX(-1);
    // transform: rotate(1turn);
  }

  // .shadow {
  //   background: green;
  //   display: inline-block;
  //   width: 120px;
  //   height: 120px;
  // }

  // .shadow:hover {
  //   // background: green;
  //   // margin-left: 200px;
  //   // margin-top: -35px;
  //   width: 120px;
  //   height: 120px;
  //   background: radial-gradient(#000f, #fff0 72%);
  //   border-radius: 50%;
  // }

  .icon-container > div:hover {
    // color: green !important;
  }

  .light .text {
    color: #fff;
  }

  .dark .text {
    color: #fff;
  }

  .ticker {
    height: 70px;
    // overflow: hidden;
    position: relative;
    white-space: nowrap;
  }

  .ticker h3 {
    font-size: 5em;
    font-weight: 700;
    color: #777;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 50px;
    text-align: center;
    /* Starting position */
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    /* Apply animation to this element */
    -moz-animation: ticker 15s linear infinite;
    -webkit-animation: ticker 15s linear infinite;
    animation: ticker 30s linear infinite;
    opacity: .1;
  }

  .ticker h3:hover {
    color: #fff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: pink;
  }

  /* Move it (define the animation) */
  @-moz-keyframes ticker {
    0% {
      -moz-transform: translateX(100%);
    }
    100% {
      -moz-transform: translateX(-100%);
    }
  }

  @-webkit-keyframes ticker {
    0% {
      -webkit-transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(-100%);
    }
  }

  @keyframes ticker {
    0% {
      -moz-transform: translateX(100%); /* Firefox bug fix */
      -webkit-transform: translateX(100%); /* Firefox bug fix */
      transform: translateX(100%);
    }
    100% {
      -moz-transform: translateX(-100%); /* Firefox bug fix */
      -webkit-transform: translateX(-100%); /* Firefox bug fix */
      transform: translateX(-100%);
    }
  }
`

interface Props {
  location: string
  data: {
    site: {
      siteMetadata: {
        skills: [
          {
            name: string
            rating: number
            type: string
            url: string
            icon: {
              prefix: string
              name: string
              color: string
              size: string
              type: string
            }
          }
        ]
      }
    }
  }
}

const SkillsPage = (props: Props) => {
  console.log("SkillsPage data: ", props.data)

  let ticker = props.data.site.siteMetadata.skills.reduce((result: any, skill: any) => {
    return `${result}${skill.name}  `
  }, "")
  console.log("ticker: ", ticker)

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <StyledSkills isDark={context.dark}>
          <Layout location={props.location}>
            <SEO title="Skills" />
            <div>
              <h1>
                <PageTitle title="Skills" />
              </h1>

              <div className="ticker">
                <h3>{ticker}</h3>
              </div>

              <div className="container">
                <div className="icon-wrapper">
                  {props.data.site.siteMetadata.skills.map(
                    (skill: any, i: number) => (
                      <>
                        <div key={i} className="icon-container">
                          <div className="shadow"></div>
                          {/* <div className="text">{skill.name}</div> */}
                          {skill.icon && (
                            <Icon icon={skill.icon} url={skill.url} />
                            // <FontAwesomeIcon
                            //   icon={[skill.icon.prefix, skill.icon.name]}
                            //   size={skill.icon.size}
                            //   className={skill.icon.name}
                            //   style={{ color: skill.icon.color }}
                            // />
                          )}
                        </div>
                      </>
                    )
                  )}
                </div>
              </div>
            </div>
          </Layout>
        </StyledSkills>
      )}
    </ThemeContext.Consumer>
  )
}

export default SkillsPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        skills {
          name
          rating
          type
          url
          icon {
            prefix
            name
            color
            size
            type
          }
        }
      }
    }
  }
`
