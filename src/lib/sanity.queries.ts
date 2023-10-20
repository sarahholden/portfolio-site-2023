import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

import {
  type HomePagePayload,
  type PagePayload,
  type Post,
  type Project,
  type SettingsPayload,
} from '../types'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const projectsQuery = groq`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)`

export async function getProjects(client: SanityClient): Promise<Project[]> {
  return await client.fetch(projectsQuery)
}

export const homePageQuery = groq`
  *[_type == "home"][1]{
    _id,
    title,
    overview,
    introText,
    introText2,
    introImage,
    bannerText,
    colorScheme,
    scrollGallery,
    recentWorkHeading,
    recentWorkBody,
    recentWork[]->{
      _type,
      title,
      mainImage,
      projectType,
      designCredit,
      tags,
    },
    showcaseProjects[]->{
      _type,
      title,
      featuredImageLarge,
      featuredImageSmall,
      projectType,
      designCredit,
      tags,
    },
  }
`

export async function getHomePage(
  client: SanityClient,
): Promise<HomePagePayload> {
  return await client.fetch(homePageQuery)
}

export const settingsQuery = groq`
  *[_type== "settings"][1]{
    tagline,
    emailAddress,
    ctaButtonText,
    wavyBannerText,
    contactText,
    ogImage,  
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },

    
  }`

export async function getSettings(
  client: SanityClient,
): Promise<SettingsPayload> {
  return await client.fetch(settingsQuery)
}

export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`

export const pageBySlugQuery = groq`
*[_type=="page" && slug.current == $slug][0]
`

export async function getPage(
  client: SanityClient,
  slug: string,
): Promise<PagePayload> {
  return await client.fetch(pageBySlugQuery, {
    slug,
  })
}
