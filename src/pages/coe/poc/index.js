import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../../components/layout/layout";
import Seo from "../../../components/seo";

const getTableData = data => {
  const coe_pages = data.allMarkdownRemark.edges.filter(
    edge =>
      edge.node.frontmatter.doc_type === "coe_ctx_page" ||
      edge.node.frontmatter.doc_type === "coe_mcx_page"
  );

  coe_pages.sort( ( a, b ) => {
    if ( a.node.frontmatter.title < b.node.frontmatter.title ) {
      return -1;
    }
    if ( a.node.frontmatter.title > b.node.frontmatter.title ) {
      return 1;
    }
    return 0;
  } );

  return coe_pages;
};

const CoePOC = ( { data } ) => {
  const tableData = getTableData( data );
  return (
    <Layout path="/coe/poc" centerContent MaxWidth={ 900 }>
      <h1>Centers of Expertise (CX) Points of Contact</h1>
      <table className="usa-table">
        <thead>
          <tr>
            <th>Center Name</th>
            <th>Place</th>
            <th>POC</th>
            <th>POC Phone Number</th>
          </tr>
        </thead>
        <tbody>
          { tableData.map( ( e, idx ) => (
            <tr key={ idx }>
              <td>
                <Link to={ e.node.frontmatter.slug }>
                  { e.node.frontmatter.title.length > 50 ? e.node.frontmatter.title.slice( 0, 50 ) + "..." : e.node.frontmatter.title }
                </Link>
              </td>
              <td>
                <a href={ e.node.frontmatter.website } target="_blank" rel="noopener noreferrer">
                  { " " }
                  { e.node.frontmatter.place_of_center }
                </a>
              </td>
              { e.node.frontmatter.slug.toLowerCase() === "/coe/mcx/cfstd"
                ?
                <td colspan={ '2' } style={ { textAlign: 'center' } }>
                  <div>
                    Varies, see <a href="../../cos/poc" target="_blank" rel="noopener noreferrer">COS Points of Contact</a> page
                  </div>
                </td>
                :
                <><td>
                  { e.node.frontmatter.center_poc_name }
                </td><td style={ { whiteSpace: 'nowrap' } }>
                    <a href={ "tel:" + e.node.frontmatter.center_poc_phone_number }>
                      { e.node.frontmatter.center_poc_phone_number }
                    </a>
                  </td></>
              }
            </tr>
          ) ) }
        </tbody>
      </table>
    </Layout>
  );
};

export default CoePOC;

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

export const Head = () => <Seo title="CX POC" />;
