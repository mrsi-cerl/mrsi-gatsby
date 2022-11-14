import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Library from "../components/library/library"
import Carousel from "../components/mrsi-carousel"

// import Card from "react-bootstrap/Card"
// import Breadcrumb from "react-bootstrap/Breadcrumb"
// import ListGroup from "react-bootstrap/ListGroup"
// import Table from "react-bootstrap/Table"

import MrsiTable from "../components/mrsi-table"

function getData(slug, data) {
  // find the cneter that matches this pages slug
  const center = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === slug
  )[0].node
  // then find the cos associated with this facility
  const cos = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.cos_short_name ===
      facility.frontmatter.center_cos_short_name
  )[0].node

  return {
    facility,
    cos,
  }
}

export default ({ data, pageContext }) => {
  const { center, cos } = getData(pageContext.slug, data)
  // console.log(center)
  const tableData = [
    {
      title: "Functional Proponent:",
      value: center.frontmatter.center_functional_proponent,
    },
    {
      title: "Technical POC:",
      value: (
        <a href={"mailto:" + center.frontmatter.center_technical_poc_email}>
          {center.frontmatter.center_technical_poc_name}
        </a>
      ),
    },
    {
      title: "COS Manager:",
      value: (
        <a
          href={
            "mailto:" +
            (center.frontmatter.cos_manager_email
              ? center.frontmatter.cos_manager_email
              : cos.frontmatter.cos_manager_email)
          }
        >
          {center.frontmatter.cos_manager_name
            ? center.frontmatter.cos_manager_name
            : cos.frontmatter.cos_manager_name}
        </a>
      ),
    },
    {
      title: "Category Code(s):",
      value: center.frontmatter.center_category_codes.join(", "),
    },
  ]

  return (
    <Layout path={pageContext.slug} MaxWidth={700} centerContent>
      <div style={{ paddingLeft: 20 }}>
        <h1>{center.frontmatter.center_long_name}</h1>
        <div className="grid-row">
          <div className="tablet:grid-col">
            <Carousel imgs={center.frontmatter.carousel_images} />
          </div>
          <div className="tablet:grid-col" style={{ paddingLeft: 10 }}>
            <MrsiTable data={tableData} />
          </div>
        </div>

        <div
          className={"md"}
          dangerouslySetInnerHTML={{ __html: center.html }}
        />
        <Library rootDir={facility.frontmatter.file_library_root_path} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            cos_long_name
            cos_manager_email
            cos_manager_name
            cos_short_name
            center_long_name
            carousel_images
            center_short_name
            related_links {
              url
              caption
            }
            title
            center_technical_poc_email
            doc_type
            center_category_codes
            center_cos_short_name
            center_functional_proponent
            center_technical_poc_name
            file_library_root_path
            page_last_reviewed
            slug
          }
          html
        }
      }
    }
  }
`
