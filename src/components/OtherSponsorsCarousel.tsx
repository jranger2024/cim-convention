'use client'

import React from 'react'
import { SponsorRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'
import Image from 'next/image'
import { cn } from '@/utils/clsxMerge'

// @ts-ignore - Splidejs needs to update their package.json: https://github.com/Splidejs/splide/issues/1248
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

export const OtherSponsorsCarousel = (props: {
  otherSponsorsLabel?: string
  otherSponsors: SponsorRecord[]
  className?: string
}) => {
  const { otherSponsorsLabel, otherSponsors: sponsors, className } = props

  const options = {
    perPage: 1,
    drag: 'free',
    pagination: false,
    arrows: false,
    mediaQuery: 'min',
    autoScroll: {
      pauseOnHover: true,
      rewind: false,
      speed: 0.25,
    },
    fixedWidth: '180px',
    height: '58px',
    direction: 'ttb',
    type: sponsors.length > 2 ? 'loop' : 'slide',
  }

  return (
    <div
      className={cn('flex min-h-full flex-col gap-y-2 lg:items-end', className)}
    >
      <p className="col-span-full min-h-[1rem] whitespace-nowrap text-12/[130%] font-normal uppercase tracking-[0.24px] lg:col-span-2 lg:text-14/[140%] lg:tracking-[0.28px]">
        {otherSponsorsLabel}
      </p>
      <Splide
        aria-labelledby="sponsor-list-title"
        options={options}
        extensions={{ AutoScroll }}
      >
        {sponsors.map(({ id, logo, name, websiteUrl }) => {
          return (
            <SplideSlide key={id}>
              <a href={websiteUrl} target="_blank">
                {logo.responsiveImage && (
                  <DatoImage
                    data={logo.responsiveImage}
                    className={cn('max-h-[58px] object-contain')}
                    pictureClassName="object-contain object-left lg:object-right"
                    priority
                  />
                )}
                {!logo.responsiveImage && (
                  <Image src={logo.url} alt={logo.alt || name || ''} fill />
                )}
              </a>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}
