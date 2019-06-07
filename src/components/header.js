import { Link } from "gatsby"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Helmet } from "react-helmet"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"

function reduceChildRoutes({ props, items, page, depth }) {
  if (page.children && page.children.length > 1) {
  } else {
  }
}

function Header(props) {
  const SideNav = (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>COS</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Hello there!</Dropdown.Item>
        <Dropdown as={NavItem} drop="right">
          <Dropdown.Toggle as={NavLink}>Louisville</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Hello there!</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Dropdown.Menu>
    </Dropdown>
  )

  return (
    <Navbar bg="light" expand="lg">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Helmet>
      <Navbar.Brand href="#home">MRSI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="COS">
            <NavDropdown.Item>
              <Link to="/cos">About COS</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/cos/army-standards">Army Standards</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/cos/standard-designs">USACE Standard Designs</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/cos/cos-poc">COS Points of Contact</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <Link to="/crst">CRST</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/pdrs">PDRS</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
