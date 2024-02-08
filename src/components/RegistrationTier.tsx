'use client'

import React, { useState } from 'react'
import { RegistrationTierBlockRecord } from '@/types/generated'
import { CtaButton } from './CtaButton'
import { GridContainer } from './GridContainer'
import IconSelector from './IconSelector/IconSelector'

export const RegistrationTier = (
  props: RegistrationTierBlockRecord & {
    registrationPeriod: string
    lateLabel: string
    earlyLabel: string
    blockIndex: number
  },
) => {
  const {
    earlyPrice,
    latePrice,
    title,
    details,
    lateButton,
    earlyButton,
    registrationPeriod,
    earlyLabel,
    lateLabel,
    blockIndex,
  } = props

  const [openDetails, setOpenDetails] = useState<boolean>(blockIndex === 0)

  const toggleDetails = () => {
    setOpenDetails(!openDetails)
  }

  return (
    <GridContainer className="rounded-lg bg-brand-grey-100 p-[20px] lg:px-8 lg:py-6">
      {/* Details */}
      <div className="col-span-full col-start-1 lg:col-span-6">
        <div
          onClick={toggleDetails}
          className="flex w-[100%] cursor-pointer justify-between"
        >
          <h3 className="text-18/[140%] font-medium md:text-24/[140%]">
            {title}
          </h3>
          <div className="h-[calc(24px * 1.4)] flex items-start justify-center p-2">
            <IconSelector
              selectorId="chevron_icon"
              className={` text-black transition-all duration-300 ${
                openDetails ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </div>
        </div>
        <div
          className={`grid pt-4 transition-all duration-300 lg:pt-6 ${
            openDetails ? 'grid-rows-[1fr] pb-4 lg:pb-0' : 'grid-rows-[0fr]'
          }`}
        >
          <div
            dangerouslySetInnerHTML={{ __html: details }}
            className="registration-tier-details overflow-hidden text-14/[150%] md:text-16/[150%]"
          />
        </div>
      </div>
      {/* Pricing */}
      <div className="col-span-full col-start-1 justify-start lg:col-span-6">
        <div className="flex flex-col lg:flex-row">
          {/* Early */}
          <div className="flex w-[100%] grow flex-row items-center justify-between border-t border-brand-grey-300 py-2 pl-0 lg:w-[50%] lg:flex-col lg:items-start lg:justify-normal lg:border-l lg:border-t-0 lg:py-0 lg:pl-8">
            <div className="flex flex-col">
              <p className="mb-2 font-medium text-brand-green">{earlyPrice}</p>
              <p className="text-12/[130%] uppercase text-brand-grey-600 md:text-14/[140%]">
                {earlyLabel}
              </p>
            </div>
            {registrationPeriod === 'early' && (
              <div className="ml-2 mt-0 lg:ml-0 lg:mt-6">
                <CtaButton {...earlyButton[0]} />
              </div>
            )}
          </div>
          {/* Late */}
          <div className="flex w-[100%] grow flex-row items-center justify-between border-t border-brand-grey-300 py-2 pl-0 lg:w-[50%] lg:flex-col lg:items-start lg:justify-normal lg:border-l lg:border-t-0 lg:py-0 lg:pl-8">
            <div className="flex flex-col">
              <p className="mb-2 font-medium">{latePrice}</p>
              <p className="text-12/[130%] uppercase text-brand-grey-600 md:text-14/[140%]">
                {lateLabel}
              </p>
            </div>
            {registrationPeriod === 'late' && (
              <div className="ml-1 mt-0 lg:ml-0 lg:mt-6">
                <CtaButton {...lateButton[0]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </GridContainer>
  )
}
