import React from "react"
import { Location } from "@reach/router"
import { SkipNav } from "uswds-react"
import Helmet from "./helmet/helmet"
import UsaBanner from "./usa-banner/usa-banner"
import MrsiBanner from "./mrsi-banner/mrsi-banner2"
import Footer from "./footer/footer"
import Navigation from "./navigation/navigation"
import cx from "classnames"
import styles from "./layout.module.css"
import PropTypes from "prop-types"
import Alert from "./alert.js"
import { isIE } from "react-device-detect"

const mainContent = "main-content"

const Layout = ({
  title,
  children,
  hideSideNav,
  path,
  MaxWidth,
  centerContent,
}) => {
  // console.log("layout ", path)
  return (
    <Location>
      {({ location }) => (
        <>
          <Helmet title={title} />
          <SkipNav skipsTo={mainContent} />
          <div className="usa-overlay" />
          <div>
            {isIE ? (
              <p>
                Please use a browser other than Internet Explorer utill we fix
                the website. Windows machines should have Edge Browser
                installed.
              </p>
            ) : (
              ""
            )}
            <UsaBanner />
            <MrsiBanner />
            <Navigation
              path={path}
              hideSideNav={hideSideNav}
              sideNavStyle={styles.sideNav}
              center={centerContent}
            >
              <main
                id={mainContent}
                className={cx(styles.main, {
                  [styles.mainWithSideNav]: !hideSideNav,
                })}
              >
                <div
                  style={{ maxWidth: MaxWidth, width: "100%" }}
                  className={cx({
                    [styles.mainCenter]: centerContent,
                    [styles.floatLeft]: !centerContent,
                  })}
                >
                  <Alert message="" />
                  {children}
                </div>
              </main>
            </Navigation>
          </div>
          <Footer />
        </>
      )}
    </Location>
  )
}

Layout.propTypes = {
  path: PropTypes.string.isRequired,
}

Layout.defaultProps = {
  MaxWidth: 10000000,
}

export default Layout
