import { Accordion } from "@trussworks/react-uswds";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout/layout";
import Library from "../../../components/library/library";
import Seo from "../../../components/seo";

const StandardDesigns = ( { data } ) => {
  const facilities = data.allMarkdownRemark.edges.filter(
    e =>
      (e.node.frontmatter.doc_type === "facility_page" || e.node.frontmatter.doc_type === "facility_page_hnc") &&
      !e.node.frontmatter.draft
  );
  facilities.sort( ( a, b ) => {
    if (
      a.node.frontmatter.facility_long_name <
      b.node.frontmatter.facility_long_name
    ) {
      return -1;
    } else {
      return 1;
    }
  } );

  const hasFiles = path => {
    let count = 0;
    for ( var i = 0; i < data.allS3ListBucketJson.nodes.length; i++ ) {
      if ( data.allS3ListBucketJson.nodes[ i ].Key.includes( path ) ) {
        count = count + 1;
      }
    }

    if ( count > 0 ) {
      return true;
    }
    return false;
  };

  const names = facilities.map( ( f ) => {
    const content =
      hasFiles(
        f.node.frontmatter.file_library_root_path + "Standard Designs/"
      ) ? (
        <Library
          hideBC
          hideTitle
          rootDir={
            f.node.frontmatter.file_library_root_path + "Standard Designs/"
          }
        />
      ) : <span><b>No files are available for this facility type</b></span>;

    return (
      {
        title: f.node.frontmatter.facility_long_name,
        content: content,
        expdanded: false,
        id: f.node.frontmatter.facility_short_name,
        headingLevel: 'h4'
      }
    );
  } );

  return (
    <Layout path="/cos/standard-designs" centerContent MaxWidth={ 900 }>
      <h1>Standard Designs</h1>
      <Accordion bordered={ false } multiselectable={ true } items={ names } />
    </Layout>
  );
};

export default StandardDesigns;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            facility_long_name
            facility_short_name
            doc_type
            facility_cos_short_name
            file_library_root_path
            page_last_reviewed
            slug
            draft
          }
        }
      }
    }
    allS3ListBucketJson {
      nodes {
        Key
        Size
        LastModified
      }
    }
  }
`;

export const Head = () => <Seo title="Standard Designs" />;
