import { gql } from 'graphql-request'
import { locales, defaultLocale, Locale } from '@/navigation'

// Blocks fragments
import { HERO_BLOCK_FRAGMENT } from '@/blocks/HeroBlock/HeroBlock.fragment'
import { DEFAULT_FOOTER_BLOCK_FRAGMENT } from '@/blocks/DefaultFooterBlock/DefaultFooterBlock.fragment'
import { DEFAULT_HEADER_BLOCK_FRAGMENT } from '@/blocks/DefaultHeaderBlock/DefaultHeaderBlock.fragment'
import { ANNOUNCEMENT_BANNER_BLOCK_FRAGMENT } from '@/blocks/AnnouncementBannerBlock/AnnouncementBannerBlock.fragment'
import { TWO_COLUMN_WITH_IMAGE_BLOCK_FRAGMENT } from '@/blocks/TwoColumnWithImageBlock/TwoColumnWithImageBlock.fragment'
import { AD_BLOCK_FRAGMENT } from '@/blocks/AdBlock/AdBlock.fragment'
import { CTA_BLOCK_FRAGMENT } from '@/blocks/CtaBlock/CtaBlock.fragment'
import { DIVIDER_BLOCK_FRAGMENT } from '@/blocks/DividerBlock/DividerBlock.fragment'
import { TESTIMONIALS_BLOCK_FRAGMENT } from '@/blocks/TestimonialsBlock/TestimonialsBlock.fragment'
import { PAGE_HEADER_BLOCK_FRAGMENT } from '@/blocks/PageHeaderBlock/PageHeaderBlock.fragment'
import { STATISTICS_BLOCK_FRAGMENT } from '@/blocks/StatisticsBlock/StatisticsBlock.fragment'
import { ACCORDION_BLOCK_FRAGMENT } from '@/blocks/AccordionBlock/AccordionBlock.fragment'
import { ACCORDION_GROUP_BLOCK_FRAGMENT } from '@/blocks/AccordionGroupBlock/AccordionGroupBlock.fragment'
import { ONE_COLUMN_TEXT_BLOCK_FRAGMENT } from '@/blocks/OneColumnTextBlock/OneColumnTextBlock.fragment'
import { SHORT_COURSES_LIST_BLOCK_FRAGMENT } from '@/blocks/ShortCoursesListBlock/ShortCoursesListBlock.fragment'
import { SCHEDULE_BlOCK_FRAGMENT } from '@/blocks/ScheduleBlock/ScheduleBlock.fragment'
import { ALERT_BlOCK_FRAGMENT } from '@/blocks/AlertBlock/AlertBlock.fragment'

import { CARD_BLOCK_FRAGMENT } from '@/blocks/CardBlock/CardBlock.fragment'
import { VIDEO_BLOCK_FRAGMENT } from '@/blocks/VideoBlock/VideoBlock.fragment'
import { PAST_CONVENTIONS_BLOCK_FRAGMENT } from '@/blocks/PastConventionsBlock/PastConventionsBlock.fragment'
import { CONVENTION_BLOCK_FRAGMENT } from '@/blocks/ConventionBlock/ConventionBlock.fragment'
import { FORM_BLOCK_FRAGMENT } from '@/blocks/FormBlock/FormBlock.fragment'
import { SPONSOR_LIST_BLOCK_FRAGMENT } from '@/blocks/SponsorListBlock/SponsorListBlock.fragment'

// Shared fragments
import { RESPONSIVE_IMAGE_FRAGMENT } from '../fragments/responsiveImage'
import { CTA_BUTTON_FRAGMENT } from '../fragments/ctaButton'
import { CARDS_CONTAINER_BLOCK_FRAGMENT } from '@/blocks/CardsContainerBlock/CardsContainerBlock.fragment'
import { CONTACT_BLOCK_FRAGMENT } from '@/blocks/ContactBlock/ContactBlock.fragment'
import { CONTACT_CARD_BLOCK_FRAGMENT } from '@/blocks/ContactCardBlock/ContactCardBlock.fragment'
import { CARDS_CAROUSEL_BLOCK_FRAGMENT } from '@/blocks/CardsCarouselBlock/CardsCarouselBlock.fragment'
import { REGISTRATION_BLOCK_FRAGMENT } from '@/blocks/RegistrationBlock/RegistrationBlock.fragment'
import { MAP_BLOCK_FRAGMENT } from '@/blocks/MapBlock/MapBlock.fragment'
import { ANCHOR_LINKS_BLOCK_FRAGMENT } from '@/blocks/AnchorLinksBlock/AnchorLinksBlock.fragment'
import { DOCUMENT_LINKS_BLOCK_FRAGMENT } from '@/blocks/DocumentLinksBlock/DocumentLinksBlock.fragment'
import { TWO_COLUMNS_TEXT_BLOCK_FRAGMENT } from '@/blocks/TwoColumnsTextBlock/TwoColumnsTextBlock.fragment'

