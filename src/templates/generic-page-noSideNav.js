import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import Library from "../components/library/library";
import RelatedLinks from "../components/relatedLinks";
import Seo from "../components/seo";

window.page_title = "";

const GenericPageNoSideNav = ( { data, pageContext } ) => {
  const page = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === pageContext.slug
  )[ 0 ].node;

  const lib_path = page.frontmatter.file_library_root_path;
 global.page_title = page.frontmatter.title;

  return (
    <Layout path={ pageContext.slug } hideSideNav centerContent MaxWidth={ 900 }>
      <h1>{global.page_title }</h1>
      <div className={ "md" } dangerouslySetInnerHTML={ { __html: page.html } } />
      <RelatedLinks related_links={ page.frontmatter.related_links } />
      <Library rootDir={ lib_path } />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            doc_type
            related_links {
              url
              caption
            }
            file_library_root_path
            page_last_reviewed
            slug
          }
          html
        }
      }
    }
  }
`;

export default GenericPageNoSideNav;

export const Head = () => <Seo title={global.page_title } />;

