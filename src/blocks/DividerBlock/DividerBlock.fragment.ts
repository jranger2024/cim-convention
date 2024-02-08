import { gql } from 'graphql-request'

export const DIVIDER_BLOCK_FRAGMENT = gql`
  fragment DividerBlockFragment on DividerBlockRecord {
    id
    _modelApiKey
  }
`
