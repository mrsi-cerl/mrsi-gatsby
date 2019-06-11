import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import Card from "react-bootstrap/Card"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import ListGroup from "react-bootstrap/ListGroup"
import Table from "react-bootstrap/Table"

import MrsiTable from "../components/mrsi-table"

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
  console.log(cos)

  const tableData = [
    {
      title: "Functional Proponent:",
      value: facility.frontmatter.functional_proponent,
    },
    {
      title: "Technical POC:",
      value: (
        <a href={"mailto:" + facility.frontmatter.technical_poc_email}>
          {facility.frontmatter.technical_poc_name}
        </a>
      ),
    },
    {
      title: "COS Manager:",
      value: (
        <a href={"mailto:" + cos.frontmatter.cos_manager_email}>
          {cos.frontmatter.cos_manager_name}
        </a>
      ),
    },
    {
      title: "Category Code(s):",
      value: facility.frontmatter.category_codes.join(", "),
    },
  ]

  return (
    <Layout>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item as={Link} to="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/cos">COS</Breadcrumb.Item>
          <Breadcrumb.Item href={cos.fields.slug}>
            {cos.frontmatter.cos_short_name}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {facility.frontmatter.facility_short_name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1>{facility.frontmatter.facility_long_name}</h1>
        <MrsiTable data={tableData} />
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
