import { ThListIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'infoList',
  type: 'object',
  title: 'Info List',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'headline1',
      type: 'text',
      title: 'Headline 1',
    }),
    defineField({
      name: 'headline2',
      type: 'text',
      title: 'Headline 2',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'headline1',
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
