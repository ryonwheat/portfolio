import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import styled from "styled-components"
import ThemeContext from "../components/themeContext"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { StaticImage } from "gatsby-plugin-image"

const StyledProject = styled.div<{ isDark: boolean }>`
  margin: 0 0 130px;
  padding: 0;
  width: 100%;

  .project-inner {
    display: flex;
    // background-color: #555555;
  }

  .project-content-wrap {
    flex: 0 0 50%;
    // background-color: #777777;
  }

  .project-image-wrap {
    flex: 0 0 50%;
    position: relative;
    // background-color: #999999;
    height: 400px;
  }

  .project-image {
    position: absolute;
    left: -25px;
    // border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: #a0a1a2;
    border-radius: 6px;
    opacity: 1;
    padding: 30px 30px 0 30px;
  }

  .gatsby-image-wrapper {
    border-radius: 10px 10px 0 0;
  }

  .featured-project {
    color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.secondaryColor
        : ({ theme }) => theme.lightMode.secondaryColor};
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 8px 0;
  }

  .project-name {
    font-size: 28px;
    font-weight: bold;
    margin: 0 0 20px 0;
    color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.link.color
        : ({ theme }) => theme.lightMode.link.color};
  }

  .project-description {
    position: relative;
    background-color: #0d356d; /* #282c34; #112040, #1b3c69; */
    border-radius: 6px;
    box-shadow: 0 10px 30px -15px #020c1bb3;
    color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.primaryColor
        : ({ theme }) => theme.darkMode.primaryColor};
    padding: 25px;
    font-size: 0.85rem;
    width: 100%;
    z-index: 5;
  }

  .project-links {
    color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.link.color
        : ({ theme }) => theme.lightMode.link.color};
    transition: all 0.5s;
  }

  .project-links:hover {
    color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.linkHover.color
        : ({ theme }) => theme.lightMode.linkHover.color};
    text-decoration: none;
    transition: all 0.5s;
  }

  .project-technologies {
    position: relative;
    font-size: 0.75rem;
    font-weight: 500;
    margin: 18px 0 18px 6px;
  }

  .technology-item {
    background-color: #589bfd; //#459bf1; // #1e99e6; // #a0a1a2;
    border: 1px solid transparent;
    border-radius: 24px;
    font-size: 0.8rem;
    padding: 0 8px 8px 8px;
    line-height: 22px;
    height: 20px;
  }

  .technology-item:hover {
    background-color: #738195;
  }

  li {
    display: inline-block;
    margin: 0 15px 0 0;
    padding: 0;
  }

  .tech-links {
    color: ${(props) =>
      props.isDark ? ({ theme }) => "#fff" : ({ theme }) => "#fff"};
    // color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.link.secondaryColor
        : ({ theme }) => theme.lightMode.link.color};
    // background-color: #589bfd; //#459bf1; // #1e99e6; // #a0a1a2;
    // border: 1px solid transparent;
    // border-radius: 24px;
    // font-size: 0.8rem;
    // padding: 0 10px;
    // line-height: 22px;
    transition: all 0.5s;
  }

  .tech-links:hover {
    color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.linkHover.color
        : ({ theme }) => theme.darkMode.linkHover.color};
    text-decoration: none;
    transition: all 0.5s;
  }
`

interface Props {
  location: string
  data: any
}

const ProjectsPage = (props: Props) => {
  console.log("Projects props: ", props)
  console.log("Projects data: ", props.data)
  const projects =
    props.data &&
    props.data.allProjectsJson.edges.filter(
      ({ node }: any) => node.render === true
    )
  // const projects = data && data.allProjectsJson.edges.filter(node => node.render === true)
  console.log("Projects: ", JSON.stringify(projects))

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Layout location={props.location}>
          {/* <div>Projects IsDark: {context.dark === true ? "true" : "false"}</div> */}
          <div>
            <SEO title="Projects" />
            <h1>
              <PageTitle title="Projects" />
            </h1>

            <div className="container-">
              {projects &&
                projects.map(({ node }: any, i: number) => {
                  console.log("node: ", node)
                  const {
                    title,
                    description,
                    hostUrl,
                    image,
                    isFeaturedProject,
                    technologies,
                  } = node
                  const gImage = getImage(image)
                  // console.log("image: ", image)
                  // console.log("gImage: ", gImage)

                  // const featuredProject = isFeaturedProject ? "Featured Project" : ""

                  return (
                    <StyledProject key={i} isDark={context.dark}>
                      <div className="project-inner">
                        <div className="project-content-wrap">
                          <div className="featured-project">
                            {isFeaturedProject == true && "Featured Project"}
                          </div>
                          <div className="project-name">
                            {hostUrl && (
                              <a
                                className="project-links"
                                href={hostUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {title}
                              </a>
                            )}
                            {!hostUrl && (
                              <span className="project-links">{title}</span>
                            )}
                          </div>
                          <div className="project-description">
                            {description}
                          </div>
                          <div className="">
                            {technologies && (
                              <ul className="project-technologies">
                                {technologies.map(
                                  (technology: any, i: number) => (
                                    <li key={i} className="technology-item">
                                      <a
                                        className="tech-links"
                                        href={technology.url}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        {technology.name}
                                      </a>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                        <div className="project-image-wrap">
                          <div className="project-image">
                            {gImage && (
                              <GatsbyImage image={gImage} alt={title} />
                            )}
                            {/* {src.childImageSharp.fluid} */}
                            {/* <img src={src.childImageSharp.fluid.src} /> */}
                            {/* <Img fluid={src.childImageSharp.fluid.src} /> */}
                            {/* <StaticImage src={src.childImageSharp.fluid.src} alt={title} /> */}
                            {/* <StaticImage src="../images/covid-tracker.png" alt={title} /> */}
                          </div>
                        </div>
                      </div>
                    </StyledProject>
                  )
                })}
            </div>
          </div>
        </Layout>
      )}
    </ThemeContext.Consumer>
  )
}

export default ProjectsPage

export const queryProjects = graphql`
  {
    allProjectsJson {
      edges {
        node {
          description
          hostUrl
          image {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 570
                height: 400
              )
            }
          }
          isFeaturedProject
          index
          render
          title
          technologies {
            name
            url
          }
        }
      }
    }
  }
`
