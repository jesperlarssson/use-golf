import { PortableText as PortableTextComponent } from '@portabletext/react'
import Image from 'next/image'
import { Heading, Text } from './Typography'
import urlBuilder from '@sanity/image-url'
import { projectId, dataset } from '@/sanity/env'

const builder = urlBuilder({ projectId, dataset })

interface PortableTextProps {
  content: any[]
}

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null
      const imageUrl = builder.image(value).width(1200).height(800).url()
      return (
        <figure className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Bloggbild'}
            width={1200}
            height={800}
            className="w-full h-auto border-2 border-[var(--brand-secondary)]"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <Heading as={2} className="mt-8 mb-4">{children}</Heading>,
    h2: ({ children }: any) => <Heading as={2} className="mt-6 mb-3">{children}</Heading>,
    h3: ({ children }: any) => <Heading as={3} className="mt-4 mb-2">{children}</Heading>,
    normal: ({ children }: any) => <Text className="mb-4">{children}</Text>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[var(--brand-secondary)] pl-6 py-2 my-6 italic text-lg text-[var(--brand-olive-900)]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 ml-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-2">{children}</li>,
    number: ({ children }: any) => <li className="ml-2">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => <span className="underline">{children}</span>,
    'strike-through': ({ children }: any) => <span className="line-through">{children}</span>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-[var(--brand-olive-900)]">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = value?.blank ? '_blank' : undefined
      const rel = value?.blank ? 'noopener noreferrer' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-[var(--brand-secondary)] underline hover:text-[var(--brand-olive-900)]"
        >
          {children}
        </a>
      )
    },
  },
}

export default function PortableText({ content }: PortableTextProps) {
  if (!content) return null
  return <PortableTextComponent value={content} components={components} />
}