type Params = {
  locale: Locale
  slug: string
  isHomePage?: boolean
}

export const getPageBySlugQuery = ({
  locale,
  slug,
  isHomePage,
}: Params): string => {
  const l = locales.includes(locale as any) ? locale : defaultLocale

  const queryType = isHomePage ? 'homePage' : 'page'
  const filter = isHomePage ? '' : `filter: { slug: { eq: "${slug}" } }`

  return gql`
    ${HERO_BLOCK_FRAGMENT}
		${TWO_COLUMN_WITH_IMAGE_BLOCK_FRAGMENT}
		${AD_BLOCK_FRAGMENT}
		${CTA_BLOCK_FRAGMENT}
		${DIVIDER_BLOCK_FRAGMENT}
		${CARD_BLOCK_FRAGMENT}
		${CARDS_CAROUSEL_BLOCK_FRAGMENT}
		${CARDS_CONTAINER_BLOCK_FRAGMENT}
		${TESTIMONIALS_BLOCK_FRAGMENT}
		${DEFAULT_FOOTER_BLOCK_FRAGMENT}
		${DEFAULT_HEADER_BLOCK_FRAGMENT}
		${ANNOUNCEMENT_BANNER_BLOCK_FRAGMENT}
		${VIDEO_BLOCK_FRAGMENT}
		${PAGE_HEADER_BLOCK_FRAGMENT}
		${PAST_CONVENTIONS_BLOCK_FRAGMENT}
		${CONVENTION_BLOCK_FRAGMENT}
		${STATISTICS_BLOCK_FRAGMENT}
		${FORM_BLOCK_FRAGMENT}
		${ACCORDION_BLOCK_FRAGMENT}
		${ONE_COLUMN_TEXT_BLOCK_FRAGMENT}
		${SPONSOR_LIST_BLOCK_FRAGMENT}
		${CONTACT_BLOCK_FRAGMENT}
    ${CONTACT_CARD_BLOCK_FRAGMENT}
		${SHORT_COURSES_LIST_BLOCK_FRAGMENT}
		${ACCORDION_GROUP_BLOCK_FRAGMENT}
		${SCHEDULE_BlOCK_FRAGMENT}
    ${REGISTRATION_BLOCK_FRAGMENT}
    ${MAP_BLOCK_FRAGMENT}
 		${ALERT_BlOCK_FRAGMENT}
    ${ANCHOR_LINKS_BLOCK_FRAGMENT}
    ${DOCUMENT_LINKS_BLOCK_FRAGMENT}
		${TWO_COLUMNS_TEXT_BLOCK_FRAGMENT}

		${RESPONSIVE_IMAGE_FRAGMENT}
		${CTA_BUTTON_FRAGMENT}

      query PageQuery {
        _site {
            favicon {
                alt
                url
            }
        }

        ${queryType} (locale: ${l} ${filter}) {
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
            body {
								...PageHeaderBlockFragment
                ...HeroBlockFragment
								...TwoColumnWithImageBlockFragment
                ...AdBlockFragment
								...CtaBlockFragment
								...DividerBlockFragment
								...CardsCarouselBlockFragment
								...CardsContainerBlockFragment
								...TestimonialsBlockFragment
								...StatisticsBlockFragment
                ...VideoBlockFragment
                ...PastConventionsBlockFragment
                ...FormBlockFragment
								...AccordionBlockFragment
								...OneColumnTextBlockFragment
								...SponsorListBlockFragment
                ...ContactBlockFragment
								...ShortCoursesListBlockFragment
								...AccordionGroupBlockFragment
								...ScheduleBlockFragment
                ...RegistrationBlockFragment
                ...MapBlockFragment
								...AlertBlockFragment
                ...AnchorLinksBlockFragment
                ...DocumentLinksBlockFragment
                ...TwoColumnsTextBlockFragment
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
