import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import { type Project, SettingsPayload } from 'types'

import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getSettings, homePageQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

import Layout from '../components/shared/Layout'

const fallbackSettings: SettingsPayload = {
  tagline: 'default',
  menuItems: [],
  footer: [],
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    settings: SettingsPayload
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  // Get external data from sanity using
  const settings = await getSettings(client)

  // The value of the `props` key will be
  //  passed to the `IndexPage` component
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      settings: settings ?? fallbackSettings,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  // const [projects] = useLiveQuery<Project[]>(props.projects, projectsQuery)
  const { settings } = props

  return <Layout settings={settings}>Home Page Content</Layout>
}
