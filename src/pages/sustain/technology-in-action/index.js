import { Accordion } from "@trussworks/react-uswds";
import { graphql } from "gatsby";
import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import Layout from "../../../components/layout/layout";
import Marker from "../../../components/marker";
import Seo from "../../../components/seo";
import { listContainer, mapContainer } from "./TIA.module.css";

const getAllTIA = data => {
  return data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.doc_type === "sustain_technology_in_action"
  );
};

const getAllCategories = data => {
  const cats = [];
  // push all categories into the array
  data.forEach( e => {
    cats.push( ...e.node.frontmatter.categories );
  } );

  // use a set to ensure only get unique items
  const categories = new Set( cats );
  return categories;
};

// Removing API key from GoggleMap component will give us development map
// Leaving API key in there will give us production map but we have to
// Whitelist localhost during development
const TechnologyInAction = ( { data } ) => {
  const [ currTech, setCurrTech ] = useState( "" );
  const [ hoveredTech, setHoveredTech ] = useState( "" );
  const tia = getAllTIA( data );
  const currTechData = tia.filter( e => e.node.frontmatter.title === currTech );
  const cats = Array.from(getAllCategories( tia ));

  // For each category, build a list of projects
  const catsMap = cats.map( ( cat, idx ) => {
    const content =
      <table className="usa-table">
      <tbody>
        { tia
          .filter( ( e ) => e.node.frontmatter.categories.includes( cat ) )
          .map( ( e ) => (
            <tr key={ e.node.frontmatter.title }>
              <td
                onClick={ () => setCurrTech( e.node.frontmatter.title ) }
                onMouseEnter={ () =>
                  setHoveredTech( e.node.frontmatter.title )
                }
                onMouseLeave={ () => setHoveredTech( "" ) }
              >
                { e.node.frontmatter.title }
              </td>
            </tr>
          ) ) }
      </tbody>
    </table>

    return (
      {
        title: cat,
        content: content,
        expdanded: false,
        id: `tia-section-${idx}`,
        headingLevel: 'h4'
      }
    );
  } );

  // console.log( currTechData );
  // console.log( cats );
  return (
    <Layout path="/sustain/technology-in-action/" centerContent MaxWidth={ 900 }>
      <div className={ mapContainer }>
        <GoogleMapReact
          defaultCenter={ { lat: 37.27587, lng: -96.6532023 } }
          defaultZoom={ 3 }
          bootstrapURLKeys={ { key: "AIzaSyB6afAiSLEi2h7axw-swZWNXipUYdwT0NA" } }
        >
          { tia.map( ( e ) => {
            const [ elat, elng ] =
              e.node.frontmatter.project_coordinates.split( "," );
            return (
              <Marker
                tiaData={ e }
                lat={ elat }
                lng={ elng }
                onclick={ () => setCurrTech( e.node.frontmatter.title ) }
                listHover={
                  e.node.frontmatter.title === hoveredTech || hoveredTech === ""
                }
              />
            );
          } ) }
        </GoogleMapReact>
        <div className={ listContainer }>
          <Accordion expdanded items={ catsMap } />
        </div>
      </div>
    </Layout>
  );
};

export default TechnologyInAction;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            carousel_images
            title
            doc_type
            project_coordinates
            categories
          }
          html
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Technology in Action" />;
