import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import Library from "../components/library/library";
import Carousel from "../components/mrsi-carousel";
import MrsiTable from "../components/mrsi-table";
import Seo from "../components/seo";

function getData ( slug, data ) {
  // find the facility that matches this pages slug
  const facility = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === slug
  )[ 0 ].node;
  // then find the cos associated with this facility
  const cos = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.cos_short_name ===
      facility.frontmatter.facility_cos_short_name
  )[ 0 ].node;

  return {
    facility,
    cos,
  };
}

const FacilityPage = ( { data, pageContext } ) => {
  const { facility, cos } = getData( pageContext.slug, data );
  // console.log(facility)
  const tableData = [
    {
      title: "Functional Proponent",
      value: facility.frontmatter.facility_functional_proponent,
    },
    {
      title: "Technical POC",
      value: (
        <a href={ "mailto:" + facility.frontmatter.facility_technical_poc_email }>
          { facility.frontmatter.facility_technical_poc_name }
        </a>
      ),
    },
    {
      title: "COS Manager",
      value: (
        <a
          href={
            "mailto:" +
            ( facility.frontmatter.cos_manager_email
              ? facility.frontmatter.cos_manager_email
              : cos.frontmatter.cos_manager_email )
          }
        >
          { facility.frontmatter.cos_manager_name
            ? facility.frontmatter.cos_manager_name
            : cos.frontmatter.cos_manager_name }
        </a>
      ),
    },
    {
      title: "Category Code(s)",
      value: facility.frontmatter.facility_category_codes.join( ", " ),
    },
  ];

  return (
    <Layout path={ pageContext.slug } centerContent MaxWidth={ 900 }>
      <div style={ { paddingLeft: 20 } }>
        <h1>{ facility.frontmatter.facility_long_name }</h1>
        <div className="grid-row">
          <div className="tablet:grid-col">
            <Carousel imgs={ facility.frontmatter.carousel_images } />
          </div>
          <div className="tablet:grid-col" style={ { paddingLeft: 10 } }>
            <MrsiTable data={ tableData } />
          </div>
        </div>

        <div
          className={ "md" }
          dangerouslySetInnerHTML={ { __html: facility.html } }
        />
        <Library rootDir={ facility.frontmatter.file_library_root_path } />
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
            carousel_images
            facility_short_name
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

export default FacilityPage;

export const Head = () => <Seo title="COS Facility" />;
