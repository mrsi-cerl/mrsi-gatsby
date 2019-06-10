import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function getData(slug, data) {
  // find the cos that matches this pages slug
  const cos = data.allMarkdownRemark.edges.filter(
    edge => edge.node.fields.slug === slug
  )[0].node
  // then find all facilities associated with this cos
  const facilities = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.cos_district_short_name ===
      cos.frontmatter.cos_short_name
  )

  return {
    facilities,
    cos,
  }
}

export default ({ data, pathContext }) => {
  const { facilities, cos } = getData(pathContext.slug, data)
  console.log(facilities)
  console.log(cos)

  return (
    <Layout>
      <div>
        <h1>{cos.frontmatter.cos_long_name}</h1>
        <div dangerouslySetInnerHTML={{ __html: cos.html }} />
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
            category_codes
            cos_district_short_name
            cos_manager_name
            cos_short_name
            document_type
            facility_long_name
            facility_short_name
            functional_proponent
            pictures
            related_links {
              url
              name
            }
            technical_poc_email
            technical_poc_name
            cos_manager_email
            cos_long_name
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`
