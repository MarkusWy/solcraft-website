import * as React from "react"
import { graphql } from "gatsby"
import { Container, Section } from "./ui"

export default function EmbeddedHtml(props) {
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
