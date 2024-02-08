import { GridContainer } from '@/components/GridContainer'
import { HeroBlockRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'

export function HeroBlock(props: HeroBlockRecord) {
  const {
    anchorId,
    image,
    location,
    date,
    textToHighlight,
    headline,
    subHeadline,
    sponsorHeading,
    sponsorLogo,
  } = props

  const headlineText =
    typeof textToHighlight === 'string'
      ? headline.replace(
          textToHighlight,
          `<span class="bg-brand-gradient bg-clip-text text-transparent">${textToHighlight}</span>`,
        )
      : headline

  return (
    <section
      id={anchorId ?? undefined}
      className="relative overflow-y-hidden bg-brand-grey-100"
      aria-label="hero section"
    >
      <GridContainer className="z-10 block pt-8 lg:grid lg:pb-20 lg:pt-24">
        <div className="mb-6 flex h-min items-center justify-start text-18 lg:col-span-4 lg:text-20">
          <p className="border-r-2 border-brand-grey-300 pr-4 text-brand-green">
            {location}
          </p>
          <p className="pl-4 text-brand-grey-400">{date}</p>
        </div>
        <h1
          dangerouslySetInnerHTML={{ __html: headlineText }}
          className="mb-4 text-32/[125%] font-[600] tracking-tight lg:col-span-6 lg:col-start-1 lg:mb-6 lg:text-48"
        />
        <p className="mb-10 leading-[150%] text-brand-grey-600 lg:col-span-6 lg:col-start-1 lg:mb-16 lg:text-20/[155%]">
          {subHeadline}
        </p>
        <div className="mb-4 text-xs/[130%] text-brand-grey-600 lg:col-span-3 lg:col-start-1 lg:text-16/[140%]">
          {sponsorHeading}
        </div>
        {sponsorLogo?.responsiveImage && (
          <DatoImage
            data={sponsorLogo.responsiveImage}
            className="lg:col-span-3 lg:col-start-1 lg:h-9 lg:w-24"
            pictureClassName="h-8 w-20 object-contain object-left lg:w-24 lg:h-9"
            priority
          />
        )}
      </GridContainer>
      <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
        <DatoImage
          data={image.responsiveImage}
          className="relative h-full w-auto object-cover"
          pictureClassName="relative h-full w-auto object-cover"
          priority
        />
        <div className="absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-brand-grey-100 to-transparent lg:left-[unset] lg:h-full lg:w-full lg:bg-gradient-to-l lg:from-transparent lg:to-brand-grey-100" />
      </div>
    </section>
  )
}
