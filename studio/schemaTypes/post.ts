import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blogginlägg',
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
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Författare',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publicerad',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Ingress',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          lists: [],
          marks: {
            decorators: [
              { title: 'Fet', value: 'strong' },
              { title: 'Kursiv', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Länk',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule: any) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Öppna i ny flik',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
      ],
      description: 'Kort beskrivning som visas i listor. Du kan använda fet text och länkar.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Omslagsbild',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt-text',
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Innehåll',
      type: 'array',
      of: [
        {
          type: 'block',
          // Stilar för rubriker och text
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Rubrik 1', value: 'h1' },
            { title: 'Rubrik 2', value: 'h2' },
            { title: 'Rubrik 3', value: 'h3' },
            { title: 'Citat', value: 'blockquote' },
          ],
          // Listor
          lists: [
            { title: 'Punktlista', value: 'bullet' },
            { title: 'Numrerad lista', value: 'number' },
          ],
          // Markeringar (fet, kursiv, etc.)
          marks: {
            // Decorations (visuella markeringar)
            decorators: [
              { title: 'Fet', value: 'strong' },
              { title: 'Kursiv', value: 'em' },
              { title: 'Understruken', value: 'underline' },
              { title: 'Genomstruken', value: 'strike-through' },
              { title: 'Kod', value: 'code' },
            ],
            // Annotations (länkar, etc.)
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Länk',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule: any) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Öppna i ny flik',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          title: 'Bild',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt-text',
              description: 'Viktigt för tillgänglighet och SEO',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Bildtext',
              description: 'Valfri bildtext som visas under bilden',
            },
          ],
          preview: {
            select: {
              imageUrl: 'asset',
              title: 'caption',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'coverImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `av ${author}` }
    },
  },
})

