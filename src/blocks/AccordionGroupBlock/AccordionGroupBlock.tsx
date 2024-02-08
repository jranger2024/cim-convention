import React from 'react'
import { AccordionBlock } from '../AccordionBlock/AccordionBlock'
import { AccordionGroupBlockRecord } from '@/types/generated'
import { GridContainer } from '@/components/GridContainer'
import { cn } from '@/utils/clsxMerge'

export const AccordionGroupBlock = (props: AccordionGroupBlockRecord) => {
  const { displayAnchorLinks, sections, supportText, title, centeredLayout } =
    props

  return (
    <section className="bg-brand-grey-25 pb-12 lg:pb-16">
      {title && (
        <GridContainer>
          <h2
            className={`${
              centeredLayout ? 'text-center' : 'text-left'
            } col-span-full mt-12 text-20/[140%] font-semibold md:text-32/[125%] lg:mt-16`}
          >
            {title}
          </h2>
        </GridContainer>
      )}
      {displayAnchorLinks && (
        <GridContainer className="flex gap-x-2 overflow-scroll py-4 lg:gap-x-4">
          {sections.map((section) => {
            return (
              <a
                key={section.id}
                href={`#${section.anchorId}`}
                className="whitespace-nowrap rounded border border-brand-grey-300 px-4 py-[10px] lg:px-6 lg:text-16/[125%]"
              >
                {section.title}
              </a>
            )
          })}
        </GridContainer>
      )}
      {centeredLayout ? (
        <GridContainer className="px-0">
          {sections.map((section, index) => {
            return (
              <div
                className="col-span-full col-start-1 lg:col-span-8 lg:col-start-3"
                key={index}
              >
                <AccordionBlock {...section} />
              </div>
            )
          })}
        </GridContainer>
      ) : (
        sections.map((section, index) => {
          return <AccordionBlock key={index} {...section} />
        })
      )}
      <GridContainer
        className={cn(
          'structured-text grid-cols-1 ',
          centeredLayout ? 'mt-4 lg:mt-0' : 'mt-8 lg:mt-16',
        )}
      >
        {supportText && (
          <div
            dangerouslySetInnerHTML={{ __html: supportText }}
            className={
              centeredLayout
                ? 'col-span-full col-start-1 lg:col-span-8 lg:col-start-3'
                : 'col-span-full'
            }
          />
        )}
      </GridContainer>
    </section>
  )
}
