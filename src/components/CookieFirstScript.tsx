import React from 'react'
import Script from 'next/script'

const CookieFirstScript = () => {
  return (
    <Script
      id="cookiefirst-script"
      src={`https://consent.cookiefirst.com/sites/convention.cim.org-${process.env.NEXT_PUBLIC_COOKIE_FIRST_API_KEY}/consent.js`}
    />
  )
}

export default CookieFirstScript
