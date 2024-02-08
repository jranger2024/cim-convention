import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BooleanType: { input: any; output: any }
  CustomData: { input: any; output: any }
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
  FloatType: { input: any; output: any }
  IntType: { input: any; output: any }
  ItemId: { input: any; output: any }
  JsonField: { input: any; output: any }
  MetaTagAttributes: { input: any; output: any }
  UploadId: { input: any; output: any }
}

export type AccordionBlockItemModelContentField = {
  __typename?: 'AccordionBlockItemModelContentField'
  blocks: Array<Scalars['String']['output']>
  links: Array<Scalars['String']['output']>
  value: Scalars['JsonField']['output']
}

/** Block of type Accordion Block > Item (accordion_block_item) */
export type AccordionBlockItemRecord = RecordInterface & {
  __typename?: 'AccordionBlockItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  content: AccordionBlockItemModelContentField
  id: Scalars['ItemId']['output']
  triggerText: Scalars['String']['output']
}

/** Block of type Accordion Block > Item (accordion_block_item) */
export type AccordionBlockItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Accordion Block (accordion_block) */
export type AccordionBlockRecord = RecordInterface & {
  __typename?: 'AccordionBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  accordionType: Scalars['String']['output']
  anchorId: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  items: Array<AccordionBlockItemRecord>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Accordion Block (accordion_block) */
export type AccordionBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Accordion Group Block (accordion_group_block) */
export type AccordionGroupBlockRecord = RecordInterface & {
  __typename?: 'AccordionGroupBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  centeredLayout?: Maybe<Scalars['BooleanType']['output']>
  displayAnchorLinks?: Maybe<Scalars['BooleanType']['output']>
  id: Scalars['ItemId']['output']
  sections: Array<AccordionBlockRecord>
  supportText?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Accordion Group Block (accordion_group_block) */
export type AccordionGroupBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Accordion Group Block (accordion_group_block) */
export type AccordionGroupBlockRecordSupportTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Block of type Ad Block (ad_block) */
export type AdBlockRecord = RecordInterface & {
  __typename?: 'AdBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  ad?: Maybe<AdRecord>
  ads: Array<AdRecord>
  anchorId?: Maybe<Scalars['String']['output']>
  banner?: Maybe<Scalars['BooleanType']['output']>
  id: Scalars['ItemId']['output']
}

/** Block of type Ad Block (ad_block) */
export type AdBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type AdModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AdModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AdModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  image?: InputMaybe<FileFilter>
  name?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export enum AdModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

/** Record of type Ad (ad) */
export type AdRecord = RecordInterface & {
  __typename?: 'AdRecord'
  _allImageLocales?: Maybe<Array<FileFieldMultiLocaleField>>
  _allUrlLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** Record of type Ad (ad) */
export type AdRecord_AllImageLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Ad (ad) */
export type AdRecord_AllUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Ad (ad) */
export type AdRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Ad (ad) */
export type AdRecordImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Ad (ad) */
export type AdRecordUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Alert Block (alert_block) */
export type AlertBlockRecord = RecordInterface & {
  __typename?: 'AlertBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  image?: Maybe<ImageAltFileField>
  paragraphs?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Alert Block (alert_block) */
export type AlertBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Alert Block (alert_block) */
export type AlertBlockRecordParagraphsArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

export type AltFileField = FileFieldInterface & {
  __typename?: 'AltFileField'
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt: Scalars['String']['output']
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type AltFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type AltFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type AltFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type AltFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type AltFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type AltFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type AltFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

/** Block of type Anchor Links Block > Item (anchor_links_block_item) */
export type AnchorLinksBlockItemRecord = RecordInterface & {
  __typename?: 'AnchorLinksBlockItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorLink: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
}

/** Block of type Anchor Links Block > Item (anchor_links_block_item) */
export type AnchorLinksBlockItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Anchor Links Block (anchor_links_block) */
export type AnchorLinksBlockRecord = RecordInterface & {
  __typename?: 'AnchorLinksBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  links: Array<AnchorLinksBlockItemRecord>
}

/** Block of type Anchor Links Block (anchor_links_block) */
export type AnchorLinksBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Announcement Banner Block (announcement_banner_block) */
export type AnnouncementBannerBlockRecord = RecordInterface & {
  __typename?: 'AnnouncementBannerBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  text: Scalars['String']['output']
}

/** Block of type Announcement Banner Block (announcement_banner_block) */
export type AnnouncementBannerBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Block of type Card Block (card_block) */
export type CardBlockRecord = RecordInterface & {
  __typename?: 'CardBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  buttons: Array<CtaButtonRecord>
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  paragraph?: Maybe<Scalars['String']['output']>
  subtitle?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Card Block (card_block) */
export type CardBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Card Block (card_block) */
export type CardBlockRecordParagraphArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Block of type Card Block (card_block) */
export type CardBlockRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Block of type Card Block (card_block) */
export type CardBlockRecordTitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Block of type Cards Carousel Block (cards_carousel_block) */
export type CardsCarouselBlockRecord = RecordInterface & {
  __typename?: 'CardsCarouselBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  background?: Maybe<Scalars['String']['output']>
  cards: Array<CardBlockRecord>
  id: Scalars['ItemId']['output']
  title: Scalars['String']['output']
}

/** Block of type Cards Carousel Block (cards_carousel_block) */
export type CardsCarouselBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Cards Container Block (cards_container_block) */
export type CardsContainerBlockRecord = RecordInterface & {
  __typename?: 'CardsContainerBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  background?: Maybe<Scalars['String']['output']>
  cardBorders?: Maybe<Scalars['BooleanType']['output']>
  cards: Array<CardBlockRecord>
  ctaButton: Array<CtaButtonRecord>
  desktopLayout?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  mobileLayout?: Maybe<Scalars['String']['output']>
  paragraph?: Maybe<Scalars['String']['output']>
  textAlignment?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Cards Container Block (cards_container_block) */
export type CardsContainerBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Cards Container Block (cards_container_block) */
export type CardsContainerBlockRecordParagraphArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata'
  count: Scalars['IntType']['output']
}

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export type ColorField = {
  __typename?: 'ColorField'
  alpha: Scalars['IntType']['output']
  blue: Scalars['IntType']['output']
  cssRgb: Scalars['String']['output']
  green: Scalars['IntType']['output']
  hex: Scalars['String']['output']
  red: Scalars['IntType']['output']
}

/** Block of type Contact Block (contact_block) */
export type ContactBlockRecord = RecordInterface & {
  __typename?: 'ContactBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  cards: Array<ContactCardBlockRecord>
  id: Scalars['ItemId']['output']
  subtitle?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Contact Block (contact_block) */
export type ContactBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Contact Block > Contact Card Block (contact_card_block) */
export type ContactCardBlockRecord = RecordInterface & {
  __typename?: 'ContactCardBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  ext?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  name?: Maybe<Scalars['String']['output']>
  phone?: Maybe<Scalars['String']['output']>
}

/** Block of type Contact Block > Contact Card Block (contact_card_block) */
export type ContactCardBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Contact Block > Contact Card Block (contact_card_block) */
export type ContactCardBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Block of type Past Conventions Block > Convention Block (convention_block) */
export type ConventionBlockRecord = RecordInterface & {
  __typename?: 'ConventionBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  logo?: Maybe<FileField>
  name?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

/** Block of type Past Conventions Block > Convention Block (convention_block) */
export type ConventionBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Block of type CTA Block (cta_block) */
export type CtaBlockRecord = RecordInterface & {
  __typename?: 'CtaBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  ctaButton: Array<CtaButtonRecord>
  headline: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  subHeadline: Scalars['String']['output']
}

/** Block of type CTA Block (cta_block) */
export type CtaBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type CtaButtonModelLinkToField =
  | HomePageRecord
  | PageRecord
  | ShortCourseRecord

/** Block of type CTA Button (cta_button) */
export type CtaButtonRecord = RecordInterface & {
  __typename?: 'CtaButtonRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  externalLink?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  linkTo?: Maybe<CtaButtonModelLinkToField>
  stylingOption: Scalars['String']['output']
  useExternalLink?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type CTA Button (cta_button) */
export type CtaButtonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type CtaButtonRecordListListNonNullMultiLocaleField = {
  __typename?: 'CtaButtonRecordListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<CtaButtonRecord>
}

/** Block of type CTA Button With Heading Text (cta_button_with_heading_text) */
export type CtaButtonWithHeadingTextRecord = RecordInterface & {
  __typename?: 'CtaButtonWithHeadingTextRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  button: Array<CtaButtonRecord>
  heading: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  supportText?: Maybe<Scalars['String']['output']>
}

/** Block of type CTA Button With Heading Text (cta_button_with_heading_text) */
export type CtaButtonWithHeadingTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Default Footer Block (default_footer_block) */
export type DefaultFooterBlockRecord = RecordInterface & {
  __typename?: 'DefaultFooterBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  contactButtonLabel?: Maybe<Scalars['String']['output']>
  contactButtonLink?: Maybe<Scalars['String']['output']>
  contactParagraph?: Maybe<Scalars['String']['output']>
  contactTitle?: Maybe<Scalars['String']['output']>
  cookiePolicyPage: PageRecord
  copyright?: Maybe<Scalars['String']['output']>
  externalLinkPolicies?: Maybe<Scalars['BooleanType']['output']>
  id: Scalars['ItemId']['output']
  newsletterButtonLabel?: Maybe<Scalars['String']['output']>
  newsletterInputPlaceholder?: Maybe<Scalars['String']['output']>
  newsletterParagraph?: Maybe<Scalars['String']['output']>
  newsletterTitle?: Maybe<Scalars['String']['output']>
  privacyPolicyPage: PageRecord
  sponsorLink?: Maybe<Scalars['String']['output']>
  sponsorLogo?: Maybe<FileField>
  sponsorTitle?: Maybe<Scalars['String']['output']>
  submitErrorMessage?: Maybe<Scalars['String']['output']>
  submitSuccessMessage?: Maybe<Scalars['String']['output']>
}

/** Block of type Default Footer Block (default_footer_block) */
export type DefaultFooterBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Default Footer Block (default_footer_block) */
export type DefaultFooterBlockRecordContactParagraphArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Block of type Default Footer Block (default_footer_block) */
export type DefaultFooterBlockRecordNewsletterParagraphArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

export type DefaultFooterBlockRecordListListNonNullMultiLocaleField = {
  __typename?: 'DefaultFooterBlockRecordListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<DefaultFooterBlockRecord>
}

/** Block of type Default Header Block (default_header_block) */
export type DefaultHeaderBlockRecord = RecordInterface & {
  __typename?: 'DefaultHeaderBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  cimLogo: AltFileField
  ctaButton: Array<CtaButtonRecord>
  id: Scalars['ItemId']['output']
  languageToggleLabel: Scalars['String']['output']
  menu?: Maybe<MenuRecord>
  siteLogo: AltFileField
  sponsorLink: Scalars['String']['output']
}

/** Block of type Default Header Block (default_header_block) */
export type DefaultHeaderBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Divider (divider_block) */
export type DividerBlockRecord = RecordInterface & {
  __typename?: 'DividerBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
}

/** Block of type Divider (divider_block) */
export type DividerBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Document Links Block > Asset (document_links_block_asset) */
export type DocumentLinksBlockAssetRecord = RecordInterface & {
  __typename?: 'DocumentLinksBlockAssetRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  asset: FileField
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
}

/** Block of type Document Links Block > Asset (document_links_block_asset) */
export type DocumentLinksBlockAssetRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type DocumentLinksBlockModelLinksField =
  | DocumentLinksBlockAssetRecord
  | LinkBlockRecord

/** Block of type Document Links Block (document_links_block) */
export type DocumentLinksBlockRecord = RecordInterface & {
  __typename?: 'DocumentLinksBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  links: Array<DocumentLinksBlockModelLinksField>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Document Links Block (document_links_block) */
export type DocumentLinksBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

/** Block of type Feature List > Item (feature_list_item) */
export type FeatureListItemRecord = RecordInterface & {
  __typename?: 'FeatureListItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  name: Scalars['String']['output']
}

/** Block of type Feature List > Item (feature_list_item) */
export type FeatureListItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField'
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint?: Maybe<FocalPoint>
  format: Scalars['String']['output']
  height?: Maybe<Scalars['IntType']['output']>
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars['IntType']['output']>
}

export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type FileFieldMultiLocaleField = {
  __typename?: 'FileFieldMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<FileField>
}

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

export type FooterModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<FooterModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  name?: InputMaybe<StringFilter>
}

export enum FooterModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Footer (footer) */
export type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord'
  _allBlocksLocales?: Maybe<
    Array<DefaultFooterBlockRecordListListNonNullMultiLocaleField>
  >
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  blocks: Array<DefaultFooterBlockRecord>
  id: Scalars['ItemId']['output']
  name?: Maybe<Scalars['String']['output']>
}

/** Record of type Footer (footer) */
export type FooterRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Footer (footer) */
export type FooterRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Footer (footer) */
export type FooterRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Footer (footer) */
export type FooterRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Footer (footer) */
export type FooterRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Form Block (form_block) */
export type FormBlockRecord = RecordInterface & {
  __typename?: 'FormBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  form: FormRecord
  id: Scalars['ItemId']['output']
  image?: Maybe<FileField>
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Form Block (form_block) */
export type FormBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Form Block (form_block) */
export type FormBlockRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Block of type Form > Checkbox Group (form_checkbox_group) */
export type FormCheckboxGroupRecord = RecordInterface & {
  __typename?: 'FormCheckboxGroupRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  checkboxOptions: Array<FormCheckboxRecord>
  fieldId: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  required?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Form > Checkbox Group (form_checkbox_group) */
export type FormCheckboxGroupRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Form > Checkbox (form_checkbox) */
export type FormCheckboxRecord = RecordInterface & {
  __typename?: 'FormCheckboxRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  value: Scalars['String']['output']
}

/** Block of type Form > Checkbox (form_checkbox) */
export type FormCheckboxRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type FormModelFieldsetField =
  | FormCheckboxGroupRecord
  | FormSignatureRecord
  | FormTextInputRecord
  | FormTextareaRecord

export type FormModelFieldsetFieldListListNonNullMultiLocaleField = {
  __typename?: 'FormModelFieldsetFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<FormModelFieldsetField>
}

export type FormModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<FormModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  fieldErrorMsg?: InputMaybe<StringFilter>
  fieldTypeErrorMsg?: InputMaybe<StringFilter>
  formErrorMsg?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  name?: InputMaybe<StringFilter>
  requireSignature?: InputMaybe<BooleanFilter>
  signatureClear?: InputMaybe<StringFilter>
  signatureErrorMsg?: InputMaybe<StringFilter>
  signatureLabel?: InputMaybe<StringFilter>
  submitBtnLabel?: InputMaybe<StringFilter>
  submitErrorMessage?: InputMaybe<StringFilter>
  submitSuccessMessage?: InputMaybe<StringFilter>
}

export enum FormModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  FieldErrorMsgAsc = 'fieldErrorMsg_ASC',
  FieldErrorMsgDesc = 'fieldErrorMsg_DESC',
  FieldTypeErrorMsgAsc = 'fieldTypeErrorMsg_ASC',
  FieldTypeErrorMsgDesc = 'fieldTypeErrorMsg_DESC',
  FormErrorMsgAsc = 'formErrorMsg_ASC',
  FormErrorMsgDesc = 'formErrorMsg_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RequireSignatureAsc = 'requireSignature_ASC',
  RequireSignatureDesc = 'requireSignature_DESC',
  SignatureClearAsc = 'signatureClear_ASC',
  SignatureClearDesc = 'signatureClear_DESC',
  SignatureErrorMsgAsc = 'signatureErrorMsg_ASC',
  SignatureErrorMsgDesc = 'signatureErrorMsg_DESC',
  SignatureLabelAsc = 'signatureLabel_ASC',
  SignatureLabelDesc = 'signatureLabel_DESC',
  SubmitBtnLabelAsc = 'submitBtnLabel_ASC',
  SubmitBtnLabelDesc = 'submitBtnLabel_DESC',
  SubmitErrorMessageAsc = 'submitErrorMessage_ASC',
  SubmitErrorMessageDesc = 'submitErrorMessage_DESC',
  SubmitSuccessMessageAsc = 'submitSuccessMessage_ASC',
  SubmitSuccessMessageDesc = 'submitSuccessMessage_DESC',
}

/** Record of type Form (form) */
export type FormRecord = RecordInterface & {
  __typename?: 'FormRecord'
  _allFieldErrorMsgLocales?: Maybe<Array<StringMultiLocaleField>>
  _allFieldTypeErrorMsgLocales?: Maybe<Array<StringMultiLocaleField>>
  _allFieldsetLocales?: Maybe<
    Array<FormModelFieldsetFieldListListNonNullMultiLocaleField>
  >
  _allFormErrorMsgLocales?: Maybe<Array<StringMultiLocaleField>>
  _allSignatureClearLocales?: Maybe<Array<StringMultiLocaleField>>
  _allSignatureErrorMsgLocales?: Maybe<Array<StringMultiLocaleField>>
  _allSignatureLabelLocales?: Maybe<Array<StringMultiLocaleField>>
  _allSubmitBtnLabelLocales?: Maybe<Array<StringMultiLocaleField>>
  _allSubmitErrorMessageLocales?: Maybe<Array<StringMultiLocaleField>>
  _allSubmitSuccessMessageLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  fieldErrorMsg?: Maybe<Scalars['String']['output']>
  fieldTypeErrorMsg?: Maybe<Scalars['String']['output']>
  fieldset: Array<FormModelFieldsetField>
  formErrorMsg?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  name?: Maybe<Scalars['String']['output']>
  requireSignature?: Maybe<Scalars['BooleanType']['output']>
  signatureClear?: Maybe<Scalars['String']['output']>
  signatureErrorMsg?: Maybe<Scalars['String']['output']>
  signatureLabel?: Maybe<Scalars['String']['output']>
  submitBtnLabel?: Maybe<Scalars['String']['output']>
  submitErrorMessage?: Maybe<Scalars['String']['output']>
  submitSuccessMessage?: Maybe<Scalars['String']['output']>
}

/** Record of type Form (form) */
export type FormRecord_AllFieldErrorMsgLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_AllFieldTypeErrorMsgLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_AllFieldsetLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_AllFormErrorMsgLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_AllSignatureClearLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_AllSignatureErrorMsgLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_AllSignatureLabelLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_AllSubmitBtnLabelLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_AllSubmitErrorMessageLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_AllSubmitSuccessMessageLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Form (form) */
export type FormRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordFieldErrorMsgArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordFieldTypeErrorMsgArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordFieldsetArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordFormErrorMsgArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordSignatureClearArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordSignatureErrorMsgArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordSignatureLabelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordSubmitBtnLabelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordSubmitErrorMessageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Form (form) */
export type FormRecordSubmitSuccessMessageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Form > Signature (form_signature) */
export type FormSignatureRecord = RecordInterface & {
  __typename?: 'FormSignatureRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  fieldId: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  required?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Form > Signature (form_signature) */
export type FormSignatureRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Form > Text Input (form_text_input) */
export type FormTextInputRecord = RecordInterface & {
  __typename?: 'FormTextInputRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  fieldId: Scalars['String']['output']
  fieldType: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  required?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Form > Text Input (form_text_input) */
export type FormTextInputRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Form > Textarea (form_textarea) */
export type FormTextareaRecord = RecordInterface & {
  __typename?: 'FormTextareaRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  fieldId: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  placeholder?: Maybe<Scalars['String']['output']>
  required?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Form > Textarea (form_textarea) */
export type FormTextareaRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField'
  facebookPageUrl?: Maybe<Scalars['String']['output']>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars['String']['output']>
  titleSuffix?: Maybe<Scalars['String']['output']>
  twitterAccount?: Maybe<Scalars['String']['output']>
}

export type HeaderModelBlocksField =
  | AnnouncementBannerBlockRecord
  | DefaultHeaderBlockRecord

export type HeaderModelBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'HeaderModelBlocksFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<HeaderModelBlocksField>
}

export type HeaderModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<HeaderModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  name?: InputMaybe<StringFilter>
}

export enum HeaderModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Header (header) */
export type HeaderRecord = RecordInterface & {
  __typename?: 'HeaderRecord'
  _allBlocksLocales?: Maybe<
    Array<HeaderModelBlocksFieldListListNonNullMultiLocaleField>
  >
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  blocks: Array<HeaderModelBlocksField>
  id: Scalars['ItemId']['output']
  name?: Maybe<Scalars['String']['output']>
}

/** Record of type Header (header) */
export type HeaderRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Header (header) */
export type HeaderRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Header (header) */
export type HeaderRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Header (header) */
export type HeaderRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Header (header) */
export type HeaderRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Hero Block (hero_block) */
export type HeroBlockRecord = RecordInterface & {
  __typename?: 'HeroBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  date: Scalars['String']['output']
  headline: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  image: ImageFileField
  location: Scalars['String']['output']
  sponsorHeading: Scalars['String']['output']
  sponsorLogo?: Maybe<AltFileField>
  subHeadline: Scalars['String']['output']
  textToHighlight?: Maybe<Scalars['String']['output']>
}

/** Block of type Hero Block (hero_block) */
export type HeroBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type HomePageModelBodyField =
  | AccordionBlockRecord
  | AccordionGroupBlockRecord
  | AdBlockRecord
  | AlertBlockRecord
  | AnchorLinksBlockRecord
  | CardsCarouselBlockRecord
  | CardsContainerBlockRecord
  | ContactBlockRecord
  | CtaBlockRecord
  | DividerBlockRecord
  | DocumentLinksBlockRecord
  | FormBlockRecord
  | HeroBlockRecord
  | MapBlockRecord
  | OneColumnTextBlockRecord
  | PageHeaderBlockRecord
  | PastConventionsBlockRecord
  | RegistrationBlockRecord
  | ScheduleBlockRecord
  | ShortCoursesListBlockRecord
  | SponsorListBlockRecord
  | StatisticsBlockRecord
  | TestimonialsBlockRecord
  | TwoColumnWithImageBlockRecord
  | TwoColumnsTextBlockRecord
  | VideoBlockRecord

export type HomePageModelBodyFieldListListNonNullMultiLocaleField = {
  __typename?: 'HomePageModelBodyFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<HomePageModelBodyField>
}

/** Record of type Home Page (home_page) */
export type HomePageRecord = RecordInterface & {
  __typename?: 'HomePageRecord'
  _allBodyLocales?: Maybe<
    Array<HomePageModelBodyFieldListListNonNullMultiLocaleField>
  >
  _allSeoSettingsLocales?: Maybe<Array<SeoFieldMultiLocaleField>>
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  body: Array<HomePageModelBodyField>
  footer?: Maybe<FooterRecord>
  header?: Maybe<HeaderRecord>
  id: Scalars['ItemId']['output']
  seoSettings?: Maybe<SeoField>
  slug?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

/** Record of type Home Page (home_page) */
export type HomePageRecord_AllBodyLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Home Page (home_page) */
export type HomePageRecord_AllSeoSettingsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Home Page (home_page) */
export type HomePageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Home Page (home_page) */
export type HomePageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Home Page (home_page) */
export type HomePageRecordBodyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Home Page (home_page) */
export type HomePageRecordSeoSettingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Home Page (home_page) */
export type HomePageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageAltFileField = FileFieldInterface & {
  __typename?: 'ImageAltFileField'
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt: Scalars['String']['output']
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint: FocalPoint
  format: Scalars['String']['output']
  height: Scalars['IntType']['output']
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage: ResponsiveImage
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width: Scalars['IntType']['output']
}

export type ImageAltFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageAltFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type ImageAltFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageAltFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageAltFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type ImageAltFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageAltFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type ImageFileField = FileFieldInterface & {
  __typename?: 'ImageFileField'
  _createdAt: Scalars['DateTime']['output']
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _updatedAt: Scalars['DateTime']['output']
  alt?: Maybe<Scalars['String']['output']>
  author?: Maybe<Scalars['String']['output']>
  basename: Scalars['String']['output']
  blurUpThumb?: Maybe<Scalars['String']['output']>
  blurhash?: Maybe<Scalars['String']['output']>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars['String']['output']>
  customData: Scalars['CustomData']['output']
  exifInfo: Scalars['CustomData']['output']
  filename: Scalars['String']['output']
  focalPoint: FocalPoint
  format: Scalars['String']['output']
  height: Scalars['IntType']['output']
  id: Scalars['UploadId']['output']
  md5: Scalars['String']['output']
  mimeType: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  responsiveImage: ResponsiveImage
  size: Scalars['IntType']['output']
  smartTags: Array<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  thumbhash?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  video?: Maybe<UploadVideoField>
  width: Scalars['IntType']['output']
}

export type ImageFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars['Float']['input']
  quality?: Scalars['Int']['input']
  size?: Scalars['Int']['input']
}

export type ImageFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars['String']['input']>
}

export type ImageFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export type ImageFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>
}

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>
}

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

export type LatLonField = {
  __typename?: 'LatLonField'
  latitude: Scalars['FloatType']['output']
  longitude: Scalars['FloatType']['output']
}

/** Block of type Link Block (link_block) */
export type LinkBlockRecord = RecordInterface & {
  __typename?: 'LinkBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  externalLink?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  linkTo?: Maybe<PageRecord>
  useExternalLink?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Link Block (link_block) */
export type LinkBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>
}

/** Specifies how to filter by locale */
export type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>
}

/** Block of type Map Block (map_block) */
export type MapBlockRecord = RecordInterface & {
  __typename?: 'MapBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  location?: Maybe<LatLonField>
}

/** Block of type Map Block (map_block) */
export type MapBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Menu > Menu Item (menu_menu_item) */
export type MenuMenuItemRecord = RecordInterface & {
  __typename?: 'MenuMenuItemRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  linkTo?: Maybe<PageRecord>
  name: Scalars['String']['output']
  subMenuItems: Array<MenuMenuItemRecord>
}

/** Block of type Menu > Menu Item (menu_menu_item) */
export type MenuMenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type MenuMenuItemRecordListListNonNullMultiLocaleField = {
  __typename?: 'MenuMenuItemRecordListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<MenuMenuItemRecord>
}

export type MenuModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<MenuModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  name?: InputMaybe<StringFilter>
}

export enum MenuModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

/** Record of type Menu (menu) */
export type MenuRecord = RecordInterface & {
  __typename?: 'MenuRecord'
  _allMenuItemsLocales?: Maybe<
    Array<MenuMenuItemRecordListListNonNullMultiLocaleField>
  >
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  menuItems: Array<MenuMenuItemRecord>
  name: Scalars['String']['output']
}

/** Record of type Menu (menu) */
export type MenuRecord_AllMenuItemsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Menu (menu) */
export type MenuRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Menu (menu) */
export type MenuRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Menu (menu) */
export type MenuRecordMenuItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Menu (menu) */
export type MenuRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

/** Block of type One Column Text Block (one_column_text_block) */
export type OneColumnTextBlockRecord = RecordInterface & {
  __typename?: 'OneColumnTextBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  text: Scalars['String']['output']
}

/** Block of type One Column Text Block (one_column_text_block) */
export type OneColumnTextBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type One Column Text Block (one_column_text_block) */
export type OneColumnTextBlockRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

/** Block of type Page Header Block (page_header_block) */
export type PageHeaderBlockRecord = RecordInterface & {
  __typename?: 'PageHeaderBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  hasOtherSponsors?: Maybe<Scalars['BooleanType']['output']>
  heroImage?: Maybe<FileField>
  id: Scalars['ItemId']['output']
  mainSponsor?: Maybe<SponsorRecord>
  mainSponsorLabel?: Maybe<Scalars['String']['output']>
  otherSponsors: Array<SponsorRecord>
  otherSponsorsLabel?: Maybe<Scalars['String']['output']>
  paragraph?: Maybe<Scalars['String']['output']>
  subTitle?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
}

/** Block of type Page Header Block (page_header_block) */
export type PageHeaderBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Page Header Block (page_header_block) */
export type PageHeaderBlockRecordParagraphArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

export type PageModelBodyField =
  | AccordionBlockRecord
  | AccordionGroupBlockRecord
  | AdBlockRecord
  | AlertBlockRecord
  | AnchorLinksBlockRecord
  | CardsCarouselBlockRecord
  | CardsContainerBlockRecord
  | ContactBlockRecord
  | CtaBlockRecord
  | DividerBlockRecord
  | DocumentLinksBlockRecord
  | FormBlockRecord
  | HeroBlockRecord
  | MapBlockRecord
  | OneColumnTextBlockRecord
  | PageHeaderBlockRecord
  | PastConventionsBlockRecord
  | RegistrationBlockRecord
  | ScheduleBlockRecord
  | ShortCoursesListBlockRecord
  | SponsorListBlockRecord
  | StatisticsBlockRecord
  | TestimonialsBlockRecord
  | TwoColumnWithImageBlockRecord
  | TwoColumnsTextBlockRecord
  | VideoBlockRecord

export type PageModelBodyFieldListListNonNullMultiLocaleField = {
  __typename?: 'PageModelBodyFieldListListNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Array<PageModelBodyField>
}

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  footer?: InputMaybe<LinkFilter>
  header?: InputMaybe<LinkFilter>
  id?: InputMaybe<ItemIdFilter>
  seoSettings?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export enum PageModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** Record of type Page (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord'
  _allBodyLocales?: Maybe<
    Array<PageModelBodyFieldListListNonNullMultiLocaleField>
  >
  _allSeoSettingsLocales?: Maybe<Array<SeoFieldMultiLocaleField>>
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  body: Array<PageModelBodyField>
  footer?: Maybe<FooterRecord>
  header?: Maybe<HeaderRecord>
  id: Scalars['ItemId']['output']
  seoSettings?: Maybe<SeoField>
  slug: Scalars['String']['output']
  title: Scalars['String']['output']
}

/** Record of type Page (page) */
export type PageRecord_AllBodyLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecord_AllSeoSettingsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Page (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Page (page) */
export type PageRecordBodyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Page (page) */
export type PageRecordSeoSettingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Page (page) */
export type PageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Page (page) */
export type PageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Past Conventions Block (past_conventions_block) */
export type PastConventionsBlockRecord = RecordInterface & {
  __typename?: 'PastConventionsBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  conventions: Array<ConventionBlockRecord>
  id: Scalars['ItemId']['output']
  title?: Maybe<Scalars['String']['output']>
}

/** Block of type Past Conventions Block (past_conventions_block) */
export type PastConventionsBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ProgramTagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProgramTagModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ProgramTagModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  title?: InputMaybe<StringFilter>
  variant?: InputMaybe<StringFilter>
}

export enum ProgramTagModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC',
}

/** Record of type Program Tag (program_tag) */
export type ProgramTagRecord = RecordInterface & {
  __typename?: 'ProgramTagRecord'
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  title: Scalars['String']['output']
  variant: Scalars['String']['output']
}

/** Record of type Program Tag (program_tag) */
export type ProgramTagRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Program Tag (program_tag) */
export type ProgramTagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Program Tag (program_tag) */
export type ProgramTagRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query'
  /** Returns meta information regarding a record collection */
  _allAdsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFootersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFormsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allHeadersMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allMenusMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allProgramTagsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allShortCoursesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSponsorsMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata
  /** Returns the single instance record */
  _site: Site
  /** Returns a specific record */
  ad?: Maybe<AdRecord>
  /** Returns a collection of records */
  allAds: Array<AdRecord>
  /** Returns a collection of records */
  allFooters: Array<FooterRecord>
  /** Returns a collection of records */
  allForms: Array<FormRecord>
  /** Returns a collection of records */
  allHeaders: Array<HeaderRecord>
  /** Returns a collection of records */
  allMenus: Array<MenuRecord>
  /** Returns a collection of records */
  allPages: Array<PageRecord>
  /** Returns a collection of records */
  allProgramTags: Array<ProgramTagRecord>
  /** Returns a collection of records */
  allShortCourses: Array<ShortCourseRecord>
  /** Returns a collection of records */
  allSponsors: Array<SponsorRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a specific record */
  footer?: Maybe<FooterRecord>
  /** Returns a specific record */
  form?: Maybe<FormRecord>
  /** Returns a specific record */
  header?: Maybe<HeaderRecord>
  /** Returns the single instance record */
  homePage?: Maybe<HomePageRecord>
  /** Returns a specific record */
  menu?: Maybe<MenuRecord>
  /** Returns a specific record */
  page?: Maybe<PageRecord>
  /** Returns a specific record */
  programTag?: Maybe<ProgramTagRecord>
  /** Returns a specific record */
  shortCourse?: Maybe<ShortCourseRecord>
  /** Returns the single instance record */
  socialLink?: Maybe<SocialLinkRecord>
  /** Returns a specific record */
  sponsor?: Maybe<SponsorRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
}

