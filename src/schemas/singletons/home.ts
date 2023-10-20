import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introText',
      description: 'Will appear in intro / hero section before image',
      title: 'Hero Text 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introText2',
      description: 'Will appear in intro / hero section after image',
      title: 'Hero Text 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introImage',
      title: 'Intro Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        }),
      ],
    }),

    defineField({
      name: 'bannerText',
      type: 'text',
      title: 'CTA Banner Text',
    }),
    defineField({
      name: 'colorScheme',
      type: 'string',
      title: 'CTA Color Scheme',
      description: 'Select color Scheme',
      options: {
        list: ['green', 'purple'],
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      description:
        'These images will scroll in the background after the intro section',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'galleryImage',
          title: 'Gallery Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            }),
          ],
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description:
        'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
    defineField({
      name: 'recentWorkHeading',
      title: 'Recent Work',
      type: 'string',
    }),
    defineField({
      name: 'recentWorkBody',
      title: 'Recent Work Body',
      type: 'text',
    }),
    defineField({
      name: 'recentWork',
      title: 'Recent Work',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
