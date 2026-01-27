import Link from "next/link";
import Image from "next/image";
import { PostDocument } from "@/sanity/lib/queries";

interface JournalCardProps {
  post: PostDocument;
  headingLevel?: "h2" | "h3";
  height?: "h-56" | "h-84";
}

function truncateExcerpt(text: string | any[] | undefined, maxLength: number = 100): string {
  if (!text) return '';
  
  // Om det är rich text (array), extrahera text
  if (Array.isArray(text)) {
    const extractedText = text
      .map((block: any) => 
        block.children?.map((child: any) => child.text || '').join('') || ''
      )
      .join(' ');
    if (extractedText.length <= maxLength) return extractedText;
    return extractedText.substring(0, maxLength).trim() + '..';
  }
  
  // Om det är vanlig text
  if (typeof text === 'string') {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '..';
  }
  
  return '';
}

export default function JournalCard({ 
  post, 
  headingLevel = "h2",
  height = "h-84"
}: JournalCardProps) {
  const HeadingTag = headingLevel;

  return (
    <Link
      href={`/journal/${post.slug}`}
      className="group block"
    >
      <article className="rounded-none overflow-hidden border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] h-full flex flex-col transition-all duration-300 hover:border-[var(--brand-secondary)]/80 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
        <div className={`relative ${height} border-b-2 border-[var(--brand-secondary)]`}>
          {post.coverImageUrl ? (
            <>
              <Image
                src={post.coverImageUrl}
                alt={post.coverImage?.alt || post.title}
                fill
                className="object-cover blur-xs scale-105 brightness-90 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            </>
          ) : (
            <div className="absolute inset-0 bg-[var(--brand-secondary)]/20" />
          )}
          <div className="absolute inset-0 flex items-center justify-center flex-col px-4 py-6">
            <HeadingTag className="font-horus text-3xl sm:text-4xl text-[var(--brand-primary)] text-center mb-2">
              {post.title}
            </HeadingTag>
            {(post.publishedAt || post.author) && (
              <p className="text-sm sm:text-base text-[var(--brand-primary)]/80 uppercase tracking-wider mb-3">
                {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('sv-SE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                {post.author && post.publishedAt && ' • '}
                {post.author && `av ${post.author}`}
              </p>
            )}
            {post.excerpt && (
              <p className="text-sm sm:text-base text-[var(--brand-primary)]/90 text-center max-w-md line-clamp-2">
                {truncateExcerpt(post.excerpt, 100)}
              </p>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

