import { gql } from 'graphql-request'

const sponsorFields = gql`
      id
      name
      logo {
        id
        url
        alt
        width
        height
        responsiveImage(imgixParams: { auto: format }) {
          ...ResponsiveImageFragment
        }
      }
      websiteUrl
`

export const PAGE_HEADER_BLOCK_FRAGMENT = gql`
  fragment PageHeaderBlockFragment on PageHeaderBlockRecord {
    id
    _modelApiKey
    title
    subTitle
    paragraph(markdown: true)
    mainSponsorLabel
    mainSponsor {
			${sponsorFields}
    }
    hasOtherSponsors
    otherSponsorsLabel
    otherSponsors {
			${sponsorFields}
    }
    heroImage {
      url
      alt
      responsiveImage(imgixParams: { auto: format }) {
        ...ResponsiveImageFragment
      }
    }
  }
`
