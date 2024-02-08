import React from 'react'
import { GridContainer } from '@/components/GridContainer'
import { PageHeaderBlockRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'
import Image from 'next/image'
import { OtherSponsorsCarousel } from '@/components/OtherSponsorsCarousel'
import { cn } from '@/utils/clsxMerge'

export const PageHeaderBlock = (props: PageHeaderBlockRecord) => {
  const {
    title,
    subTitle,
    paragraph,
    mainSponsor,
    mainSponsorLabel,
    hasOtherSponsors,
    otherSponsors,
    otherSponsorsLabel,
    heroImage,
  } = props

  return (
    <section className="bg-brand-gradient-light">
      {!heroImage ? (
        <GridContainer className="flex flex-col gap-y-6 p-6 lg:flex-row lg:items-stretch lg:justify-between lg:py-12">
          <div>
            {subTitle && (
              <p className="mb-2 text-12/[130%] font-normal uppercase tracking-[0.24px] lg:mb-4 lg:text-14/[140%] lg:tracking-[0.28px]">
                {subTitle}
              </p>
            )}
            <h1 className="text-20/[140%] font-semibold tracking-[-0.1px] lg:col-start-1 lg:text-32/[125%] lg:tracking-[-0.16px]">
              {title}
            </h1>
            {paragraph && (
              <div
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className="mt-2 text-16/[150%] md:mt-4 md:text-18/[155%]"
              ></div>
            )}
          </div>
          <div className="flex shrink-0 flex-col gap-y-6 lg:flex-row lg:gap-x-8">
            <div className="flex min-h-full flex-col gap-y-2">
              {mainSponsorLabel && (
                <p
                  className={cn(
                    'col-span-full whitespace-nowrap text-12/[130%] font-normal uppercase tracking-[0.24px] lg:col-span-2 lg:text-14/[140%] lg:tracking-[0.28px]',
                    !hasOtherSponsors && 'text-left lg:text-right',
                  )}
                >
                  {mainSponsorLabel}
                </p>
              )}
              {mainSponsor && (
                <a
                  href={mainSponsor.websiteUrl}
                  target="_blank"
                  className="relative block h-[58px] w-[176px]"
                >
                  {mainSponsor.logo.responsiveImage && (
                    <DatoImage
                      data={mainSponsor.logo.responsiveImage}
                      className={'h-[58px] object-contain'}
                      pictureClassName="h-[58px] object-contain object-left lg:object-right"
                      priority
                    />
                  )}
                  {!mainSponsor.logo.responsiveImage && (
                    <Image
                      src={mainSponsor.logo.url}
                      alt={mainSponsor.logo.alt || mainSponsor.name || ''}
                      fill
                    />
                  )}
                </a>
              )}
            </div>
            {hasOtherSponsors && (
              <OtherSponsorsCarousel
                otherSponsors={otherSponsors}
                otherSponsorsLabel={otherSponsorsLabel || undefined}
              />
            )}
          </div>
        </GridContainer>
      ) : (
        <div className="relative flex min-h-[400px] flex-col justify-start overflow-hidden md:flex-row">
          <GridContainer className="relative h-[100%] flex-col gap-y-[48px] p-6 md:gap-y-[174px] lg:flex-row lg:items-stretch lg:justify-between lg:py-12">
            <div className="col-span-4">
              {subTitle && (
                <p className="mb-2 text-12/[130%] font-normal uppercase tracking-[0.24px] lg:mb-4 lg:text-14/[140%] lg:tracking-[0.28px]">
                  {subTitle}
                </p>
              )}
              <h1 className="text-20/[140%] font-semibold tracking-[-0.1px] lg:col-start-1 lg:text-32/[125%] lg:tracking-[-0.16px]">
                {title}
              </h1>
              {paragraph && (
                <div
                  className="mt-2 text-16/[150%] md:mt-4 md:text-18/[155%]"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                ></div>
              )}
            </div>
            <div className="col-start-1 flex gap-x-8">
              <div className="flex min-h-full flex-col gap-y-2">
                {mainSponsorLabel && (
                  <p className="col-span-full whitespace-nowrap text-12/[130%] font-normal uppercase tracking-[0.24px] lg:col-span-2 lg:text-14/[140%] lg:tracking-[0.28px]">
                    {mainSponsorLabel}
                  </p>
                )}
                {mainSponsor && (
                  <a
                    href={mainSponsor.websiteUrl}
                    target="_blank"
                    className="relative block h-[58px] w-[176px]"
                  >
                    {mainSponsor.logo.responsiveImage && (
                      <DatoImage
                        data={mainSponsor.logo.responsiveImage}
                        className={'h-[58px] object-contain'}
                        pictureClassName="h-[58px] object-contain object-left"
                        priority
                      />
                    )}
                    {!mainSponsor.logo.responsiveImage && (
                      <Image
                        src={mainSponsor.logo.url}
                        alt={mainSponsor.logo.alt || mainSponsor.name || ''}
                        fill
                      />
                    )}
                  </a>
                )}
              </div>
              {hasOtherSponsors && (
                <OtherSponsorsCarousel
                  otherSponsors={otherSponsors}
                  otherSponsorsLabel={otherSponsorsLabel || undefined}
                  className="lg:items-start"
                />
              )}
            </div>
          </GridContainer>
          <div className="relative bottom-0 z-0 h-[50%] w-[100%] overflow-hidden md:absolute md:right-0 md:h-[100%] md:w-[50%]">
            <div className="absolute z-10 h-[50%] w-[100%] bg-brand-gradient-light md:h-[100%] md:w-[50%] md:bg-brand-gradient-light-90deg"></div>
            {heroImage.responsiveImage && (
              <DatoImage
                data={heroImage.responsiveImage}
                className={'h-[100%] w-[100%] object-cover object-right'}
                pictureClassName="object-cover w-[100%] h-[100%] object-right"
                priority
              />
            )}
            {!heroImage.responsiveImage && (
              <Image src={heroImage.url} alt={heroImage.alt || ''} fill />
            )}
          </div>
        </div>
      )}
    </section>
  )
}
