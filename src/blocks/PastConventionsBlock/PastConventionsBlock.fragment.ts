import { gql } from 'graphql-request'

export const PAST_CONVENTIONS_BLOCK_FRAGMENT = gql`
  fragment PastConventionsBlockFragment on PastConventionsBlockRecord {
    id
    _modelApiKey
    anchorId
    title
    conventions {
      ...ConventionBlockFragment
    }
  }
`
