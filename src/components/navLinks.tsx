import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// const ListLink = props => (
//   <li>
//     <Link to={props.to}>
//       {props.children}
//     </Link>
//   </li>
// )

interface Props {
  menuLinks: MenuLinks[]
}

interface MenuLinks {
  name: string,
  link: string,
  render: boolean
}

const NavLinks = ({ menuLinks }: Props) => {
  const links = menuLinks.filter(node => node.render === true)

  const StyledNav = styled.nav`
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
        background-color: ${({ theme }) => theme.lightMode.backgroundColor};
        transition: all 0.2s;
      }
      
      li:hover a {
        color: ${({ theme }) => theme.darkMode.backgroundColor};
      }

      a {
        color: #fff;
        text-decoration: none;
      } 
  `

  return (
    <StyledNav>
      <ul>
        {links.map(({ name, link }, i) => (
          <li key={i}>
            <Link to={link}>{name}</Link>
          </li>
          // <ListLink key={i} to={link}>{name}</ListLink>
        ))}
      </ul>
    </StyledNav>
  )
}

export default NavLinks
