import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'venueBooking',
  title: 'Boka Lokalen - Priser',
  type: 'document',
  fields: [
    defineField({
      name: 'mondayTuesdayPrice',
      title: 'Måndag–Tisdag baspris (kr)',
      type: 'number',
      description: 'Baspris för 2 timmar',
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: 'wednesdayThursdayPrice',
      title: 'Onsdag–Torsdag baspris (kr)',
      type: 'number',
      description: 'Baspris för 2 timmar',
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: 'fridaySaturdaySundayPrice',
      title: 'Fredag–Lördag–Söndag baspris (kr)',
      type: 'number',
      description: 'Baspris för 2 timmar',
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: 'extraHourPrice',
      title: 'Pris per extra timme (kr)',
      type: 'number',
      description: 'Pris för varje timme utöver de första 2 timmarna',
      validation: (Rule: any) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      mondayTuesday: 'mondayTuesdayPrice',
      wednesdayThursday: 'wednesdayThursdayPrice',
      fridaySaturdaySunday: 'fridaySaturdaySundayPrice',
    },
    prepare({ mondayTuesday, wednesdayThursday, fridaySaturdaySunday }: any) {
      return {
        title: 'Boka Lokalen - Priser',
        subtitle: `M-T: ${mondayTuesday?.toLocaleString('sv-SE')} kr, O-T: ${wednesdayThursday?.toLocaleString('sv-SE')} kr, F-L-S: ${fridaySaturdaySunday?.toLocaleString('sv-SE')} kr`,
      }
    },
  },
})

