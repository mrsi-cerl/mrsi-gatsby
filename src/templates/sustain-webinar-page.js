import React from "react"
import { graphql, Link } from "gatsby"
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
      <Link to={"/sustain/webinars"}> ← Back to all Webinars</Link>
      <h1>{pageData.frontmatter.title}</h1>
      <p>{"Presented By " + pageData.frontmatter.sustain_webinar_presenter}</p>
      <p>
        {"Broadcast Date: " +
          pageData.frontmatter.sustain_webinar_broadcast_date}
      </p>
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
