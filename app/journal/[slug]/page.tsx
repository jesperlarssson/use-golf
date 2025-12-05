import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postSlugsQuery, relatedPostsQuery, transformPost, PostDocument, Post } from "@/sanity/lib/queries";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Text, Lead } from "@/components/ui/Typography";
import PortableText from "@/components/ui/PortableText";
import Banner from "@/components/ui/Banner";
import JournalCard from "@/components/ui/JournalCard";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await client.fetch<Array<{ slug: string }>>(postSlugsQuery);
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

// Revalidera sidan var 60:e sekund som fallback (webhook revaliderar omedelbart)
export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const postData = await client.fetch<Post | null>(postBySlugQuery, { slug });
  const post = postData ? transformPost(postData) : null;

  if (!post) {
    return {
      title: "Artikel hittades inte",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || "Läs mer i USE Journal",
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      images: post.coverImageUrl ? [post.coverImageUrl] : [],
    },
  };
}

async function getPost(slug: string): Promise<PostDocument | null> {
  const post = await client.fetch<Post | null>(postBySlugQuery, { slug });
  if (!post) return null;
  return transformPost(post);
}

async function getRelatedPosts(slug: string): Promise<PostDocument[]> {
  const posts = await client.fetch<Post[]>(relatedPostsQuery, { slug });
  return posts.map(transformPost);
}

export default async function BloggPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);

  return (
    <FullBleed>
      <Banner
        title="USE JOURNAL"
        imageSrc={post.coverImageUrl || "/images/wall.png"}
        marqueeText={post.title}
      />
      <div className="border-y-2 border-[var(--brand-secondary)]/40">
        <Page variant="subpage">
          <Section className="max-w-5xl mx-auto">
            <Link
              href="/journal"
              className="text-[var(--brand-secondary)] hover:text-[var(--brand-olive-900)] mb-6 inline-block"
            >
              ← Tillbaka till USE Journal
            </Link>

            <article>
              <header className="mb-8 border-b border-[var(--brand-secondary)] pb-8">
                <Heading as={2} className="mb-4">{post.title}</Heading>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  {post.publishedAt && (
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('sv-SE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  )}
                  {post.author && <span>• av {post.author}</span>}
                </div>

                {post.excerpt && (
                  <Lead className="text-xl text-[var(--brand-olive-900)] mb-6">
                    {post.excerpt}
                  </Lead>
                )}


              </header>

              {post.content && (
                <div className="prose prose-lg max-w-none">
                  <PortableText content={post.content} />
                </div>
              )}

              {post.categories && post.categories.length > 0 && (
                <footer className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-semibold">Kategorier:</span>
                    {post.categories.map((category) => (
                      <span
                        key={category._id}
                        className="px-3 py-1 bg-[var(--brand-secondary)]/20 text-[var(--brand-olive-900)] rounded-full text-sm"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                </footer>
              )}
            </article>
          </Section>
        </Page>
      </div>
      {relatedPosts.length > 2 && (




        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost) => (
            <JournalCard
              key={relatedPost._id}
              post={relatedPost}
              headingLevel="h2"
              height="h-56"
            />
          ))}
        </div>



      )}
    </FullBleed>
  );
}

