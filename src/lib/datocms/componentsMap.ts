import { ReactNode } from 'react'
import { HeroBlock } from '@/blocks/HeroBlock/HeroBlock'
import { DefaultFooterBlock } from '@/blocks/DefaultFooterBlock/DefaultFooterBlock'
import { DefaultHeaderBlock } from '@/blocks/DefaultHeaderBlock/DefaultHeaderBlock'
import { AnnouncementBannerBlock } from '@/blocks/AnnouncementBannerBlock/AnnouncementBannerBlock'
import { TwoColumnWithImageBlock } from '@/blocks/TwoColumnWithImageBlock/TwoColumnWithImageBlock'
import { AdBlock } from '@/blocks/AdBlock/AdBlock'
import { CtaBlock } from '@/blocks/CtaBlock/CtaBlock'
import { DividerBlock } from '@/blocks/DividerBlock/DividerBlock'
import { CardsContainerBlock } from '@/blocks/CardsContainerBlock/CardsContainerBlock'
import { CardBlock } from '@/blocks/CardBlock/CardBlock'
import { TestimonialsBlock } from '@/blocks/TestimonialsBlock/TestimonialsBlock'
import { VideoBlock } from '@/blocks/VideoBlock/VideoBlock'
import { PageHeaderBlock } from '@/blocks/PageHeaderBlock/PageHeaderBlock'
import { PastConventionsBlock } from '@/blocks/PastConventionsBlock/PastConventionsBlock'
import { ConventionBlock } from '@/blocks/ConventionBlock/ConventionBlock'
import { StatisticsBlock } from '@/blocks/StatisticsBlock/StatisticsBlock'
import { FormBlock } from '@/blocks/FormBlock/FormBlock'
import { AccordionBlock } from '@/blocks/AccordionBlock/AccordionBlock'
import { OneColumnTextBlock } from '@/blocks/OneColumnTextBlock/OneColumnTextBlock'
import { SponsorListBlock } from '@/blocks/SponsorListBlock/SponsorListBlock'
import { ContactBlock } from '@/blocks/ContactBlock/ContactBlock'
import { ContactCardBlock } from '@/blocks/ContactCardBlock/ContactCardBlock'
import { ShortCoursesListBlock } from '@/blocks/ShortCoursesListBlock/ShortCoursesListBlock'
import { AccordionGroupBlock } from '@/blocks/AccordionGroupBlock/AccordionGroupBlock'
import { CardsCarouselBlock } from '@/blocks/CardsCarouselBlock/CardsCarouselBlock'
import { ScheduleBlock } from '@/blocks/ScheduleBlock/ScheduleBlock'
import { RegistrationBlock } from '@/blocks/RegistrationBlock/RegistrationBlock'
import { MapBlock } from '@/blocks/MapBlock/MapBlock'
import { AlertBlock } from '@/blocks/AlertBlock/AlertBlock'
import { AnchorLinksBlock } from '@/blocks/AnchorLinksBlock/AnchorLinksBlock'
import { DocumentLinksBlock } from '@/blocks/DocumentLinksBlock/DocumentLinksBlock'
import { TwoColumnsTextBlock } from '@/blocks/TwoColumnsTextBlock/TwoColumnsTextBlock'

export type ComponentsMap = {
  [key: string]: ReactNode
}

export const componentsMap = {
  hero_block: HeroBlock,
  default_header_block: DefaultHeaderBlock,
  announcement_banner_block: AnnouncementBannerBlock,
  two_column_with_image_block: TwoColumnWithImageBlock,
  ad_block: AdBlock,
  default_footer_block: DefaultFooterBlock,
  cta_block: CtaBlock,
  divider_block: DividerBlock,
  cards_carousel_block: CardsCarouselBlock,
  cards_container_block: CardsContainerBlock,
  card_block: CardBlock,
  testimonials_block: TestimonialsBlock,
  video_block: VideoBlock,
  page_header_block: PageHeaderBlock,
  past_conventions_block: PastConventionsBlock,
  convention_block: ConventionBlock,
  statistics_block: StatisticsBlock,
  form_block: FormBlock,
  accordion_block: AccordionBlock,
  one_column_text_block: OneColumnTextBlock,
  sponsor_list_block: SponsorListBlock,
  contact_block: ContactBlock,
  contact_card_block: ContactCardBlock,
  short_courses_list_block: ShortCoursesListBlock,
  accordion_group_block: AccordionGroupBlock,
  schedule_block: ScheduleBlock,
  registration_block: RegistrationBlock,
  map_block: MapBlock,
  alert_block: AlertBlock,
  anchor_links_block: AnchorLinksBlock,
  document_links_block: DocumentLinksBlock,
  two_columns_text_block: TwoColumnsTextBlock,
}
