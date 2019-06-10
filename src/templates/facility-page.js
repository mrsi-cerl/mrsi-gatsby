import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

function getData(slug, data) {
  // find the facility that matches this pages slug
  const facility = data.allMarkdownRemark.edges.filter(
    edge => edge.node.fields.slug === slug
  )[0].node
  // then find the cos associated with this facility
  const cos = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.cos_short_name ===
      facility.frontmatter.cos_district_short_name
  )[0].node

  return {
    facility,
    cos,
  }
}

export default ({ data, pathContext }) => {
  const { facility, cos } = getData(pathContext.slug, data)
  console.log(facility)

  return (
    <Layout>
      <div>
        <h1>{facility.frontmatter.facility_long_name}</h1>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Functional Proponent:</TableCell>
              <TableCell>{facility.frontmatter.functional_proponent}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div dangerouslySetInnerHTML={{ __html: facility.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category_codes
            cos_district_short_name
            cos_manager_name
            cos_short_name
            document_type
            facility_long_name
            facility_short_name
            functional_proponent
            pictures
            related_links {
              url
              name
            }
            technical_poc_email
            technical_poc_name
            cos_manager_email
            cos_long_name
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`
