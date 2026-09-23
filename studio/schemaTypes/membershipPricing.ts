import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'membershipPricing',
  title: 'Medlemspriser',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Namn', type: 'string', initialValue: 'Medlemspriser', validation: rule => rule.required() }),
    defineField({ name: 'userAnnualPrice', initialValue: 300, title: 'USE:R – kronor per år', type: 'number', description: 'Ska motsvara årsavgiften i Alba.', validation: rule => rule.required().min(0).integer() }),
    defineField({ name: 'juniorAnnualPrice', initialValue: 200, title: 'Jr USE:R – kronor per år', type: 'number', description: 'Ska motsvara årsavgiften i Alba.', validation: rule => rule.required().min(0).integer() }),
  ],
  preview: { select: { title: 'title' } },
})
