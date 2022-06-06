import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconContext } from "react-icons"
// import * as FI from "react-icons/fi"
import * as SI from "react-icons/si"
import {
  FiCodepen,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi"
import {
  SiApache,
  SiApachetomcat,
  SiBootstrap,
  SiExpress,
  SiGatsby,
  SiGnubash,
  SiGooglecloud,
  SiGraphql,
  SiJamstack,
  SiJson,
  SiMacos,
  SiMysql,
  SiOpenssl,
  SiPerl,
  SiRedux,
  SiSalesforce,
  SiSpring,
  SiSpringboot,
  SiTypescript,
  SiVisualstudio,
  SiWindows,
  SiWordpress,
} from "react-icons/si"
import styled from "styled-components"

interface Props {
  name?: string
  url?: string
  type?: string
  icon?: Icon
}

interface Icon {
  prefix: any
  name: any
  className?: string
  color?: string
  size?: any
  type?: string
  url?: string
}

const StyledIcon = styled.div`
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

const Icon = ({ icon, url }: Props) => {
  console.log("Icon: ", icon)
  const tempIcon = React.createElement(SI[icon.name])
  // const tempIcon = require(`react-icons/${icon.prefix}`).default
  console.log("TempIcon: ", tempIcon)
  if (icon) {
    if (icon.prefix === "fab") {
      return (
        <StyledIcon>
          {url ? (
            <a href={url} target="_blank">
              <FontAwesomeIcon
                icon={[icon.prefix, icon.name]}
                size={icon.size}
                className={icon.name}
                style={{ color: icon.color }}
              />
            </a>
          ) : (
            <FontAwesomeIcon
              icon={[icon.prefix, icon.name]}
              size={icon.size}
              className={icon.name}
              style={{ color: icon.color }}
            />
          )}
        </StyledIcon>
      )
    } else if (icon.prefix === "fi" || icon.prefix === "si") {
      return (
        <StyledIcon>
          {url ? (
            <a href={url} target="_blank">
              <IconContext.Provider
                value={{ color: icon.color, size: icon.size }}
              >
                {icon.name === "FiCodepen" && <FiCodepen />}
                {icon.name === "FiFacebook" && <FiFacebook />}
                {icon.name === "FiGithub" && <FiGithub />}
                {icon.name === "FiInstagram" && <FiInstagram />}
                {icon.name === "FiLinkedin" && <FiLinkedin />}
                {icon.name === "SiGatsby" && <SiGatsby />}
                {icon.name === "SiTypescript" && <SiTypescript />}
                {icon.name === "SiRedux" && <SiRedux />}
                {icon.name === "SiJamstack" && <SiJamstack />}
                {icon.name === "SiExpress" && <SiExpress />}
                {icon.name === "SiGooglecloud" && <SiGooglecloud />}
                {icon.name === "SiSalesforce" && <SiSalesforce />}
                {icon.name === "SiWordpress" && <SiWordpress />}
                {icon.name === "SiApachetomcat" && <SiApachetomcat />}
                {icon.name === "SiApache" && <SiApache />}
                {icon.name === "SiMysql" && <SiMysql />}
                {icon.name === "SiGraphql" && <SiGraphql />}
                {icon.name === "SiBootstrap" && <SiBootstrap />}
                {icon.name === "SiSpring" && <SiSpring />}
                {icon.name === "SiVisualstudio" && <SiVisualstudio />}
                {icon.name === "SiGnubash" && <SiGnubash />}
                {icon.name === "SiOpenssl" && <SiOpenssl />}
                {icon.name === "SiSpringboot" && <SiSpringboot />}
                {icon.name === "SiPerl" && <SiPerl />}
                {icon.name === "SiWindows" && <SiWindows />}
                {icon.name === "SiMacos" && <SiMacos />}
                {icon.name === "SiJson" && <SiJson />}
              </IconContext.Provider>
            </a>
          ) : (
            <IconContext.Provider
              value={{ color: icon.color, size: icon.size }}
            >
            <>
              {icon.name === "FiCodepen" && <FiCodepen />}
              {icon.name === "FiFacebook" && <FiFacebook />}
              {icon.name === "FiGithub" && <FiGithub />}
              {icon.name === "FiInstagram" && <FiInstagram />}
              {icon.name === "FiLinkedin" && <FiLinkedin />}
              {icon.name === "SiGatsby" && <SiGatsby />}
              {icon.name === "SiTypescript" && <SiTypescript />}
              {icon.name === "SiRedux" && <SiRedux />}
              {icon.name === "SiJamstack" && <SiJamstack />}
              {icon.name === "SiExpress" && <SiExpress />}
              {icon.name === "SiGooglecloud" && <SiGooglecloud />}
              {icon.name === "SiSalesforce" && <SiSalesforce />}
              {icon.name === "SiWordpress" && <SiWordpress />}
              {icon.name === "SiApachetomcat" && <SiApachetomcat />}
              {icon.name === "SiApache" && <SiApache />}
              {icon.name === "SiMysql" && <SiMysql />}
              {icon.name === "SiGraphql" && <SiGraphql />}
              {icon.name === "SiBootstrap" && <SiBootstrap />}
              {icon.name === "SiSpring" && <SiSpring />}
              {icon.name === "SiVisualstudio" && <SiVisualstudio />}
              {icon.name === "SiGnubash" && <SiGnubash />}
              {icon.name === "SiOpenssl" && <SiOpenssl />}
              {icon.name === "SiSpringboot" && <SiSpringboot />}
              {icon.name === "SiPerl" && <SiPerl />}
              {icon.name === "SiWindows" && <SiWindows />}
              {icon.name === "SiMacos" && <SiMacos />}
              {icon.name === "SiJson" && <SiJson />}
              </>
            </IconContext.Provider>
          )}
        </StyledIcon>
      )
      // switch (icon.name) {
      //   case "FiCodepen":
      //     // return <div dangerouslySetInnerHTML={{ __html: icon }}></div>
      //     return <FiCodepen />
      //   case "FiFacebook":
      //     return <FiFacebook />
      //   case "FiGithub":
      //     return <FiGithub />
      //   case "FiInstagram":
      //     return <FiInstagram />
      //   case "FiLinkedin":
      //     return <FiLinkedin />
      //   default:
      //     return <></>
      // }
    } else {
      return <></>
    }
  } else {
    return <></>
  }
}

export default Icon