/** The query root for this schema */
export type Query_AllAdsMetaArgs = {
  filter?: InputMaybe<AdModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllFootersMetaArgs = {
  filter?: InputMaybe<FooterModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllFormsMetaArgs = {
  filter?: InputMaybe<FormModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllHeadersMetaArgs = {
  filter?: InputMaybe<HeaderModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllMenusMetaArgs = {
  filter?: InputMaybe<MenuModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllProgramTagsMetaArgs = {
  filter?: InputMaybe<ProgramTagModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllShortCoursesMetaArgs = {
  filter?: InputMaybe<ShortCourseModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllSponsorsMetaArgs = {
  filter?: InputMaybe<SponsorModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryAdArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<AdModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<AdModelOrderBy>>>
}

/** The query root for this schema */
export type QueryAllAdsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<AdModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<AdModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllFootersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FooterModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<FooterModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllFormsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FormModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<FormModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllHeadersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<HeaderModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<HeaderModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllMenusArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<MenuModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<MenuModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllProgramTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ProgramTagModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ProgramTagModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllShortCoursesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ShortCourseModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ShortCourseModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllSponsorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<SponsorModelFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<SponsorModelOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  first?: InputMaybe<Scalars['IntType']['input']>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
  skip?: InputMaybe<Scalars['IntType']['input']>
}

/** The query root for this schema */
export type QueryFooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FooterModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<FooterModelOrderBy>>>
}

/** The query root for this schema */
export type QueryFormArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FormModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<FormModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHeaderArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<HeaderModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<HeaderModelOrderBy>>>
}

/** The query root for this schema */
export type QueryHomePageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QueryMenuArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<MenuModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<MenuModelOrderBy>>>
}

/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>
}

/** The query root for this schema */
export type QueryProgramTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ProgramTagModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ProgramTagModelOrderBy>>>
}

/** The query root for this schema */
export type QueryShortCourseArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ShortCourseModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ShortCourseModelOrderBy>>>
}

