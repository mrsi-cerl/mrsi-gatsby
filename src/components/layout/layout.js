import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Banner, SkipNav, Header } from "uswds-react"
import "./layout.css"
import TopNav from "./topNav"
import MobileNav from "./mobileNav"
import { Location } from "@reach/router"
import SideNav from "./sideNav"
import cx from "classnames"
const mainContent = "main-content"

const Layout = ({ children, sidenav }) => {
  return (
    <Location>
      {({ location }) => {
        console.log(location.pathname)
        return (
          <div>
            <SkipNav skipsTo={mainContent} />
            <Banner />
            <Header title="MRSI" />
            <TopNav />
            <MobileNav />
            <div className="usa-overlay" />
            <div className="default-container">
              <aside class={cx({ sidenav: !sidenav })} style={{}}>
                <SideNav path={location.pathname} />
              </aside>
              <main id={mainContent}>{children}</main>
            </div>
          </div>
        )
      }}
    </Location>
  )
}

export default Layout
