import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to MRSI</h1>
    <p />
    <p />

    <Link to="/page-2/">Go to page 2</Link>

    <section class="site-hero">
      <div class="grid-container">hello</div>
    </section>
    <section class="usa-section usa-graphic-list grid-container">hello</section>
  </Layout>
)

export default IndexPage
