"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";

export type FAQItem = {
  q: string;
  a: string | ReactNode;
  action?: {
    label: string;
    href: string;
  };
};

type FAQProps = {
  items: FAQItem[];
  className?: string;
};

// Hjälpfunktion för att hantera radbrytningar
function formatNewlines(text: string): ReactNode {
  const lines = text.split('\n');
  if (lines.length === 1) {
    return <>{text}</>;
  }
  return (
    <>
      {lines.map((line, index) => (
        <span key={`line-${index}`}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

// Parser för att formatera text med markdown-liknande syntax
function formatAnswer(text: string): ReactNode {
  const parts: ReactNode[] = [];
  
  // Regex för länkar: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  // Regex för bold: **text**
  const boldRegex = /\*\*([^*]+)\*\*/g;
  
  // Hitta alla matches
  const linkMatches = Array.from(text.matchAll(linkRegex));
  const boldMatches = Array.from(text.matchAll(boldRegex));
  
  // Kombinera alla matches med positioner
  const allMatches: Array<{ type: 'link' | 'bold'; start: number; end: number; content: string; url?: string }> = [];
  
  linkMatches.forEach(match => {
    if (match.index !== undefined) {
      allMatches.push({
        type: 'link',
        start: match.index,
        end: match.index + match[0].length,
        content: match[1],
        url: match[2],
      });
    }
  });
  
  boldMatches.forEach(match => {
    if (match.index !== undefined) {
      // Kolla om denna bold är redan en del av en länk
      const isPartOfLink = allMatches.some(m => 
        m.type === 'link' && match.index! >= m.start && match.index! < m.end
      );
      if (!isPartOfLink) {
        allMatches.push({
          type: 'bold',
          start: match.index,
          end: match.index + match[0].length,
          content: match[1],
        });
      }
    }
  });
  
  // Sortera matches efter position
  allMatches.sort((a, b) => a.start - b.start);
  
  // Bygg upp resultatet
  let lastIndex = 0;
  let keyCounter = 0;
  
  allMatches.forEach(match => {
    // Lägg till text före match
    if (match.start > lastIndex) {
      const beforeText = text.substring(lastIndex, match.start);
      if (beforeText) {
        parts.push(
          <span key={`text-${keyCounter++}`}>
            {formatNewlines(beforeText)}
          </span>
        );
      }
    }
    
    // Lägg till match
    if (match.type === 'link' && match.url) {
      const isExternal = match.url.startsWith('http');
      if (isExternal) {
        parts.push(
          <a
            key={`link-${keyCounter++}`}
            href={match.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--brand-primary)] underline hover:opacity-80"
          >
            {match.content}
          </a>
        );
      } else {
        parts.push(
          <Link
            key={`link-${keyCounter++}`}
            href={match.url}
            className="text-[var(--brand-primary)] underline hover:opacity-80"
          >
            {match.content}
          </Link>
        );
      }
    } else if (match.type === 'bold') {
      parts.push(
        <strong key={`bold-${keyCounter++}`} className="font-semibold">
          {match.content}
        </strong>
      );
    }
    
    lastIndex = match.end;
  });
  
  // Lägg till resten av texten
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      parts.push(
        <span key={`text-${keyCounter++}`}>
          {formatNewlines(remainingText)}
        </span>
      );
    }
  }
  
  // Om inga matches hittades, formatera bara newlines
  if (allMatches.length === 0) {
    return formatNewlines(text);
  }
  
  return <>{parts}</>;
}

export default function FAQ({ items, className = "" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-0 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-[var(--brand-secondary)]/20 bg-transparent overflow-hidden cursor-pointer"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full pr-6 py-4 text-left flex items-center justify-between "
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-semibold text-[var(--brand-primary)] pr-4">
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 text-[var(--brand-primary)] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pr-6 py-2 pb-4 pt-0">
                <div className="text-sm text-[var(--brand-primary)]/80 mb-3 space-y-2 leading-relaxed">
                  {typeof item.a === 'string' ? formatAnswer(item.a) : item.a}
                </div>
                {item.action && (
                  <div>
                    <a
                      href={item.action.href}
                      className="inline-flex items-center justify-center bg-[var(--brand-secondary)] px-4 py-2 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition text-sm"
                      data-cursor-target
                      data-cursor-padding="10"
                    >
                      {item.action.label}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

