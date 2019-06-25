import React from "react"
import styles from "./footer.module.css"
import cx from "classnames"

const Footer = () => (
  <div class="usa-footer__primary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-4">
          <h3>MILCON Requirements, Standardization, and Integration (MRSI)</h3>
        </div>
        <div class={cx("tablet:grid-col-8", styles.footerLinks)}>
          <nav class="usa-footer__nav">
            <div class="grid-row grid-gap-4">
              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link">
                      <a href="javascript:void(0);">Contact Us</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="javascript:void(0);">FAQ</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="javascript:void(0);">Privacy Policy</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="javascript:void(0);">Sitemap</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <ul class="usa-list usa-list--unstyled">
                    <li class="usa-footer__secondary-link">
                      <a href="http://www.usace.army.mil/">USACE</a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="https://www.rmda.army.mil/foia/RMDA-FOIA-Division.html">
                        FOIA
                      </a>
                    </li>
                    <li class="usa-footer__secondary-link">
                      <a href="http://www.asamra.army.mil/nofear.html">
                        No Fear Act
                      </a>
                    </li>
                    <li class="usa-footer__secondary-link">
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
