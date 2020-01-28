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
              <img
                className={styles.logo}
                src={mrsiLogo}
                alt="MRSI Umbrella Logo"
              />
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
          <div className={styles.search}>
            <form
              class="usa-search usa-search--small"
              accept-charset="UTF-8"
              action="https://search.usa.gov/search"
              id="search_form"
              method="get"
            >
              <div role="search">
                <div>
                  <input name="utf8" type="hidden" value="&#x2713;" />
                </div>
                <input
                  id="affiliate"
                  name="affiliate"
                  type="hidden"
                  value="mrsi"
                />
                <label class="usa-sr-only" for="search-field-small">
                  Search
                </label>
                <input
                  class="usa-input"
                  id="search-field-small"
                  type="search"
                  name="query"
                />
                <button
                  name="commit"
                  value="Search"
                  class="usa-button"
                  type="submit"
                >
                  <span class="usa-sr-only">Search</span>
                </button>
              </div>
            </form>
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
