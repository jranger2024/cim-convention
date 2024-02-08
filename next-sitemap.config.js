const {
  DATO_API_TOKEN,
  NEXT_PUBLIC_DATO_DRAFT_ENABLED,
  NEXT_PUBLIC_DATO_ENV,
  SITE_URL,
  ENABLE_I18N,
  ENABLE_SITEMAP,
} = process.env

const sitemapQuery = String.raw`
	query SitemapQuery {
		allPages(first: 100) {
			_allSlugLocales {
				locale
				value
			}
		}
		allShortCourses(first: 100) {
			_allSlugLocales {
				locale
				value
			}
		}
	}
`

let dataCache = null

// we cannot import utils from ./src here since this script runs in post build
const getPagesSlugLocales = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${DATO_API_TOKEN}`,
    ...(NEXT_PUBLIC_DATO_DRAFT_ENABLED === 'true' && {
      'X-Include-Drafts': 'true',
    }),

    ...(NEXT_PUBLIC_DATO_ENV !== 'production' && {
      'X-Environment': NEXT_PUBLIC_DATO_ENV,
    }),
  }

  const body = JSON.stringify({
    query: sitemapQuery,
  })

  const options = {
    method: 'POST',
    headers,
    body,
  }

  try {
    const response = await fetch(
      NEXT_PUBLIC_DATO_DRAFT_ENABLED === 'true'
        ? 'https://graphql.datocms.com/preview'
        : 'https://graphql.datocms.com/',
      options,
    ).then((res) => res.json())

    if (response.errors) {
      // eslint-disable-next-line no-console
      console.log(
        `[ ERROR ]: ${query.split(' ').find((s) => s.includes('Query'))}`,
        JSON.stringify(response.errors, null, 2),
      )
      return {
        data: null,
        error: new Error(
          '[ ERROR ]: next-sitemap.config.js - error fetching sitemap content',
        ),
      }
    }

    dataCache = response.data // cache the first response to avoid multiple requests
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('[ ERROR ]', JSON.stringify(error, null, 2))
    return [] // return empty array to prevent build error and fail silently
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL || 'https://convention.cim.org',
  generateRobotsTxt: true, // (optional)
  transform: async (config, path) => {
    console.info(`[ INFO ]: generating sitemap for path: ${path}`)

    if (ENABLE_SITEMAP !== 'true') {
      return null
    }

    const commonProps = {
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.lastmod ? new Date().toISOString() : undefined,
    }

    // if i18n is disabled, return the path as is
    if (ENABLE_I18N !== 'true') {
      return {
        ...commonProps,
        loc: path,
      }
    }

    const data = dataCache || (await getPagesSlugLocales()) // attempt to get data from cache or fetch it
    const pathWithoutLocale = path.replace(/\/(en|fr)/, '') // @important: make sure this matches all locales in ./src/navigation.ts
    const slug =
      pathWithoutLocale.split('/')[pathWithoutLocale.split('/').length - 1]
    const firstSegment = pathWithoutLocale.split('/').filter((s) => s !== '')[0]
    const isCourse =
      pathWithoutLocale.split('/').filter((s) => s !== '')[0] === 'course'

    const dynamicRouteSegments = {
      course: 'allShortCourses',
    }

    // home page special case
    if (slug === '') {
      return {
        ...commonProps,
        loc: `/`,
        alternateRefs: [
          {
            href: `${SITE_URL}/en`,
            hreflang: 'en',
          },
          {
            href: `${SITE_URL}/fr`,
            hreflang: 'fr',
          },
        ],
      }
    }

    const _allSlugLocales = data[
      dynamicRouteSegments[firstSegment] ?? 'allPages'
    ]?.find((c) =>
      c._allSlugLocales.find((s) => s.value === slug),
    )?._allSlugLocales

    if (!_allSlugLocales) {
      return {
        ...commonProps,
        loc: path,
      }
    }

    return {
      ...commonProps,
      loc: `${isCourse ? 'course/' : ''}${slug}`,
      alternateRefs: _allSlugLocales.map((s) => {
        return {
          href: `${SITE_URL}/${s.locale}/${isCourse ? 'course/' : ''}`,
          hreflang: s.locale,
        }
      }),
    }
  },
  // ...other options
}
