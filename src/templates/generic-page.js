import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

export default ({ data, pageContext }) => {
  return (
    <Layout path={pageContext.slug} MaxWidth={700} centerContent>
      <h1>This is a generic page</h1>
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
