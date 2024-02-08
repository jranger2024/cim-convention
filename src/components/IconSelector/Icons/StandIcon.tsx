import React, { HTMLAttributes } from 'react'
import { cn } from '@/utils/clsxMerge'

const StandIcon = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-white', className)}
    >
      <path
        d="M9.5 17.5L4.5 22.5M15.5 17.5L20.5 22.5M12.5 2.5V4.5M12.5 22.5V17.5M5.7 17.5H19.3C20.4201 17.5 20.9802 17.5 21.408 17.282C21.7843 17.0903 22.0903 16.7843 22.282 16.408C22.5 15.9802 22.5 15.4201 22.5 14.3V7.7C22.5 6.57989 22.5 6.01984 22.282 5.59202C22.0903 5.21569 21.7843 4.90973 21.408 4.71799C20.9802 4.5 20.4201 4.5 19.3 4.5H5.7C4.57989 4.5 4.01984 4.5 3.59202 4.71799C3.21569 4.90973 2.90973 5.21569 2.71799 5.59202C2.5 6.01984 2.5 6.57989 2.5 7.7V14.3C2.5 15.4201 2.5 15.9802 2.71799 16.408C2.90973 16.7843 3.21569 17.0903 3.59202 17.282C4.01984 17.5 4.5799 17.5 5.7 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default StandIcon
