import { ProgramTagRecord } from '@/types/generated'
import { cn } from '@/utils/clsxMerge'
import { twJoin } from 'tailwind-merge'
import React from 'react'

export const ProgramTag = (props: ProgramTagRecord) => {
  const { title, variant = 'blue' } = props

  const textStyle = 'text-10/[100%] lg:text-12'
  const baseStyle =
    'font-medium rounded px-[2px] py-[3px] lg:py-[6px] capitalize max-h-6 h-6 inline-flex max-w-max align-middle grow-0'
  const programTagVariants = {
    green: `bg-brand-green text-white`,
    blue: `bg-brand-blue text-white`,
    outline: `text-brand-grey-600 bg-brand-gradient px-[2px] py-[2px] lg:px-[2px] lg:py-[2px]`,
  }

  return (
    <span
      className={twJoin(
        textStyle,
        cn(
          baseStyle,
          programTagVariants[variant as keyof typeof programTagVariants],
        ),
      )}
    >
      <span
        className={cn(
          'flex h-full w-full items-center rounded-[2px] px-[6px] py-[4px]',
          variant === 'outline' && 'bg-white',
        )}
      >
        {title}
      </span>
    </span>
  )
}
