import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to MRSI</h1>
    <p />
    <p />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
