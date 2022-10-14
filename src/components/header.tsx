// import PropTypes from "prop-types";
import React, { Component, SyntheticEvent } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import * as style from "./header.module.css"

import NavLinks from "./navLinks"
import ThemeToggle from "./themeToggle"

interface Props {
  siteTitle: string
  isDark: boolean
  menuLinks: MenuLinks[]
  parentCallback: ParentCallback
}

interface MenuLinks {
  name: string
  link: string
  render: boolean
}

interface ParentCallback {
  (data: any): void
}

class Header extends Component<
  {
    siteTitle: string
    isDark: boolean
    menuLinks: MenuLinks[]
    parentCallback: ParentCallback
  },
  {}
> {
  constructor(props: Props) {
    super(props)
    console.log("Header props: ", props)
  }

  handleHover = (event: MouseEvent) => {
    let el = document.getElementById("brand-icon")
    // let el = document.getElementById("brand-icon") !== null ? document.getElementById("brand-icon") : {}
    // let el = document.getElementById("brand-icon") === null ? {HTMLElement}: document.getElementById("brand-icon") as HTMLElement;
    if (el) {
      console.log("hover: " + el.classList)
      el.classList.add(`${style.brandIconAnimation}`)

      setTimeout(() => {
        el !== null ? el.classList.remove(`${style.brandIconAnimation}`) : null
      }, 1200)
    }
  }

  handleClick = (event: MouseEvent) => {
    console.log("Header.handleClick")
    this.props.parentCallback(event)
  }

  callback = (data: any) => {
    this.props.parentCallback(data)
  }

  render() {
    interface Props {
      isDark: boolean
    }
    const StyledHeader = styled.header<Props>`
      ::before,
      ::after {
        // border: 1px solid green;
      }
      position: sticky;
      top: 0;
      // background-color: rgba(11, 44, 89, 0.5); //rgba(81,83,147,0.5);
      background-color: ${(props) =>
        props.isDark
          ? ({ theme }) => theme.darkMode.headerBackgroundColor
          : ({ theme }) => theme.lightMode.headerBackgroundColor};
      box-shadow: 0px 10px 30px #020c1b53;
      // box-shadow: 0 10px 30px -15px #020c1bb3;
      opacity: 1;
      backdrop-filter: blur(10px);
      margin: 0;
      padding: 0;
      z-index: 100;

      .inner-wrap {
        margin: 0 auto;
        padding: 0;
        box-shadow: -10px 10px 20px -25px #020c1bb3;
        // background-color: #aaaaaa;
        // height: 90px;
      }

      .brand-container {
        // background-color: #aaaaaa;
        // padding: 10px;
        z-index: 0;
      }

      .brand-icon {
        // position: absolute;
        // width: 90px;
        // height: 90px;
      }

      .brand-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #cedeee;
        font-family: "Roboto";
        font-size: 3rem;
        letter-spacing: 0.1rem;
        text-indent: 0.1rem;
      }

      .brand-content a {
        color: #fff;
        // color: ${({ theme }) => theme.darkMode.link.color};
      }

      .brand-content a:hover {
        text-decoration: none;
      }

      .toggle-icon {
        color: ${(props) =>
          props.isDark
            ? ({ theme }) => theme.darkMode.link.color
            : ({ theme }) => theme.darkMode.link.color};
        margin: 0;
        padding: 24px 0 20px 20px;
        transition: all 2.5s;
    }

      .toggle-icon:hover {
        transition: all 2.5s;
    }

      .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }

      .h-center {
        text-align: center;
      }
    `

    return (
      <StyledHeader isDark={this.props.isDark}>
        {/* <div>Layout IsDark: {this.props.isDark === true ? "true" : "false"}</div> */}
        <div className="inner-wrap row">
          <div className="brand-container col2 flex-item">
            <div id="brand-icon" className="brand-icon">
              <div className="brand-content">
                <Link to="/">RH</Link>
              </div>
            </div>
          </div>
          <div className="col8 flex-item">
            <NavLinks menuLinks={this.props.menuLinks} isDark={this.props.isDark}/>
          </div>
          <div className="toggle-icon col2 flex-item">
            <ThemeToggle />
          </div>
        </div>
      </StyledHeader>
    )
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

// Header.defaultProps = {
//   siteTitle: ``,
// };

export default Header
