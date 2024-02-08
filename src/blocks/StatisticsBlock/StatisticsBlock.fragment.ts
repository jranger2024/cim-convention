import { gql } from 'graphql-request'

export const STATISTICS_BLOCK_FRAGMENT = gql`
  fragment StatisticsBlockFragment on StatisticsBlockRecord {
    id
    _modelApiKey
    anchorId
    headline
    subHeadline
    stats {
      id
      _modelApiKey
      label
      value
      iconSelection
    }
    styleOptions
  }
`
