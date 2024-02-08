'use client'

import React from 'react'
import '@splidejs/react-splide/css/core'

// @ts-ignore - Splidejs needs to update their package.json: https://github.com/Splidejs/splide/issues/1248
import { Splide, SplideSlide } from '@splidejs/react-splide'

import {
  TestimonialsBlockRecord,
  TestimonialsBlockTestimonialRecord,
} from '@/types/generated'

export const TestimonialsBlock = (props: TestimonialsBlockRecord) => {
  const { anchorId, headline, textToHighlight, testimonials } = props
  const headlineText =
    typeof textToHighlight === 'string'
      ? headline.replace(
          textToHighlight,
          `<span class="bg-brand-gradient bg-clip-text text-transparent">${textToHighlight}</span>`,
        )
      : headline

  const options = {
    breakpoints: {
      '1024': {
        gap: '32px',
        padding: '25%',
      },
    },
    mediaQuery: 'min',
    arrows: false,
    type: 'loop',
    padding: '7.5%',
    gap: '16px',
    autoplay: true,
    speed: 2000,
    interval: 4000,
    trimSpace: false,
    focus: 0,
    omitEnd: true,
  }

  return (
    <section
      id={anchorId || undefined}
      className="bg-brand-grey-100 py-8 text-center lg:py-20"
    >
      <h2
        dangerouslySetInnerHTML={{ __html: headlineText }}
        className="container mx-auto text-20/[140%] font-semibold tracking-[-0.1px] lg:text-32/[115%]"
      />
      <Splide aria-labelledby="sponsor-list-title" options={options}>
        {testimonials.map((testimonial: TestimonialsBlockTestimonialRecord) => (
          <SplideSlide
            key={testimonial.id}
            className="relative flex h-full items-center justify-center py-8 lg:py-12"
          >
            <blockquote className="rounded-lg bg-white p-4 text-16/[150%] font-normal text-brand-grey-950 lg:p-10 lg:text-20">
              <p className="mb-4 lg:mb-10">{testimonial.quote}</p>
              <cite className="not-italic">
                <p className="text-16/[140%] font-semibold tracking-[-0.08px] lg:text-20">
                  {testimonial.author}
                </p>
                {testimonial.company && (
                  <p className="text-14/[150%] text-brand-grey-600 lg:text-16">
                    {testimonial.company}
                  </p>
                )}
              </cite>
            </blockquote>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}
