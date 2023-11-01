import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import Library from "../components/library/library";
import RelatedLinks from "../components/relatedLinks";
import Seo from "../components/seo";

const GenericNoSideNavPage = ( { data, pageContext } ) => {
  const page = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === pageContext.slug
  )[ 0 ].node;

  const lib_path = page.frontmatter.file_library_root_path;

  return (
    <Layout title="MCA/AFH Code 2" path={ pageContext.slug } hideSideNav centerContent MaxWidth={ 900 }>
      <h1>{ page.frontmatter.title }</h1>
      <div className={ "md" } dangerouslySetInnerHTML={ { __html: page.html } } />
      <RelatedLinks related_links={ page.frontmatter.related_links } />
      <Library rootDir={ lib_path } />
    </Layout>
  );
};

export default GenericNoSideNavPage;

export const Head = () => <Seo title="MCA/AFH Code 2" />;
