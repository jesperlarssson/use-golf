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
      name: 'excerpt',
      title: 'Kort beskrivning',
      type: 'text',
      rows: 3,
      description: 'Kort beskrivning som visas i event-kort och listor. Du kan använda **fet text** för att markera viktig information',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Detaljerad beskrivning',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Rubrik 1', value: 'h1' },
            { title: 'Rubrik 2', value: 'h2' },
            { title: 'Rubrik 3', value: 'h3' },
            { title: 'Citat', value: 'blockquote' },
          ],
          lists: [
            { title: 'Punktlista', value: 'bullet' },
            { title: 'Numrerad lista', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Fet', value: 'strong' },
              { title: 'Kursiv', value: 'em' },
              { title: 'Understruken', value: 'underline' },
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
        {
          type: 'image',
          title: 'Bild',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt-text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Bildtext',
            },
          ],
        },
      ],
      description: 'Detaljerad beskrivning som visas på event-sidan. Lämna tomt om eventet bara har extern länk.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'URL-vänlig identifierare för eventet. Om slug är "ladies-tour-thursdays" syns eventet på /events/ladies-tour-thursdays. OBS: Slug krävs för att skapa en egen sida för eventet. Lämna tomt endast om eventet bara har extern länk och ingen detaljsida behövs.',
    }),
    defineField({
      name: 'hasExternalLink',
      title: 'Har extern anmälningslänk',
      type: 'boolean',
      description: 'Om eventet har en extern länk (t.ex. Sweetspot) istället för egen sida',
      initialValue: false,
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Länk',
      type: 'string',
      description: 'Extern länk för call-to-action (t.ex. Sweetspot-länk). Används bara om "Har extern anmälningslänk" är satt.',
      hidden: ({ parent }) => !parent?.hasExternalLink,
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Text',
      type: 'string',
      description: 'Text på call-to-action knappen (t.ex. "Anmäl dig", "Boka nu")',
      initialValue: 'Läs mer',
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
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Tävlingar', value: 'tavlingar' },
          { title: 'Kurser & Träning', value: 'kurser' },
          { title: 'Ligor', value: 'ligor' },
          { title: 'Erbjudanden', value: 'erbjudanden' },
        ],
        layout: 'radio',
      },
      description: 'Välj kategori för eventet',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'requiresInterestForm',
      title: 'Kräver intresseanmälan',
      type: 'boolean',
      description: 'Om detta event kräver intresseanmälan istället för direktbokning',
      initialValue: false,
    }),
    defineField({
      name: 'eventType',
      title: 'Event-typ',
      type: 'string',
      options: {
        list: [
          { title: 'Återkommande liga', value: 'recurring' },
          { title: 'Enskilt datum', value: 'single' },
          { title: 'Specifika datum', value: 'specific' },
        ],
        layout: 'radio',
      },
      description: 'Välj om eventet är återkommande, har ett specifikt datum, eller har specifika datum som beskrivs i texten',
      initialValue: 'recurring',
    }),
    defineField({
      name: 'recurringDay',
      title: 'Dag för återkommande event',
      type: 'string',
      options: {
        list: [
          { title: 'Måndag', value: 'monday' },
          { title: 'Tisdag', value: 'tuesday' },
          { title: 'Onsdag', value: 'wednesday' },
          { title: 'Torsdag', value: 'thursday' },
          { title: 'Fredag', value: 'friday' },
          { title: 'Lördag', value: 'saturday' },
          { title: 'Söndag', value: 'sunday' },
        ],
      },
      description: 'Vilken dag körs det återkommande eventet?',
      hidden: ({ parent }) => parent?.eventType !== 'recurring',
    }),
    defineField({
      name: 'eventDate',
      title: 'Datum för enskilt event',
      type: 'datetime',
      description: 'Datum och tid för enskilt event',
      hidden: ({ parent }) => parent?.eventType !== 'single',
    }),
    defineField({
      name: 'eventEndDate',
      title: 'Slutdatum (valfritt)',
      type: 'datetime',
      description: 'Slutdatum för eventet om det sträcker sig över flera dagar',
      hidden: ({ parent }) => parent?.eventType !== 'single',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
      order: 'order',
      category: 'category',
      slug: 'slug.current',
      hasExternalLink: 'hasExternalLink',
    },
    prepare({ title, subtitle, media, order, category, slug, hasExternalLink }) {
      const categoryLabels: Record<string, string> = {
        tavlingar: 'Tävlingar',
        kurser: 'Kurser',
        ligor: 'Ligor',
        erbjudanden: 'Erbjudanden',
      };
      const linkInfo = hasExternalLink ? 'Extern länk' : slug ? `/events/${slug}` : 'Ingen länk';
      return {
        title: title || 'Namnlöst event',
        subtitle: [
          subtitle,
          categoryLabels[category] || category,
          linkInfo,
          `Ordning: ${order || 0}`
        ].filter(Boolean).join(' • '),
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

