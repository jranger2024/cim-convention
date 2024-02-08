import { unstable_setRequestLocale } from 'next-intl/server'
import { fetchDatoContent } from '@/lib/datocms'
import { getCourseBySlugQuery } from '@/lib/datocms/queries/getCourseBySlugQuery'
import { locales, Locale } from '@/navigation'
import { notFound } from 'next/navigation'
import { GridContainer } from '@/components/GridContainer'
import { StructuredText, Image as DatoImage } from 'react-datocms'
import { CtaButton } from '@/components/CtaButton'
import { CtaButtonRecord, ShortCourseRecord } from '@/types/generated'

export type PageProps = {
  params: {
    locale: Locale
    slug: string
  }
}

export default async function Page({
  params: { slug, locale },
}: PageProps): Promise<JSX.Element | void> {
  unstable_setRequestLocale(locale)
  if (!locales.includes(locale as any)) notFound()

  const { data: courseData } = await fetchDatoContent(
    getCourseBySlugQuery({
      locale: locale,
      slug: slug,
    }),
  )

  if (!courseData?.shortCourse) return notFound()

  const { buttons, pageTitle, courseTitle, duration, dates, startEndTime } =
    courseData.shortCourse satisfies ShortCourseRecord

  return (
    <main className="bg-brand-grey-25">
      <GridContainer className="gap-y-10 py-10 lg:gap-y-16 lg:py-16">
        <div className="col-span-full flex flex-col lg:col-span-7">
          <h1 className="mb-2 text-12/[130%] font-normal uppercase tracking-[0.24px] lg:mb-4 lg:text-14/[140%] lg:tracking-[0.28px]">
            {pageTitle}
          </h1>
          <h2 className="grow text-20/[140%] font-semibold tracking-[-0.1px] lg:col-start-1 lg:text-32/[125%] lg:tracking-[-0.16px]">
            {courseTitle}
          </h2>
          <div className="flex flex-col gap-x-4 font-medium lg:flex-row lg:items-center">
            <span className="my-4 max-w-max rounded bg-brand-gradient px-3 py-[6px] text-white">
              {duration}
            </span>
            <span className="inline-flex flex-col gap-x-4 text-20/[140%] lg:flex-row lg:items-center lg:text-24">
              <time>{dates}</time>
              <div className="hidden h-6 border-r border-brand-grey-300 lg:block"></div>
              <span className="text-brand-green">{startEndTime}</span>
            </span>
          </div>
        </div>
        <DatoImage
          className="col-span-full rounded lg:col-span-4 lg:col-start-9 lg:row-start-1"
          data={courseData.shortCourse.image.responsiveImage}
        />
        <section className="structured-text col-span-full">
          {courseData.shortCourse.description && (
            <StructuredText data={courseData.shortCourse.description.value} />
          )}
        </section>
        <section className="col-span-full gap-x-6 space-y-4 lg:flex lg:flex-row lg:space-y-0 [&_*]:block [&_*]:max-w-max">
          {buttons.length > 0 &&
            buttons.map((button: CtaButtonRecord, index: number) => (
              <CtaButton key={index} {...button} />
            ))}
        </section>
      </GridContainer>
    </main>
  )
}
