import { gql } from 'graphql-request'
export const CONTACT_BLOCK_FRAGMENT = gql`
  fragment ContactBlockFragment on ContactBlockRecord {
    id
    _modelApiKey
    anchorId
    subtitle
    title
    cards {
      ...ContactCardBlockFragment
    }
  }
`
