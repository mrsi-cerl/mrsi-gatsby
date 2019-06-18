import React from "react"
import pages from "./pages"
import { Link } from "gatsby"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"
import styles from "./sideNav.module.css"
import cx from "classnames"
console.log(pages.COS)

const getAccordian = (p, idx) => {
  return (
    <li class="usa-sidenav__item">
      <Accordion>
        <AccordionButton
          controls={`side-nav-section-${idx}`}
          className={cx("usa-sidenav__item", styles.accordion)}
        >
          <span>{p.caption}</span>
        </AccordionButton>
        <AccordionContent
          id={`side-nav-section-${idx}`}
          className={styles.accordionContent}
        >
          <ul class="usa-sidenav__sublist">
            {Object.keys(p.children).map((slug, index) => {
              return (
                <li class="usa-sidenav__item">
                  <Link to={slug}>{p.children[slug].caption}</Link>
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
          <Link to={slug}>{pages.COS[slug].caption}</Link>
        </li>
      )
    }
  })
}

const SideNav = () => {
  return <ul class="usa-sidenav">{getSideNav()}</ul>
}

export default SideNav
