import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

interface Props {
  menuLinks: [
    {
      name: string
      link: string
      render: boolean
    }
  ]
  isDark: boolean
}

const NavLinks = ({ menuLinks, isDark }: Props) => {
  const links = menuLinks.filter((node) => node.render === true)
  //   const [hasMounted, setHasMounted] = useState(false)

  //   useEffect(() => {
  //       setHasMounted(true)
  //   })
  //   console.log("hasMounted: ", hasMounted)
  //   if (!hasMounted) {
  //       return null
  //   }

  const StyledNav = styled.nav<{ isDark: boolean }>`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    text-align: right;

    ul {
      display: inline-block;
      margin: 0 !important;
      list-style: none;
    }

    li {
      display: inline-block;
      position: relative;
      margin: 0px;
      padding: 26px 30px;
      text-align: center;
      text-transform: capitalize;
      transition: all 0.2s;
      z-index: 1;
    }

    li:hover {
      //   background-color: ${({ theme }) => theme.lightMode.backgroundColor};
      //   transition: all 0.2s;
    }

    li:hover a {
      color: ${({ theme }) => theme.darkMode.link.color};
      transition: all 0.2s;
    }

    a {
      color: ${(props) => (props.isDark ? "#ffffff" : "#000000")};
      text-decoration: none;
    }
  `

  return (
    <StyledNav isDark={isDark}>
      <ul>
        {links.map(({ name, link }, i) => (
          <li key={i}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  )
}

export default NavLinks