/** The query root for this schema */
export type QuerySocialLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export type QuerySponsorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<SponsorModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<SponsorModelOrderBy>>>
}

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
}

export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Registration Block (registration_block) */
export type RegistrationBlockRecord = RecordInterface & {
  __typename?: 'RegistrationBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  earlyLabel: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  lateLabel: Scalars['String']['output']
  registrationPeriod: Scalars['String']['output']
  tiers: Array<RegistrationTierBlockRecord>
}

/** Block of type Registration Block (registration_block) */
export type RegistrationBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Registration Block > Registration Tier Block (registration_tier_block) */
export type RegistrationTierBlockRecord = RecordInterface & {
  __typename?: 'RegistrationTierBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  details: Scalars['String']['output']
  earlyButton: Array<CtaButtonRecord>
  earlyPrice: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  lateButton: Array<CtaButtonRecord>
  latePrice: Scalars['String']['output']
  title: Scalars['String']['output']
}

/** Block of type Registration Block > Registration Tier Block (registration_tier_block) */
export type RegistrationTierBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Registration Block > Registration Tier Block (registration_tier_block) */
export type RegistrationTierBlockRecordDetailsArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage'
  alt?: Maybe<Scalars['String']['output']>
  aspectRatio: Scalars['FloatType']['output']
  base64?: Maybe<Scalars['String']['output']>
  bgColor?: Maybe<Scalars['String']['output']>
  height: Scalars['IntType']['output']
  sizes: Scalars['String']['output']
  src: Scalars['String']['output']
  srcSet: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  webpSrcSet: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

