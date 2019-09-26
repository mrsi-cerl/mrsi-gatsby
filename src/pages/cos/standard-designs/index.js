import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout/layout"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"
import Library from "../../../components/library/library"

const StandardDesigns = ({ data }) => {
  const facilities = data.allMarkdownRemark.edges.filter(
    e => e.node.frontmatter.doc_type === "facility_page"
  )
  facilities.sort((a, b) => {
    if (
      a.node.frontmatter.facility_long_name <
      b.node.frontmatter.facility_long_name
    ) {
      return -1
    } else {
      return 1
    }
  })

  const hasFiles = path => {
    let count = 0
    for (var i = 0; i < data.allS3ListBucketJson.nodes.length; i++) {
      if (data.allS3ListBucketJson.nodes[i].Key.includes(path)) {
        count = count + 1
      }
    }

    if (count > 0) {
      return true
    }
    return false
  }

  return (
    <Layout path="/cos/standard-designs" MaxWidth={700} centerContent>
      <h1>USACE Standard Designs</h1>
      {facilities.map((e, idx) =>
        hasFiles(
          e.node.frontmatter.file_library_root_path + "Standard Designs/"
        ) ? (
          <Accordion key={e.node.frontmatter.facility_short_name}>
            <AccordionButton controls={`sd-section-${idx}`}>
              {e.node.frontmatter.facility_long_name +
                " (" +
                e.node.frontmatter.facility_short_name +
                ")"}
            </AccordionButton>
            <AccordionContent id={`sd-section-${idx}`}>
              <Library
                hideBC
                hideTitle
                rootDir={
                  e.node.frontmatter.file_library_root_path +
                  "Standard Designs/"
                }
              />
            </AccordionContent>
          </Accordion>
        ) : null
      )}
    </Layout>
  )
}

export default StandardDesigns

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            facility_long_name
            facility_short_name
            doc_type
            facility_cos_short_name
            file_library_root_path
            page_last_reviewed
            slug
          }
        }
      }
    }
    allS3ListBucketJson {
      nodes {
        Key
        Size
        LastModified
      }
    }
  }
`
