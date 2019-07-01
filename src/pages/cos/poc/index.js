import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../../components/layout/layout"

function compare(a, b) {
  if (a.facility_long_name < b.facility_long_name) {
    return -1
  }
  if (a.facility_long_name > b.facility_long_name) {
    return 1
  }
  return 0
}

const getAllFacilities = data =>
  data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.doc_type === "facility_page"
  )

const getCOSForFacility = (data, cos) =>
  data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.cos_short_name === cos
  )[0].node

const getTableData = data => {
  // first get all the facilities
  const facilities = getAllFacilities(data)

  const tableData = []

  // for each facility get cos info and add to table info
  facilities.forEach(e => {
    const row = {}
    const cos = getCOSForFacility(
      data,
      e.node.frontmatter.facility_cos_short_name
    )
    row.cos_slug = cos.frontmatter.slug
    row.cos_manager_email = cos.frontmatter.cos_manager_email
    row.cos_manager_name = cos.frontmatter.cos_manager_name
    row.facility_long_name = e.node.frontmatter.facility_long_name
    row.facility_slug = e.node.frontmatter.slug
    row.cos_short_name = e.node.frontmatter.facility_cos_short_name
    row.technical_poc_email = e.node.frontmatter.facility_technical_poc_email
    row.technical_poc_name = e.node.frontmatter.facility_technical_poc_name
    tableData.push(row)
  })
  return tableData
}

const CosPoc = ({ data }) => {
  const tableData = getTableData(data)
  tableData.sort(compare)
  return (
    <Layout path="/cos/poc">
      <table className="usa-table">
        <thead>
          <tr>
            <th>Facility</th>
            <th>COS</th>
            <th>COS Manager</th>
            <th>Technical POC</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(e => (
            <tr>
              <td>
                <Link to={e.facility_slug}> {e.facility_long_name}</Link>
              </td>
              <td>
                <Link to={e.cos_slug}>{e.cos_short_name}</Link>
              </td>
              <td>
                <a href={"mailto:" + e.cos_manager_email}>
                  {e.cos_manager_name}
                </a>
              </td>
              <td>
                <a href={"mailto:" + e.technical_poc_email}>
                  {e.technical_poc_name}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

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
            title
            facility_technical_poc_email
            doc_type
            facility_cos_short_name
            facility_technical_poc_name
            slug
          }
        }
      }
    }
  }
`

export default CosPoc
