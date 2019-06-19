import React from "react"
import pages from "./pages"
import { Link } from "gatsby"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"
import styles from "./sideNav.module.css"
import cx from "classnames"

import { globalHistory } from "@reach/router"
const path = globalHistory.location.pathname
console.log(path)

const getAccordian = (p, idx) => {
  return (
    <li class="usa-sidenav__item">
      <Accordion>
        <AccordionButton
          controls={`side-nav-section-${idx}`}
          className={cx("usa-sidenav__item", styles.accordion)}
        >
          <span
            className={cx({
              "usa-current": p in p.children,
            })}
          >
            {p.caption}
          </span>
        </AccordionButton>
        <AccordionContent
          id={`side-nav-section-${idx}`}
          className={styles.accordionContent}
        >
          <ul class="usa-sidenav__sublist">
            {Object.keys(p.children).map((slug, index) => {
              return (
                <li class="usa-sidenav__item">
                  <Link
                    to={slug}
                    className={cx({
                      "usa-current": slug === "window.location.pathname",
                    })}
                  >
                    {p.children[slug].caption}
                  </Link>
                </li>
              )
            })}
          </ul>
        </AccordionContent>
      </Accordion>
    </li>
  )
}

const getSideNav = () => {
  return Object.keys(pages.COS).map((slug, index) => {
    if (pages.COS[slug].children) {
      return getAccordian(pages.COS[slug], index)
    } else {
      return (
        <li class="usa-sidenav__item">
          <Link
            to={slug}
            className={cx({
              "usa-current": slug === "window.location.pathname",
            })}
          >
            {pages.COS[slug].caption}
          </Link>
        </li>
      )
    }
  })
}

const SideNav = props => {
  return <ul class="usa-sidenav">{getSideNav(props.slug)}</ul>
}

export default SideNav
