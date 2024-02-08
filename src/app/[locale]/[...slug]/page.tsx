import { unstable_setRequestLocale } from 'next-intl/server'
import { ComponentParser, fetchDatoContent } from '@/lib/datocms'
import { getPageBySlugQuery } from '@/lib/datocms/queries/getPageBySlugQuery'
import { locales, Locale } from '@/navigation'
import { notFound } from 'next/navigation'

export type PageProps = {
  params: {
    locale: Locale
    slug: string[]
  }
}

export default async function Page({
  params: { slug, locale },
}: PageProps): Promise<JSX.Element | void> {
  unstable_setRequestLocale(locale)
  if (!locales.includes(locale as any)) notFound()

  const { data: pageData } = await fetchDatoContent(
    getPageBySlugQuery({
      locale: locale,
      slug: slug[0],
    }),
  )

  if (!pageData?.page) return notFound()

  return (
    <main className="">
      {pageData?.page?.body?.map(
        (block: any) =>
          block.id && <ComponentParser key={block.id} data={block} />,
      )}
    </main>
  )
}
