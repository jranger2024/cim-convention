## Technology Stack

This project uses [DatoCMS](https://www.datocms.com/) as the Content Management System and [Tailwind CSS](https://tailwindcss.com/) for styling.

For internationalization support, we use [`next-i18n-router`](https://github.com/i18nexus/next-i18n-router) along side [`react-intl`](https://www.npmjs.com/package/react-intl).

## Features

- I18N with `next-intl`
- Automatic linting and formatting with `es-lint`, `prettier` and `husky`
- Sitemap generation with `next-sitemap`
- Content management with `dato-cms`
- Dynamic metadata with `react-datocms/seo`

## CI/CD

CI/CD can be handled by any hosting provider of your choice, we use [husky]() precommit hook for code formatting and lint checking.

## Test Suite

Test suite is also not provided to give flexibility back to the code owner of the project to decide on the most suitable solution depending on project size and needs.

## TODO

Bellow is a list of `// @TODO` items you will find throughout the project that is required before the project is production ready. You will find helpful resource linked in each item.

- [x] Customize `tailwind.config.ts` as required, if the project is content heavy, consider adding [tailwind-typography](https://tailwindcss.com/docs/typography-plugin)
- [x] Add [fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [x] Add static OR generate dynamic [meta data](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [x] Add [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) to dynamic routes for SSG
- [ ] Add [favicon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)
- [ ] Add static OR generate [`robots.txt`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [ ] Fetch i18n messages from DatoCMS
- [ ] Sitemap generation with [`next-sitemap`](https://www.npmjs.com/package/next-sitemap)
- [ ] Redirect/ rewrite generation
