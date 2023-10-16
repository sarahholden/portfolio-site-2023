import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Site Tagline',
      type: 'text',
      initialValue: 'Creative E-Commerce',
      rows: 1,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Item list',
      description: 'Links displayed on the header of your site.',
      type: 'array',
      of: [
        {
          title: 'Reference',
          name: 'reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'project',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'emailAddress',
      title: 'Email Address',
      description: 'Email address for button',
      type: 'text',
      initialValue: 'hello@sarahholden.studio',
      rows: 1,
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Get In Touch',
      description: 'Nav Button Text',
      type: 'text',
      initialValue: 'Get In Touch',
      rows: 1,
    }),
    defineField({
      name: 'wavyBannerText',
      title: 'Banner Text',
      description: 'For wavy banner CTA',
      type: 'text',
      initialValue: 'Book now for your next project',
      rows: 1,
    }),
    defineField({
      name: 'contactText',
      description:
        'This is a block of text that will be displayed in the contact section.',
      title: 'Contact Text',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),

    defineField({
      name: 'footer',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer Info',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      }
    },
  },
})
