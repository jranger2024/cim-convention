import { gql } from 'graphql-request'

export const CONVENTION_BLOCK_FRAGMENT = gql`
  fragment ConventionBlockFragment on ConventionBlockRecord {
    id
    _modelApiKey
    name
    url
    logo {
      url
      alt
      responsiveImage(imgixParams: { auto: format }) {
        ...ResponsiveImageFragment
      }
    }
  }
`
