import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'
import { EuclidCircularA } from '@/styles/typography'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cn } from '@/utils/clsxMerge'
import { MarkerIoScript } from '@/components/MarkerIoScript'
import { fetchDatoContent } from '@/lib/datocms'
import { getPageBySlugQuery } from '@/lib/datocms/queries/getPageBySlugQuery'
import { toNextMetadata } from 'react-datocms/seo'

// i18n
import { Providers } from '@/components/Providers'
import { Locale, defaultLocale, locales } from '@/navigation'
import CookieFirstScript from '@/components/CookieFirstScript'

export function generateStaticParams() {
  return process.env.ENABLE_I18N === 'true'
    ? locales.map((locale) => ({ locale }))
    : [{ locale: defaultLocale || 'en' }]
}

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: Locale }
}): Promise<Metadata> => {
  const { data } = await fetchDatoContent(
    getPageBySlugQuery({
      locale: locale,
      slug: '',
      isHomePage: true,
    }),
  )
  return !data.homePage._seoMetaTags
    ? {}
    : {
        ...toNextMetadata([...data.homePage._seoMetaTags]),
        metadataBase: new URL('https://convention.cim.org'),
      }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  // if locale is invalid, return 404
  if (!locales.includes(params.locale as any)) notFound()
  unstable_setRequestLocale(params.locale)

  return (
    <html
      lang={params.locale}
      className={cn('h-full antialiased', EuclidCircularA.className)}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50">
        <Providers params={params}>
          <div className="relative flex h-fit w-full flex-col">{children}</div>
        </Providers>
      </body>
      <CookieFirstScript />
      <MarkerIoScript />
    </html>
  )
}
