import React from 'react'
import { GridContainer } from '@/components/GridContainer'
import {
  ShortCourseListBlockSectionRecord,
  ShortCoursesListBlockRecord,
} from '@/types/generated'
import { Link } from '@/navigation'

export const ShortCoursesListBlock = (props: ShortCoursesListBlockRecord) => {
  const { anchorId, title, linkLabel, sections } = props

  return (
    <section id={anchorId ?? undefined} className="py-10 lg:py-16">
      <GridContainer className="gap-y-10 lg:gap-y-12">
        {title && (
          <h2 className="col-span-full text-center text-20/[140%] font-semibold md:text-32/[125%]">
            {title}
          </h2>
        )}
        {sections.map((section: ShortCourseListBlockSectionRecord) => (
          <div key={section.id} className="col-span-full font-medium">
            <h3 className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-4">
              <span className="max-w-max rounded bg-brand-gradient px-2 py-1 text-12/[100%] text-white lg:px-3 lg:py-[6px] lg:text-16/[125%]">
                {section.duration}
              </span>
              <span className="flex flex-col gap-y-1 text-18/[140%] lg:flex-row lg:items-center lg:gap-x-4 lg:text-24/[140%]">
                <time>{section.dates}</time>
                <span className="hidden h-6 border-r border-brand-grey-300 lg:block"></span>
                <span className="text-brand-green">{section.time}</span>
              </span>
            </h3>
            <ul className="mt-4 space-y-4 lg:mt-8">
              {section.shortCourses.map((shortCourse) => (
                <li key={shortCourse.id}>
                  <Link
                    className="group flex flex-col gap-y-4 rounded-lg bg-brand-grey-100 px-3 py-4 text-16/[125%] transition-colors hover:bg-brand-grey-300 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-4 lg:text-18/[140%]"
                    href={`/course/${shortCourse.slug}`}
                  >
                    {shortCourse.courseTitle}
                    <span className="whitespace-nowrap text-14/[140%] text-brand-grey-700 underline transition-colors group-hover:text-brand-green">
                      {linkLabel}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </GridContainer>
    </section>
  )
}
