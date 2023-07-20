import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout/layout"
import Seo from "../../../components/seo";

const crstSME = ({ data }: any) => {
  const tableData = data.allMarkdownRemark.edges.filter(
    (    e: { node: { frontmatter: { doc_type: string; }; }; }) => e.node.frontmatter.doc_type === "crst_subject_matter_experts"
  )[0].node.frontmatter.subject_matter_experts

  return (
    <Layout path="/crst/subject-matter-experts" centerContent MaxWidth={900}>
      <h1>Subject Matter Experts</h1>
      <table className="usa-table">
        <thead>
          <tr>
            <th>Subject Matter</th>
            <th>POC</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((e: any, idx: number) => (
            <tr key={idx}>
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

export const Head = () => <Seo title="CRST SME" />;
