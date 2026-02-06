import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'eventCategory',
  title: 'Event-kategori',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Namnlös kategori',
      }
    },
  },
})
