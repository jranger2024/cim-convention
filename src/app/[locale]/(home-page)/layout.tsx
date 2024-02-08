import React from 'react'
import { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from '@/navigation'
import { ComponentParser, fetchDatoContent } from '@/lib/datocms'
import { getPageBySlugQuery } from '@/lib/datocms/queries/getPageBySlugQuery'
import { toNextMetadata } from 'react-datocms/seo'

export const revalidate = 7200 // 2 hours

type HomePageProps = {
  children: React.ReactNode
  params: { locale: Locale }
}

export const generateMetadata = async ({
  params: { locale },
}: HomePageProps): Promise<Metadata> => {
  const { data } = await fetchDatoContent(
    getPageBySlugQuery({
      locale: locale,
      slug: '',
      isHomePage: true,
    }),
  )
  return !data.homePage ? {} : toNextMetadata([...data.homePage._seoMetaTags])
}

export default async function HomePageLayout({
  children,
  params: { locale },
}: HomePageProps) {
  unstable_setRequestLocale(locale)
  const { data: pageData } = await fetchDatoContent(
    getPageBySlugQuery({
      locale: locale,
      slug: '',
      isHomePage: true,
    }),
  )

  return (
    <>
      <div className="sticky top-0 z-50">
        {pageData?.homePage?.header?.blocks.map(
          (block: any) =>
            block.id && (
              <ComponentParser
                key={block.id}
                data={{
                  ...block,
                  _allSlugLocales: pageData.homePage._allSlugLocales,
                }}
              />
            ),
        )}
      </div>
      {children}
      {pageData?.homePage?.footer?.blocks.map(
        (block: any) =>
          block.id && (
            <ComponentParser
              key={block.id}
              data={{ ...block, socialLinks: pageData.socialLink }}
            />
          ),
      )}
    </>
  )
}
