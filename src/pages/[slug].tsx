import { PortableText } from '@portabletext/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import Layout from '~/components/shared/Layout'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { urlForImage } from '~/lib/sanity.image'
import {
  getPage,
  getSettings,
  pageBySlugQuery,
  pageSlugsQuery,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import { PagePayload, SettingsPayload } from '~/types'

const fallbackSettings: SettingsPayload = {
  tagline: 'default',
  menuItems: [],
  footer: [],
}

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    page: PagePayload
    settings: SettingsPayload
  },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, page] = await Promise.all([
    getSettings(client),
    getPage(client, params.slug),
  ])

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      page,
      settings: settings ?? fallbackSettings,
    },
  }
}

export default function PageSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [page] = useLiveQuery(props.page, pageBySlugQuery, {
    slug: props.page.slug.current,
  })

  const { settings } = props

  return (
    <Layout settings={settings}>
      <h2>{page.title}</h2>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(pageSlugsQuery)
  slugs

  return {
    paths: slugs?.map(({ slug }) => `/${slug}`) || [],
    fallback: 'blocking',
  }
}
