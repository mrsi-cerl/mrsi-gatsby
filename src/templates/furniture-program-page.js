import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Library from "../components/library/library";
import Carousel from "../components/mrsi-carousel";
import MrsiTable from "../components/mrsi-table";
import Seo from "../components/seo";

const FurnitureProgramPage = ( { data, pageContext } ) => {
  const page = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === pageContext.slug
  )[ 0 ].node;

  const tableData = [
    {
      title: "Place of Center",
      value: page.frontmatter.place_of_center
    },
    {
      title: "Website",
      value: (
      <div>  
        <a href={ page.frontmatter.website1 } target="_blank" rel="noopener noreferrer">
          { page.frontmatter.name_of_website1.length > 50 ? page.frontmatter.name_of_website1.slice( 0, 50 ) + "..." : page.frontmatter.name_of_website1 }
        </a><br/>
        <a href={ page.frontmatter.website2 } target="_blank" rel="noopener noreferrer">
          { page.frontmatter.name_of_website2.length > 50 ? page.frontmatter.name_of_website2.slice( 0, 50 ) + "..." : page.frontmatter.name_of_website2 }
       </a>
      </div>
      )
    },
    {
      title: "Center POC",
      value: (
        <a style={ { textDecoration: 'none', color: 'black' } }
          href={
            "tel:" +
            ( page.frontmatter.center_poc_phone_number )
          }
        >
          { page.frontmatter.center_poc_name } <br />
          { page.frontmatter.center_poc_phone_number }
        </a>
      ),
    },
    {
      title: "ER Number",
      value: (
        <a href={ page.frontmatter.er_link } target="_blank" rel="noopener noreferrer">
          { page.frontmatter.er_number }
        </a>
      )
    },
    {
      title: "Publication Date of ER",
      value: page.frontmatter.er_publication_date
    },
    {
      title: "Date of Activation",
      value: page.frontmatter.activation_date
    },
    {
      title: "Keywords",
      value: page.frontmatter.keywords
    },
  ];

  return (
    <Layout title="Furniture Program" path={ pageContext.slug } hideSideNav centerContent MaxWidth={ 900 }>
      <h1>{ page.frontmatter.title }</h1>
      <div className="grid-row">
        <div className="tablet:grid-col">
          <Carousel imgs={ page.frontmatter.carousel_images } />
        </div>
        <div className="tablet:grid-col" style={ { paddingLeft: 10 } }>
          <MrsiTable data={ tableData } />
        </div>
      </div>

      <div
        className={ "md" }
        dangerouslySetInnerHTML={ { __html: page.html } }
      />
      <Library rootDir={ page.frontmatter.file_library_root_path } />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            doc_type
            carousel_images
            place_of_center
            name_of_website1
            website1
            name_of_website2
            website2
            center_poc_name
            center_poc_phone_number
            er_number
            er_link
            er_publication_date
            activation_date
            keywords
            file_library_root_path
            page_last_reviewed
            slug
            draft
          }
          html
        }
      }
    }
  }
`;

export default FurnitureProgramPage;

export const Head = () => <Seo title="Furniture Program" />;
