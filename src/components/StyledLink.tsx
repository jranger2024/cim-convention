import React, { ComponentProps, ComponentPropsWithoutRef } from 'react'
import { Link, pathnames } from '@/navigation'
import { twJoin, twMerge } from 'tailwind-merge'

type CustomLinkProps = {
  variant?: 'primary' | 'secondary'
}

// @todo: Check why "text-14/[125%]" from baseStyle is not working with the cn function, adding it manually for now.
const baseStyle =
  'py-[10px] px-6 rounded font-[500] shadow-xs text-14/[125%] lg:text-16 inline-block whitespace-nowrap hover:ring hover:ring-brand-blue/30'
const primaryStyle =
  'text-white bg-brand-gradient disabled:bg-brand-gradient-light focus:shadow-skyblue transition-all focus:outline-none'
const secondaryStyle =
  'bg-white text-brand-grey-950 transition-all focus:shadow-skyblue focus:outline-none border border-brand-grey-300'

export function StyledLink<Pathname extends keyof typeof pathnames>(
  props: ComponentProps<typeof Link<Pathname>> & CustomLinkProps,
) {
  const { href, className, children, variant = 'primary', ...rest } = props
  const style = twJoin(
    baseStyle,
    twMerge(variant === 'primary' ? primaryStyle : secondaryStyle, className),
  )

  return (
    <Link href={href} className={`${style} text-14/[125%]`} {...rest}>
      {children}
    </Link>
  )
}

export const StyledLinkExternal = (
  props: ComponentPropsWithoutRef<'a'> & CustomLinkProps,
) => {
  const { className, children, variant = 'primary', ...rest } = props
  const style = twJoin(
    baseStyle,
    twMerge(variant === 'primary' ? primaryStyle : secondaryStyle, className),
  )

  return (
    <a className={`${style} text-14/[125%]`} {...rest} target="_blank">
      {children}
    </a>
  )
}
