import { OlistIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'numberedList',
  type: 'object',
  title: 'Numbered List',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'text',
      title: 'Title',
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
        defineField({
          name: 'title',
          type: 'text',
          title: 'Title',
        }),
        defineField({
          name: 'body',
          type: 'text',
          title: 'Body',
        }),
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
