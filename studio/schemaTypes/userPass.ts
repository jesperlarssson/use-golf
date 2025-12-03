import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'userPass',
  title: 'User Pass',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Typ',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Pris (kr)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: 'playValue',
      title: 'Spelvärde (kr)',
      type: 'number',
      description: 'Värdet man får när man laddar passet (inklusive bonus)',
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: 'bonusPercent',
      title: 'Bonus (%)',
      type: 'number',
      description: 'Bonusprocent som läggs till',
      validation: (Rule: any) => Rule.required().min(0).max(100),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      playValue: 'playValue',
    },
    prepare({ name, price, playValue }: { name: string; price: number; playValue: number }) {
      return {
        title: name,
        subtitle: `${price.toLocaleString('sv-SE')} kr → ${playValue.toLocaleString('sv-SE')} kr`,
      }
    },
  },
})

