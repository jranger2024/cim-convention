/* This is an example of a client component consuming the translations
 * using the useIntl hook from react-intl. */
'use client'
import { useTranslations } from 'next-intl'

export function ExampleClientComponent() {
  const t = useTranslations('Index')

  return (
    <>
      <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        I am a client component
      </h2>
      <h3 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        {t('title')}
      </h3>
    </>
  )
}
