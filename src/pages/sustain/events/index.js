import { Accordion } from "@trussworks/react-uswds";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout/layout";
import Seo from "../../../components/seo";

const SustainEvents = ( { data } ) => {
  const news = data.allMarkdownRemark.edges.filter(
    e => e.node.frontmatter.doc_type === "sustain_events"
  );

  const events = news.map( ( e, idx ) => {
    const content =
      <div
        className={ "md" }
        dangerouslySetInnerHTML={ { __html: e.node.html } }
      />;

    return (
      {
        title: e.node.frontmatter.title,
        content: content,
        expdanded: false,
        id: `sustain-events-section-${idx}`,
        headingLevel: 'h4'
      }
    );
  } );

  return (
    <Layout path="/sustain/events" centerContent MaxWidth={ 900 }>
      <h1>Sustainability Events</h1>
      { events && events.length > 0 ?
        <Accordion bordered={ false } multiselectable={ true } items={ events } />
    : "There are no events scheduled" }

    </Layout>
  );
};

export default SustainEvents;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            doc_type
            date_published
          }
          html
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Sustain Events" />;