/** Block of type Schedule Block > Day (schedule_block_day) */
export type ScheduleBlockDayRecord = RecordInterface & {
  __typename?: 'ScheduleBlockDayRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  date: Scalars['Date']['output']
  id: Scalars['ItemId']['output']
  timeSlots: Array<ScheduleBlockDayTimeSlotRecord>
}

/** Block of type Schedule Block > Day (schedule_block_day) */
export type ScheduleBlockDayRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ScheduleBlockDayTimeSlotModelLinkToField =
  | HomePageRecord
  | PageRecord
  | ShortCourseRecord

/** Block of type Schedule Block > Day > Time Slot (schedule_block_day_time_slot) */
export type ScheduleBlockDayTimeSlotRecord = RecordInterface & {
  __typename?: 'ScheduleBlockDayTimeSlotRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  externalLink?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  linkTo?: Maybe<ScheduleBlockDayTimeSlotModelLinkToField>
  tags: Array<ProgramTagRecord>
  time: Scalars['String']['output']
  title: Scalars['String']['output']
  useExternalLink?: Maybe<Scalars['BooleanType']['output']>
}

/** Block of type Schedule Block > Day > Time Slot (schedule_block_day_time_slot) */
export type ScheduleBlockDayTimeSlotRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Schedule Block (schedule_block) */
export type ScheduleBlockRecord = RecordInterface & {
  __typename?: 'ScheduleBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  days: Array<ScheduleBlockDayRecord>
  displayAnchorLinks?: Maybe<Scalars['BooleanType']['output']>
  id: Scalars['ItemId']['output']
  linkSupportLabel: Scalars['String']['output']
}

