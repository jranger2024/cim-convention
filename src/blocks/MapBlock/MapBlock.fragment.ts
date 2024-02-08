import { gql } from 'graphql-request'

export const MAP_BLOCK_FRAGMENT = gql`
  fragment MapBlockFragment on MapBlockRecord {
    id
    _modelApiKey
    location {
      latitude
      longitude
    }
    anchorId
  }
`
