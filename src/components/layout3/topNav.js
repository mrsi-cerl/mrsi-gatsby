import React from "react"
import { Link } from "gatsby"
import styles from "./topNav.module.css"
import cx from "classnames"

const TopNav = () => {
  return (
    <nav className={cx(styles.nav, "site-nav-secondary")}>
      <ul>
        <li class="usa-nav__submenu-item">
          <Link to="/cos">COS</Link>
        </li>
        <li class="usa-nav__submenu-item is-current">
          <Link to="/crst">CRST</Link>
        </li>
        <li class="usa-nav__submenu-item">
          <Link to="/model-rfp">Model RFP</Link>
        </li>
        <li class="usa-nav__submenu-item">
          <Link to="/pdrs">PDRS</Link>
        </li>
        <li class="usa-nav__submenu-item">
          <Link to="/sustain">Sustain</Link>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav
