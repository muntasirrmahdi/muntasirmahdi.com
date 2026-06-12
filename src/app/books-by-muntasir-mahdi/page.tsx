import type { Metadata } from "next";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Books",
  description:
    "All books by Muntasir Mahdi — marketing, sales, copywriting, and digital skills.",
};

const books = [
  {
    title: "Brainfluence: The Psychology of Marketing",
    description:
      "How psychological marketing techniques influence our brain — the hacks, tips, and tricks that shape every buying decision.",
    pages: 150,
    lang: "Bangla",
  },
  {
    title: "Content Marketing Mastery",
    description:
      "How to use content for marketing — finding audience needs, building strategy, and publishing in the right places.",
    pages: 200,
    lang: "Bangla",
  },
  {
    title: "Digital Marketing e Hatekhari",
    description:
      "A beginner's guide to digital marketing told through stories — for anyone starting a career in this space.",
    pages: 180,
    lang: "Bangla",
  },
  {
    title: "Copywriting: The Future of Content",
    description:
      "The magical world of copywriting and why it's the most valuable skill in the content economy.",
    pages: 160,
    lang: "Bangla",
  },
  {
    title: "Digital Product e Hatekhari",
    description:
      "How digital products took a complete beginner from zero to crore in 5 years — a step-by-step story.",
    pages: 190,
    lang: "Bangla",
  },
  {
    title: "Digital Sales: The Future of Sales",
    description:
      "The first book on digital sales in Bangladesh — written from 10 years of hands-on sales experience.",
    pages: 170,
    lang: "Bangla",
  },
  {
    title: "Client Hunting",
    description:
      "From buyer persona to client communication — an effective guide to mastering client hunting.",
    pages: 140,
    lang: "Bangla",
  },
  {
    title: "Social Media Marketing Handbook",
    description:
      "Formulas, strategies, and frameworks to take your social media presence from ordinary to extraordinary.",
    pages: 210,
    lang: "Bangla",
  },
  {
    title: "Facebook A to Z: Marketing, Sales and Branding",
    description:
      "A complete guide to using Facebook the right way for your business — marketing, sales, and branding.",
    pages: 220,
    lang: "Bangla",
  },
  {
    title: "How to Sell Like Hell",
    description:
      "Powerful sales tactics, sales psychology, and a money-making mindset — compact and actionable.",
    pages: 130,
    lang: "Bangla",
  },
];

export default function BooksPage() {
  const [featured, ...otherBooks] = books;

  return (
    <>
      <PageHeader
        title="Books by Muntasir Mahdi"
        description="10 books on marketing, sales, copywriting, and digital skills. All currently available in Bangla."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full max-w-sm mx-auto md:mx-0 aspect-[3/4] rounded-md bg-background border border-border flex items-center justify-center">
              <BookOpen size={48} className="text-muted-foreground" />
            </div>

            <div>
              <p className="text-accent font-medium text-sm tracking-wide uppercase">
                Featured Book
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-mono font-semibold text-foreground leading-tight">
                {featured.title}
              </h2>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                {featured.description}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <span>{featured.pages} pages</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{featured.lang}</span>
              </div>
              <Link
                href="https://www.rokomari.com/search?q=Brainfluence"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Buy on Rokomari
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-10">
            <h2 className="text-xl font-mono font-semibold text-foreground">
              All Books
            </h2>
            <p className="mt-2 text-sm text-muted">
              Explore the full collection of books by Muntasir Mahdi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherBooks.map((book) => (
              <div
                key={book.title}
                className="rounded-lg border border-border bg-card p-5 flex gap-5"
              >
                <div className="w-24 shrink-0 aspect-[3/4] rounded-md bg-background border border-border flex items-center justify-center">
                  <BookOpen size={24} className="text-muted-foreground" />
                </div>

                <div className="flex flex-col min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-relaxed">
                    {book.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed flex-1 line-clamp-3">
                    {book.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{book.pages} pages</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{book.lang}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="rounded-lg border border-border bg-card p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-mono font-semibold text-foreground mb-3">
              Get My Books
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
              All my books are available at bookstores across Bangladesh. Some
              titles are also available as ebooks.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Contact for Details
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
