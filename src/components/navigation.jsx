import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"
import NavDropdown from "react-bootstrap/NavDropdown"
export function Navigation() {
  const data = useStaticQuery(graphql`
    query {
      allShopifyCollection(filter: { handle: { nin: "frontpage" } }) {
        edges {
          node {
            title
            id
            handle
          }
        }
      }
    }
  `)
  console.log(data)
  return data.allShopifyCollection.edges.map((collection) => (
    <NavDropdown.Item>
      <Link
        key={collection.node.id}
        className={navLink}
        to={`/${collection.node.handle}`}
        activeClassName={activeLink}
      >
        {collection.node.title}
      </Link>
    </NavDropdown.Item>
  ))
}
