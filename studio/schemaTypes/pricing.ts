import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Priser',
  type: 'document',
  fields: [
    defineField({
      name: 'dayType',
      title: 'Dagtyp',
      type: 'string',
      options: {
        list: [
          { title: 'Måndag–Torsdag', value: 'monday-thursday' },
          { title: 'Fredag–Lördag', value: 'friday-saturday' },
          { title: 'Söndag', value: 'sunday' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timeSlots',
      title: 'Tidsperioder',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'time',
              title: 'Tidsperiod',
              type: 'string',
              description: 'Format: 07:00–10:00',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Pris (kr)',
              type: 'number',
              validation: (Rule: any) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              time: 'time',
              price: 'price',
            },
            prepare({ time, price }: { time?: string; price?: number }) {
              return {
                title: time || 'Namnlös tidsperiod',
                subtitle: price ? `${price} kr` : 'Inget pris',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      dayType: 'dayType',
    },
    prepare({ dayType }: { dayType: string }) {
      const labels: Record<string, string> = {
        'monday-thursday': 'Måndag–Torsdag',
        'friday-saturday': 'Fredag–Lördag',
        'sunday': 'Söndag',
      }
      return {
        title: labels[dayType] || dayType,
      }
    },
  },
})

