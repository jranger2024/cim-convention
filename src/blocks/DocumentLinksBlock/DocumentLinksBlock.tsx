import { GridContainer } from '@/components/GridContainer'
import {
  DocumentLinksBlockAssetRecord,
  DocumentLinksBlockRecord,
  LinkBlockRecord,
} from '@/types/generated'
import Link from 'next/link'
import ArrowSquareOutIcon from '@/components/IconSelector/Icons/ArrowSquareOutIcon'

export const DocumentLinksBlock = (props: DocumentLinksBlockRecord) => {
  const { anchorId, title, links } = props
  const linkStyle =
    'flex items-center justify-start text-14/[140%] font-medium text-brand-grey-700 hover:opacity-50 md:text-18/[140%]'
  return (
    <section
      id={anchorId || undefined}
      className="structured-text bg-brand-gradient-light"
    >
      <GridContainer className="py-8 lg:py-16">
        <h2 className="col-span-full text-20/[140%] font-semibold md:text-32/[125%]">
          {title}
        </h2>
        <div className="col-span-full flex flex-col items-start justify-start gap-4">
          {links?.map(
            (linkData: LinkBlockRecord | DocumentLinksBlockAssetRecord) => {
              if (linkData._modelApiKey === 'link_block') {
                const link = linkData as LinkBlockRecord
                return link.useExternalLink ? (
                  <a
                    key={link.id}
                    href={link.externalLink || ''}
                    target="_blank"
                    className={linkStyle}
                  >
                    {link?.label}
                    <ArrowSquareOutIcon className="ml-2 text-brand-grey-700" />
                  </a>
                ) : (
                  <Link
                    key={link.id}
                    href={link.linkTo?.slug || ''}
                    className={linkStyle}
                  >
                    {link?.label}
                  </Link>
                )
              } else if (
                linkData._modelApiKey === 'document_links_block_asset'
              ) {
                const link = linkData as DocumentLinksBlockAssetRecord
                return (
                  <a
                    key={link.id}
                    href={link.asset?.url}
                    target="_blank"
                    className={linkStyle}
                  >
                    {link?.label}
                    <ArrowSquareOutIcon className="ml-2 text-brand-grey-700" />
                  </a>
                )
              }
            },
          )}
        </div>
      </GridContainer>
    </section>
  )
}
