import React from "react"
import styled from "styled-components"
import ContactForm from "../components/contactForm"
import Icon from "../components/icon"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { TransitionGroup, CSSTransition } from "react-transition-group"

const StyledContact = styled.div`
  .card {
    background-color: #777777;
    border: 1px solid #4d5261; //#0ea5e9;
    border-radius: 18px;
    padding: 60px 0 40px;
    margin: 0 100px;
    opacity: 0.8;
  }

  .form-wrapper {
    margin: 20px 0;
    padding: 20px 0;
  }

  .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .flex-center > div {
      padding: 0 10px;
  }

  .mg {
    margin: 10px 0 0;
  }
`

interface Props {
  location: string
}

const ContactPage = (props: Props) => {
  const icon = {
    prefix: "si",
    name: "SiBuymeacoffee",
    color: "#da8eb6",
    size: "2rem",
  }

  return (
    <StyledContact>
      <Layout location={props.location}>
        <SEO title="Contact" />
        <div className="page-wrap card">
          <h2 className="center">
            Think I can help?
            <br />
            Let's grab some coffee, virtual or in person!
            <span></span>
          </h2>
          <div className="flex-center mg">
            <Icon icon={icon} />
            <Icon icon={icon} />
          </div>
          <div className="form-wrapper">
            <ContactForm />
          </div>
        </div>
      </Layout>
    </StyledContact>
  )
}

export default ContactPage
