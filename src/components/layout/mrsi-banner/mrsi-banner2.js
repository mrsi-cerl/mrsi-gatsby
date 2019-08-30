import React from "react"
import mrsiLogo from "../../../images/mrsi-white-logo.png"
import hamMenu from "../../../images/ham-menu-icon.svg"
import styles from "./mrsi-banner2.module.css"
import { Link } from "gatsby"

const MrsiBanner = () => {
  console.log("test")

  return (
    <div className={styles.banner}>
      <Link to="/">
        <img className={styles.logo} src={mrsiLogo} />
      </Link>
      <div className={styles.title}>
        MILCON Requirements, Standardization, and Integration
      </div>
      <div className={styles.menu}>
        <img src={hamMenu} />
      </div>
    </div>
  )
}

export default MrsiBanner
