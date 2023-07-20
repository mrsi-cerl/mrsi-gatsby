import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = props => {
  const { onClick, children, ...restProps } = props

  const handleClick = () => {
    if (onClick) {
      onClick()
    }

    // gas function comes from the digital analytics program script added in src/html.js
    // we need to register internal navigation as pageviews because as a SPA the script only registers
    // page views the first time the page loads
    // see here for more info: https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications
    /*global gas*/
    /*eslint no-undef: "error"*/
    if (gas) {
      gas("send", "pageview", `mrsi.erdc.dren.mil${props.to}`, "MRSI")
    }
  }

  return (
    <GatsbyLink {...restProps} onClick={handleClick}>
      {children}
    </GatsbyLink>
  )
}

export default Link
