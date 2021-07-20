import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
import slugify from "@sindresorhus/slugify"
import { MoreButton } from "../components/more-button"
import Row from "react-bootstrap/Row"

export default function ProductTypeIndex({
  data: { collection },
  pageContext: { handle },
}) {
  const { title, products } = collection.nodes[0]

  return (
    <Layout>
      <Seo title={`Shop ${title}`} />
      <Row className="text-center mt-3 mb-3">
        <h1>{title}</h1>
      </Row>
      <ProductListing products={products} />
    </Layout>
  )
}

export const query = graphql`
  query ($handle: String!) {
    collection: allShopifyCollection(filter: { handle: { eq: $handle } }) {
      nodes {
        handle
        id
        title
        products {
          id
          title
          slug: gatsbyPath(
            filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
          )
          images {
            id
            altText
            gatsbyImageData(aspectRatio: 1, width: 640)
          }
          priceRangeV2 {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          vendor
        }
      }
    }
  }
`
