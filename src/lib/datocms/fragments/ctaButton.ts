import { gql } from 'graphql-request'

export const PageFields = `id slug _modelApiKey`

export const CTA_BUTTON_FRAGMENT = gql`
  fragment CtaButtonFragment on CtaButtonRecord {
    id
    _modelApiKey
    label
    useExternalLink
		linkTo {
			... on HomePageRecord {
				${PageFields}
			}
			... on PageRecord {
				${PageFields}
			}
			... on ShortCourseRecord {
				${PageFields}
			}
		}
    externalLink
    stylingOption
  }
`
