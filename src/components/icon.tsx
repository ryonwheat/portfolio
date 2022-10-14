import React from "react"
import { IconContext } from "react-icons"
import * as FI from "react-icons/fi"
import * as SI from "react-icons/si"
import styled from "styled-components"

interface Props {
  name?: string
  url?: string
  type?: string
  icon?: Icon
}

interface Icon {
  prefix: string
  name: string
  className?: string
  color?: string
  size?: any
  type?: string
  url?: string
}

const StyledIcon = styled.div`
  display: inline;
  // display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;

  :hover {
    color: #ffffc1 !important;
  }

  svg:hover {
    color: #ffffff !important;
  }

  a:hover {
    color: inherit;
  }
`

const temp = React.lazy(() => import(`react-icons/fi`))
console.log("lazy fi: ", temp)

const Icon = ({ icon, url }: Props) => {
  console.log("Icon: ", icon)
  if (icon && (icon.prefix === "fi" || icon.prefix === "si")) {
    const tempIcon =
      icon.prefix === "si"
        ? React.createElement(SI[icon.name])
        : icon.prefix === "fi"
        ? React.createElement(FI[icon.name])
        : null
    const iconEl = (
      <StyledIcon>
        <IconContext.Provider value={{ size: icon.size }}>
          {tempIcon}
        </IconContext.Provider>
      </StyledIcon>
    )
    const elem = url ? (
      <a href={url} target="_blank" title={icon.name}>
        {iconEl}
      </a>
    ) : (
      iconEl
    )
    //   const tempFI = icon.prefix === "fi" ? require(`react-icons/${icon.prefix}`).default : null
    //   const tempFI = icon.prefix === "fi" ? React.lazy(() => import(`react-icons/fi`)) : null
    return elem
  } else {
    return <></>
  }
}

export default Icon
