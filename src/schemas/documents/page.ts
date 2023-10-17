import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'ctaBanner',
          type: 'ctaBanner',
        }),
        defineArrayMember({
          name: 'infoList',
          type: 'infoList',
        }),
        defineArrayMember({
          name: 'numberedList',
          type: 'numberedList',
        }),
      ],
    }),
  ],
})
