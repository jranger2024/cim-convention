import React, { HTMLAttributes } from 'react'
import IconSelector from './IconSelector/IconSelector'

type SocialMedia = {
  socialMediaName: string
  socialMediaURL: string
}

const SocialMedia = (socialMedia: SocialMedia) => {
  let { socialMediaName, socialMediaURL } = socialMedia

  return (
    <a href={socialMediaURL} target="_blank">
      <IconSelector
        selectorId={`${socialMediaName}_icon`}
        className="aspect-square h-[20px] w-[20px]"
      />
    </a>
  )
}

export default SocialMedia
