const path = require(`path`)

const templates = {
  facility_page: path.resolve("./src/templates/facility-page.js"),
  cos_page: path.resolve("./src/templates/cos-page.js"),
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              doc_type
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node.frontmatter.slug)
      if (node.frontmatter.doc_type in templates) {
        createPage({
          path: node.frontmatter.slug,
          component: templates[node.frontmatter.doc_type],
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.frontmatter.slug,
          },
        })
      }
    })
  })
}
