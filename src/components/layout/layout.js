import React from "react"
import { Location } from "@reach/router"
import { SkipNav } from "uswds-react"
import Helmet from "./helmet/helmet"
import UsaBanner from "./usa-banner/usa-banner"
import MrsiBanner from "./mrsi-banner/mrsi-banner"
import Footer from "./footer/footer"
import Navigation from "./navigation/navigation"

const mainContent = "main-content"

const Layout = ({ title, children }) => (
  <Location>
    {({ location }) => (
      <>
        {console.log(location)}
        <Helmet title={title} />
        <SkipNav skipsTo={mainContent} />
        <UsaBanner />
        <MrsiBanner />
        <Navigation path={location.pathname} />
        <main id={mainContent}>{children}</main>
        <Footer />
      </>
    )}
  </Location>
)

export default Layout
