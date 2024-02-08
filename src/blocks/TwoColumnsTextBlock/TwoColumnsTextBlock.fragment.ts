import { gql } from 'graphql-request'

export const TWO_COLUMNS_TEXT_BLOCK_FRAGMENT = gql`
  fragment TwoColumnsTextBlockFragment on TwoColumnsTextBlockRecord {
    id
    _modelApiKey
    anchorId
    title
    textLeft
    textRight
  }
`
