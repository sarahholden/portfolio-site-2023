import { OlistIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'numberedList',
  type: 'object',
  title: 'Numbered List',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'body',
      type: 'text',
      title: 'Body',
    }),
    {
      name: 'listItem',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            { type: 'string', name: 'title' },
            { type: 'text', name: 'body' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Numbered List',
        media: OlistIcon,
      }
    },
  },
})
