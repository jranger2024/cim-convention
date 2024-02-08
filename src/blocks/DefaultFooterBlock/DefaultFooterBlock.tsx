'use client'

import { StyledLink } from '@/components/StyledLink'
import { DefaultFooterBlockRecord, SocialLinkRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'
import Image from 'next/image'
import SocialMedia from '@/components/SocialMedia'
import { useRef, useState } from 'react'

type DefaultFooterBlockRecordExt = DefaultFooterBlockRecord & {
  socialLinks: SocialLinkRecord
}

type PostSubmit = {
  posted: boolean
  success: boolean
}

export function DefaultFooterBlock(props: DefaultFooterBlockRecordExt) {
  const {
    contactButtonLabel,
    contactButtonLink,
    contactParagraph,
    contactTitle,
    copyright,
    newsletterButtonLabel,
    newsletterInputPlaceholder,
    newsletterParagraph,
    newsletterTitle,
    submitSuccessMessage,
    submitErrorMessage,
    sponsorLogo,
    sponsorLink,
    sponsorTitle,
    socialLinks,
    externalLinkPolicies,
    privacyPolicyPage,
    cookiePolicyPage,
  } = props

  const [postSubmit, setPostSubmit] = useState<PostSubmit>({
    posted: false,
    success: false,
  })

  const formRef = useRef(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(formRef.current as any)
    const formObject = {} as any

    formData.forEach((value, key) => {
      formObject[key] = value
    })

    fetch('/api/mailchimp-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => {
        if (response.status === 200) {
          setPostSubmit({ posted: true, success: true })
        } else {
          setPostSubmit({ posted: true, success: false })
        }
        return response.json()
      })
      .catch((error) => {
        console.error('Error:', error)
        setPostSubmit({ posted: true, success: false })
      })
  }

  return (
    <footer className="flex-none bg-gray-800 text-sm text-white">
      <div className="container mx-auto grid max-w-[1264px] grid-cols-4 items-center justify-between gap-x-4 gap-y-4 py-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-[20px] lg:py-10">
        {/* Contact */}
        <div className="col-span-full col-start-1 flex h-[100%] flex-col items-start justify-start gap-8 lg:col-span-3">
          <h6 className="uppercase">{contactTitle}</h6>
          <div className="flex w-[100%] sm:w-auto">
            <StyledLink
              className="flex w-[100%]  items-center justify-center lg:w-auto"
              href={{
                pathname: '/[...slug]',
                params: { slug: [contactButtonLink ?? ''] },
              }}
            >
              {contactButtonLabel}
            </StyledLink>
          </div>
          <div className="text-gray-400">{contactParagraph}</div>
          <div className="flex gap-[40px]">
            {socialLinks &&
              Object.keys(socialLinks).map(
                (key: string, index: number) =>
                  socialLinks[key as keyof SocialLinkRecord] && (
                    <SocialMedia
                      key={index}
                      socialMediaName={key}
                      socialMediaURL={
                        socialLinks[key as keyof SocialLinkRecord]
                      }
                    ></SocialMedia>
                  ),
              )}
          </div>
        </div>
        {/* Newsletter */}
        <div className="relative col-span-full col-start-1 flex h-[100%] flex-col items-start justify-start gap-8 border-t-[1px] border-gray-700 pt-[20px] lg:col-span-5 lg:col-start-5 lg:border-t-0  lg:pt-0  lg:after:absolute lg:after:left-[-24px] lg:after:top-[50%] lg:after:h-[100%] lg:after:w-[1px] lg:after:translate-y-[-50%] lg:after:bg-gray-700 lg:after:content-['']">
          <h6 className="uppercase">{newsletterTitle}</h6>
          {!postSubmit.posted && (
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="flex w-[100%] flex-col items-start gap-[16px] lg:flex-row"
            >
              <input
                id="email"
                name="email"
                type="text"
                required
                placeholder={newsletterInputPlaceholder || ''}
                className="h-[100%] w-[100%] max-w-[640px] grow rounded bg-gray-700 px-[16px] py-[14px] leading-[125%] text-gray-400 focus:shadow-skyblue focus:outline-none"
              />
              <button
                type="submit"
                className="h-[100%] w-[100%]  rounded bg-white px-[24px] py-[10px] font-medium leading-[150%] text-gray-950 sm:w-auto"
              >
                {newsletterButtonLabel}
              </button>
            </form>
          )}
          {/* Submit Success */}
          {postSubmit.posted && postSubmit.success && submitSuccessMessage && (
            <p className="col-span-full mt-2 text-12/[140%] text-brand-green md:text-14/[150%]">
              {submitSuccessMessage}
            </p>
          )}
          {/* Submit Error */}
          {postSubmit.posted && !postSubmit.success && submitErrorMessage && (
            <p className="col-span-full mt-2 text-12/[140%] text-brand-red md:text-14/[150%]">
              {submitErrorMessage}
            </p>
          )}
          <div className=" text-gray-400">{newsletterParagraph}</div>
        </div>
        {/* Sponsor */}
        <div className="relative col-span-full col-start-1 flex h-[100%] flex-col items-start justify-start gap-8 border-t-[1px] border-gray-700 pt-[20px] lg:col-span-2 lg:col-start-11 lg:border-t-0  lg:pt-0  lg:after:absolute lg:after:left-[-24px] lg:after:top-[50%] lg:after:h-[100%] lg:after:w-[1px] lg:after:translate-y-[-50%] lg:after:bg-gray-700 lg:after:content-['']">
          <h6 className=" uppercase">{sponsorTitle}</h6>
          <div className="flex">
            <a href={sponsorLink || ''} target="_blank">
              <div className="relative h-[77px] w-[56px]">
                {sponsorLogo?.responsiveImage ? (
                  <DatoImage
                    data={sponsorLogo.responsiveImage}
                    className="lg:col-span-3 lg:col-start-1 lg:h-9 lg:w-24"
                    pictureClassName="h-8 w-20 object-contain object-left lg:w-24 lg:h-9"
                  />
                ) : (
                  <Image
                    src={sponsorLogo?.url || ''}
                    alt={sponsorLogo?.alt || ''}
                    fill
                  />
                )}
              </div>
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="col-span-full mt-6 flex flex-col items-start justify-start gap-y-4 border-t-[1px] border-gray-700 pt-[24px] text-gray-400 lg:flex-row lg:justify-between">
          <p>{copyright}</p>
          <div>
            {privacyPolicyPage && (
              <a
                href={privacyPolicyPage.slug}
                className="capitalize underline"
                target={externalLinkPolicies ? '_blank' : undefined}
              >
                {privacyPolicyPage.title}
              </a>
            )}
            {cookiePolicyPage && (
              <a
                href={cookiePolicyPage.slug}
                className="ml-6 capitalize underline"
                target={externalLinkPolicies ? '_blank' : undefined}
              >
                {cookiePolicyPage.title}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
