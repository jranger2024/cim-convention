import { gql } from 'graphql-request'
import { generateRecursiveQuery } from '@/utils/generateRecursiveQuery'

const queryField = 'subMenuItems'
const nestedFields = [
  `linkTo {
			id
			slug
			title
		}
`,
  'name',
  'id',
]

export const DEFAULT_HEADER_BLOCK_FRAGMENT = gql`
    fragment DefaultHeaderBlockFragment on DefaultHeaderBlockRecord {
        id
        _modelApiKey
				languageToggleLabel
				ctaButton {
					...CtaButtonFragment
				}
				sponsorLink
				cimLogo {
					url
					alt
				}
				siteLogo {
					url
					alt
				}
				menu {
					name
					menuItems {
						${generateRecursiveQuery(queryField, nestedFields, 4)}
					}
				}
    }
`
