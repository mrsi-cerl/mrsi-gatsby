import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Library from "../components/library/library"
import MrsiTable from "../components/mrsi-table"

function getData(slug, data) {
  // find the center that matches this page's slug
  const ctx = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === slug
  )[0].node

  return {
    ctx
  }
}

export default ({ data, pageContext }) => {
  const { ctx } = getData(pageContext.slug, data);
  // console.log(ctx)
  const tableData = [
    {
        title: "Place of Center",
        value: ctx.frontmatter.place_of_center,
    },
    {
        title: "Website",
        value: (
          <a href={ctx.frontmatter.website} target="_blank" rel="noopener noreferrer">
            {ctx.frontmatter.website.length > 50 ? ctx.frontmatter.website.slice(0, 50) + "..." : ctx.frontmatter.website}
          </a>
        )
    },
    {
        title: "Center POC",
        value: (
          <a  style={{textDecoration: 'none', color: 'black'}} 
            href={
              "tel:" +
              (ctx.frontmatter.ctx_poc_phone_number)
            }
          >
            {ctx.frontmatter.ctx_poc_name} <br/>
            {ctx.frontmatter.ctx_poc_phone_number}
          </a>
        ),
    },
    {
        title: "HQ POC",
        value: ctx.frontmatter.hq_poc_name,
    },
    {
        title: "HQ Div",
        value: ctx.frontmatter.hq_division,
    },
    {
        title: "Date of Activation",
        value: ctx.frontmatter.activation_date
    },
    {
        title: "Recertification Date",
        value: ctx.frontmatter.recertification_date
    },
    {
      title: "Functional Proponent (SES)",
      value: ctx.frontmatter.center_functional_proponent,
    },
  ]

  return (
    <Layout path={pageContext.slug} MaxWidth={700} centerContent>
      <div style={{ paddingLeft: 20 }}>
        <h1>{ctx.frontmatter.name_of_center}</h1>
        <div className="grid-row">
        <div className="tablet:grid-col" style={{ whiteSpace: 'nowrap' }}>
            <MrsiTable data={tableData} />
          </div>
        </div>

        <div
          className={"md"}
          dangerouslySetInnerHTML={{ __html: ctx.html }}
        />
        <Library rootDir={ctx.frontmatter.file_library_root_path} />
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
            doc_type
            name_of_center
            place_of_center
            center_type
            website
            center_poc_name
            center_poc_phone_number
            hq_poc_name
            hq_division
            activation_date
            recertification_date
            center_functional_proponent
            file_library_root_path
            page_last_reviewed
            title
            slug
          }
          html
        }
      }
    }
  }
`
