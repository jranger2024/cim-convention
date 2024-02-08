import React from 'react'
import { StatisticsBlockRecord } from '@/types/generated'
import { GridContainer } from '@/components/GridContainer'
import IconSelector from '@/components/IconSelector/IconSelector'
import { cn } from '@/utils/clsxMerge'

export const StatisticsBlock = (props: StatisticsBlockRecord) => {
  const { anchorId, headline, subHeadline, stats, styleOptions } = props

  return (
    <section
      id={anchorId || undefined}
      className={cn(
        'bg-brand-grey-800 py-8 text-white lg:py-16',
        styleOptions === 'light' && 'bg-brand-grey-25 text-brand-grey-800',
      )}
    >
      <GridContainer className="gap-y-6 lg:gap-y-12">
        <div className="col-span-4 text-center lg:col-span-8 lg:col-start-3">
          <h2 className="mb-2 text-20/[140%] font-semibold tracking-[-0.1px] lg:mb-4 lg:text-32/[125%]">
            {headline}
          </h2>
          <p
            className={cn(
              'text-14/[150%] text-brand-grey-300 lg:text-16 ',
              styleOptions === 'light' && 'text-brand-grey-500',
            )}
          >
            {subHeadline}
          </p>
        </div>
        <ul className="col-span-4 flex flex-wrap justify-center gap-x-8 gap-y-6 text-center lg:col-span-full lg:gap-x-[120px]">
          {stats.map((stat) => (
            <li key={stat.id} className="space-y-2 lg:space-y-4">
              <div className="text-24/[140%] font-medium lg:text-40/[115%]">
                {stat.value}
              </div>
              <div className="flex items-center gap-x-2 text-14/[150%] lg:text-20/[155%]">
                {stat.iconSelection && (
                  <IconSelector
                    selectorId={stat.iconSelection}
                    className={cn(
                      'aspect-square h-4 w-4 lg:h-6 lg:w-6',
                      styleOptions === 'light' && 'text-brand-grey-800',
                    )}
                  />
                )}
                {stat.label}
              </div>

              {/* Simulate gradient bottom border */}
              <div className="-mt-[2px] h-[2px] bg-brand-gradient lg:-mt-1 lg:h-1" />
            </li>
          ))}
        </ul>
      </GridContainer>
    </section>
  )
}
