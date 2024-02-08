import React, { HTMLAttributes } from 'react'
import FacebookIcon from './Icons/FacebookIcon'
import InstagramIcon from './Icons/InstagramIcon'
import LinkedinIcon from './Icons/LinkedinIcon'
import XIcon from './Icons/XIcon'
import YoutubeIcon from './Icons/YoutubeIcon'
import UserIcon from './Icons/UserIcon'
import BriefcaseIcon from './Icons/BriefcaseIcon'
import StandIcon from './Icons/StandIcon'
import PresentationChartIcon from './Icons/PresentationChartIcon'
import GlobeIcon from './Icons/GlobeIcon'
import AlertIcon from './Icons/AlertIcon'
import ChevronIcon from './Icons/ChevronIcon'

const SVGMap = {
  facebook_icon: FacebookIcon,
  instagram_icon: InstagramIcon,
  linkedin_icon: LinkedinIcon,
  twitter_icon: XIcon,
  youtube_icon: YoutubeIcon,
  user_icon: UserIcon,
  briefcase_icon: BriefcaseIcon,
  stand_icon: StandIcon,
  presentation_chart_icon: PresentationChartIcon,
  globe_icon: GlobeIcon,
  alert_icon: AlertIcon,
  chevron_icon: ChevronIcon,
}

const IconSelector = ({
  selectorId,
  ...rest
}: { selectorId: string } & HTMLAttributes<HTMLElement>) => {
  const SVG = SVGMap[selectorId as keyof typeof SVGMap]

  return SVG ? <SVG {...rest} /> : null
}

export default IconSelector
