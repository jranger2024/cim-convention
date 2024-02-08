import React from 'react'
import { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
import { ComponentParser, fetchDatoContent } from '@/lib/datocms'
import { getAllCoursesSlugQuery } from '@/lib/datocms/queries/getAllCoursesBySlugQuery'
import { PageProps } from './page'
import { Locale } from '@/navigation'
import { getCourseBySlugQuery } from '@/lib/datocms/queries/getCourseBySlugQuery'
import { toNextMetadata } from 'react-datocms/seo'

export const revalidate = 7200 // 2 hours

type CoursePageProps = {
  children: React.ReactNode
  params: { slug: string; locale: Locale }
}

export const generateMetadata = async ({
  params: { locale, slug },
}: CoursePageProps): Promise<Metadata> => {
  const { data } = await fetchDatoContent(
    getCourseBySlugQuery({
      locale,
      slug,
    }),
  )
  return !data.shortCourse
    ? {}
    : toNextMetadata([...data.shortCourse._seoMetaTags])
}

export async function generateStaticParams({ params }: PageProps) {
  const res = await fetchDatoContent(
    getAllCoursesSlugQuery({ locale: params.locale }),
  )
  // @todo: filter null values
  const result = res.data?.allShortCourses
    ?.map((page: any) => ({ slug: page.slug }))
    // filter falsy values from N/A locales
    .filter(({ slug }: { slug: string | null }) => Boolean(slug))

  return result
}

export default async function HomePageLayout({
  children,
  params: { slug, locale },
}: CoursePageProps) {
  unstable_setRequestLocale(locale)
  const { data: courseData } = await fetchDatoContent(
    getCourseBySlugQuery({
      locale,
      slug,
    }),
  )

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 z-50">
        {courseData?.shortCourse?.header?.blocks.map(
          (block: any) =>
            block.id && (
              <ComponentParser
                key={block.id}
                data={{
                  ...block,
                  _allSlugLocales: courseData.shortCourse._allSlugLocales,
                }}
              />
            ),
        )}
      </div>
      {children}

      {/* Footer */}
      {courseData?.shortCourse?.footer?.blocks.map(
        (block: any) =>
          block.id && (
            <ComponentParser
              key={block.id}
              data={{ ...block, socialLinks: courseData.socialLink }}
            />
          ),
      )}
    </>
  )
}
