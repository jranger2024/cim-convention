import { gql } from 'graphql-request'

export const ANNOUNCEMENT_BANNER_BLOCK_FRAGMENT = gql`
  fragment AnnouncementBannerBlockFragment on AnnouncementBannerBlockRecord {
    id
    _modelApiKey
    text
  }
`
