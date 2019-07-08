import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Carousel from "../components/mrsi-carousel"
import Library from "../components/library/library"

function getData(slug, data) {
  // find the cos that matches the slug
  const cos = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === slug
  )[0].node
  // then find all facilities associated with this cos
  const facilities = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.facility_cos_short_name ===
      cos.frontmatter.cos_short_name
  )

  return {
    facilities,
    cos,
  }
}

export default ({ data, pageContext }) => {
  const { facilities, cos } = getData(pageContext.slug, data)
  const lib_path = cos.frontmatter.file_library_root_path
  return (
    <Layout path={pageContext.slug}>
      <div style={{ maxWidth: 700, margin: "auto" }}>
        <h1>{cos.frontmatter.cos_long_name}</h1>
        <Carousel imgs={cos.frontmatter.carousel_images} />
        <div dangerouslySetInnerHTML={{ __html: cos.html }} />
        {lib_path !== null && lib_path !== "" ? (
          <Library rootDir={lib_path} />
        ) : null}
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
            facility_long_name
            facility_short_name
            related_links {
              url
              caption
            }
            title
            facility_technical_poc_email
            doc_type
            facility_category_codes
            facility_cos_short_name
            facility_functional_proponent
            facility_technical_poc_name
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
