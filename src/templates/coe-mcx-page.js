import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Library from "../components/library/library"
import MrsiTable from "../components/mrsi-table"

function getData(slug, data) {
  // find the center that matches this pages slug
  const center = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === slug
  )[0].node

  return {
    center
  }
}

export default ({ data, pageContext }) => {
  const { center } = getData(pageContext.slug, data);
  // console.log(center)
  const tableData = [
    // {
    //     title: "Name of Center",
    //     value: center.frontmatter.name_of_center,
    // },
    {
        title: "Place of Center",
        value: center.frontmatter.place_of_center,
    },
    // {
    //     title: "MCX or TCX",
    //     value: center.frontmatter.center_type,
    // },
    {
      title: "Website",
      value: (
        <a href={center.frontmatter.website} target="_blank" rel="noopener noreferrer">
          Click here to visit
        </a>
      )
  },
  {
      title: "Center POC",
      value: (
        <a  style={{textDecoration: 'none', color: 'black'}} 
          href={
            "tel:" +
            (center.frontmatter.center_poc_phone_number)
          }
        >
          {center.frontmatter.center_poc_name} <br/>
          {center.frontmatter.center_poc_phone_number}
        </a>
      ),
  },
  {
        title: "HQ POC",
        value: center.frontmatter.hq_poc_name,
    },
    {
        title: "HQ Div",
        value: center.frontmatter.hq_division,
    },
    {
        title: "ER Number",
        value: center.frontmatter.mcx_er_number
    },
    {
        title: "Publication Date of ER",
        value: center.frontmatter.mcx_er_publication_date
    },
    {
        title: "Date of Activation",
        value: center.frontmatter.activation_date
    },
    {
        title: "Recertification Date",
        value: center.frontmatter.recertification_date
    },
    {
      title: "Functional Proponent (SES)",
      value: center.frontmatter.center_functional_proponent,
    },
  ]

  return (
    <Layout path={pageContext.slug} MaxWidth={700} centerContent>
      <div style={{ paddingLeft: 20 }}>
        <h1>{center.frontmatter.name_of_center}</h1>
        <div className="grid-row">
        <div className="tablet:grid-col" style={{ whiteSpace: 'nowrap' }}>
            <MrsiTable data={tableData} />
          </div>
        </div>

        <div
          className={"md"}
          dangerouslySetInnerHTML={{ __html: center.html }}
        />
        <Library rootDir={center.frontmatter.file_library_root_path} />
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
            mcx_er_number
            mcx_er_publication_date
            activation_date
            recertification_date
            center_functional_proponent
            file_library_root_path
            page_last_reviewed
            related_links {
                url
                caption
            }
            title
            slug
            carousel_images
          }
          html
        }
      }
    }
  }
`
