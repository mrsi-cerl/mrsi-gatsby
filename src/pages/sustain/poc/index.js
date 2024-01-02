import { Link, graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout/layout";
import Seo from "../../../components/seo";

const getTableData = data => {
  const cx_pages = data.allMarkdownRemark.edges.filter(
    edge =>
      (edge.node.frontmatter.doc_type === "sustain_cx_page" ||
      edge.node.frontmatter.doc_type === "sustain_kr_page") &&
      !edge.node.frontmatter.draft
  )

  cx_pages.sort((a, b) => {
    if (a.node.frontmatter.title < b.node.frontmatter.title) {
      return -1
    }
    if (a.node.frontmatter.title > b.node.frontmatter.title) {
      return 1
    }
    return 0
  })

  return cx_pages
}

const SustainPOC = ({ data }) => {
  const tableData = getTableData(data)
  return (
    <Layout path="/sustain/poc" centerContent MaxWidth={ 900 }>
      <h1>Points of Contact</h1>
      <table className="usa-table">
        <thead>
          <tr>
            <th>Subject Matter Area</th>
            <th>Community of Practice (CoP)</th>
            <th>HQ USACE Proponent</th>
            <th>General Email Contact</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((e, idx) => (
            <tr key={idx}>
              <td>
                <Link to={e.node.frontmatter.slug}>
                  {" "}
                  {e.node.frontmatter.title}
                </Link>
              </td>
              <td>
              { e.node.frontmatter?.sustain_cop_1_url && <div style={{ whiteSpace: 'nowrap' }}>
                  <a href={ e.node.frontmatter?.sustain_cop_1_url } target="_blank" rel="noopener noreferrer">
                    {  e.node.frontmatter?.sustain_cop_1_name }
                  </a>
                </div> }                
                { e.node.frontmatter?.sustain_cop_2_url && <div style={{ whiteSpace: 'nowrap' }}>
                  <a href={ e.node.frontmatter?.sustain_cop_2_url } target="_blank" rel="noopener noreferrer">
                    {  e.node.frontmatter?.sustain_cop_2_name }
                  </a>
                </div> }
                { e.node.frontmatter?.sustain_cop_3_url && <div style={{ whiteSpace: 'nowrap' }}>
                  <a href={ e.node.frontmatter?.sustain_cop_3_url } target="_blank" rel="noopener noreferrer">
                    {  e.node.frontmatter?.sustain_cop_3_name }
                  </a>
                </div> }
                { e.node.frontmatter?.sustain_cop_4_url && <div style={{ whiteSpace: 'nowrap' }}>
                  <a href={ e.node.frontmatter?.sustain_cop_4_url } target="_blank" rel="noopener noreferrer">
                    {  e.node.frontmatter?.sustain_cop_4_name }
                  </a>
                </div> }
                { e.node.frontmatter?.sustain_cop_5_url && <div style={{ whiteSpace: 'nowrap' }}>
                  <a href={ e.node.frontmatter?.sustain_cop_5_url } target="_blank" rel="noopener noreferrer">
                    {  e.node.frontmatter?.sustain_cop_5_name }
                  </a>
                </div>  }
              </td>
              <td>
              { e.node.frontmatter?.sustain_hq_usace_proponent_1_name && <div style={{ whiteSpace: 'nowrap' }}>
                  <a
                    href={
                      "mailto:" +
                      e.node.frontmatter?.sustain_hq_usace_proponent_1_email
                    }>
                    {e.node.frontmatter?.sustain_hq_usace_proponent_1_name}
                  </a>
                </div> }
                { e.node.frontmatter?.sustain_hq_usace_proponent_2_name && <div style={{ whiteSpace: 'nowrap' }}>
                      <a href={ "mailto:" + e.node.frontmatter?.sustain_hq_usace_proponent_2_email }>
                        { e.node.frontmatter?.sustain_hq_usace_proponent_2_name }
                      </a>
                </div> }
                { e.node.frontmatter?.sustain_hq_usace_proponent_3_name && <div style={{ whiteSpace: 'nowrap' }}>
                      <a href={ "mailto:" + e.node.frontmatter?.sustain_hq_usace_proponent_3_email }>
                        { e.node.frontmatter?.sustain_hq_usace_proponent_3_name }
                      </a>
                </div> }
                { e.node.frontmatter?.sustain_hq_usace_proponent_4_name && <div style={{ whiteSpace: 'nowrap' }}>
                      <a href={ "mailto:" + e.node.frontmatter?.sustain_hq_usace_proponent_4_email }>
                        { e.node.frontmatter?.sustain_hq_usace_proponent_4_name }
                      </a>
                </div> }
                { e.node.frontmatter?.sustain_hq_usace_proponent_5_name && <div style={{ whiteSpace: 'nowrap' }}>
                      <a href={ "mailto:" + e.node.frontmatter?.sustain_hq_usace_proponent_5_email }>
                        { e.node.frontmatter?.sustain_hq_usace_proponent_5_name }
                      </a>
                </div> }
              </td>
              <td>
                <a
                  href={
                    "mailto:" + e.node.frontmatter.sustain_general_email_email
                  }
                >
                  {e.node.frontmatter.sustain_general_email_name}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
export default SustainPOC

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
            file_library_root_path
            page_last_reviewed
            draft
            slug
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
          }
          html
        }
      }
    }
  }
`

export const Head = () => <Seo title="Sustain POC" />;
