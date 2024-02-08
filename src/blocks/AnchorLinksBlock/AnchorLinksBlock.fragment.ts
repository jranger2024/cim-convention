import { gql } from 'graphql-request'

export const ANCHOR_LINKS_BLOCK_FRAGMENT = gql`
  fragment AnchorLinksBlockFragment on AnchorLinksBlockRecord {
    id
    _modelApiKey
    links {
      id
      anchorLink
      label
    }
  }
`
