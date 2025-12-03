import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'closure',
  title: 'Stängningsdatum',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'T.ex. "Jul", "Nyår", "Midsommar"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Startdatum',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Slutdatum',
      type: 'date',
      description: 'Om anläggningen är stängd bara en dag, välj samma datum som startdatum',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
      description: 'Valfritt - t.ex. "Stängt under hela julhelgen"',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare({ title, startDate, endDate }) {
      const start = startDate ? new Date(startDate).toLocaleDateString('sv-SE') : ''
      const end = endDate ? new Date(endDate).toLocaleDateString('sv-SE') : ''
      const dateRange = start === end ? start : `${start} - ${end}`
      return {
        title: title || 'Namnlöst stängningsdatum',
        subtitle: dateRange,
      }
    },
  },
  orderings: [
    {
      title: 'Startdatum (stigande)',
      name: 'startDateAsc',
      by: [{ field: 'startDate', direction: 'asc' }],
    },
    {
      title: 'Startdatum (fallande)',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
})

