import React, { Component, createContext } from "react"

// TODO: move defaults to env
const defaultContext = {
  dark: process.env.GATSBY_DEFAULT_DARK_MODE === 'true',
  // dark: false,
  toggleDark: () => {},
}

const ThemeContext = createContext(defaultContext)

// const supportsDarkMode = () =>
//   window.matchMedia("(prefers-color-scheme: dark)").matches === true

// TODO: look at making this into a generic provider
class ThemeProvider extends Component<{}, { dark: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = {
      // dark: process.env.GATSBY_DEFAULT_DARK_MODE,
      dark: false,
    }
  }

  toggleDark = () => {
    let dark = !this.state.dark
    console.log("themeContext.toggleDark.isDark: " + dark)
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ dark })

    // TODO: this belongs in the consumer, not the context!
    let x = document.getElementsByClassName("skill-icon")
    for (let i = 0; i < x.length; i++) {
      if (dark) {
        x[i].classList.remove("skill-icon-dark")
      } else {
        x[i].classList.add("skill-icon-dark")
      }
    }

    x = document.getElementsByClassName("skill")
    for (let i = 0; i < x.length; i++) {
      if (dark) {
        x[i].classList.remove("skill-light")
      } else {
        x[i].classList.add("skill-light")
      }
    }

    x = document.getElementsByClassName("point")
    for (let i = 0; i < x.length; i++) {
      if (dark) {
        x[i].classList.remove("point-light")
      } else {
        x[i].classList.add("point-light")
      }
    }
  }

  componentDidMount() {
    const isDark = JSON.parse(localStorage.getItem("dark") || "{}")
    console.log("themeContext.componentDidMount.isDark: ", JSON.stringify(isDark))
    if (isDark) {
      console.log("if - isDark: " + isDark)
      this.setState({ dark: isDark })
    } else {
      console.log("else - isDark: " + isDark)
      this.setState({ dark: this.state.dark })
    }
  }

  render() {
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
