import { gql } from 'graphql-request'

export const DEFAULT_FOOTER_BLOCK_FRAGMENT = gql`
  fragment DefaultFooterBlockFragment on DefaultFooterBlockRecord {
    id
    _modelApiKey
    contactButtonLabel
    contactButtonLink
    contactParagraph
    contactTitle
    copyright
    newsletterButtonLabel
    newsletterInputPlaceholder
    newsletterParagraph
    newsletterTitle
    submitSuccessMessage
    submitErrorMessage
    sponsorTitle
    sponsorLink
    sponsorLogo {
      responsiveImage(imgixParams: { auto: format }) {
        ...ResponsiveImageFragment
      }
      url
      alt
    }
    externalLinkPolicies
    privacyPolicyPage {
      id
      title
      slug
    }
    cookiePolicyPage {
      id
      title
      slug
    }
  }
`
