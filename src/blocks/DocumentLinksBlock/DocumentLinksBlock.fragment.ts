import { gql } from 'graphql-request'

export const DOCUMENT_LINKS_BLOCK_FRAGMENT = gql`
  fragment DocumentLinksBlockFragment on DocumentLinksBlockRecord {
    id
    _modelApiKey
    anchorId
    title
    links {
      ... on DocumentLinksBlockAssetRecord {
        id
        _modelApiKey
        label
        asset {
          url
        }
      }
      ... on LinkBlockRecord {
        id
        _modelApiKey
        label
        useExternalLink
        externalLink
        linkTo {
          id
          slug
          title
        }
      }
    }
  }
`
