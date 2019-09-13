import React from "react"
import styles from "./footer.module.css"
import cx from "classnames"
import usaceLogo from "../../../images/usace-logo-color.svg"
import { Link } from "gatsby"

const Footer = () => (
  <div className="usa-footer__primary-section">
    <div className={cx(styles.mrsiFooter)}>
      <p>
        <ul>
          <li>
            <Link to={"/mrsi/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/mrsi/privacy"}>Privacy Policy</Link>
          </li>
          <li>
            <a href="http://www.usace.army.mil/">USACE</a>
          </li>
          <li>
            <a href="https://www.usace.army.mil/FOIA.aspx">FOIA</a>
          </li>
          <li>
            <a href="https://prhome.defense.gov/nofear">No Fear Act</a>
          </li>
          <li>
            <a href="https://www.inscom.army.mil/isalute/">iSalute</a>
          </li>
        </ul>
      </p>
    </div>
    <div className={cx("grid-row", styles.footerUsace)}>
      <div className="grid-col-1">
        <p>
          <a href="https://www.usace.army.mil/">
            <img
              style={{ width: "40px", marginLeft: "20px" }}
              src={usaceLogo}
            />
          </a>
        </p>
      </div>
      <div className="grid-col-10">
        <p>
          The mission of the U.S. Army Corps of Engineers is to deliver vital
          public and military engineering services; partnering in peace and war
          to strengthen our nation’s security, energize the economy and reduce
          risks from disasters.
        </p>
      </div>
    </div>
  </div>
)
export default Footer
