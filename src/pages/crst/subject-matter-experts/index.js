import React from "react"
import { Link } from "gatsby"
import Layout from "../../../components/layout/layout"

const crstSME = ({ data }) => {
  const tableData = data.allMarkdownRemark.edges.filter(
    e => e.node.frontmatter.doc_type === "crst_subject_matter_experts"
  )[0].node.frontmatter.subject_matter_experts

  const data2 = []
  return (
    <Layout path="/crst/subject-matter-experts" MaxWidth={700}>
      <h1>Subject Matter Experts</h1>
      <table className="usa-table">
        <thead>
          <tr>
            <th>Subject Matter</th>
            <th>POC</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(e => (
            <tr>
              <td>{e.subject_matter}</td>
              <td>
                <a href={"mailto:" + e.expert_email}>{e.expert_name}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default crstSME

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            subject_matter_experts {
              subject_matter
              expert_email
              expert_name
            }
            doc_type
          }
        }
      }
    }
  }
`
