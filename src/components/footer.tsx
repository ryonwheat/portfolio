import React from "react"
import ThemeContext from "./themeContext"
import Icon from "./icon"
import styled from "styled-components"

interface Props {
  socialMedia: SocialMedia[]
  siteContact: SiteContact
}

interface SocialMedia {
  name: string
  url: string
  icon: {
    prefix: string
    name: string
    color: string
    size: string
  }
}

interface SiteContact {
  email: string
}

const Footer = ({ socialMedia, siteContact }: Props) => {
//   console.log("Footer props: ", socialMedia, siteContact)

  fetch("https://api.github.com/repos/ryonwheat/gatsby-sandbox")
    .then((response) => response.json())
    .then((json) => {
      const { stargazers_count, forks_count } = json
    //   console.log("Footer json: ", json)
    })
    .catch((e) => console.error(e))

  const StyledFooter = styled.div`
    footer {
      position: relative;
      bottom: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-size: 0.75rem;
      margin: 0 auto;
      padding: 60px 0 15px;
      width: 100%;
      z-index: 0;
    }

    .footerInnerWrap {
      margin: 0 auto;
      max-width: 960px;
      text-align: center;
    }

    .social-icons {
      display: flex;
      margin: 0 auto;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .email-link {
      font-family: "SF Mono", "Fira Code";
    }

    .email-link > a {
      color: var(--accent-foreground-color);
    }

    .email-link > a:hover {
      color: #dfdfdf;
    }

    .copywrite {
      margin: 8px 0;
    }

    .social-list-item {
      display: inline-block;
      margin: 1em 2.2rem;
      font-size: 1.2rem;
    }

    .social-list-item > a {
      color: ${({ theme }) => theme.darkMode.primaryColor};
    }

    .social-list-item > a:hover {
      // color: pink;
      color: ${({ theme }) => theme.darkMode.linkHover.color};
    }
  `

  return (
    <StyledFooter>
      <ThemeContext.Consumer>
        {(context) => (
          <footer>
            <div className="footerInnerWrap">
              <div className="social-icons">
                <ul>
                  {socialMedia.map(({ url, icon }, i) => (
                    <li key={i} className="social-list-item">
                      <a href={url} target="blank">
                        <Icon icon={icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="copywrite">
                Designed and implemented by Ryan Heath
              </div>
              <div className="email-link">
                <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
              </div>
              <div className="copywrite">
                © 2000 - {new Date().getFullYear()}
              </div>
            </div>
          </footer>
        )}
      </ThemeContext.Consumer>
    </StyledFooter>
  )
}

export default Footer
