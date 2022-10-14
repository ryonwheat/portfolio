import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import styled from "styled-components"

// class AboutPage extends Component<{location: string}, {}> {
//   constructor(props: any) {
//     super(props)
//     console.log("AboutPage.props: ", props)
//   }

//   componentDidMount() {}

//   callback(data: any) {
//     console.log("About.callback: ", data)
//   }

const AboutPage = (props: any) => {
    const StyledAbout = styled.div`
      position: relative;
      top: 0;
      // background-color: var(--header-background-color);
      margin: 0;
      padding: 0;
      width: 100%;
      z-index: 10;
    `
    return (
      <StyledAbout>
        <Layout location={props.location}>
          <SEO title="About" />
          <div>
            <h1 className="center upper">About
              {/* <PageTitle title="About" className="" /> */}
            </h1>
            <div className="page-description">
              {/* <p>GATSBY_API_URL: {process.env.GATSBY_API_URL}
              </p> */}
            </div>
            <div className="center">
              <Link to="/contact">
                <button className="gradient-button">Let's Connect</button>
              </Link>
            </div>
          </div>
        </Layout>
      </StyledAbout>
    )
}

export default AboutPage
