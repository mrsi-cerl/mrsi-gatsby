import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { Banner, SkipNav, Header } from "uswds-react"
import "./layout.css"
import TopNav from "./topNav"
import MobileNav from "./mobileNav"
const mainContent = "main-content"

const Layout = ({ children }) => {
  return (
    <div>
      <SkipNav skipsTo={mainContent} />
      <Banner />
      <Header title="MRSI" />
      <TopNav />
      <MobileNav />
      <div className="usa-overlay" />
      <main id={mainContent}>{children}</main>
    </div>
  )
}

export default Layout
