import React from "react"
import ThemeContext from "./themeContext"
import { CgToggleOff, CgToggleOn } from "react-icons/cg"
import { FiSun, FiMoon } from "react-icons/fi"

// const ThemeToggle = ({ isDark, toggleTheme, parentCallback }) => {
const ThemeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div>
          {context.dark === true ? (
            <FiMoon onClick={context.toggleDark} />
          ) : (
            <FiSun onClick={context.toggleDark} />
            //     <CgToggleOff onClick={context.toggleDark} />
            //   ) : (
            //     <CgToggleOn onClick={context.toggleDark} />
          )}
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeToggle
