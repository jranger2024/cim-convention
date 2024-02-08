import { unstable_setRequestLocale } from 'next-intl/server'
import { ComponentParser, fetchDatoContent } from '@/lib/datocms'
import { getPageBySlugQuery } from '@/lib/datocms/queries/getPageBySlugQuery'
import { locales, Locale } from '@/navigation'
import { notFound } from 'next/navigation'

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  unstable_setRequestLocale(locale)
  if (!locales.includes(locale as any)) notFound()

  const { data: pageData } = await fetchDatoContent(
    getPageBySlugQuery({
      locale: locale,
      slug: '',
      isHomePage: true,
    }),
  )

  return (
    <main className="">
      {pageData?.homePage?.body?.map(
        (block: any) =>
          block.id && <ComponentParser key={block.id} data={block} />,
      )}
    </main>
  )
}
