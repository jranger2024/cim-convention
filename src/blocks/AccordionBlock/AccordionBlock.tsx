import React from 'react'
import { GridContainer } from '@/components/GridContainer'
import { AccordionBlockRecord } from '@/types/generated'
import { StructuredText } from 'react-datocms'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/Accordion'

export const AccordionBlock = (props: AccordionBlockRecord) => {
  const { title, anchorId, items, accordionType } = props

  return (
    <section
      className="bg-brand-grey-25 pt-8 last:pb-8 lg:pt-16 lg:last:pb-16"
      id={anchorId ?? undefined}
    >
      <GridContainer>
        {title && (
          <h3 className="col-span-full mb-6 text-20/[140%] font-medium text-brand-green lg:mb-8 lg:text-24">
            {title}
          </h3>
        )}
        <Accordion
          type={accordionType as 'single' | 'multiple'}
          collapsible
          className="col-span-full"
        >
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-grey-300 border-0 border-t last:border-b"
            >
              <AccordionTrigger className="text-16/[125%] ring-0 lg:text-18/[140%]">
                {item.triggerText}
              </AccordionTrigger>
              <AccordionContent>
                <div className="structured-text">
                  {/* @ts-ignore - type mismatch from generated types */}
                  <StructuredText data={item.content} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </GridContainer>
    </section>
  )
}
