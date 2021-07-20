import * as React from "react"
import { Link } from "gatsby"
import { StoreContext } from "../context/store-context"
import Logo from "../icons/logo"
import { Navigation } from "./navigation"
import { CartButton } from "./cart-button"
import SearchIcon from "../icons/search"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Toast } from "./toast"
import {
  navLink,
  leftSideNav,
  searchButton,
  navbarBrand,
  rightSide,
  navbar,
  logo,
} from "./header.module.css"

export function Header() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <Navbar
      className={navbar}
      sticky="top"
      collapseOnSelect
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand className={navbarBrand}>
        <Link to="/">
          {" "}
          <Logo className={logo} style={{ display: "inline" }} />
          <span>King Clothing</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={leftSideNav}>
          <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <Navigation />
          </NavDropdown>
          {/* <Nav.Link className={navLink} to="/blog">
            Blog
          </Nav.Link>

          <Nav.Link className={navLink} to="/pages/about-us">
            About Us
          </Nav.Link>
          <Nav.Link className={navLink} to="/pages/contact-us">
            Contact Us
          </Nav.Link> */}
          {/* <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link> */}
        </Nav>
        <Nav className={rightSide}>
          <Nav.Link>
            <Link to="/search" className={searchButton}>
              <SearchIcon />
            </Link>
          </Nav.Link>
          <Nav.Link>
            <CartButton quantity={quantity} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                fill="#fff"
              />
              <path
                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                fill="#fff"
              />
              <path
                d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                fill="#fff"
              />
            </svg>
          </>
        )}
      </Toast>
    </Navbar>
  )
}
