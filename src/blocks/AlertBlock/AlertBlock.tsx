import { GridContainer } from '@/components/GridContainer'
import { AlertBlockRecord } from '@/types/generated'
import React from 'react'
import { Image as DatoImage } from 'react-datocms'

export const AlertBlock = (props: AlertBlockRecord) => {
  const { title, paragraphs, image } = props

  return (
    <section className="bg-gradient-to-b from-brand-grey-200 via-white to-white py-8 lg:pb-16 lg:pt-20">
      <GridContainer className="place-items-center text-center">
        {title && (
          <h2 className="col-span-full mb-4 text-20/[140%] font-semibold tracking-[-0.1px] lg:mb-6 lg:text-32/[125%] lg:tracking-[-0.16px]">
            {title}
          </h2>
        )}
        {paragraphs && (
          <div
            dangerouslySetInnerHTML={{ __html: paragraphs }}
            className="col-span-full mb-6 lg:col-span-8 lg:col-start-3 lg:mb-8 [&_a]:underline"
          />
        )}
        {image && image.responsiveImage && (
          <DatoImage
            data={image.responsiveImage}
            className="col-span-full lg:col-span-4 lg:col-start-5"
          />
        )}
      </GridContainer>
    </section>
  )
}
