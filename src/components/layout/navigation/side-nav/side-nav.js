import React from "react"
import Link from "../../../link"
import cx from "classnames"
import styles from "./side-nav.module.css"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"

const compareCaption = (a, b) => {
  if (a.caption.toLowerCase() < b.caption.toLowerCase()) return -1
  if (a.caption.toLowerCase() > b.caption.toLowerCase()) return 1
  return 0
}

function createAcordianList(p, idx, currPath) {
  const openAccordian = p.children.find((e) => e.slug === currPath)
    ? true
    : false

  // don't mutate the original
  const children = [...p.children].sort(compareCaption)

  return (
    <li className="usa-sidenav__item" key={p.slug}>
      <Accordion>
        <AccordionButton
          controls={`side-nav-section-${idx}`}
          className={cx("usa-sidenav__item", styles.accordion, {
            "usa-current": openAccordian,
          })}
          defaultExpanded={openAccordian}
        >
          <span
            className={cx({
              "usa-current": p in children,
            })}
          >
            {p.caption}
          </span>
        </AccordionButton>
        <AccordionContent
          id={`side-nav-section-${idx}`}
          className={styles.accordionContent}
          defaultHidden={!openAccordian}
        >
          <ul className="usa-sidenav__sublist">
            {children.map((e, index) => {
              return (
                <li
                  key={e.slug}
                  className={cx("usa-sidenav__item", {
                    "usa-current": e.slug === currPath,
                  })}
                >
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

function createNavList(menuItems, currPath) {
  const menu = menuItems.map((p, idx) => {
    if (p.children) {
      return createAcordianList(p, idx, currPath)
    } else {
      return (
        <li
          key={p.slug}
          className={cx("usa-sidenav__item", {
            "usa-current": p.slug === currPath,
          })}
        >
          <Link to={p.slug}>{p.caption}</Link>
        </li>
      )
    }
  })

  return menu
}

function createPDRSNavList(p, currPath) {
      return (
        <div>
        <li
          className={cx("usa-sidenav__item", {
            "usa-current": currPath,
          })}
        >
          <Link to=".">About PDRS/Code2</Link>
        </li>
        <li class="usa-sidenav__item">
          <Link to="https://www.wbdg.org/ffc/dod/unified-facilities-criteria-ufc/ufc-3-740-05" target="_blank" rel="noopener noreferrer">CSRA Templates and Information<br/>
          <small><i>The <b>UFC 3-740-05 Website</b> contains a checklist, the CSRA model template, CSRA Report template, and an example merged CSRA PDF report along with the UFC for CSRAs on MILCON projects.</i></small>
          </Link>
        </li>
        <li class="usa-sidenav__item">
          <Link to="https://usace.dps.mil/sites/KMP-CEC/SitePages/Cost-Tools.aspx" target="_blank" rel="noopener noreferrer">Cost Risk Analysis: HQ Cost CoP website<br/>
          <small><i>The HQ Cost CoP website contains a section for <b>Cost Risk Analysis</b> which contains links to the Civil Works guidance manual, CSRA template, ARA template, CSRA report (template + example merged CSRA PDF report), etc.<br/>
          <b>***PLEASE NOTE***</b> this site is only accessible to USACE personnel.</i></small>
          </Link>
        </li>
        </div>
      )
    }

function getSideNav(pages, path) {
  let currPage = ""
  if (path.includes("/cos")) {
    currPage = "COS"
  } else if (path.includes("/coe")) {
    currPage = "COE"
  } else if (path.includes("/crst")) {
    currPage = "CRST"
  } else if (path.includes("/model-rfp")) {
    currPage = "MODELRFP"
  } else if (path.includes("/sustain")) {
    currPage = "SUSTAIN"
  } else if (path.includes("/pdrs")) {
    currPage = "PDRS"
    return createPDRSNavList(pages[currPage], path)
  } else {
    return null
  }
  return createNavList(pages[currPage], path)
}

const SideNav = ({ style, pages, path }) => {
  return (
    <aside className={cx(styles.nav, style)}>
      <ul className="usa-sidenav">{getSideNav(pages, path)}</ul>
    </aside>
  )
}

export default SideNav
