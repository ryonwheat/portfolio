import React from "react"
import styled from "styled-components"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { TransitionGroup, CSSTransition } from "react-transition-group"

const StyledContact = styled.div`
  .form-wrapper {
    margin: 30px 0;
    padding: 30px 0;
  }
`

interface Props {
  location: string
}

const ContactPage = (props: Props) => {
  return (
    <StyledContact>
      <Layout location={props.location}>
        <SEO title="Contact" />
        <div className="page-wrap">
          <h2 className="center">
            Think I can help?
            <br />
            Let's talk.
          </h2>
          <div className="form-wrapper">
            <ContactForm />
          </div>
        </div>
      </Layout>
    </StyledContact>
  )
}

export default ContactPage
