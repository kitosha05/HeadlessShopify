import React from "react"

import BackgroundHero from "../images/homepageHero.jpg"
import Card from "react-bootstrap/Card"

import { Link } from "gatsby"
import LazyHero from "react-lazy-hero"
import { navigate } from "@reach/router"
import Button from "./styled-button"
import Bounce from "react-reveal/Bounce"
import { card, button } from "./hero-image.module.css"
import Row from "react-bootstrap/Row"
const HeroImage = () => {
  return (
    <LazyHero
      parallaxOffset={100}
      imageSrc={BackgroundHero}
      minHeight="100vh"
      opacity={0.4}
      isCentered={true}
    >
      <Bounce>
        <Card className={`${card} text-center`}>
          <Card.Body>
            <Card.Title>King Clothing</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Card.Text>
            <Row className="text-center justify-content-center">
              <Button
                onClick={() => navigate(`/products`)}
                style={{ margin: "0 auto" }}
              >
                Shop Now
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Bounce>
    </LazyHero>
  )
}
export default HeroImage
