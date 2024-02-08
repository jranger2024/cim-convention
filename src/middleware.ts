import createMiddleware from 'next-intl/middleware'
import { locales, localePrefix, defaultLocale, pathnames } from './navigation'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_ipx|.*\\..*).*)'],
}
