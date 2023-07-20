/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { GovBanner } from "@trussworks/react-uswds";
import '@trussworks/react-uswds/lib/uswds.css';
import cx from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ExtendedHeader from "../extended-header";
import Alert from "./alert";
import Footer from "./footer/footer";
import "./layout.css";
import { floatLeft, main, mainCenter, mainWithSideNav, sideNav } from "./layout.module.css";
import Navigation from "./navigation/navigation";

type LayoutProps = {
  children: React.ReactNode;
  path: string;
  title?: string;
  hideSideNav?: boolean;
  MaxWidth?: number;
  centerContent?: boolean;
};

const Layout = ( {
  title,
  children,
  hideSideNav,
  path,
  MaxWidth,
  centerContent
}: LayoutProps ) => {
  const data = useStaticQuery( graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="usa-overlay" />
      <div>
        <GovBanner
          language="english"
          tld=".mil"
          aria-label="Official government website"
        />
        <ExtendedHeader />
        <Navigation
          path={ path }
          hideSideNav={ hideSideNav }
          sideNavStyle={ sideNav }
          center={ centerContent }
        >
          <main
            id="main-content"
            className={ cx( main, {
              [ mainWithSideNav ]: !hideSideNav,
            } ) }
          >
            <div
              style={ { maxWidth: MaxWidth, width: "100%" } }
              className={ cx( {
                [ mainCenter ]: centerContent,
                [ floatLeft ]: !centerContent,
              } ) }
            >
              <Alert />
              { children }
            </div>
          </main>
        </Navigation>
      </div>
      <Footer />
    </>
  );
};

export default Layout;


