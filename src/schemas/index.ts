import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import project from './project'

export const schemaTypes = [post, project, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, project],
}
