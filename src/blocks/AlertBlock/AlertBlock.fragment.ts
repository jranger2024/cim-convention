import { gql } from 'graphql-request'

export const ALERT_BlOCK_FRAGMENT = gql`
  fragment AlertBlockFragment on AlertBlockRecord {
    id
    _modelApiKey
    title
    paragraphs
    image {
      responsiveImage(imgixParams: { auto: format }) {
        ...ResponsiveImageFragment
      }
    }
  }
`
