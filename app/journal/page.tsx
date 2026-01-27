import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allPostsQuery, transformPost, PostDocument, Post, getPostBySlug } from "@/sanity/lib/queries";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import JournalCard from "@/components/ui/JournalCard";

export const metadata: Metadata = {
  title: "USE Journal",
  description: "Läs våra senaste artiklar om golf, träning och events i USE Journal.",
};

// Revalidera sidan var 60:e sekund som fallback (webhook revaliderar omedelbart)
export const revalidate = 60;

async function getPosts(): Promise<PostDocument[]> {
  try {
    const posts = await client.fetch<Post[]>(allPostsQuery);
    return posts.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function JournalPage() {
  const allPosts = await getPosts();
  
  return (
    <FullBleed>
      {/* Hero Banner */}
      <div className="relative w-full min-h-[50vh] sm:min-h-[60vh] overflow-hidden border-b border-[var(--brand-secondary)]">
        <Image
          src="/images/invigning/DSC06527.jpg"
          alt="USE Journal"
          fill
          priority
          className="object-cover filter blur-sm brightness-90 scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
          <div className="w-full max-w-screen-2xl px-4 sm:px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Vänster kolumn - SectionHeader */}
              <FadeIn>
                <SectionHeader
                  label="USE Journal"
                  heading="Nyheter, tips & inspiration"
                  description="Håll dig uppdaterad med allt som händer på USE Golf. Här delar vi nyheter om event, träningar, tips och tricks – samt uppdateringar direkt från anläggningen för dig som vill få ut mer av varje besök."
                  align="left"
                  labelColor="rgb(255, 255, 255)"
                  headingColor="rgb(255, 255, 255)"
                  textColor="rgba(255, 255, 255, 0.9)"
                  maxWidth="full"
                />
              </FadeIn>
              
             
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[var(--brand-secondary)] pt-10">
        <Page variant="subpage">
          {/* Posts grid */}
          <Section className="py-20 -mt-10 sm:-mt-18 max-w-screen-2xl mx-auto">
            {allPosts.length === 0 ? (
              <FadeIn>
                <div className="text-center py-12">
                  <p className="text-lg text-[var(--brand-olive-700)]">
                    Inga artiklar ännu. Kom tillbaka snart!
                  </p>
                </div>
              </FadeIn>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {allPosts.map((post, index) => (
                  <FadeIn key={post._id} delay={index * 0.05}>
                    <JournalCard post={post} headingLevel="h2" height="h-84" />
                  </FadeIn>
                ))}
              </div>
            )}
          </Section>
        </Page>
      </div>
    </FullBleed>
  );
}
