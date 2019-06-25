import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import styles from "./top-nav.module.css"

const TopNav = ({ path }) => {
  console.log(path)
  const cos = path.startsWith("/cos")
  const crst = path.startsWith("/crst")
  const modelrfp = path.startsWith("/model-rfp")
  const pdrs = path.startsWith("/pdrs")
  const sustain = path.startsWith("/sustain")

  const current = styles.current
  console.log(cos)

  return (
    <nav className={cx(styles.nav, "site-nav-secondary")}>
      <ul>
        <li className={cx("usa-nav__submenu-item", { [styles.current]: cos })}>
          <Link to="/cos">COS</Link>
        </li>
        <li className={cx("usa-nav__submenu-item", { [styles.current]: crst })}>
          <Link to="/crst">CRST</Link>
        </li>
        <li
          className={cx("usa-nav__submenu-item", {
            [styles.current]: modelrfp,
          })}
        >
          <Link to="/model-rfp">Model RFP</Link>
        </li>
        <li className={cx("usa-nav__submenu-item", { [styles.current]: pdrs })}>
          <Link to="/pdrs">PDRS</Link>
        </li>
        <li
          className={cx("usa-nav__submenu-item", { [styles.current]: sustain })}
        >
          <Link to="/sustain">Sustain</Link>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav
