import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import page from './documents/page'
import ctaBanner from './objects/ctaBanner'
import hero from './objects/hero'
import infoList from './objects/infoList'
import numberedList from './objects/numberedList'
import post from './post'
import project from './project'
import home from './singletons/home'
import settings from './singletons/settings'

export const schemaTypes = [
  post,
  project,
  home,
  settings,
  blockContent,
  infoList,
  numberedList,
  page,
  ctaBanner,
  hero,
]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    project,
    home,
    settings,
    blockContent,
    infoList,
    numberedList,
    page,
    ctaBanner,
    hero,
  ],
}