/** Block of type Schedule Block (schedule_block) */
export type ScheduleBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type SeoField = {
  __typename?: 'SeoField'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<FileField>
  noIndex?: Maybe<Scalars['BooleanType']['output']>
  title?: Maybe<Scalars['String']['output']>
  twitterCard?: Maybe<Scalars['String']['output']>
}

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<SeoField>
}

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
}

/** Block of type Short Course List Block > Section (short_course_list_block_section) */
export type ShortCourseListBlockSectionRecord = RecordInterface & {
  __typename?: 'ShortCourseListBlockSectionRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  dates: Scalars['String']['output']
  duration: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  shortCourses: Array<ShortCourseRecord>
  time: Scalars['String']['output']
}

/** Block of type Short Course List Block > Section (short_course_list_block_section) */
export type ShortCourseListBlockSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type ShortCourseModelDescriptionField = {
  __typename?: 'ShortCourseModelDescriptionField'
  blocks: Array<Scalars['String']['output']>
  links: Array<Scalars['String']['output']>
  value: Scalars['JsonField']['output']
}

export type ShortCourseModelDescriptionFieldMultiLocaleField = {
  __typename?: 'ShortCourseModelDescriptionFieldMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<ShortCourseModelDescriptionField>
}

export type ShortCourseModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ShortCourseModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ShortCourseModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _locales?: InputMaybe<LocalesFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  courseTitle?: InputMaybe<StringFilter>
  dates?: InputMaybe<StringFilter>
  description?: InputMaybe<StructuredTextFilter>
  duration?: InputMaybe<StringFilter>
  footer?: InputMaybe<LinkFilter>
  header?: InputMaybe<LinkFilter>
  id?: InputMaybe<ItemIdFilter>
  image?: InputMaybe<FileFilter>
  pageTitle?: InputMaybe<StringFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  startEndTime?: InputMaybe<StringFilter>
}

