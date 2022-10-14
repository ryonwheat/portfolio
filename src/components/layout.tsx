import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ThemeContext from "./themeContext"
import Header from "./header"
import Footer from "./footer"
import TransitionHandler from "./transition"
import "./layout.scss"

const StyledLayout = styled.div<{ isDark: boolean }>`
  .main-content {
    min-height: 100vh;
    margin: 0 auto 50px auto;
    max-width: 960px;
    padding: 80px 1.0875rem 1.45rem 0;
  }

  .main-page-header,
  .page-header {
    margin: 0 0 12px 0;
    color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.pageTitle
        : ({ theme }) => theme.lightMode.pageTitle};
  }

  .main-page-header {
    color: ${(props) =>
      props.isDark
        ? ({ theme }) => theme.darkMode.primaryColor
        : ({ theme }) => theme.lightMode.primaryColor};
    // color: hsla(0, 0%, 100%, 0.8);
  }

  .elastic {
    display: inline-block;
    /* color: var(--accent-foreground-color); /* #7953b2 */
    font-family: "Roboto";
    font-size: 3rem;
    font-weight: 500;
  }

  .elastic-animation {
    animation: elastic-animation 1.5s ease infinite;
  }

  @keyframes elastic-animation {
    0% {
      transform: scale3d(1, 1, 1);
      /* transform: scale(1); */
    }

    28% {
      transform: scale3d(0.75, 1.25, 1);
    }

    42% {
      transform: scale3d(1.25, 0.75, 1);
    }

    50% {
      transform: scale3d(0.88, 1.18, 1);
      /* font-size: 2em; */
    }

    60% {
      /* transform: scale3d(1, 1.25, 1); */
    }

    75% {
    }

    100% {
      transform: scale3d(1, 1, 1);
      /* transform: scale(1); */
    }
  }
`

class Layout extends Component<any, { animate: boolean; isClient: boolean }> {
  constructor(props: any) {
    super(props)
    console.log("Layout.props: ", props)
    this.state = {
      animate: true,
      isClient: false,
    }
  }

  componentDidMount() {
    this.setState({ isClient: true })

    // let openingAnimation = window.sessionStorage.getItem("openingAnimationRan")
    // console.log(
    //   "layout.componentDidMount.openingAnimation: " + openingAnimation
    // )

    // if (window.sessionStorage.getItem("openingAnimationRan") === null) {
    //   let body = document.body
    //   body.classList.add("page-loading")

    //   let el = document.getElementById("page-container")
    //   el !== null ? el.classList.remove("fade-in") : null
    //   // document.getElementById("page-container").classList.remove("fade-in");

    //   setTimeout(() => {
    //     body.classList.remove("page-loading")
    //     el !== null ? el.classList.add("fade-in") : null
    //   }, 2000)

    //   window.sessionStorage.setItem("openingAnimationRan", "true")
    // }
  }

  // child to parent communication
  callback = (data: any) => {
    console.log("Layout.callback: " + data)
    this.props.parentCallback(data)
  }

  // TODO: move to separate module
  createStars() {
    let el = []
    for (let i = 0; i < 400; i++) {
      el.push(<div className="star"></div>)
    }
    return el
  }

  render() {
    const { isClient } = this.state
    let isClientString = isClient === false ? "false" : "true"
    console.log("render state: ", this.state)
    if (this.state.isClient === false) {
        console.log("returning false state: ", this.state)
        return <></>
    } else {
      return (
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                  menuLinks {
                    name
                    link
                    render
                  }
                  taglines
                  socialMedia {
                    name
                    url
                    icon {
                      prefix
                      name
                      color
                      size
                    }
                  }
                  siteContact {
                    email
                  }
                }
              }
            }
          `}
          render={(data) => (
            <ThemeContext.Consumer>
              {(context) => (
                <StyledLayout key={isClientString} isDark={context.dark}>
                  <TransitionHandler location={this.props.location}>
                    <div
                      id="page-container"
                      className={`page-container ${
                        context.dark ? "dark" : "light"
                      }`}
                    >
                      <Header
                        siteTitle={data.site.siteMetadata.title}
                        menuLinks={data.site.siteMetadata.menuLinks}
                        parentCallback={this.callback}
                        isDark={context.dark}
                      />

                      <div className="canvas">{this.createStars()}</div>

                      <main className="main-content">
                        {/* <div>Layout IsDark: {context.dark === true ? "true" : "false"}</div> */}
                        {this.props.children}
                        {/* {this.props.children({ ...this.props, isDark: context.dark })} */}
                      </main>

                      <div id="curtain" className="curtain">
                        <div id="loading-bar" className="loading-bar"></div>
                      </div>

                      <Footer
                        socialMedia={data.site.siteMetadata.socialMedia}
                        siteContact={data.site.siteMetadata.siteContact}
                      />
                    </div>
                  </TransitionHandler>
                </StyledLayout>
              )}
            </ThemeContext.Consumer>
          )}
        />
      )
    }
  }
}

Layout.contextType = ThemeContext

export default Layout
