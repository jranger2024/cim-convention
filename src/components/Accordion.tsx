'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'
import { cn } from '@/utils/clsxMerge'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group relative flex flex-1 items-start justify-start gap-x-3 py-4 text-left font-medium transition-all hover:bg-[rgba(0,0,0,0.05)] lg:gap-x-6 [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      <MinusIcon className="absolute left-0 h-4 w-4 shrink-0 text-brand-green opacity-0 transition-all duration-200 group-[&[data-state=open]]:opacity-100 lg:h-6 lg:w-6" />
      <PlusIcon className="h-4 w-4 shrink-0 text-brand-green transition-all duration-200  group-[&[data-state=open]]:block group-[&[data-state=open]]:opacity-0 lg:h-6 lg:w-6" />
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="ml-7 overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down lg:ml-10"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