export enum ShortCourseModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  CourseTitleAsc = 'courseTitle_ASC',
  CourseTitleDesc = 'courseTitle_DESC',
  DatesAsc = 'dates_ASC',
  DatesDesc = 'dates_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  StartEndTimeAsc = 'startEndTime_ASC',
  StartEndTimeDesc = 'startEndTime_DESC',
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord = RecordInterface & {
  __typename?: 'ShortCourseRecord'
  _allButtonsLocales?: Maybe<
    Array<CtaButtonRecordListListNonNullMultiLocaleField>
  >
  _allCourseTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _allDatesLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _allDescriptionLocales?: Maybe<
    Array<ShortCourseModelDescriptionFieldMultiLocaleField>
  >
  _allDurationLocales?: Maybe<Array<StringMultiLocaleField>>
  _allPageTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _locales: Array<SiteLocale>
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  buttons: Array<CtaButtonRecord>
  courseTitle: Scalars['String']['output']
  dates: Scalars['String']['output']
  description?: Maybe<ShortCourseModelDescriptionField>
  duration?: Maybe<Scalars['String']['output']>
  footer?: Maybe<FooterRecord>
  header: HeaderRecord
  id: Scalars['ItemId']['output']
  image: ImageAltFileField
  pageTitle: Scalars['String']['output']
  seo?: Maybe<SeoField>
  slug: Scalars['String']['output']
  startEndTime: Scalars['String']['output']
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord_AllButtonsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord_AllCourseTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord_AllDatesLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord_AllDurationLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord_AllPageTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecordButtonsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecordCourseTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecordDatesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecordDurationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecordPageTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Short Course (short_course) */
export type ShortCourseRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Short Courses List Block (short_courses_list_block) */
export type ShortCoursesListBlockRecord = RecordInterface & {
  __typename?: 'ShortCoursesListBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  linkLabel: Scalars['String']['output']
  sections: Array<ShortCourseListBlockSectionRecord>
  title: Scalars['String']['output']
}

/** Block of type Short Courses List Block (short_courses_list_block) */
export type ShortCoursesListBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type Site = {
  __typename?: 'Site'
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
  noIndex?: Maybe<Scalars['BooleanType']['output']>
}

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>
}

