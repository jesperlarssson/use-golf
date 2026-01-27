This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## E-post (Brevo)

Sätt följande env-variabler (lokalt i `.env.local`, i produktion i hostingens hemligheter):

```
BREVO_API_KEY=...            # API-nyckel från Brevo (SMTP & API)
CONTACT_TO=hello@usegolf.se  # Mottagare för kontaktformulär
CONTACT_FROM=no-reply@usegolf.se # Avsändare för kontaktmail
CONTACT_AUTOREPLY_FROM=no-reply@usegolf.se # (valfritt) Avsändare för autosvar

INQUIRY_TO=hello@usegolf.se  # Mottagare för företagsförfrågningar
INQUIRY_FROM=no-reply@usegolf.se # Avsändare för förfrågan
INQUIRY_AUTOREPLY_FROM=no-reply@usegolf.se # (valfritt) autosvar
```

## Sanity (Drafts i development)

För att se events i DRAFT-stadie i development, lägg till:

```
SANITY_API_READ_TOKEN=...    # API token från Sanity (hittas i Sanity Studio under API > Tokens)
```

**Hur man hittar token:**
1. Gå till [sanity.io/manage](https://sanity.io/manage)
2. Välj ditt projekt
3. Gå till **API** > **Tokens**
4. Skapa en ny token med **Read**-behörighet
5. Kopiera token och lägg till i `.env.local`

API-endpoints:
- `POST /api/contact` – fält: `name`, `email`, `phone?`, `message?`, `hp?` (honeypot)
- `POST /api/inquiry` – fält: `company`, `name`, `email`, `phone?`, `date?`, `start?`, `duration?`, `message?`, `hp?`

Båda endpoints har enkel rate-limit och honeypot.
