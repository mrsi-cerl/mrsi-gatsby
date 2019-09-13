import React from "react"
import closeIcon from "../../../../images/close-blue-60v-alt.svg"
import { Link } from "gatsby"
import cx from "classnames"
import styles from "./mobile-nav.module.css"
import { Accordion, AccordionButton, AccordionContent } from "uswds-react"

function createAcordianList(p, idx, currPath) {
  const openAccordian = p.children.find(e => e.slug == currPath)
  console.log(`side-nav-section-${p.caption}-${idx}`)
  return (
    <li className="usa-sidenav__item">
      <Accordion>
        <AccordionButton
          controls={`side-nav-section-${p.caption}-${idx}`}
          className={cx("usa-sidenav__item", styles.accordion, {
            "usa-current": openAccordian,
          })}
          defaultExpanded={openAccordian}
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
          id={`side-nav-section-${p.caption}-${idx}`}
          className={styles.accordionContent}
          defaultHidden={!openAccordian}
        >
          <ul className="usa-sidenav__sublist">
            {p.children.map((e, index) => {
              return (
                <li
                  className={cx("usa-sidenav__item", {
                    "usa-current": e.slug == currPath,
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

function createNavList(pages, currPath) {
  return pages.map((p, idx) => {
    if (p.children) {
      return createAcordianList(p, idx, currPath)
    } else {
      return (
        <li
          className={cx("usa-sidenav__item", {
            "usa-current": p.slug == currPath,
          })}
        >
          <Link to={p.slug}>{p.caption}</Link>
        </li>
      )
    }
  })
}

function getMobileNav(pages, path) {
  return [
    {
      key: "COS",
      title: "COS",
    },
    {
      key: "CRST",
      title: "CRST",
    },
    {
      key: "MODELRFP",
      title: "Model RFP",
    },
    {
      key: "SUSTAIN",
      title: "Sustain",
    },
  ].map(
    (e, idx) => [<h5>{e.title}</h5>, createNavList(pages[e.key], path)]
    // <div className={"usa-nav__primary-item"}>
    //   <Accordion>
    //     <AccordionButton
    //       controls={`mobile-nav-section-${idx}`}
    //       className={"usa-nav__link"}
    //       defaultExpanded={false}
    //     >
    //       {e.title}
    //     </AccordionButton>
    //     <AccordionContent
    //       id={`mobile-nav-section-${idx}`}
    //       className={styles.accordionContent}
    //       defaultHidden={true}
    //     >
    //       {createNavList(pages[e.key], path)}
    //     </AccordionContent>
    //   </Accordion>
    // </div>
  )
}

const MobileNav = ({ pages, path }) => (
  <nav role="navigation" className={cx(styles.wrapper, "usa-nav")}>
    <button
      className="usa-nav__close"
      style={{
        backgroundImage: "url(" + closeIcon + ")",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f0f0f0",
        backgroundPosition: "50%",
        backgroundSize: "1rem",
        height: "3rem",
        width: "3rem",
      }}
    >
      <span className="usa-sr-only">Close</span>
    </button>
    <ul className="usa-sidenav usa-nav__primary">{getMobileNav(pages, path)}</ul>
  </nav>
)

export default MobileNav
