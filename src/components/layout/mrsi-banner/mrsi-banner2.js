import React from "react"
import mrsiLogo from "../../../images/mrsi-blue-logo.png"
import hamMenu from "../../../images/ham-menu-icon.svg"
import styles from "./mrsi-banner2.module.css"
import { Link } from "gatsby"

const MrsiBanner = () => {
  return (
    <div className={styles.banner}>
      <div className="grid-container">
        <div className="grid-col-auto">
          <div className={styles.bannerLeft}>
            <Link to="/">
              <img className={styles.logo} src={mrsiLogo} alt="MRSI Umbrella Logo" />
            </Link>
          </div>
          <div className={styles.bannerBody}>
            <div className="font-sans-2xl">
              Welcome to MRSI
              <p className="font-sans-sm">
                Dedicated to improving Military Construction throughout the Army
              </p>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <img src={hamMenu} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MrsiBanner
