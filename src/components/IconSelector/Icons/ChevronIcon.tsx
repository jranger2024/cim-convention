import React, { HTMLAttributes } from 'react'
import { cn } from '@/utils/clsxMerge'

const ChevronIcon = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-black', className)}
    >
      <path
        d="M11 6.5L6 1.5L1 6.5"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronIcon
