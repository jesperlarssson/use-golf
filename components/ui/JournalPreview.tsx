import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allPostsQuery, transformPost, type Post } from "@/sanity/lib/queries";

export default async function JournalPreview() {
  let posts: ReturnType<typeof transformPost>[] = [];
  let unavailable = false;
  try {
    const result = await client.fetch<Post[]>(allPostsQuery, {}, { perspective: "published" });
    posts = result.filter(post => post.slug?.current && post.publishedAt && new Date(post.publishedAt).getTime() <= Date.now()).slice(0, 3).map(transformPost);
  } catch {
    unavailable = true;
  }

  return (
    <section aria-labelledby="journal-title" className="bg-[#ebe8dc]">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <p className="mb-5 text-xs uppercase tracking-[.2em] text-[var(--brand-olive-900)]">USE Journal</p>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><h2 id="journal-title" className="text-4xl font-normal tracking-[-.035em]">Livet mellan rundorna.</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--foreground)]/75">Berättelser, inspiration och nyheter från USE.</p></div>
          {posts.length > 0 && <Link href="/journal" className="inline-flex min-h-11 items-center text-sm underline underline-offset-8">Alla artiklar</Link>}
        </div>
        {posts.length > 0 ? (
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {posts.map(post => <Link key={post._id} href={`/journal/${post.slug}`} className="group block border-t border-black/20 pt-5">
              {post.coverImageUrl && <div className="relative mb-5 aspect-[4/3] overflow-hidden"><Image src={post.coverImageUrl} alt={post.coverImage?.alt || ""} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div>}
              <h3 className="text-2xl font-normal tracking-tight group-hover:underline underline-offset-4">{post.title}</h3>
              <span className="mt-4 inline-flex min-h-11 items-center text-sm">Läs artikeln</span>
            </Link>)}
          </div>
        ) : (
          <div className="mt-10 border-l-4 border-[var(--brand-secondary)] py-2 pl-6 sm:pl-8">
            <h3 className="text-xl font-normal">{unavailable ? "Journalen kunde inte laddas just nu." : "Första kapitlet kommer snart."}</h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--foreground)]/75">{unavailable ? "Försök gärna igen om en stund. Under tiden hittar du glimtar från USE på Instagram." : "Här kommer vi att dela berättelser och inspiration från USE. Tills dess kan du följa livet hos oss på Instagram."}</p>
            <a href="https://www.instagram.com/use__golf/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center text-sm underline underline-offset-8">Följ @use__golf</a>
          </div>
        )}
      </div>
    </section>
  );
}
