import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Library from "../components/library/library"
import RelatedLinks from "../components/relatedLinks"

export default ({ data, pageContext }) => {
  const page = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === pageContext.slug
  )[0].node

  const lib_path = page.frontmatter.file_library_root_path

  return (
    <Layout path={pageContext.slug} MaxWidth={700} centerContent>
      <h1>{page.frontmatter.title}</h1>
      <div className={"md"} dangerouslySetInnerHTML={{ __html: page.html }} />
      <RelatedLinks related_links={page.frontmatter.related_links} />
      <Library rootDir={lib_path} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            doc_type
            name_of_center
            place_of_center
            center_type
            website
            center_poc_name
            center_poc_phone_number
            hq_poc_name
            hq_division
            er_number
            er_link
            er_publication_date
            activation_date
            recertification_date
            center_functional_proponent
            file_library_root_path
            page_last_reviewed
            title
            slug
          }
          html
        }
      }
    }
  }
`
