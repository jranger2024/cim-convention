import { cache } from 'react'
export { ComponentParser } from './componentParser'
const { DATO_API_TOKEN, NEXT_PUBLIC_DATO_ENV, NEXT_PUBLIC_DATO_DRAFT_ENABLED } =
  process.env

export const fetchDatoContent = cache(async (query: string) => {
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
    query: query,
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
        error: new Error('Error fetching Dato content'),
      }
    }

    return { data: response.data }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('[ ERROR ]', JSON.stringify(error, null, 2))
    return { data: null, error }
  }
})
