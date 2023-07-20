import { Accordion } from "@trussworks/react-uswds";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout/layout";
import Seo from "../../../components/seo";

const SustainNews = ( { data } ) => {
  const news = data.allMarkdownRemark.edges.filter(
    e => e.node.frontmatter.doc_type === "sustain_news"
  );

  news.sort( ( a, b ) => {
    if ( a.node.frontmatter.date_published < b.node.frontmatter.date_published ) {
      return -1;
    } else {
      return 1;
    }
  } );

  const newsdocs = news.map( ( e, idx ) => {
    const content =
      <div
        className={ "md" }
        dangerouslySetInnerHTML={ { __html: e.node.html } }
      />;

    return (
      {
        title: e.node.frontmatter.title + ` (published: ${e.node.frontmatter.date_published})`,
        content: content,
        expdanded: false,
        id: `sustain-news-section-${idx}`,
        headingLevel: 'h4'
      }
    );
  } );

  return (
    <Layout path="/sustain/news" centerContent MaxWidth={ 900 }>
      <h1>Sustainability News</h1>
      { newsdocs && newsdocs.length > 0 ?
        <Accordion bordered={ false } multiselectable={ true } items={ newsdocs } />
        : "No news is good gnus"
      }
    </Layout>
  );

};

export default SustainNews;

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

export const Head = () => <Seo title="Sustain News" />;
