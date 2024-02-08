import { GridContainer } from '@/components/GridContainer'
import { AdBlockRecord } from '@/types/generated'
import { Ad } from '@/components/Ad'

export const AdBlock = (props: AdBlockRecord) => {
  const { anchorId, banner, ad, ads } = props

  const styles = {
    section: {
      banner: 'bg-brand-grey-25 py-10 lg:py-16',
      default: 'py-6 lg:py-16',
    },
    grid: {
      banner: 'lg:place-items-center',
      default: 'grid-cols-1',
    },
    div: {
      banner: 'col-span-4 lg:col-span-8 lg:col-start-3 lg:px-8',
      default:
        'mx-10 flex flex-col gap-12 lg:col-span-10 lg:col-start-2 lg:mx-0 lg:flex-row',
    },
  }

  const styleOption = banner ? 'banner' : 'default'

  return (
    <section id={anchorId || undefined} className={styles.section[styleOption]}>
      <GridContainer className={styles.grid[styleOption]}>
        <div className={styles.div[styleOption]}>
          {banner
            ? ad && <Ad {...ad} />
            : ads && ads.map((each) => <Ad key={each.id} {...each} />)}
        </div>
      </GridContainer>
    </section>
  )
}
