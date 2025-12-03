import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Fråga',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Svar',
      type: 'text',
      description: 'Du kan använda **fet text** och [länkar](url)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'action',
      title: 'Action-knapp (valfritt)',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Knapptext',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'href',
          title: 'Länk',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Ordning',
      type: 'number',
      description: 'Används för att sortera FAQ:erna (lägre nummer = högre upp)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      order: 'order',
    },
    prepare({ title, order }) {
      return {
        title: title || 'Namnlös FAQ',
        subtitle: `Ordning: ${order || 0}`,
      }
    },
  },
  orderings: [
    {
      title: 'Ordning (stigande)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Ordning (fallande)',
      name: 'orderDesc',
      by: [{ field: 'order', direction: 'desc' }],
    },
  ],
})

