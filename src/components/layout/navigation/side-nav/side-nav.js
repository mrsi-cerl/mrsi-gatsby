import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import styles from "./side-nav.module.css"

function createAcordianList(p) {}

function createNavList(pages) {
  console.log(pages)
  return pages.map(p => {
    if (p.children) {
      console.log("this has children")
      return null
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
