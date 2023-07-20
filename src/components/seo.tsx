/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo ( { description, title, children }: any ) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{ title ? `${title} | ${defaultTitle}` : defaultTitle }</title>
      <meta name="description" content={ metaDescription } />
      <meta property="og:title" content={ title || defaultTitle } />
      <meta property="og:description" content={ metaDescription } />
      <meta property="og:type" content="website" />
      { children }
    </>
  );
}

export default Seo;
