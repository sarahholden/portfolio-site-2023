import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import GalleryColumn from '~/components/shared/GalleryColumn'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { urlForImage } from '~/lib/sanity.image'
import { getHomePage, getSettings, homePageQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import { HomePagePayload, SettingsPayload } from '~/types'

import Layout from '../components/shared/Layout'

const fallbackSettings: SettingsPayload = {
  tagline: 'default',
  emailAddress: 'hello@sarahholden.studio',
  menuItems: [],
  footer: [],
}
const fallbackPage: HomePagePayload = {
  title: '',
  introText: '',
  introText2: '',
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
  const { settings, page } = props

  const {
    introText,
    introText2,
    introImage,
    bannerText,
    colorScheme,
    scrollGallery,
    showcaseProjects,
    recentWorkHeading,
    recentWorkBody,
    recentWork,
  } = page

  console.log(page)

  if (!page) {
    return <h1>No Page yet!</h1>
  }

  return (
    <Layout settings={settings}>
      <section className="section section--intro section--padded">
        <div className="section__text">
          <h1 id="hero-quote" className="section__title section__title--large">
            {introText}
            {introImage && (
              <Image
                className="post__cover"
                src={urlForImage(introImage).url()}
                height={231}
                width={367}
                alt={introImage.alt && (introImage.alt as string)}
              />
            )}
            {introText2}
          </h1>
        </div>
      </section>

      <section className="section section--columns">
        <div className="columns">
          {scrollGallery?.column1 && (
            <div className="column-wrap">
              <ul className="column">
                {scrollGallery.column1.map((galleryImage, key) => {
                  return <GalleryColumn key={key} galleryImage={galleryImage} />
                })}
              </ul>
            </div>
          )}
          {scrollGallery?.column2 && (
            <div className="column-wrap">
              <ul className="column">
                {scrollGallery.column2.map((galleryImage, key) => {
                  return <GalleryColumn key={key} galleryImage={galleryImage} />
                })}
              </ul>
            </div>
          )}
          {scrollGallery?.column3 && (
            <div className="column-wrap">
              <ul className="column">
                {scrollGallery.column3.map((galleryImage, key) => {
                  return <GalleryColumn key={key} galleryImage={galleryImage} />
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
