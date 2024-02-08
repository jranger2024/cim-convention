import React from 'react'
import { useLocale } from 'next-intl'
import { getPageBySlugQuery } from '@/lib/datocms/queries/getPageBySlugQuery'
import { ComponentParser, fetchDatoContent } from '@/lib/datocms'
import { Locale } from '@/navigation'

export const NotFoundDisplay = async () => {
  const currentLocale = useLocale() as Locale
  const { data: pageData } = await fetchDatoContent(
    getPageBySlugQuery({
      locale: currentLocale,
      slug: 'not-found',
    }),
  )

  return (
    <>
      {pageData?.page?.header?.blocks.map(
        (block: any) =>
          block.id && <ComponentParser key={block.id} data={block} />,
      )}
      <main className="flex grow flex-col [&>section]:flex [&>section]:min-h-[460px] [&>section]:flex-col [&>section]:justify-center">
        {pageData?.page?.body?.map(
          (block: any) =>
            block.id && <ComponentParser key={block.id} data={block} />,
        )}
      </main>
      {pageData?.page?.footer?.blocks.map(
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
