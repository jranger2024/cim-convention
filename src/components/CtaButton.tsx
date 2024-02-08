import { CtaButtonRecord } from '@/types/generated'
import React from 'react'
import { StyledLink, StyledLinkExternal } from './StyledLink'

export const CtaButton = (props: CtaButtonRecord) => {
  const { label, useExternalLink, linkTo, externalLink, id, stylingOption } =
    props

  if (!useExternalLink && linkTo) {
    return (
      <StyledLink
        key={id}
        href={{
          pathname: '/[...slug]',
          // @ts-ignore linkTo will always have slug defined as it is a required field from DatoCMS
          params: { slug: [linkTo.slug === 'home-page' ? '' : linkTo.slug] },
        }}
        variant={stylingOption as 'primary' | 'secondary'}
      >
        {label}
      </StyledLink>
    )
  }

  if (useExternalLink && externalLink !== '') {
    return (
      <StyledLinkExternal
        key={id}
        href={externalLink as string}
        variant={stylingOption as 'primary' | 'secondary'}
      >
        {label}
      </StyledLinkExternal>
    )
  }
}
