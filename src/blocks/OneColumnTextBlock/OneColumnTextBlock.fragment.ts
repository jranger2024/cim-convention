import { gql } from 'graphql-request'

export const ONE_COLUMN_TEXT_BLOCK_FRAGMENT = gql`
  fragment OneColumnTextBlockFragment on OneColumnTextBlockRecord {
    id
    _modelApiKey
    anchorId
    text
  }
`
