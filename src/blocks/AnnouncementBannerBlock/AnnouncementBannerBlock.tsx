import { AnnouncementBannerBlockRecord } from '@/types/generated'
import React from 'react'

export const AnnouncementBannerBlock = (
  props: AnnouncementBannerBlockRecord,
) => {
  const { text } = props

  return (
    <section
      id="announcement-banner"
      className="announcement-banner z-50 bg-brand-grey-800 py-[10px] text-center text-11/[140%] text-white lg:text-14"
      aria-label="announcement banner"
    >
      <div className="container mx-auto">{text}</div>
    </section>
  )
}
