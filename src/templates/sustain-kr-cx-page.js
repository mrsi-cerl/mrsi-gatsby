import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import MrsiTable from "../components/mrsi-table"
import Carousel from "../components/mrsi-carousel"
import Library from "../components/library/library"
import RelatedLinks from "../components/relatedLinks"

const getCXInfo = (data, slug) => {
  return data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === slug
  )[0].node
}

const getTableData = data => {
  const tableData = [
    {
      title: "MSC Program Manager:",
      value: (
        <a
          href={"mailto:" + data.frontmatter.sustain_msc_program_manager_email}
        >
          {data.frontmatter.sustain_msc_program_manager_name}
        </a>
      ),
    },
    {
      title: "MSC Technical Lead / Co-Chair:",
      value: (
        <a href={"mailto:" + data.frontmatter.sustain_msc_technical_lead_email}>
          {data.frontmatter.sustain_msc_technical_lead_name}
        </a>
      ),
    },
    {
      title: "HQ USACE Proponent:",
      value: (
        <a href={"mailto:" + data.frontmatter.sustain_hq_usace_proponent_email}>
          {data.frontmatter.sustain_hq_usace_proponent_name}
        </a>
      ),
    },
    {
      title: "ERDC Liaison:",
      value: (
        <a href={"mailto:" + data.frontmatter.sustain_erdc_liaison_email}>
          {data.frontmatter.sustain_erdc_liaison_name}
        </a>
      ),
    },
  ]
  return tableData
}

export default ({ data, pageContext }) => {
  const pageData = getCXInfo(data, pageContext.slug)
  const lib_path = pageData.frontmatter.file_library_root_path
  console.log(pageData)
  return (
    <Layout path={pageContext.slug} MaxWidth={700} centerContent>
      <h1>{pageData.frontmatter.title}</h1>
      <Carousel imgs={pageData.frontmatter.carousel_images} />
      <MrsiTable data={getTableData(pageData)} />
      <div class={"md"} dangerouslySetInnerHTML={{ __html: pageData.html }} />
      <RelatedLinks related_links={pageData.frontmatter.related_links} />
      {lib_path !== null && lib_path !== "" ? (
        <Library rootDir={lib_path} />
      ) : null}
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
            related_links {
              url
              caption
            }
            carousel_images {
              publicURL
              childImageSharp {
                fixed(width: 500, fit: COVER, height: 375) {
                  src
                }
              }
            }
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
