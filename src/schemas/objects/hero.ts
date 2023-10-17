import { ImageIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  icon: ImageIcon,
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
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || ImageIcon,
      }
    },
  },
})
