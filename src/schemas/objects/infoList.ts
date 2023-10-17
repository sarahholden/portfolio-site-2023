import { ThListIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'infoList',
  type: 'object',
  title: 'Info List',
  icon: ThListIcon,
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
        defineField({
          name: 'heading',
          type: 'text',
          title: 'Heading',
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
        subtitle: 'Info List',
        media: ThListIcon,
      }
    },
  },
})
