'use client'
import React from 'react'
import { SponsorListBlockRowRecord } from '@/types/generated'
import Image from 'next/image'
import { Image as DatoImage } from 'react-datocms'
import '@splidejs/react-splide/css'
import { cn } from '@/utils/clsxMerge'

// @ts-ignore - Splidejs needs to update their package.json: https://github.com/Splidejs/splide/issues/1248
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

export const SponsorListRow = (props: SponsorListBlockRowRecord) => {
  const { title, logoSize, sponsors } = props

  const generateSplideBreakpoints = ([...breakpoints]: {
    px: string
    maxItems: number
  }[]): {
    [key: string]: any
  } => {
    const breakpointsObject: {
      [key: string]: any
    } = {}

    breakpoints.forEach((each) => {
      const isOverflowing = sponsors.length > each.maxItems - 2
      breakpointsObject[each.px] = {
        // Show the number of logos or the max number of logos per breakpoint, whichever is smaller
        perPage: Math.min(sponsors.length, each.maxItems),
        // If there are more logos than the max number of logos per breakpoint, enable autoscroll
        autoScroll: {
          autoStart: isOverflowing,
          pauseOnHover: isOverflowing,
          speed: isOverflowing ? 1 : 0,
        },
        fixedWidth: `${
          (parseInt(each.px) - (each.maxItems - 1) * 32) / each.maxItems // (breakpoint width - num of gaps * gap length) / numof logos
        }px`,
        type: isOverflowing ? 'loop' : 'slide',
      }
    })

    return breakpointsObject
  }

  const options = {
    breakpoints: {
      ...generateSplideBreakpoints([
        { px: '1536', maxItems: 7 },
        { px: '1264', maxItems: 6 },
        { px: '1024', maxItems: 5 },
        { px: '768', maxItems: 4 },
        { px: '640', maxItems: 3 },
      ]),
    },
    perPage: Math.min(sponsors.length, 2),
    drag: 'free',
    gap: '32px',
    pagination: false,
    arrows: false,
    mediaQuery: 'min',
    autoScroll: {
      pauseOnHover: true,
      rewind: false,
      speed: 1,
    },
    fixedWidth: '50%',
    fixedHeight: logoSize === 'large' ? '72px' : '64px',
    type: sponsors.length > 2 ? 'loop' : 'slide',
  }

  return (
    <div className="col-span-full border-t border-brand-grey-300 py-3">
      <h3 id="sponsor-list-title" className="mb-6">
        {title}
      </h3>
      <Splide
        aria-labelledby="sponsor-list-title"
        options={options}
        extensions={{ AutoScroll }}
      >
        {sponsors.map(({ id, logo, name, websiteUrl }) => {
          return (
            <SplideSlide
              key={id}
              className="relative flex h-full grow-0 items-center justify-center"
            >
              <a href={websiteUrl} target="_blank">
                {logo.responsiveImage && (
                  <DatoImage
                    data={logo.responsiveImage}
                    className={cn(
                      'max-h-[64px] object-contain',
                      logoSize === 'large' && 'max-h-[72px]',
                    )}
                    pictureClassName="object-contain object-center"
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
