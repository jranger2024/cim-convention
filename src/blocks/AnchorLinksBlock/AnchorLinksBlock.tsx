import React from 'react'
import { AnchorLinksBlockRecord } from '@/types/generated'
import { GridContainer } from '@/components/GridContainer'

export const AnchorLinksBlock = (props: AnchorLinksBlockRecord) => {
  const { links } = props

  return (
    <GridContainer className="flex gap-x-2 overflow-scroll py-4 lg:gap-x-4">
      {links.map((link) => {
        return (
          <a
            key={link.id}
            href={`#${link.anchorLink}`}
            className="whitespace-nowrap rounded border border-brand-grey-300 px-4 py-[10px] lg:px-6 lg:text-16/[125%]"
          >
            {link.label}
          </a>
        )
      })}
    </GridContainer>
  )
}
