import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Library from "../components/library/library"

export default ({ data, pageContext }) => {
  const page = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === pageContext.slug
  )[0].node

  const lib_path = page.frontmatter.file_library_root_path

  return (
    <Layout
      path={pageContext.slug}
      MaxWidth={700}
      centerContent
      hideSideNav={pageContext.slug == "/pdrs/"}
    >
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
      {lib_path !== null && lib_path !== "" ? (
        <Library rootDir={lib_path} />
      ) : null}
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
            carousel_images {
              publicURL
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