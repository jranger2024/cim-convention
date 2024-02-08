import { gql } from 'graphql-request'

export const TWO_COLUMN_WITH_IMAGE_BLOCK_FRAGMENT = gql`
  fragment TwoColumnWithImageBlockFragment on TwoColumnWithImageBlockRecord {
    id
    _modelApiKey
    anchorId
    image {
      responsiveImage(imgixParams: { auto: format, ar: "1:1", fit: crop }) {
        ...ResponsiveImageFragment
      }
    }
    textContent {
      ... on TwoColumnWithImageBlockWithHeadingHighlightRecord {
        id
        _modelApiKey
        headline
        textToHighlight
        body
      }
      ... on TwoColumnWithImageBlockDefaultRecord {
        id
        _modelApiKey
        structuredText {
          value
        }
      }
      ... on TwoColumnWithImageBlockWithFeatureListRecord {
        id
        _modelApiKey
        featureList {
          ... on FeatureListItemRecord {
            id
            _modelApiKey
            name
            description
          }
        }
      }
    }
    ctaButtons {
      ... on CtaButtonRecord {
        ...CtaButtonFragment
      }
      ... on CtaButtonWithHeadingTextRecord {
        id
        _modelApiKey
        heading
        supportText
        button {
          ...CtaButtonFragment
        }
      }
    }
    mobileLayout
    desktopLayout
    backgroundColor
  }
`
