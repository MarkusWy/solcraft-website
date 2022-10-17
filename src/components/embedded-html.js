import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading } from "./ui"
import * as styles from "./about-hero.css"

export default function EmbeddedHtml(props) {
  console.log(props);
  return (
    <Section>
      <Container>
        {props.text && (
          <div
            dangerouslySetInnerHTML={{__html: props.text}}
          />
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment EmbeddedHtmlContent on EmbeddedHtml {
    id
    text
  }
`
