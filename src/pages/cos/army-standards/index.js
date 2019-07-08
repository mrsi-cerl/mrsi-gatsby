import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout/layout"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"
import Library from "../../../components/library/library"

const ArmyStandards = ({ data }) => {
  const facilities = data.allMarkdownRemark.edges.filter(
    e => e.node.frontmatter.doc_type == "facility_page"
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

  return (
    <Layout path="/cos/army-standards" MaxWidth={700} centerContent>
      <h1>Army Standards</h1>
      {facilities.map((e, idx) => (
        <Accordion>
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
                e.node.frontmatter.file_library_root_path + "Army Standards/"
              }
            />
          </AccordionContent>
        </Accordion>
      ))}
    </Layout>
  )
}

export default ArmyStandards

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
