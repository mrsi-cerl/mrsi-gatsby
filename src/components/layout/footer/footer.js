import React from "react"
import styles from "./footer.module.css"
import cx from "classnames"
import usaceLogo from "../../../images/usace-logo-color.svg"
import { Link } from "gatsby"

const Footer = () => (
  <div className="usa-footer__primary-section">
    <div>
      <div className="grid-row grid-gap">
        <div className="">
          <a href="http://www.usace.army.mil/">
            <img style={{ width: "100px", margin: 10 }} src={usaceLogo} />
          </a>
        </div>
        <div className={cx("tablet:grid-col-8", styles.footerLinks)}>
          <nav className="usa-footer__nav">
            <div className="grid-row grid-gap-4">
              <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <ul className="usa-list usa-list--unstyled">
                    <li className="usa-footer__secondary-link">
                      <Link to={"/mrsi/about"}>About Us</Link>
                    </li>
                    <li className="usa-footer__secondary-link">
                      <Link to={"/mrsi/privacy"}>Privacy Policy</Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <ul className="usa-list usa-list--unstyled">
                    <li className="usa-footer__secondary-link">
                      <a href="http://www.usace.army.mil/">USACE</a>
                    </li>
                    <li className="usa-footer__secondary-link">
                      <a href="https://www.usace.army.mil/FOIA.aspx">FOIA</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section className="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <ul className="usa-list usa-list--unstyled">
                    <li className="usa-footer__secondary-link">
                      <a href="https://prhome.defense.gov/nofear">
                        No Fear Act
                      </a>
                    </li>
                    <li className="usa-footer__secondary-link">
                      <a href="https://www.inscom.army.mil/isalute/">iSalute</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
)
export default Footer
