import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

import {
  type HomePagePayload,
  type Post,
  type Project,
  type SettingsPayload,
} from '../../types'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const projectsQuery = groq`*[_type == "project" && defined(slug.current)] | order(_createdAt desc)`

export async function getProjects(client: SanityClient): Promise<Project[]> {
  return await client.fetch(projectsQuery)
}

export const homePageQuery = groq`
  *[_type == "home"][1]{
    _id,
    title,
    overview,
    showcaseProjects[]->{
      _type,
      title,
      featuredImageLarge,
      featuredImageSmall,
      projectType,
      designCredit,
      "slug": slug.current,
      tags,
    },
    recentWorkHeading,
    recentWorkBody,
    recentWork[]->{
      _type,
      title,
      mainImage,
      projectType,
      designCredit,
      "slug": slug.current,
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
