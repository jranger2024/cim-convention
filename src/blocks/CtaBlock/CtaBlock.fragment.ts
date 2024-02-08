import { gql } from 'graphql-request'

export const CTA_BLOCK_FRAGMENT = gql`
  fragment CtaBlockFragment on CtaBlockRecord {
    id
    _modelApiKey
    anchorId
    headline
    subHeadline
    ctaButton {
      ...CtaButtonFragment
    }
  }
`
