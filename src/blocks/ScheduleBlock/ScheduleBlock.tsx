import React from 'react'
import { GridContainer } from '@/components/GridContainer'
import { useFormatter } from 'next-intl'
import { Link } from '@/navigation'
import { cn } from '@/utils/clsxMerge'
import ArrowSquareOutIcon from '@/components/IconSelector/Icons/ArrowSquareOutIcon'
import { ProgramTag } from '@/components/ProgramTag'
import {
  ScheduleBlockRecord,
  ScheduleBlockDayRecord,
  ScheduleBlockDayTimeSlotRecord,
} from '@/types/generated'

const AnchorLink = ({ day }: { day: ScheduleBlockDayRecord }) => {
  const format = useFormatter()
  const date = new Date(day.date)

  const weekDayString = format.dateTime(date, {
    weekday: 'long',
    timeZone: 'UTC',
  })

  const dateMonthString = format.dateTime(date, {
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <a
      href={`#${day.id}`}
      className="inline min-w-[120px] rounded border border-brand-grey-300 bg-white p-3 pt-1 font-medium transition-colors hover:bg-brand-grey-200 lg:box-content lg:px-6 lg:py-3"
    >
      <time
        dateTime={day.date}
        className="text-12/[100%] capitalize lg:text-16/[125%]"
      >
        {weekDayString}
      </time>
      <div className="text-14/[125%] text-brand-green lg:text-20/[140%]">{`${dateMonthString}`}</div>
    </a>
  )
}

const Day = ({
  day,
  linkSupportLabel,
}: {
  day: ScheduleBlockDayRecord
  linkSupportLabel: string
}) => {
  const format = useFormatter()
  const date = new Date(day.date)
  const weekDayString = format.dateTime(date, {
    weekday: 'long',
    timeZone: 'UTC',
  })
  const dateMonthString = format.dateTime(date, {
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <li key={day.id} id={day.id}>
      <h2 className="mb-6 flex items-center gap-x-1 space-x-2 text-20/[140%] font-medium lg:text-24">
        <time dateTime={day.date} className="capitalize">
          {weekDayString}
        </time>
        <div className="h-[20px] border-r border-brand-grey-300" />
        <span className="text-brand-green">{`${dateMonthString}`}</span>
      </h2>
      <ul className="col-span-full flex flex-col gap-y-4">
        {day.timeSlots.map((timeSlot) => (
          <TimeSlot
            key={timeSlot.id}
            timeSlot={timeSlot}
            linkSupportLabel={linkSupportLabel}
          />
        ))}
      </ul>
    </li>
  )
}

const TimeSlot = ({
  timeSlot,
  linkSupportLabel,
}: {
  timeSlot: ScheduleBlockDayTimeSlotRecord
  linkSupportLabel: string
}) => {
  const isLink = Boolean(timeSlot.linkTo) || timeSlot.externalLink
  const Comp = isLink ? (timeSlot.useExternalLink ? 'a' : Link) : 'li'
  let url: string | undefined = undefined

  if (isLink && !timeSlot.externalLink) {
    switch (timeSlot.linkTo?._modelApiKey) {
      case 'home_page':
        url = '/'
        break
      case 'short_course':
        url = `/course/${timeSlot.linkTo?.slug}`
        break
      default:
        url = `/${timeSlot.linkTo?.slug}`
    }
  }

  if (isLink && timeSlot.externalLink) url = timeSlot.externalLink

  return (
    <Comp
      href={url || ''}
      key={timeSlot.id}
      className={cn(
        'group block items-baseline rounded bg-brand-grey-100 p-3 transition-colors lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-6 lg:py-[20px]',
        isLink && 'hover:bg-brand-grey-300',
      )}
    >
      <span
        aria-label="time slot"
        className="mb-3 text-16/[150%] text-brand-grey-600 lg:col-span-2 lg:mb-0 lg:text-18/[155%]"
      >
        <p>{timeSlot.time}</p>
      </span>
      <h3 className="my-2 flex flex-wrap items-center gap-x-2 text-16/[150%] font-medium lg:col-span-7 lg:my-0 lg:gap-x-4 lg:text-18/[155%]">
        {timeSlot.title}
        {timeSlot.tags.length > 0 &&
          timeSlot.tags.map((each) => <ProgramTag {...each} key={each.id} />)}
      </h3>
      <p className="mb-2 text-14/[150%] font-normal text-brand-grey-600 lg:col-span-7 lg:col-start-3 lg:mb-0 lg:text-16">
        {timeSlot.description}
      </p>
      <div className="flex items-center gap-x-[6px] text-16/[150%] text-brand-green underline transition-colors group-hover:text-brand-green lg:col-span-3 lg:col-start-12 lg:row-start-1 lg:justify-end lg:text-brand-grey-700">
        {isLink && (
          <>
            {linkSupportLabel}
            <ArrowSquareOutIcon className="shrink-0 text-brand-green transition-colors group-hover:text-brand-green lg:text-brand-grey-700" />
          </>
        )}
      </div>
    </Comp>
  )
}

export const ScheduleBlock = (props: ScheduleBlockRecord) => {
  const { anchorId, displayAnchorLinks, days, linkSupportLabel } = props

  return (
    <section id={anchorId ?? undefined} className="bg-brand-grey-25">
      {displayAnchorLinks && (
        <GridContainer className="flex overflow-scroll py-4 lg:gap-x-4">
          {days.map((day) => (
            <AnchorLink key={day.id} day={day} />
          ))}
        </GridContainer>
      )}

      <GridContainer className="py-6 lg:py-16">
        <ul className="col-span-full flex flex-col gap-y-12 lg:gap-y-16">
          {days.map((day) => (
            <Day key={day.id} day={day} linkSupportLabel={linkSupportLabel} />
          ))}
        </ul>
      </GridContainer>
    </section>
  )
}
