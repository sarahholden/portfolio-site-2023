import { Image, ImageAsset, PortableTextBlock, Slug } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface Project {
  _type: 'project'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  mainImage?: ImageAsset
  projectType?: string
  designCredit?: string
}

export interface Settings {
  _type: 'settings'
  _id: string
  tagline: string
  menuItems?: MenuItem[]
  emailAddress?: string
  ctaButtonText?: string
  wavyBannerText?: string
  contactText?: PortableTextBlock[]
  footer?: PortableTextBlock[]
  ogImage?: Image
}
