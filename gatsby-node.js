const path = require(`path`)

const templates = {
  facility_page: path.resolve("./src/templates/facility-page.js"),
  cos_page: path.resolve("./src/templates/cos-page.js"),
  sustain_kr_page: path.resolve("./src/templates/sustain-kr-cx-page.js"),
  sustain_cx_page: path.resolve("./src/templates/sustain-kr-cx-page.js"),
  generic_page: path.resolve("./src/templates/generic-page.js"),
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
      console.log("[ creating page ] " + node.frontmatter.slug)
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

/// Below allows us to use uswds

const webpack = require("webpack")
const uswdsRoot = "node_modules/uswds"
const shims = "shims"

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Until uswds exports the components individually
        uswds_components: path.resolve(
          __dirname,
          uswdsRoot,
          "src/js/components"
        ),
        uswds_images: path.resolve(__dirname, uswdsRoot, "dist/img"),
        // Until uswds exports the polyfills individually, though this doesn't totally fix things
        // because some polyfills are included no matter what, see below
        uswds_polyfills: path.resolve(__dirname, uswdsRoot, "src/js/polyfills"),
        // until the `uswds-react` library is created, just a helper for now
        "uswds-react": path.resolve(__dirname, "src/lib"),
        /**
         * Reroute and shim some polyfills to be able to statically render
         */
        "element-closest": path.resolve(__dirname, shims, "element-closest"),
        "element-closest-orig": path.resolve(
          __dirname,
          "node_modules/element-closest"
        ),
        "elem-dataset": path.resolve(__dirname, shims, "elem-dataset"),
        "elem-dataset-orig": path.resolve(
          __dirname,
          "node_modules/elem-dataset"
        ),
      },
    },
  })
}
