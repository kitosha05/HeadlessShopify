import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { navigate } from "@reach/router"
import { ProductListing } from "../components/product-listing"
import { GatsbyImage } from "gatsby-plugin-image"
import { collectionImage, overlay, container } from "./index.module.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const query = graphql`
  query {
    allShopifyCollection(filter: { handle: { nin: "frontpage" } }) {
      edges {
        node {
          id
          handle
          title
          image {
            altText
            gatsbyImageData(height: 300, width: 500)
          }
        }
      }
    }
  }
`

function Hero({ collections }) {
  const images = collections.map((collection, index) => {
    return (
      <div className={container}>
        <GatsbyImage
          alt={collection.node.image?.altText ?? collection.node.title}
          image={collection.node.image?.gatsbyImageData ?? null}
          loading={index === 0 ? "eager" : "lazy"}
          style={{ position: "relative", height: "auto", width: "100%" }}
          imgStyle={{ height: "auto", width: "100%" }}
        />
        <div
          className={overlay}
          onClick={() => navigate(`/${collection.node.handle}`)}
        >
          Shop {collection.node.title}
        </div>
      </div>
    )
  })
  return (
    <Col
      xs="12"
      md="8"
      className="offset-md-2 justify-content-center align-items-center"
    >
      <Row>
        <h1>Featured Collections</h1>
      </Row>
      <Row className="mt-4">
        <Col xs="12" md="4">
          {images[0]}
        </Col>
        <Col xs="12" md="4">
          {images[1]}
        </Col>
        <Col xs="12" md="4">
          {images[2]}
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs="12" md="6">
          {images[3]}
        </Col>
        <Col xs="12" md="6">
          {images[4]}
        </Col>
      </Row>
    </Col>
  )
}

export default function IndexPage({ data }) {
  const collectionNodes = data.allShopifyCollection.edges

  return (
    <Layout>
      <Hero collections={collectionNodes} />
      {/* <ProductListing products={data?.shopifyCollection?.products} /> */}
    </Layout>
  )
}
