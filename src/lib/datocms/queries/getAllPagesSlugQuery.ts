import { gql } from 'graphql-request'
import { locales, defaultLocale, Locale } from '@/navigation'

type Params = {
  locale: Locale
}

export const getAllPagesSlugQuery = ({ locale }: Params): string => {
  const l = locales.includes(locale as any) ? locale : defaultLocale

  const result = gql`
    query AllPagesQuery {
      allPages(locale: ${l}, first: 100) {
        id
        title
        _status
        _firstPublishedAt
        slug
      }
    }
  `

  return result
}
