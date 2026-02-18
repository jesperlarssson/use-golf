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
    defineField({
      name: 'slug',
      title: 'Filter-slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Används för filtrering på /events, t.ex. /events?category=damer',
      validation: (Rule) => Rule.required(),
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
          validation: (Rule: any) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
      rows: 3,
      description: 'Valfri text som visas under kategorititeln på startsidan.',
    }),
    defineField({
      name: 'actionLabel',
      title: 'Action-label',
      type: 'string',
      description: 'Valfri CTA-text på kortet, t.ex. "Se event" eller "Se partners".',
      initialValue: 'Se event',
    }),
    defineField({
      name: 'link',
      title: 'Länk',
      type: 'string',
      description: 'Valfri länk för kategorikortet, t.ex. /events?category=damer eller /partner.',
      validation: (Rule) =>
        Rule.custom((value: string | undefined) => {
          if (!value) return true
          const isRelative = value.startsWith('/')
          const isAbsolute = /^https?:\/\//i.test(value)
          return isRelative || isAbsolute
            ? true
            : 'Länken måste börja med / eller http(s)://'
        }),
    }),
    defineField({
      name: 'order',
      title: 'Ordning',
      type: 'number',
      description: 'Lägre nummer visas först på startsidan.',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'image',
      link: 'link',
      actionLabel: 'actionLabel',
    },
    prepare({ title, subtitle, media, link, actionLabel }) {
      return {
        title: title || 'Namnlös kategori',
        subtitle: [
          subtitle ? `slug: ${subtitle}` : null,
          link ? `länk: ${link}` : null,
          actionLabel ? `cta: ${actionLabel}` : null,
        ]
          .filter(Boolean)
          .join(' • '),
        media,
      }
    },
  },
})
