import type { Metadata } from "next";
import { getPostBySlug, relatedPostsQuery, transformPost, PostDocument, Post } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import PortableText from "@/components/ui/PortableText";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import JournalCard from "@/components/ui/JournalCard";
import { notFound } from "next/navigation";

// Revalidera sidan var 60:e sekund som fallback (webhook revaliderar omedelbart)
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel hittades inte",
    };
  }

  // Extrahera text från excerpt (kan vara string eller rich text)
  const excerptText = typeof post.excerpt === 'string' 
    ? post.excerpt 
    : Array.isArray(post.excerpt) 
      ? post.excerpt.map((block: any) => 
          block.children?.map((child: any) => child.text).join('') || ''
        ).join(' ')
      : '';

  return {
    title: post.title,
    description: excerptText || "Läs mer i USE Journal",
    openGraph: {
      title: post.title,
      description: excerptText || "",
      images: post.coverImageUrl ? [post.coverImageUrl] : [],
    },
  };
}

async function getRelatedPosts(slug: string): Promise<PostDocument[]> {
  try {
    const posts = await client.fetch<Post[]>(relatedPostsQuery, { slug });
    return posts.map(transformPost);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);
  const hasContent = post.content && Array.isArray(post.content) && post.content.length > 0;
  const hasRichExcerpt = post.excerpt && Array.isArray(post.excerpt) && post.excerpt.length > 0;

  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src={post.coverImageUrl || '/images/placeholder.png'}
          alt={post.coverImage?.alt || post.title}
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex flex-col min-h-[50vh] sm:min-h-[60vh]">
          <div className="w-full max-w-screen-2xl px-4 sm:px-6 py-20 mx-auto flex-1 flex flex-col">
            {/* Tillbaka-knapp - till vänster */}
            <div className="mb-auto pt-4">
              <a
                href="/journal"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition group"
              >
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm uppercase tracking-wider">Tillbaka till USE Journal</span>
              </a>
            </div>
            
            {/* Centrerat innehåll */}
            <div className="max-w-5xl w-full mx-auto space-y-6 flex-1 flex flex-col justify-center items-start">
              <FadeIn>
                <Heading as={1} className="text-4xl md:text-5xl lg:text-6xl text-white">
                  {post.title}
                </Heading>
              </FadeIn>

              {/* Post info */}
              <FadeIn delay={0.1}>
                <div className="space-y-3 pt-4">
                  {post.publishedAt && (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <Text className="text-lg text-white/90">
                        {new Date(post.publishedAt).toLocaleDateString('sv-SE', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </Text>
                    </div>
                  )}
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <Text className="text-lg text-white/90">
                        av {post.author}
                      </Text>
                    </div>
                  )}
                </div>
              </FadeIn>

              {/* Rich text excerpt */}
              {hasRichExcerpt && (
                <FadeIn delay={0.15}>
                  <div className="pt-4 text-white/90 prose prose-invert max-w-none">
                    <PortableText content={post.excerpt as any[]} />
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-18">
        <Page variant="subpage">
          {/* Rich Content */}
          {hasContent && (
            <Section className="py-20 -mt-10 sm:-mt-18">
              <FadeIn>
                <div className="max-w-5xl w-full mx-auto prose prose-lg">
                  <PortableText content={post.content || []} />
                </div>
              </FadeIn>
            </Section>
          )}

          {/* Kategorier */}
          {post.categories && post.categories.length > 0 && (
            <Section className="py-20 -mt-10 sm:-mt-18 pb-16">
              <FadeIn>
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-semibold text-[var(--brand-olive-900)]">Kategorier:</span>
                    {post.categories.map((category) => (
                      <span
                        key={category._id}
                        className="px-3 py-1 bg-[var(--brand-secondary)]/20 text-[var(--brand-olive-900)] rounded-full text-sm"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </Section>
          )}
        </Page>
      </div>

      {/* Relaterade artiklar */}
      {relatedPosts.length > 0 && (
        <Section className="py-20 bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-olive-700)]/10">
          <div className="max-w-screen-2xl mx-auto">
            <FadeIn>
              <Heading as={2} className="text-3xl md:text-4xl mb-8 text-center">
                Relaterade artiklar
              </Heading>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <FadeIn key={relatedPost._id}>
                  <JournalCard
                    post={relatedPost}
                    headingLevel="h3"
                    height="h-56"
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </Section>
      )}
    </FullBleed>
  );
}
