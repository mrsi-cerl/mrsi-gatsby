import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import Library from "../components/library/library";
import Carousel from "../components/mrsi-carousel";
import RelatedLinks from "../components/relatedLinks";
import Seo from "../components/seo";

function getData ( slug, data ) {
  // find the cos that matches the slug
  const cos = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === slug
  )[ 0 ].node;
  // then find all facilities associated with this cos
  const facilities = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.facility_cos_short_name ===
      cos.frontmatter.cos_short_name
  );

  return {
    facilities,
    cos,
  };
}

const CosPage = ( { data, pageContext } ) => {
  const { cos } = getData( pageContext.slug, data );
  const lib_path = cos.frontmatter.file_library_root_path;
  // console.log(cos)
  return (
    <Layout path={ pageContext.slug } centerContent MaxWidth={ 900 }>
      <div style={ { maxWidth: 700 } }>
        <h1>{ cos.frontmatter.cos_long_name }</h1>
        <p>
          <strong>COS Manager: </strong>
          <a href={ "mailto:" + cos.frontmatter.cos_manager_email }>
            { cos.frontmatter.cos_manager_name }
          </a>
        </p>
        <Carousel imgs={ cos.frontmatter.carousel_images } />
        <div className={ "md" } dangerouslySetInnerHTML={ { __html: cos.html } } />
        <RelatedLinks related_links={ cos.frontmatter.related_links } />
        <Library rootDir={ lib_path } />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            cos_long_name
            cos_manager_email
            cos_manager_name
            cos_short_name
            facility_long_name
            facility_short_name
            carousel_images
            related_links {
              url
              caption
            }
            title
            facility_technical_poc_email
            doc_type
            facility_category_codes
            facility_cos_short_name
            facility_functional_proponent
            facility_technical_poc_name
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

export default CosPage;

export const Head = () => <Seo title="Center of Standardization" />;
