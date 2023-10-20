import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import FeaturedProject from '~/components/shared/FeaturedProject'
import GalleryColumn from '~/components/shared/GalleryColumn'
import RecentProject from '~/components/shared/RecentProject'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { urlForImage } from '~/lib/sanity.image'
import { getHomePage, getSettings } from '~/lib/sanity.queries'
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

  // console.log(page)

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
      {scrollGallery?.column1 && (
        <section className="section section--columns">
          <div className="columns">
            <div className="column-wrap">
              <ul className="column">
                {scrollGallery.column1.map((galleryImage, key) => {
                  return <GalleryColumn key={key} galleryImage={galleryImage} />
                })}
              </ul>
            </div>
            {scrollGallery.column2 && (
              <div className="column-wrap">
                <ul className="column">
                  {scrollGallery.column2.map((galleryImage, key) => {
                    return (
                      <GalleryColumn key={key} galleryImage={galleryImage} />
                    )
                  })}
                </ul>
              </div>
            )}
            {scrollGallery.column3 && (
              <div className="column-wrap">
                <ul className="column">
                  {scrollGallery.column3.map((galleryImage, key) => {
                    return (
                      <GalleryColumn key={key} galleryImage={galleryImage} />
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
      {showcaseProjects && showcaseProjects.length > 0 && (
        <section className="section section--showcase" id="work">
          {showcaseProjects.map((project, key) => {
            return <FeaturedProject key={key} project={project} />
          })}
        </section>
      )}
      {/* RECENT WORK SECTION */}
      {recentWork && recentWork.length > 0 && (
        <section className="section archive section--padded">
          <header className="archive__header">
            <div className="archive__illo">
              <svg
                className="svgtext svgtext--illo"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 2540.68 763.32"
                data-direction="reverse"
              >
                <path
                  id="text-curve3"
                  d="M0 .5c330.53-.76 566.06 195.2 861.47 211.76 321 18 1022-233 1068.42-42.52 39.89 163.69-557 83.63-549 240.63 8.38 164.36 774.57-204.22 793-11 14.58 152.89-972.16 153.62-931.42 318.89s1159.1-187.03 1298-125"
                  fill="none"
                ></path>
                <text>
                  <textPath href="#text-curve3">
                    More work this way • More work this way • More work this way
                    • More work this way • More work this way • More work this
                    way • More work this way • More work this way • More work
                    this way • More work this way • More work this way • More
                    work this way
                  </textPath>
                </text>
              </svg>
            </div>
            <div>
              <h2 className="section__title section__title--medium">
                {recentWorkHeading}
              </h2>
              <div className="section__header-text">
                <p data-reveal="lines-masked">{recentWorkBody}</p>
              </div>
            </div>
          </header>

          <nav className="menu">
            {recentWork.map((project, key) => {
              return <RecentProject key={key} project={project} />
            })}
          </nav>
        </section>
      )}
    </Layout>
  )
}
