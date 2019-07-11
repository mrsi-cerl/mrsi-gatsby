import React from "react"
import Layout from "../../../components/layout/layout"
import { Link } from "gatsby"

const SustainWebinars = ({ data }) => {
  const webinars = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.doc_type === "sustain_webinar"
  )
  console.log(webinars)
  return (
    <Layout path="/sustain/webinars" MaxWidth={700} centerContent>
      <h1>Sustainability Webinars</h1>
      <ul>
        {webinars.map((e, idx) => (
          <li>
            <Link to={e.node.frontmatter.slug}>{e.node.frontmatter.title}</Link>
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
