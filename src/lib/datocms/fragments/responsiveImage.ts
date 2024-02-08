import { gql } from 'graphql-request'

export const RESPONSIVE_IMAGE_FRAGMENT = gql`
  fragment ResponsiveImageFragment on ResponsiveImage {
    src
    srcSet
    webpSrcSet
    sizes
    width
    height
    aspectRatio
    alt
    title
    base64
    bgColor
  }
`
