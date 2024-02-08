import { gql } from 'graphql-request'
import { locales, defaultLocale, Locale } from '@/navigation'

import { DEFAULT_FOOTER_BLOCK_FRAGMENT } from '@/blocks/DefaultFooterBlock/DefaultFooterBlock.fragment'
import { DEFAULT_HEADER_BLOCK_FRAGMENT } from '@/blocks/DefaultHeaderBlock/DefaultHeaderBlock.fragment'
import { ANNOUNCEMENT_BANNER_BLOCK_FRAGMENT } from '@/blocks/AnnouncementBannerBlock/AnnouncementBannerBlock.fragment'

// Shared fragments
import { RESPONSIVE_IMAGE_FRAGMENT } from '../fragments/responsiveImage'
import { CTA_BUTTON_FRAGMENT } from '../fragments/ctaButton'

type Params = {
  locale: Locale
  slug: string
  isHomePage?: boolean
}

export const getCourseBySlugQuery = ({ locale, slug }: Params): string => {
  const l = locales.includes(locale as any) ? locale : defaultLocale

  return gql`
			${DEFAULT_FOOTER_BLOCK_FRAGMENT}
			${DEFAULT_HEADER_BLOCK_FRAGMENT}
			${ANNOUNCEMENT_BANNER_BLOCK_FRAGMENT}

			${RESPONSIVE_IMAGE_FRAGMENT}
			${CTA_BUTTON_FRAGMENT}

      query ShortCourseQuery {
        _site {
            favicon {
                alt
                url
            }
        }
        shortCourse (
					locale: ${l} 
					filter: { slug: { eq: "${slug}" } }
				) {
					_allSlugLocales {
						locale
						value
					}
					_seoMetaTags {
							attributes
							tag
							content
					}
					header {
						blocks {
							...DefaultHeaderBlockFragment
							...AnnouncementBannerBlockFragment
						}
					}
					pageTitle
					courseTitle
					duration
					dates
					startEndTime
					image {
						responsiveImage (imgixParams: { auto: format }) {
							...ResponsiveImageFragment
						}
					}
					description {
						value
					}
					buttons {
						...CtaButtonFragment
					}
					footer {
						blocks {
							...DefaultFooterBlockFragment
						}
					}
        }
        socialLink {
          facebook
          instagram
          linkedin
          twitter
          youtube
        }
      }
`
}
