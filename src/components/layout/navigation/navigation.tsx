import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MobileNav from "./mobile-nav/mobile-nav";
import TopNav from "./top-nav/top-nav";
import SideNav from "./side-nav/side-nav";
import getPages from "./createPageIndex";

type NavigationProps = {
  path: string,
  hideSideNav?: boolean,
  sideNavStyle?: string,
  children?: React.ReactNode,
  center?: boolean,
};

const Navigation = ( { path, hideSideNav, sideNavStyle, children, center }: NavigationProps ) => {
  const data = useStaticQuery( graphql`
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
              draft
            }
            html
          }
        }
      }
    }
  `);

  /**
   * get markdown pages that are not marked as draft
   */
  const nonDraftData = {
    allMarkdownRemark: {
      edges: data.allMarkdownRemark.edges.filter(
        ( e: any ) => !e.node.frontmatter.draft
      ),
    },
  };

  const pages = getPages( nonDraftData, path );

  // const getStyle = () => (center ? { maxWidth: 1000, margin: "auto" } : {})

  return (
    <>
      {/* <MobileNav pages={pages} path={path} /> */ }
      <TopNav path={path} />
      <div className="default-container">
        { hideSideNav ? null : (
          <SideNav path={ path } style={ sideNavStyle } pages={ pages } />
        ) }
        { children }
      </div>
    </>
  );
};

export default Navigation;
