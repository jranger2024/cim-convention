import React from 'react'
import { TwoColumnsTextBlockRecord } from '@/types/generated'
import { GridContainer } from '@/components/GridContainer'

export const TwoColumnsTextBlock = (props: TwoColumnsTextBlockRecord) => {
  const { anchorId, title, textLeft, textRight } = props

  return (
    <section className="bg-brand-gradient-light py-8 md:py-16">
      <GridContainer id={anchorId || undefined}>
        <h2 className="col-span-full mb-6 text-20/[140%] font-semibold md:mb-16 md:text-32/[125%]">
          {title}
        </h2>
        <div
          className="structured-text col-span-full md:col-span-2 lg:col-span-6"
          dangerouslySetInnerHTML={{ __html: textLeft }}
        />
        <div
          className="structured-text col-span-full md:col-span-2 lg:col-span-6"
          dangerouslySetInnerHTML={{ __html: textRight }}
        />
      </GridContainer>
    </section>
  )
}
