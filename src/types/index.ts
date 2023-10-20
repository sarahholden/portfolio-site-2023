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
  featuredImageLarge?: ImageAsset
  featuredImageSmall?: ImageAsset
  projectType?: string
  designCredit?: string
  tags: string[]
}

export interface CTABannerType {
  bannerText?: string
  colorScheme?: string
}
export interface HeroType {
  headline1?: string
  headline2?: string
  image?: ImageAsset
}
export interface InfoListType {
  heading?: string
  body?: string
  listItem?: string[]
  heading2?: string
  body2?: string
  listItem2?: string[]
}

export interface NumberedListType {
  heading?: string
  body?: string
  listItem?: {
    title?: string
    body?: string
  }[]
}

export interface PagePayload {
  title?: string
  slug: Slug
  overview?: PortableTextBlock[]
  pageBuilder?: PortableTextBlock[]
}

export interface SettingsPayload {
  tagline: string
  menuItems?: MenuItem[]
  emailAddress: string
  ctaButtonText?: string
  ctaButtonTextMobile?: string
  wavyBannerText?: string
  contactText?: PortableTextBlock[]
  footer?: PortableTextBlock[]
  ogImage?: Image
}

export interface HomePagePayload {
  title: string
  overview?: PortableTextBlock[]
  introText: string
  introText2: string
  introImage?: Image
  bannerText?: string
  colorScheme?: string
  scrollGallery?: {
    column1?: Image[]
    column2?: Image[]
    column3?: Image[]
  }
  showcaseProjects?: Omit<Project, 'mainImage'>[]
  recentWorkHeading?: string
  recentWorkBody?: string
  recentWork?: Omit<Project, 'featuredImageLarge' | 'featuredImageSmall'>[]
}
