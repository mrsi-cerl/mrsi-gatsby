import React from "react"
import { Link } from "gatsby"
import { Divider, List } from "@material-ui/core"
import AppDrawerNavItem from "./AppDrawerNavItem"
import pages from "./pages"

// eslint-disable-next-line react/prop-types
function renderNavItems({ pages, ...params }) {
  return (
    <List condensed>
      {pages.reduce(
        // eslint-disable-next-line no-use-before-define
        (items, page) => reduceChildRoutes({ items, page, ...params }),
        []
      )}
    </List>
  )
}

function reduceChildRoutes({ props, activePage, items, page, depth, t }) {
  if (page.children && page.children.length > 1) {
    const topLevel = activePage.pathname.indexOf(`${page.pathname}/`) === 0

    items.push(
      <AppDrawerNavItem
        depth={depth}
        key={page.title}
        topLevel={topLevel && !page.subheader}
        openImmediately={topLevel || Boolean(page.subheader)}
        title={page.title}
      >
        {renderNavItems({
          props,
          pages: page.children,
          activePage,
          depth: depth + 1,
          t,
        })}
      </AppDrawerNavItem>
    )
  } else {
    page = page.children && page.children.length === 1 ? page.children[0] : page

    items.push(
      <AppDrawerNavItem
        depth={depth}
        key={page.title}
        title={page.title}
        href={page.pathname}
        onClick={props.onClose}
      />
    )
  }

  return items
}

function AppDrawerNav(props) {
  const activePage = {
    title: "hello",
    pathname: "/",
  }
  console.log(pages)
  const drawer = (
    <div>
      <div>
        <div>
          <Link to="/" variant="h6" color="inherit">
            MRSI
          </Link>
        </div>
      </div>
      <Divider />
      {renderNavItems({ props, pages, activePage, depth: 0 })}
    </div>
  )

  return <div>{drawer}</div>
}

export default AppDrawerNav
