import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function getData(slug, data) {
  console.log(data)

  const facility = data.allMarkdownRemark.edges.filter(
    edge => edge.node.fields.slug === slug
  )[0].node

  const cos = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.cos_short_name ===
      facility.frontmatter.cos_district_short_name
  )[0].node

  console.log(facility)
  console.log(cos)
}

export default ({ data, pathContext }) => {
  const { slug } = pathContext

  getData(slug, data)
  //const post = data.markdownRemark
  return (
    <Layout>
      <div>
        {/* <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        this is a facility page
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
