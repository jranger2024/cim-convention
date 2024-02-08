import React, { HTMLAttributes } from 'react'
import { cn } from '@/utils/clsxMerge'

const PresentationChartIcon = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-white', className)}
    >
      <path
        d="M12.5 16.5V21.5M12.5 16.5L18.5 21.5M12.5 16.5L6.5 21.5M21.5 3.5V11.7C21.5 13.3802 21.5 14.2202 21.173 14.862C20.8854 15.4265 20.4265 15.8854 19.862 16.173C19.2202 16.5 18.3802 16.5 16.7 16.5H8.3C6.61984 16.5 5.77976 16.5 5.13803 16.173C4.57354 15.8854 4.1146 15.4265 3.82698 14.862C3.5 14.2202 3.5 13.3802 3.5 11.7V3.5M8.5 9.5V12.5M12.5 7.5V12.5M16.5 11.5V12.5M22.5 3.5H2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PresentationChartIcon