export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum SiteLocale {
  En = 'en',
  Fr = 'fr',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Record of type Social Link (social_link) */
export type SocialLinkRecord = RecordInterface & {
  __typename?: 'SocialLinkRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  facebook?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  instagram?: Maybe<Scalars['String']['output']>
  linkedin?: Maybe<Scalars['String']['output']>
  twitter?: Maybe<Scalars['String']['output']>
  youtube?: Maybe<Scalars['String']['output']>
}

/** Record of type Social Link (social_link) */
export type SocialLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Sponsor List Block (sponsor_list_block) */
export type SponsorListBlockRecord = RecordInterface & {
  __typename?: 'SponsorListBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  headline: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  previousYearLinkLabel?: Maybe<Scalars['String']['output']>
  previousYearLinkUrl: Scalars['String']['output']
  rows: Array<SponsorListBlockRowRecord>
}

/** Block of type Sponsor List Block (sponsor_list_block) */
export type SponsorListBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Sponsor List Block > Row (sponsor_list_block_row) */
export type SponsorListBlockRowRecord = RecordInterface & {
  __typename?: 'SponsorListBlockRowRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  logoSize: Scalars['String']['output']
  sponsors: Array<SponsorRecord>
  title: Scalars['String']['output']
}

/** Block of type Sponsor List Block > Row (sponsor_list_block_row) */
export type SponsorListBlockRowRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type SponsorModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SponsorModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<SponsorModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  logo?: InputMaybe<FileFilter>
  name?: InputMaybe<StringFilter>
  websiteUrl?: InputMaybe<StringFilter>
}

export enum SponsorModelOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  WebsiteUrlAsc = 'websiteUrl_ASC',
  WebsiteUrlDesc = 'websiteUrl_DESC',
}

/** Record of type Sponsor (sponsor) */
export type SponsorRecord = RecordInterface & {
  __typename?: 'SponsorRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  logo: FileField
  name: Scalars['String']['output']
  websiteUrl: Scalars['String']['output']
}

/** Record of type Sponsor (sponsor) */
export type SponsorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Statistics Block  (statistics_block) */
export type StatisticsBlockRecord = RecordInterface & {
  __typename?: 'StatisticsBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  headline: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  stats: Array<StatisticsBlockStatRecord>
  styleOptions: Scalars['String']['output']
  subHeadline: Scalars['String']['output']
}

/** Block of type Statistics Block  (statistics_block) */
export type StatisticsBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Statistics Block > Stat (statistics_block_stat) */
export type StatisticsBlockStatRecord = RecordInterface & {
  __typename?: 'StatisticsBlockStatRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  iconSelection?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  label: Scalars['String']['output']
  value: Scalars['String']['output']
}

/** Block of type Statistics Block > Stat (statistics_block_stat) */
export type StatisticsBlockStatRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>
  pattern: Scalars['String']['input']
  regexp?: InputMaybe<Scalars['BooleanType']['input']>
}

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value?: Maybe<Scalars['String']['output']>
}

export type StringNonNullMultiLocaleField = {
  __typename?: 'StringNonNullMultiLocaleField'
  locale?: Maybe<SiteLocale>
  value: Scalars['String']['output']
}

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type Tag = {
  __typename?: 'Tag'
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>
  content?: Maybe<Scalars['String']['output']>
  tag: Scalars['String']['output']
}

/** Block of type Testimonials Block (testimonials_block) */
export type TestimonialsBlockRecord = RecordInterface & {
  __typename?: 'TestimonialsBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  headline: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  testimonials: Array<TestimonialsBlockTestimonialRecord>
  textToHighlight?: Maybe<Scalars['String']['output']>
}

/** Block of type Testimonials Block (testimonials_block) */
export type TestimonialsBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Testimonials Block > Testimonial (testimonials_block_testimonial) */
export type TestimonialsBlockTestimonialRecord = RecordInterface & {
  __typename?: 'TestimonialsBlockTestimonialRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  author: Scalars['String']['output']
  company?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  quote?: Maybe<Scalars['String']['output']>
}

/** Block of type Testimonials Block > Testimonial (testimonials_block_testimonial) */
export type TestimonialsBlockTestimonialRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type TwoColumnWithImageBlockDefaultModelStructuredTextField = {
  __typename?: 'TwoColumnWithImageBlockDefaultModelStructuredTextField'
  blocks: Array<Scalars['String']['output']>
  links: Array<Scalars['String']['output']>
  value: Scalars['JsonField']['output']
}

/** Block of type Two Column With Image Block > Default (two_column_with_image_block_default) */
export type TwoColumnWithImageBlockDefaultRecord = RecordInterface & {
  __typename?: 'TwoColumnWithImageBlockDefaultRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  id: Scalars['ItemId']['output']
  structuredText: TwoColumnWithImageBlockDefaultModelStructuredTextField
}

/** Block of type Two Column With Image Block > Default (two_column_with_image_block_default) */
export type TwoColumnWithImageBlockDefaultRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type TwoColumnWithImageBlockModelCtaButtonsField =
  | CtaButtonRecord
  | CtaButtonWithHeadingTextRecord

export type TwoColumnWithImageBlockModelTextContentField =
  | TwoColumnWithImageBlockDefaultRecord
  | TwoColumnWithImageBlockWithFeatureListRecord
  | TwoColumnWithImageBlockWithHeadingHighlightRecord

/** Block of type Two Column With Image Block (two_column_with_image_block) */
export type TwoColumnWithImageBlockRecord = RecordInterface & {
  __typename?: 'TwoColumnWithImageBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  backgroundColor: Scalars['String']['output']
  ctaButtons: Array<TwoColumnWithImageBlockModelCtaButtonsField>
  desktopLayout: Scalars['String']['output']
  id: Scalars['ItemId']['output']
  image: ImageAltFileField
  mobileLayout: Scalars['String']['output']
  textContent: Array<TwoColumnWithImageBlockModelTextContentField>
}

/** Block of type Two Column With Image Block (two_column_with_image_block) */
export type TwoColumnWithImageBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Two Column With Image Block > With Feature List (two_column_with_image_block_with_feature_list) */
export type TwoColumnWithImageBlockWithFeatureListRecord = RecordInterface & {
  __typename?: 'TwoColumnWithImageBlockWithFeatureListRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  featureList: Array<FeatureListItemRecord>
  id: Scalars['ItemId']['output']
}

/** Block of type Two Column With Image Block > With Feature List (two_column_with_image_block_with_feature_list) */
export type TwoColumnWithImageBlockWithFeatureListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Two Column With Image Block > With Heading Highlight (two_column_with_image_block_with_heading_highlight) */
export type TwoColumnWithImageBlockWithHeadingHighlightRecord =
  RecordInterface & {
    __typename?: 'TwoColumnWithImageBlockWithHeadingHighlightRecord'
    _createdAt: Scalars['DateTime']['output']
    /** Editing URL */
    _editingUrl?: Maybe<Scalars['String']['output']>
    _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
    _isValid: Scalars['BooleanType']['output']
    _modelApiKey: Scalars['String']['output']
    _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
    _publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** Generates SEO and Social card meta tags to be used in your frontend */
    _seoMetaTags: Array<Tag>
    _status: ItemStatus
    _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
    _updatedAt: Scalars['DateTime']['output']
    body: Scalars['String']['output']
    headline: Scalars['String']['output']
    id: Scalars['ItemId']['output']
    textToHighlight?: Maybe<Scalars['String']['output']>
  }

/** Block of type Two Column With Image Block > With Heading Highlight (two_column_with_image_block_with_heading_highlight) */
export type TwoColumnWithImageBlockWithHeadingHighlightRecord_SeoMetaTagsArgs =
  {
    locale?: InputMaybe<SiteLocale>
  }

/** Block of type Two Column With Image Block > With Heading Highlight (two_column_with_image_block_with_heading_highlight) */
export type TwoColumnWithImageBlockWithHeadingHighlightRecordBodyArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Block of type Two Columns Text Block (two_columns_text_block) */
export type TwoColumnsTextBlockRecord = RecordInterface & {
  __typename?: 'TwoColumnsTextBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  textLeft: Scalars['String']['output']
  textRight: Scalars['String']['output']
  title: Scalars['String']['output']
}

/** Block of type Two Columns Text Block (two_columns_text_block) */
export type TwoColumnsTextBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Two Columns Text Block (two_columns_text_block) */
export type TwoColumnsTextBlockRecordTextLeftArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Block of type Two Columns Text Block (two_columns_text_block) */
export type TwoColumnsTextBlockRecordTextRightArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>
}

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>
}

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  _createdAt?: InputMaybe<UploadCreatedAtFilter>
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>
  alt?: InputMaybe<UploadAltFilter>
  author?: InputMaybe<UploadAuthorFilter>
  basename?: InputMaybe<UploadBasenameFilter>
  colors?: InputMaybe<UploadColorsFilter>
  copyright?: InputMaybe<UploadCopyrightFilter>
  filename?: InputMaybe<UploadFilenameFilter>
  format?: InputMaybe<UploadFormatFilter>
  height?: InputMaybe<UploadHeightFilter>
  id?: InputMaybe<UploadIdFilter>
  inUse?: InputMaybe<InUseFilter>
  md5?: InputMaybe<UploadMd5Filter>
  mimeType?: InputMaybe<UploadMimeTypeFilter>
  notes?: InputMaybe<UploadNotesFilter>
  orientation?: InputMaybe<OrientationFilter>
  resolution?: InputMaybe<ResolutionFilter>
  size?: InputMaybe<UploadSizeFilter>
  smartTags?: InputMaybe<UploadTagsFilter>
  tags?: InputMaybe<UploadTagsFilter>
  title?: InputMaybe<UploadTitleFilter>
  type?: InputMaybe<TypeFilter>
  width?: InputMaybe<UploadWidthFilter>
}

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>
}

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadOrderBy {
  CreatedAtAsc = '_createdAt_ASC',
  CreatedAtDesc = '_createdAt_DESC',
  UpdatedAtAsc = '_updatedAt_ASC',
  UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>
}

export type UploadVideoField = {
  __typename?: 'UploadVideoField'
  duration?: Maybe<Scalars['Int']['output']>
  framerate?: Maybe<Scalars['Int']['output']>
  mp4Url?: Maybe<Scalars['String']['output']>
  muxAssetId: Scalars['String']['output']
  muxPlaybackId: Scalars['String']['output']
  streamingUrl: Scalars['String']['output']
  thumbnailUrl: Scalars['String']['output']
}

export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>
  res?: InputMaybe<VideoMp4Res>
}

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>
}

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>
}

/** Block of type Video Block (video_block) */
export type VideoBlockRecord = RecordInterface & {
  __typename?: 'VideoBlockRecord'
  _createdAt: Scalars['DateTime']['output']
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  _isValid: Scalars['BooleanType']['output']
  _modelApiKey: Scalars['String']['output']
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>
  _updatedAt: Scalars['DateTime']['output']
  anchorId?: Maybe<Scalars['String']['output']>
  id: Scalars['ItemId']['output']
  title?: Maybe<Scalars['String']['output']>
  video?: Maybe<VideoField>
}

/** Block of type Video Block (video_block) */
export type VideoBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>
}

export type VideoField = {
  __typename?: 'VideoField'
  height: Scalars['IntType']['output']
  provider: Scalars['String']['output']
  providerUid: Scalars['String']['output']
  thumbnailUrl: Scalars['String']['output']
  title: Scalars['String']['output']
  url: Scalars['String']['output']
  width: Scalars['IntType']['output']
}

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

export type FocalPoint = {
  __typename?: 'focalPoint'
  x: Scalars['FloatType']['output']
  y: Scalars['FloatType']['output']
}

export type ResponsiveImageFragmentFragment = {
  __typename?: 'ResponsiveImage'
  src: string
  srcSet: string
  webpSrcSet: string
  sizes: string
  width: number
  height: number
  aspectRatio: number
  alt?: string | null
  title?: string | null
  base64?: string | null
  bgColor?: string | null
}

export const ResponsiveImageFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ResponsiveImageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'ResponsiveImage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'src' } },
          { kind: 'Field', name: { kind: 'Name', value: 'srcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'webpSrcSet' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sizes' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'aspectRatio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'base64' } },
          { kind: 'Field', name: { kind: 'Name', value: 'bgColor' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResponsiveImageFragmentFragment, unknown>
