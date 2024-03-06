import { graphql, Link } from "gatsby";
import React from "react";
import Table from "react-bootstrap/Table";
import Seo from "../../../components/seo";

import Layout from "../../../components/layout/layout";

const ArmyStandards = ( { data } ) => {
  const facilities = data.allMarkdownRemark.edges.filter(
    e =>
    (e.node.frontmatter.doc_type === "facility_page" || e.node.frontmatter.doc_type === "facility_page_hnc") &&
      !e.node.frontmatter.draft
  );
  facilities.sort( ( a, b ) => {
    if (
      a.node.frontmatter.facility_long_name <
      b.node.frontmatter.facility_long_name
    ) {
      return -1;
    } else {
      return 1;
    }
  } );

  return (
    <Layout path="/cos/facilities" centerContent MaxWidth={ 900 }>
      <h1>Facilities</h1>
      <Table className="usa-table" hover>
        <thead>
          <tr>
            <th>Facility Name</th>
            <th>Category Code</th>
            <th>Functional Proponent</th>
            <th>COS</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          { facilities.map( ( e, idx ) => (
            <tr>
              <td>
                <Link to={ e.node.frontmatter.slug }>
                  { e.node.frontmatter.facility_long_name }
                </Link>
              </td>
              <td>{ e.node.frontmatter.facility_category_codes.join( ", " ) }</td>
              <td>{ e.node.frontmatter.facility_functional_proponent }</td>
              <td>
                <Link
                  to={ `/cos/${e.node.frontmatter.facility_cos_short_name.toLowerCase()}` }
                >
                  { e.node.frontmatter.facility_cos_short_name }
                </Link>
              </td>
              <td>
                { e.node.frontmatter.carousel_images ? (
                  <img
                    style={ { maxWidth: 113 } }
                    src={ e.node.frontmatter.carousel_images[ 0 ] }
                    alt="example of the facility"
                  ></img>
                ) : null }
              </td>
            </tr>
          ) ) }
        </tbody>
      </Table>
    </Layout>
  );
};

export default ArmyStandards;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            facility_long_name
            facility_short_name
            carousel_images
            doc_type
            facility_cos_short_name
            facility_category_codes
            facility_functional_proponent
            file_library_root_path
            page_last_reviewed
            slug
            draft
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Facilities" />;
