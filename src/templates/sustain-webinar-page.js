import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import YouTube from "react-youtube"

export default ({ data, pageContext }) => {
  const pageData = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === pageContext.slug
  )[0].node
  console.log(pageData)

  const opts = {
    height: "390",
    width: "640",
  }

  return (
    <Layout path={pageContext.slug} MaxWidth={700} centerContent>
      <YouTube
        videoId={pageData.frontmatter.sustain_webinar_youtube_video_id}
      />

      <div class={"md"} dangerouslySetInnerHTML={{ __html: pageData.html }} />
    </Layout>
  )
}

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
