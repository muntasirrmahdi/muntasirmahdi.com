import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Articles by Muntasir Mahdi",
  description:
    "Articles by Muntasir Mahdi on clear thinking, learning systems, and building digital assets.",
};

interface Article {
  date: string;
  title: string;
  readTime: string;
  slug: string;
  category: string;
}

const articles: Article[] = [
  {
    date: "May 11, 2026",
    title: "SuperOC: Persistent Memory Stack for Your Agentic Tools",
    readTime: "8 min read",
    slug: "#",
    category: "AI & Technology",
  },
  {
    date: "May 7, 2026",
    title: "16 Years of Learning the Wrong Thing",
    readTime: "6 min read",
    slug: "#",
    category: "Learning & Education",
  },
  {
    date: "May 6, 2026",
    title: "Content Writing in the Age of AI",
    readTime: "7 min read",
    slug: "#",
    category: "Content & Marketing",
  },
  {
    date: "May 2, 2026",
    title: "Portfolio Website Elements: What to Include",
    readTime: "5 min read",
    slug: "#",
    category: "Freelancing",
  },
  {
    date: "Apr 28, 2026",
    title: "AI Tools for Small Businesses: From Basics to Expert",
    readTime: "10 min read",
    slug: "#",
    category: "AI & Technology",
  },
  {
    date: "Apr 22, 2026",
    title: "How to Optimize Your LinkedIn Profile",
    readTime: "6 min read",
    slug: "#",
    category: "Freelancing",
  },
  {
    date: "Apr 18, 2026",
    title: "Negotiation Tips for Freelancers",
    readTime: "5 min read",
    slug: "#",
    category: "Freelancing",
  },
];

const categories: { name: string; key: string }[] = [
  { name: "AI & Technology", key: "ai-technology" },
  { name: "Learning & Education", key: "learning-education" },
  { name: "Content & Marketing", key: "content-marketing" },
  { name: "Freelancing", key: "freelancing" },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Articles"
        description="Writing about solopreneurship, marketing, digital skills, and clear thinking."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
            <p className="text-base text-muted leading-relaxed">
              I write about what I am learning — solopreneurship, marketing, AI
              tools, freelancing, and clear thinking. No fluff, no filler. Just
              practical ideas you can use.
            </p>

            <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Get the latest articles in your inbox
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    A roundup of new articles every few weeks. No spam.
                    Unsubscribe anytime.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-black hover:bg-accent/90 transition-colors shrink-0"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-10">
          <p className="text-center text-xs text-accent/60 tracking-[0.6em] select-none">
            . . .
          </p>
        </div>
      </div>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-mono font-semibold tracking-tight text-foreground mb-12">
            All Articles
          </h2>

          <div className="space-y-12">
            {categories.map(({ name, key }) => {
              const categoryArticles = articles.filter(
                (a) => a.category === name,
              );

              if (categoryArticles.length === 0) return null;

              return (
                <div key={key}>
                  <h3 className="text-base font-semibold text-foreground mb-4">
                    {name}
                  </h3>
                  <ul className="space-y-1.5">
                    {categoryArticles.map((article) => (
                      <li key={article.title}>
                        <Link
                          href={article.slug}
                          className="group flex items-baseline justify-between gap-4 py-1.5 border-b border-border/50 last:border-b-0"
                        >
                          <span className="text-sm text-muted group-hover:text-foreground transition-colors leading-relaxed">
                            {article.title}
                          </span>
                          <span className="shrink-0 text-xs text-muted-foreground font-mono whitespace-nowrap">
                            {article.date}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/blog?category=${encodeURIComponent(name)}`}
                    className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline transition-colors"
                  >
                    Read more articles on {name}{" "}
                    <ArrowRight size={12} className="shrink-0" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
