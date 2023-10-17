import { SparklesIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ctaBanner',
  type: 'object',
  title: 'CTA Banner',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'bannerText',
      type: 'text',
      title: 'Banner Text',
    }),
    defineField({
      name: 'colorScheme',
      type: 'string',
      title: 'Color Scheme',
      description: 'Select color Scheme',
      options: {
        list: ['green', 'purple'],
      },
    }),
  ],
  preview: {
    select: {
      title: 'bannerText',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Numbered List',
        media: SparklesIcon,
      }
    },
  },
})
