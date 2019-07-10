import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout/layout"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"

const SustainNews = ({ data }) => {
  const news = data.allMarkdownRemark.edges.filter(
    e => e.node.frontmatter.doc_type == "sustain_news"
  )
  news.sort((a, b) => {
    if (a.node.frontmatter.date_published < b.node.frontmatter.date_published) {
      return -1
    } else {
      return 1
    }
  })

  return (
    <Layout path="/sustain/news" MaxWidth={700} centerContent>
      <h1>Sustainability News</h1>
      {news.map((e, idx) => (
        <Accordion>
          <AccordionButton controls={`sustain-news-section-${idx}`}>
            {e.node.frontmatter.title}
          </AccordionButton>
          <AccordionContent id={`sustain-news-section-${idx}`}>
            <div
              class={"md"}
              dangerouslySetInnerHTML={{ __html: e.node.html }}
            />
          </AccordionContent>
        </Accordion>
      ))}
    </Layout>
  )
}

export default SustainNews

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
