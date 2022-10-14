import React, { SyntheticEvent, useEffect, useState } from "react"
import ThemeContext from "./themeContext"
import { FiSun, FiMoon } from "react-icons/fi"
import styled from "styled-components"
import { isContext } from "vm"

const ThemeToggle = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  })
  console.log("hasMounted: ", hasMounted)
  if (!hasMounted) {
    return null
  }

  const cb = (context: any) => {
    console.log("cb: ")
    context.toggleDark()
  }

  const handleClick = (event: SyntheticEvent, context: any) => {
    let el = document.getElementById("toggle-icon")

    // const cb = () => {
    //   console.log("cb: ")
    //   // context.toggleDark()
    // }

    if (el) {
      console.log("handleClick: " + el.classList)
      el.classList.add(`toggle-animation`)

      setTimeout(() => {
        el !== null ? el.classList.remove(`toggle-animation`) : null
        context.toggleDark()
        // cb(context)
      }, 1500)
    }
  }

  const StyledToggle = styled.div`
    .toggle-animation {
      animation: animate-icon 1.5s;
    }

    .sun {
        fill: transparent;
        transition: all 0.5s;
      //   animation: rotateSun 1.5s;
    }

    .moon {
        fill: transparent;
        transition: all 0.5s;
    //   transform: rotate(180deg) scale(1.3);
      //   animation: rotateMoon 1.5s;
    }

    .moon:hover {
        fill: ${({ theme }) => theme.darkMode.link.color};
        transition: all 0.5s;
    }

    .sun:hover {
        fill: ${({ theme }) => theme.darkMode.link.color};
        transition: all 0.5s;
    }

    @keyframes rotateSun {
      50% {
        transform: rotate(180deg) scale(1.3);
      }
    }

    @keyframes animate-icon {
      50% {
        transform: rotate(180deg) scale(1.3);
      }
    }
  `

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <StyledToggle>
          <div>
            {context.dark === true ? (
              <FiMoon
                id="toggle-icon"
                onClick={(e) => handleClick(e, context)}
                className="moon"
              />
            ) : (
              <FiSun
                id="toggle-icon"
                onClick={(e) => handleClick(e, context)}
                className="sun"
              />
              //   <FiSun onClick={context.toggleDark} className="sun" />
            )}
          </div>
        </StyledToggle>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeToggle
