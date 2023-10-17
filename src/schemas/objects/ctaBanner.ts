import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ctaBanner',
  type: 'object',
  title: 'CTA Banner',
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
})
