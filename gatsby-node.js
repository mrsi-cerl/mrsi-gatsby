const path = require(`path`)

const docTypes = {
  facility_page: {
    template: path.resolve("./src/templates/facility-page.js"),
    createSlug: node => {
      const { cos_district_short_name, facility_short_name } = node.frontmatter
      return (
        "/cos/" +
        cos_district_short_name +
        "/" +
        facility_short_name +
        "/"
      ).toLowerCase()
    },
  },
  center_page: {
    template: path.resolve("./src/templates/center-page.js"),
    createSlug: node => {
      const { cos_short_name } = node.frontmatter
      return ("/cos/" + cos_short_name + "/").toLowerCase()
    },
  },
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.document_type in docTypes
  ) {
    createNodeField({
      node,
      name: `slug`,
      value: docTypes[node.frontmatter.document_type].createSlug(node),
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              document_type
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.document_type in docTypes) {
        createPage({
          path: node.fields.slug,
          component: docTypes[node.frontmatter.document_type].template,
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      }
    })
  })
}
