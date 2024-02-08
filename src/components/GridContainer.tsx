import React, { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/utils/clsxMerge'

type GridContainerProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const GridContainer = (props: GridContainerProps) => {
  const { className, children, ...rest } = props

  return (
    <div
      className={cn(
        'container mx-auto box-border grid max-w-[1264px] grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-8',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
