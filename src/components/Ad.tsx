import { AdRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'
import Image from 'next/image'

export const Ad = (props: AdRecord) => {
  const { image, url } = props
  const commonClasses = 'relative flex flex-1 items-center justify-center'
  const imageElement =
    image && image.responsiveImage ? (
      <DatoImage data={image.responsiveImage} />
    ) : (
      <Image src={image?.url ?? ''} alt={image?.alt ?? ''} fill />
    )
  return (
    <>
      {url ? (
        <a href={url} target="_blank" className={commonClasses}>
          {imageElement}
        </a>
      ) : (
        <div className={commonClasses}>{imageElement}</div>
      )}
    </>
  )
}
