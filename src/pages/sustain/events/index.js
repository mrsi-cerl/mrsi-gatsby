import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout/layout"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"

const SustainEvents = ({ data }) => {
  const news = data.allMarkdownRemark.edges.filter(
    e => e.node.frontmatter.doc_type === "sustain_events"
  )

  return (
    <Layout path="/sustain/events" MaxWidth={700} centerContent>
      <h1>Sustainability Events</h1>
      {news.map((e, idx) => (
        <Accordion key={idx}>
          <AccordionButton controls={`sustain-events-section-${idx}`}>
            {e.node.frontmatter.title}
          </AccordionButton>
          <AccordionContent id={`sustain-events-section-${idx}`}>
            <div
              className={"md"}
              dangerouslySetInnerHTML={{ __html: e.node.html }}
            />
          </AccordionContent>
        </Accordion>
      ))}
    </Layout>
  )
}

export default SustainEvents

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            doc_type
            date_published
          }
          html
        }
      }
    }
  }
`
