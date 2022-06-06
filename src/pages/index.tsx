import { Session } from "inspector"
import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Quotes from "../data/quotes"
import SEO from "../components/seo"

interface Props {
  location: string
}

const IndexPage = (props: Props) => (
  <Layout location={props.location}>
    <div className="row flex-align-start">
      <div className="col8">
        <SEO title="Home" />
        <h3>Hi! My name is</h3>
        <h1>
          <PageTitle title="Ryan Heath" className="main-page-header elastic" />
        </h1>
      </div>
      <div className="col3">
        <Quotes />
      </div>
    </div>
  </Layout>
)

export default IndexPage
