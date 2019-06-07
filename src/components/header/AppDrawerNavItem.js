import React from "react"
import { ListItem, Button, Collapse } from "@material-ui/core"
import { Link } from "gatsby"

function AppDrawerNavItem(props) {
  const {
    children,
    depth,
    href,
    onClick,
    openImmediately = false,
    topLevel = false,
    title,
    ...other
  } = props

  const [open, setOpen] = React.useState(openImmediately)

  const handleClick = () => {
    setOpen(oldOpen => !oldOpen)
  }

  if (href) {
    return (
      <ListItem disableGutters key={href}>
        <Button to="/" naked href={href} disableTouchRipple>
          {title}
        </Button>
      </ListItem>
    )
  }

  return (
    <ListItem key={href}>
      <Button onClick={handleClick}>{title}</Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </ListItem>
  )

  //   return (
  //     <ListItem key={props.pathname}>
  //       <Link to="/">{props.title}</Link>
  //     </ListItem>

  //   )
}

export default AppDrawerNavItem
