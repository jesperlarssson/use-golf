import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertitel',
      type: 'string',
      description: 'Valfritt - visas under titeln',
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt-text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Innehåll',
      type: 'text',
      description: 'Du kan använda **fet text** för att markera viktig information',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Länk',
      type: 'string',
      description: 'Länk för call-to-action knappen',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Text',
      type: 'string',
      description: 'Text på call-to-action knappen',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordning',
      type: 'number',
      description: 'Används för att sortera events (lägre nummer = högre upp)',
      initialValue: 0,
    }),
    defineField({
      name: 'showOnLandingPage',
      title: 'Visa på startsidan',
      type: 'boolean',
      description: 'Om detta event ska visas på startsidan',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
      order: 'order',
    },
    prepare({ title, subtitle, media, order }) {
      return {
        title: title || 'Namnlöst event',
        subtitle: subtitle ? `${subtitle} • Ordning: ${order || 0}` : `Ordning: ${order || 0}`,
        media,
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

