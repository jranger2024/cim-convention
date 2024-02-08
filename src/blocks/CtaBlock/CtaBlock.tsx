import { CtaBlockRecord } from '@/types/generated'
import { CtaButton } from '@/components/CtaButton'
import React from 'react'
import { GridContainer } from '@/components/GridContainer'

export const CtaBlock = (props: CtaBlockRecord) => {
  const { anchorId, headline, subHeadline, ctaButton } = props

  return (
    <section
      id={anchorId ?? undefined}
      className="bg-gradient-to-b from-brand-grey-200 via-white/50 to-white/50"
    >
      <GridContainer className="grid-cols-1 place-items-center py-14 text-center lg:grid-cols-1 lg:py-20">
        <h2 className="mb-4 text-28/[125%] font-semibold tracking-[-0.14px] text-brand-grey-950 lg:text-40/[115%]">
          {headline}
        </h2>
        <p className="mb-8 text-16/[150%] text-brand-grey-600 lg:max-w-xl lg:text-18/[155%]">
          {subHeadline}
        </p>
        <CtaButton {...ctaButton[0]} />
      </GridContainer>
    </section>
  )
}
