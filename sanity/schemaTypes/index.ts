import post from '../../studio/schemaTypes/post'
import category from '../../studio/schemaTypes/category'
import pricing from '../../studio/schemaTypes/pricing'
import userPass from '../../studio/schemaTypes/userPass'
import venueBooking from '../../studio/schemaTypes/venueBooking'
import faq from '../../studio/schemaTypes/faq'
import event from '../../studio/schemaTypes/event'
import closure from '../../studio/schemaTypes/closure'

export const schema = {
  types: [post, category, pricing, userPass, venueBooking, faq, event, closure],
}

