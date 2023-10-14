import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import project from './project'
import home from './singletons/home'
import settings from './singletons/settings'

export const schemaTypes = [post, project, home, settings, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project, home, settings, blockContent],
}
