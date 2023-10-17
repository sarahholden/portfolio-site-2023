import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import { HomePagePayload, SettingsPayload } from 'types'

import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getHomePage, getSettings, homePageQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

import Layout from '../components/shared/Layout'

const fallbackSettings: SettingsPayload = {
  tagline: 'default',
  menuItems: [],
  footer: [],
}
const fallbackPage: HomePagePayload = {
  title: '',
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    settings: SettingsPayload
    page: HomePagePayload
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  // Get external data from sanity using
  const settings = await getSettings(client)
  const page = await getHomePage(client)

  // The value of the `props` key will be
  //  passed to the `IndexPage` component
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      settings: settings ?? fallbackSettings,
      page: page ?? fallbackPage,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  // const [projects] = useLiveQuery<Project[]>(props.projects, projectsQuery)
  const { settings, page } = props

  // console.log('Console log from home page:')
  // console.log(page)
  // console.log('--------')

  // if (!page) {
  //   return (
  //     <Layout settings={settings} preview={draftMode} loading={loading}>
  //       {draftMode ? (
  //         <div className="text-center">
  //           Please start editing your Home document to see the preview!
  //         </div>
  //       ) : (
  //         <div className="text-center">
  //           You don&rsquo;t have a homepage document yet,{' '}
  //           <Link
  //             href="/studio/desk/home%7C%2Cview%3Dpreview"
  //             className="underline"
  //           >
  //             create one now
  //           </Link>
  //           !
  //         </div>
  //       )}
  //     </Layout>
  //   )
  // }

  if (!page) {
    return <h1>No Page yet!</h1>
  }

  return <Layout settings={settings}>{page.title}</Layout>
}
