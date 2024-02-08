import { gql } from 'graphql-request'

export const AD_BLOCK_FRAGMENT = gql`
  fragment AdBlockFragment on AdBlockRecord {
    id
    _modelApiKey
    anchorId
    banner

    ad {
      id
      url
      image {
        responsiveImage(imgixParams: { auto: format }) {
          ...ResponsiveImageFragment
        }
      }
    }

    ads {
      id
      url
      image {
        responsiveImage(imgixParams: { auto: format }) {
          ...ResponsiveImageFragment
        }
      }
    }
  }
`
