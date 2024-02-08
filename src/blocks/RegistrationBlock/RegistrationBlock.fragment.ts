import { gql } from 'graphql-request'

export const REGISTRATION_BLOCK_FRAGMENT = gql`
  fragment RegistrationBlockFragment on RegistrationBlockRecord {
    id
    _modelApiKey
    lateLabel
    earlyLabel
    registrationPeriod
    tiers {
      id
      earlyPrice
      latePrice
      title
      details(markdown: true)
      lateButton {
        ...CtaButtonFragment
      }
      earlyButton {
        ...CtaButtonFragment
      }
    }
  }
`
