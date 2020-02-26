import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../../components/layout/layout"

const getTableData = data => {
  const cx_pages = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.doc_type === "sustain_cx_page" ||
      edge.node.frontmatter.doc_type === "sustain_kr_page"
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
    <Layout path="/sustain/poc" MaxWidth={700} centerContent>
      <h1>Centers of Expertise POC</h1>
      <table className="usa-table">
        <thead>
          <tr>
            <th>Center of Expertise</th>
            <th>MSC Program Manager</th>
            <th>MSC Technical Lead</th>
            <th>HQ USACE Proponent</th>
            <th>USACE Liaison</th>
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
                <a
                  href={
                    "mailto:" +
                    e.node.frontmatter.sustain_msc_program_manager_email
                  }
                >
                  {e.node.frontmatter.sustain_msc_program_manager_name}
                </a>
              </td>
              <td>
                <a
                  href={
                    "mailto:" +
                    e.node.frontmatter.sustain_msc_technical_lead_email
                  }
                >
                  {e.node.frontmatter.sustain_msc_technical_lead_name}
                </a>
              </td>
              <td>
                <a
                  href={
                    "mailto:" +
                    e.node.frontmatter.sustain_hq_usace_proponent_email
                  }
                >
                  {e.node.frontmatter.sustain_hq_usace_proponent_name}
                </a>
              </td>
              <td>
                <a
                  href={
                    "mailto:" + e.node.frontmatter.sustain_erdc_liaison_email
                  }
                >
                  {e.node.frontmatter.sustain_erdc_liaison_name}
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
            slug
            sustain_msc_program_manager_name
            sustain_msc_program_manager_email
            sustain_msc_technical_lead_name
            sustain_msc_technical_lead_email
            sustain_hq_usace_proponent_name
            sustain_hq_usace_proponent_email
            sustain_erdc_liaison_name
            sustain_erdc_liaison_email
          }
          html
        }
      }
    }
  }
`
