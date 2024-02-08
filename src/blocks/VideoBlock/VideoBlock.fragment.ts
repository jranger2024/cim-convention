import { gql } from 'graphql-request'

export const VIDEO_BLOCK_FRAGMENT = gql`
  fragment VideoBlockFragment on VideoBlockRecord {
    id
    _modelApiKey
    anchorId
    title
    video {
      url
      height
      provider
      providerUid
      thumbnailUrl
      title
      width
    }
  }
`
