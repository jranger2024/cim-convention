import { ContactBlockRecord } from '@/types/generated'
import { ContactCardBlock } from '../ContactCardBlock/ContactCardBlock'
import { GridContainer } from '@/components/GridContainer'

export function ContactBlock(props: ContactBlockRecord) {
  let { title, anchorId, subtitle, cards } = props
  return (
    <section
      className="flex min-h-[50vh] bg-brand-grey-100 pb-12 pt-6 md:pb-[100px] md:pt-12"
      id={anchorId ?? undefined}
    >
      <GridContainer className="gap-4 lg:gap-8">
        <div className="col-span-full lg:col-span-3">
          <h2 className="mb-2 text-12/[130%] uppercase md:mb-4 md:text-14/[140%]">
            {subtitle}
          </h2>
          <h1 className="text-20/[140%] font-semibold md:text-32/[125%]">
            {title}
          </h1>
        </div>
        {cards.map((card, i) => (
          <div
            key={i}
            className={`col-span-full col-start-1 md:col-span-2 lg:col-span-4 ${
              i % 2 === 0
                ? 'md:col-start-1 lg:col-start-5'
                : 'md:col-start-3 lg:col-start-9'
            }`}
          >
            <ContactCardBlock {...card} />
          </div>
        ))}
      </GridContainer>
    </section>
  )
}
