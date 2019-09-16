import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import styles from "./top-nav.module.css"

const TopNav = ({ path }) => {
  const prefix = ""
  const cos = path.startsWith(prefix + "/cos")
  const crst = path.startsWith(prefix + "/crst")
  const modelrfp = path.startsWith(prefix + "/model-rfp")
  const pdrs = path.startsWith(prefix + "/pdrs")
  const sustain = path.startsWith(prefix + "/sustain")

  return (
    <nav className={cx(styles.nav, "site-nav-secondary")}>
      <ul>
        <li
          className={cx(styles.item, "usa-nav__submenu-item", {
            [styles.current]: cos,
          })}
        >
          <Link to="/cos">COS</Link>
        </li>
        <li
          className={cx(styles.item, "usa-nav__submenu-item", {
            [styles.current]: crst,
          })}
        >
          <Link to="/crst">CRST</Link>
        </li>
        <li
          className={cx(styles.item, "usa-nav__submenu-item", {
            [styles.current]: modelrfp,
          })}
        >
          <Link to="/model-rfp">Model RFP</Link>
        </li>
        <li
          className={cx(styles.item, "usa-nav__submenu-item", {
            [styles.current]: pdrs,
          })}
        >
          <Link to="/pdrs">PDRS</Link>
        </li>
        <li
          className={cx(styles.item, "usa-nav__submenu-item", {
            [styles.current]: sustain,
          })}
        >
          <Link to="/sustain">Sustainability</Link>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav
