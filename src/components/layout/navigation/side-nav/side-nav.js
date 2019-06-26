import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import styles from "./side-nav.module.css"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"

function createAcordianList(p, idx) {
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
            {p.children.map((e, index) => {
              return (
                <li class="usa-sidenav__item">
                  <Link
                    to={e.slug}
                    className={cx({
                      "usa-current": "slug" === "window.location.pathname",
                    })}
                  >
                    {e.caption}
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

function createNavList(pages) {
  console.log(pages)
  return pages.map((p, idx) => {
    if (p.children) {
      return createAcordianList(p, idx)
    } else {
      return (
        <li class="usa-sidenav__item">
          <Link to={p.slug}>{p.caption}</Link>
        </li>
      )
    }
  })
}

function getSideNav(pages, path) {
  let currPage = ""
  if (path.includes("/cos")) {
    currPage = "COS"
  } else if (path.includes("/crst")) {
    currPage = "CRST"
  } else if (path.includes("/model-rfp")) {
    currPage = "MODELRFP"
  } else if (path.includes("/sustain")) {
    currPage = "SUSTAIN"
  } else {
    return null
  }
  return createNavList(pages[currPage])
}

const SideNav = ({ style, pages, path }) => {
  return (
    <aside className={cx(styles.nav, style)}>
      <ul class="usa-sidenav">{getSideNav(pages, path)}</ul>
    </aside>
  )
}

export default SideNav
