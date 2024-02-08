import { gql } from 'graphql-request'
export const CARDS_CAROUSEL_BLOCK_FRAGMENT = gql`
  fragment CardsCarouselBlockFragment on CardsCarouselBlockRecord {
    id
    _modelApiKey
    anchorId
    title
    background
    cards {
      ...CardBlockFragment
    }
  }
`
