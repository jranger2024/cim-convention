import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation'

export const locales = ['en', 'fr'] as const
export const dynamicPathSegments = ['course']

export const localePrefix = 'as-needed'
export const defaultLocale = 'en'
export type Locale = (typeof locales)[number]

export const pathnames = {
  '/': '/',
  '/[locale]': '/[locale]',
  '/[locale]/[...slug]': '/[locale]/[...slug]',
  '/[...slug]': '/[...slug]',

  '[locale]/course/[slug]': {
    en: '/course/[slug]',
    fr: '/cours/[slug]',
  },
} satisfies Pathnames<typeof locales> & Record<string & {}, string | {}>

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
  })
