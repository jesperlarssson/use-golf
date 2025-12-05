import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allPostsQuery, transformPost, PostDocument, Post } from "@/sanity/lib/queries";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import FullBleed from "@/components/ui/FullBleed";
import { Heading, Lead } from "@/components/ui/Typography";
import Banner from "@/components/ui/Banner";
import JournalCard from "@/components/ui/JournalCard";

export const metadata: Metadata = {
  title: "USE Journal",
  description: "Läs våra senaste artiklar om golf, träning och events i USE Journal.",
};

// Revalidera sidan var 60:e sekund som fallback (webhook revaliderar omedelbart)
export const revalidate = 60;

async function getPosts(): Promise<PostDocument[]> {
  const posts = await client.fetch<Post[]>(allPostsQuery);
  return posts.map(transformPost);
}

export default async function BloggPage() {
  const posts = await getPosts();

  return (
    <FullBleed>
      <Banner
        title="USE JOURNAL"
        imageSrc="/images/wall.png"
        marqueeText="Håll dig uppdaterad"
      />
      <div className="border-y-2 border-[var(--brand-secondary)]/40">
        <Page variant="subpage">
     
          <Section>
          <Lead className="mb-10">Läs våra senaste artiklar om golf, träning och events.</Lead>
            
            {posts.length === 0 ? (
              <p className="text-lg">Inga artiklar ännu. Kom tillbaka snart!</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <JournalCard key={post._id} post={post} headingLevel="h2" height="h-84" />
                ))}
              </div>
            )}
          </Section>
        </Page>
      </div>
    </FullBleed>
  );
}

