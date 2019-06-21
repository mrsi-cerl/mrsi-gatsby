import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import cx from "classnames"
import { navigation } from "uswds_components"
import UswdsComponent from "./uswds_component"
import mrsiLogo from "../images/mrsi-white-logo.png"

import "../components/layout/layout.css"

const ROOT_CLASS = "usa-header"

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  extended: PropTypes.bool,
  mega: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

const defaultProps = {
  extended: false,
  mega: false,
}

const propsToClasses = props => ({
  [ROOT_CLASS]: true,
  "usa-header--basic": !props.extended,
  "usa-header--megamenu": props.mega && !props.extended,
  "usa-header--extended": props.extended,
})

const Header = ({ className, children, ...props }) => {
  const render = ref => (
    <header
      className={cx(propsToClasses(props), className)}
      role="banner"
      ref={ref}
    >
      <div className="usa-navbar">
        <div className="usa-logo" id="logo">
          <em className="usa-logo__text">
            <Link to="/" title="Home" aria-label="Home">
              <img src={mrsiLogo} />
              {/* {props.title} */}
            </Link>
          </em>
        </div>
        <button className="usa-menu-btn">Menu</button>
      </div>
      {children}
    </header>
  )

  return <UswdsComponent uswdsComponent={navigation} render={render} />
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
