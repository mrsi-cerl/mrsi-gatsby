import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Library from "../components/library/library";
import CarouselLarge from "../components/mrsi-carousel-large";
import MrsiTable from "../components/mrsi-table";
import Seo from "../components/seo";

global.page_title = "";

const FurnitureProgramPage = ( { data, pageContext } ) => {
  const page = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.slug === pageContext.slug
  )[ 0 ].node;

  global.page_title = page.frontmatter.title;

  const tableData = [
    {
      title: "Place of Center",
      value: page.frontmatter.place_of_center
    },
    {
      title: "Websites",
      value: (
        <>
          {page.frontmatter.furniture_website.map((e, idx) => (
            <div key={idx}>
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                { e.name.length > 50 ?  e.name.slice( 0, 50 ) + "..." : e.name }
              </a><br/>
            </div>))
          }
        </>
      ),
    },
    {
      title: "Center POCs",
      value: (
        <>
          {page.frontmatter.center_poc.map((e, idx) => (
            <div key={idx} style={{ fontSize: '0.9em' }}>
              <a href={"mailto:" + e.email}  title={e.title}>
                {e.name}
              </a>
              &nbsp;&nbsp;
              <a style={{ textDecoration: 'none', color: 'black' }} href={"tel:" + e.phone_number}>
                {e.phone_number}
              </a>
              </div>
            ))
          }
        </>
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
       value: (
        <span style={{ fontSize: '0.5em' }}>{page.frontmatter.keywords}</span>
       )
    },
  ];

  return (
    <Layout path={ pageContext.slug } hideSideNav centerContent MaxWidth={ 1000 }>
      <h1>{global.page_title }</h1>
      <div className="grid-row">
        <div className="tablet:grid-col">
          <CarouselLarge imgs={ page.frontmatter.carousel_images } />
        </div>
        <div className="tablet:grid-col" style={ { paddingLeft: 10 } }>
          <MrsiTable data={ tableData } />
        </div>
      </div>

      <div
        className={ "md" }
        dangerouslySetInnerHTML={ { __html: page.html }
       }
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
            furniture_website {
              name
              url
            }
            center_poc {
              name
              title
              email
              phone_number
            }
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

export const Head = () => <Seo title={global.page_title } />;
