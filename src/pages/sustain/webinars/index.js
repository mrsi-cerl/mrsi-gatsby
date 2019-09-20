import React from "react"
import Layout from "../../../components/layout/layout"
import { Link, graphql } from "gatsby"

const SustainWebinars = ({ data }) => {
  const webinars = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.doc_type === "sustain_webinar"
  ).sort(function(a, b) {
    let titleA = a.node.frontmatter.title
    let titleB = b.node.frontmatter.title
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  })

  // console.log(webinars)

  return (
    <Layout path="/sustain/webinars" MaxWidth={700} centerContent>
      <h1>Sustainability Webinars</h1>
      <ul>
        {webinars.map((e, idx) => (
          <li key={idx}>
            <Link to={e.node.frontmatter.slug}>{e.node.frontmatter.title}</Link>
            {" "} - Presented by {e.node.frontmatter.sustain_webinar_presenter}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default SustainWebinars

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            sustain_webinar_presenter
            sustain_webinar_youtube_video_id
            sustain_webinar_broadcast_date
            doc_type
            slug
          }
          html
        }
      }
    }
  }
`
