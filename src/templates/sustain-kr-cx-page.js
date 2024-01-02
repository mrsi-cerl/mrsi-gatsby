import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import Library from "../components/library/library";
import Carousel from "../components/mrsi-carousel";
import MrsiTable from "../components/mrsi-table";
import RelatedLinks from "../components/relatedLinks";
import Seo from "../components/seo";

const getCXInfo = ( data, slug ) => {
  return data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === slug
  )[ 0 ].node;
};

const getTableData = data => {
  const tableData = [
    {
      title: "General Email Contact:",
      value: (
        <a
          href={ "mailto:" + data.frontmatter.sustain_general_email_email }
        >
          { data.frontmatter.sustain_general_email_name }
        </a>
      ),
    },
    {
      title: <u>Related CoPs</u>,
      value: (
        <strong><u>HQ USACE Proponent</u></strong>
      ),
    },
    {
      title: (
        <div>
          <a href={ data.frontmatter.sustain_cop_1_url } target="_blank" rel="noopener noreferrer">
            {  data.frontmatter.sustain_cop_1_name }
          </a>*
        </div>
      ),
      value: (
        <a href={ "mailto:" + data.frontmatter.sustain_hq_usace_proponent_1_email }>
          { data.frontmatter.sustain_hq_usace_proponent_1_name }
        </a>
      ),
    },
  ];

  if (data.frontmatter.sustain_cop_2_name)
  {
    tableData.push(
      {
        title: (
          <div>
            <a href={ data.frontmatter.sustain_cop_2_url } target="_blank" rel="noopener noreferrer">
              {  data.frontmatter.sustain_cop_2_name }
            </a>*
          </div>
        ),
        value: (
          <a href={ "mailto:" + data.frontmatter.sustain_hq_usace_proponent_2_email }>
            { data.frontmatter.sustain_hq_usace_proponent_2_name }
          </a>
        ),
      },
    )
  } 

  if (data.frontmatter.sustain_cop_3_name)
  {
    tableData.push(
      {
        title: (
          <div>
            <a href={ data.frontmatter.sustain_cop_3_url } target="_blank" rel="noopener noreferrer">
              {  data.frontmatter.sustain_cop_3_name }
            </a>*
          </div>
        ),
        value: (
          <a href={ "mailto:" + data.frontmatter.sustain_hq_usace_proponent_3_email }>
            { data.frontmatter.sustain_hq_usace_proponent_3_name }
          </a>
        ),
      },
    )
  } 

  if (data.frontmatter.sustain_cop_4_name)
  {
    tableData.push(
      {
        title: (
          <div>
            <a href={ data.frontmatter.sustain_cop_4_url } target="_blank" rel="noopener noreferrer">
              {  data.frontmatter.sustain_cop_4_name }
            </a>*
          </div>
        ),
        value: (
          <a href={ "mailto:" + data.frontmatter.sustain_hq_usace_proponent_4_email }>
            { data.frontmatter.sustain_hq_usace_proponent_4_name }
          </a>
        ),
      },
    )
  } 

  if (data.frontmatter.sustain_cop_5_name)
  {
    tableData.push(
      {
        title: (
          <div>
            <a href={data.frontmatter.sustain_cop_5_url } target="_blank" rel="noopener noreferrer">
              {  data.frontmatter.sustain_cop_5_name }
            </a>*
          </div>
        ),
        value: (
          <a href={ "mailto:" + data.frontmatter.sustain_hq_usace_proponent_5_email }>
            { data.frontmatter.sustain_hq_usace_proponent_5_name }
          </a>
        ),
      },
    )
  } 
  return tableData;
};

const SustainKrCxPage = ( { data, pageContext } ) => {
  const pageData = getCXInfo( data, pageContext.slug );
  const lib_path = pageData.frontmatter.file_library_root_path;
  // console.log(pageData)
  return (
    <Layout path={ pageContext.slug } centerContent MaxWidth={ 900 }>
      <h1>{ pageData.frontmatter.title }</h1>
      <div className="grid-row">
        <div className="tablet:grid-col">
          <Carousel imgs={ pageData.frontmatter.carousel_images } />
        </div>
        <div className="tablet:grid-col" style={ { paddingLeft: 10 } }>
          <MrsiTable data={ getTableData( pageData ) } />
          *May require CAC login
        </div>
      </div>

      <div
        className={ "md" }
        dangerouslySetInnerHTML={ { __html: pageData.html } }
      />
      <RelatedLinks related_links={ pageData.frontmatter.related_links } />
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
            cos_long_name
            cos_manager_email
            cos_manager_name
            cos_short_name
            facility_long_name
            facility_short_name
            related_links {
              url
              caption
            }
            carousel_images
            title
            facility_technical_poc_email
            doc_type
            facility_category_codes
            facility_cos_short_name
            facility_functional_proponent
            facility_technical_poc_name
            sustain_general_email_name
            sustain_general_email_email
            sustain_cop_1_name
            sustain_cop_1_url
            sustain_hq_usace_proponent_1_name
            sustain_hq_usace_proponent_1_email
            sustain_cop_2_name
            sustain_cop_2_url
            sustain_hq_usace_proponent_2_name
            sustain_hq_usace_proponent_2_email
            sustain_cop_3_name
            sustain_cop_3_url
            sustain_hq_usace_proponent_3_name
            sustain_hq_usace_proponent_3_email
            sustain_cop_4_name
            sustain_cop_4_url
            sustain_hq_usace_proponent_4_name
            sustain_hq_usace_proponent_4_email
            sustain_cop_5_name
            sustain_cop_5_url
            sustain_hq_usace_proponent_5_name
            sustain_hq_usace_proponent_5_email
            file_library_root_path
            page_last_reviewed
            draft
            slug
          }
          html
        }
      }
    }
  }
`;

export default SustainKrCxPage;

export const Head = () => <Seo title="Sustainability CX" />;
