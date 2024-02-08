import { gql } from 'graphql-request'

export const TESTIMONIALS_BLOCK_FRAGMENT = gql`
  fragment TestimonialsBlockFragment on TestimonialsBlockRecord {
    id
    _modelApiKey
    anchorId
    headline
    textToHighlight
    testimonials {
      id
      author
      company
      quote
    }
  }
`
