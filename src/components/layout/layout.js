import React from "react"
import { Location } from "@reach/router"
import { SkipNav } from "uswds-react"
import Helmet from "./helmet/helmet"
import UsaBanner from "./usa-banner/usa-banner"
import MrsiBanner from "./mrsi-banner/mrsi-banner"
import Footer from "./footer/footer"
import Navigation from "./navigation/navigation"
import cx from "classnames"
import styles from "./layout.module.css"

const mainContent = "main-content"

const Layout = ({ title, children, hideSideNav, slug }) => (
  <Location>
    {({ location }) => (
      <>
        {console.log(location)}
        <Helmet title={title} />
        <SkipNav skipsTo={mainContent} />
        <UsaBanner />
        <MrsiBanner />
        <Navigation
          path={location.pathname}
          hideSideNav={hideSideNav}
          sideNavStyle={styles.sideNav}
        />
        <main
          id={mainContent}
          className={cx(styles.main, {
            [styles.mainWithSideNav]: !hideSideNav,
          })}
        >
          {children}
        </main>
        <Footer />
      </>
    )}
  </Location>
)

export default Layout
