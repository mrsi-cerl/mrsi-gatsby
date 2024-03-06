const path = require( `path` );

// holds a mapping from doc_type -> template
const templates = {
  facility_page: path.resolve( "./src/templates/facility-page.js" ),
  facility_page_hnc: path.resolve( "./src/templates/facility-page-hnc.js" ),
  cos_page: path.resolve( "./src/templates/cos-page.js" ),
  coe_ctx_page: path.resolve( "./src/templates/coe-ctx-page.js" ),
  coe_mcx_page: path.resolve( "./src/templates/coe-mcx-page.js" ),
  sustain_kr_page: path.resolve( "./src/templates/sustain-kr-cx-page.js" ),
  sustain_cx_page: path.resolve( "./src/templates/sustain-kr-cx-page.js" ),
  generic_page: path.resolve( "./src/templates/generic-page.js" ),
  generic_page2eb: path.resolve( "./src/templates/generic-page2eb.js" ),
  generic_page_noSideNav: path.resolve( "./src/templates/generic-page-noSideNav.js" ),
  sustain_webinar: path.resolve( "./src/templates/sustain-webinar-page.js" ),
  furniture_program_page: path.resolve( "./src/templates/furniture-program-page.js" ),
};

exports.createPages = ( { graphql, actions } ) => {
  const { createPage, createRedirect } = actions;

  // redirect old waiver process link to new link since its referenced in a publication
  createRedirect( {
    fromPath: `/waiverprocess/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/cos/waiver-process/`,
  } );

  createRedirect( {
    fromPath: `/waiverprocess`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/cos/waiver-process/`,
  } );

  // create pages for each markdown file if it is not a draft and its doc_type has a matching template
  return graphql( `
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              doc_type
              slug
              draft
            }
          }
        }
      }
    }
  `).then( result => {
    result.data.allMarkdownRemark.edges.forEach( ( { node } ) => {
      if ( !node.frontmatter.draft && node.frontmatter.doc_type in templates ) {
        createPage( {
          path: node.frontmatter.slug,
          component: templates[ node.frontmatter.doc_type ],
          context: {
            slug: node.frontmatter.slug,
          },
        } );
      }
    } );
  } );
};

/*
  I got tired of ERROR #85923 so defining some types.
  - date_published: comes from sustain/news. gatsby can't infer type if no news md files.
*/
exports.createSchemaCustomization = ( { actions } ) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      date_published: Date
    }
    `;

  createTypes( typeDefs );
};
