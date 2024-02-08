import React from 'react'
import { GridContainer } from '@/components/GridContainer'
import { SponsorListBlockRecord } from '@/types/generated'
import { SponsorListRow } from './SponsorListRow'

export const SponsorListBlock = (props: SponsorListBlockRecord) => {
  const {
    anchorId,
    headline,
    previousYearLinkLabel,
    previousYearLinkUrl,
    rows,
  } = props

  return (
    <section
      id={anchorId ?? undefined}
      className="py-10 text-brand-grey-600 lg:py-20"
    >
      <GridContainer className="space-y-8">
        <div className="col-span-4 lg:col-span-full lg:mb-4">
          <h2 className="mb-2 text-20/[140%] font-semibold tracking-[-0.1px] text-brand-grey-950 lg:mb-4 lg:text-32/[125%]">
            {headline}
          </h2>
          <a
            href={previousYearLinkUrl}
            target="_blank"
            className="col-span-4 text-14/[140%] text-brand-green lg:text-16/[125%]"
          >
            {previousYearLinkLabel}
          </a>
        </div>
        {rows.map((row) => (
          <SponsorListRow key={row.id} {...row} />
        ))}
      </GridContainer>
    </section>
  )
}
