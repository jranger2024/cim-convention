import { gql } from 'graphql-request'

import { PageFields } from '@/lib/datocms/fragments/ctaButton'

export const SCHEDULE_BlOCK_FRAGMENT = gql`
  fragment ScheduleBlockFragment on ScheduleBlockRecord {
    id
    _modelApiKey
    anchorId
    displayAnchorLinks
		linkSupportLabel
    days {
      id
      date
      timeSlots {
        id
        time
				tags {
					id
					title
					variant
				}
        title
        description
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
				useExternalLink
				externalLink
      }
    }
  }
`
