import { ConventionBlockRecord } from '@/types/generated'
import { Image as DatoImage } from 'react-datocms'
import Image from 'next/image'

export function ConventionBlock(props: ConventionBlockRecord) {
  let { name, logo, url } = props
  return (
    <div className="w-[145px] md:w-[180px]">
      <a href={url || ''} target="_blank">
        <div className="h-[80px] w-[100%] md:h-[100px]">
          {logo &&
            (logo?.responsiveImage ? (
              <DatoImage
                data={logo.responsiveImage}
                className="h-[100%] w-auto object-contain"
                pictureClassName="object-contain"
              />
            ) : (
              <Image src={logo?.url || ''} alt={logo?.alt || ''} fill />
            ))}
        </div>
        <p className="underline">{name}</p>
      </a>
    </div>
  )
}
