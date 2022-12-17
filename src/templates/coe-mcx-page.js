import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Library from "../components/library/library"
import MrsiTable from "../components/mrsi-table"

function getData(slug, data) {
  // find the center that matches this page's slug
  const mcx = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === slug
  )[0].node

  return {
    mcx
  }
}

export default ({ data, pageContext }) => {
  const { mcx } = getData(pageContext.slug, data);
  // console.log(mcx)
  const tableData = [
    {
        title: "Place of Center",
        value: mcx.frontmatter.place_of_center,
    },
    {
      title: "Website",
      value: (
        <a href={mcx.frontmatter.website} target="_blank" rel="noopener noreferrer">
            {mcx.frontmatter.title.length > 50 ? mcx.frontmatter.titletitle.slice(0, 50) + "..." : mcx.frontmatter.title}
        </a>
      )
    },
    {
      title: "Center POC",
      value: (
        mcx.frontmatter.slug.toLowerCase() == "/coe/mcx/cfstd"
        ?
          <div>
            Varies <br/>
            See <a href="../../cos/poc" target="_blank" rel="noopener noreferrer">COS POC</a> page
          </div>
        :
          <a  style={{textDecoration: 'none', color: 'black'}} 
            href={
              "tel:" +
              (mcx.frontmatter.center_poc_phone_number)
            }
          >
            {mcx.frontmatter.center_poc_name} <br/>
            {mcx.frontmatter.center_poc_phone_number}
          </a>
      )
  },
  {
        title: "HQ POC",
        value: mcx.frontmatter.hq_poc_name
    },
    {
        title: "HQ Div",
        value: mcx.frontmatter.hq_division
    },
    {
        title: "ER Number",
        value: (
              mcx.frontmatter.er_number.toLowerCase() == "No ER established yet".toLowerCase()
                ?
                  "No ER established yet"
                :
                  <a href={mcx.frontmatter.er_link} target="_blank" rel="noopener noreferrer">
                    {mcx.frontmatter.er_number}
                  </a>
        )
        },
    {
        title: "Publication Date of ER",
        value: mcx.frontmatter.er_publication_date
    },
    {
        title: "Date of Activation",
        value: mcx.frontmatter.activation_date
    },
    {
        title: "Recertification Date",
        value: mcx.frontmatter.recertification_date
    },
    {
      title: "Functional Proponent (SES)",
      value: (
          // This is a fix for a corner case wherein there are two functional proponents with clariying text,
          // thereby making the text too long and the table too wide. Using two commas and a space (name1,, name2)
          // to separate the two names allows for a line break to be inserted--but just once!
          mcx.frontmatter.center_functional_proponent.indexOf(",,") > 0
              ?
              <div>
                {mcx.frontmatter.center_functional_proponent.slice(0, mcx.frontmatter.center_functional_proponent.indexOf(",,"))} <br/>
                {mcx.frontmatter.center_functional_proponent.slice(mcx.frontmatter.center_functional_proponent.indexOf(",,") + 2, 100)}
              </div>
              :
                mcx.frontmatter.center_functional_proponent
    ) 
  },
  ]

  return (
    <Layout path={pageContext.slug} MaxWidth={700} centerContent>
      <div style={{ paddingLeft: 20 }}>
        <h1>{mcx.frontmatter.name_of_center}</h1>
        <div className="grid-row">
        <div className="tablet:grid-col" style={{ whiteSpace: 'nowrap' }}>
            <MrsiTable data={tableData} />
          </div>
        </div>

        <div
          className={"md"}
          dangerouslySetInnerHTML={{ __html: mcx.html }}
        />
        <Library rootDir={mcx.frontmatter.file_library_root_path} />
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
            er_number
            er_link
            er_publication_date
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
