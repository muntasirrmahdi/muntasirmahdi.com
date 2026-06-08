import type { Metadata } from "next";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Muntasir Mahdi on clear thinking, learning systems, and building digital assets.",
};

const articles = [
  {
    date: "May 11, 2026",
    title: "SuperOC: Persistent Memory Stack for Your Agentic Tools",
    excerpt:
      "Since early 2026, I've been spending nearly every day with agentic coding tools — OpenCode, Claude Code, Hermes Agents... Here's how I built a persistent memory system that makes AI tools actually remember.",
    readTime: "8 min read",
  },
  {
    date: "May 7, 2026",
    title: "16 Years of Learning the Wrong Thing",
    excerpt:
      "For 16 years of our lives, we've only learned one thing: how to give the right answer. We never learned how to think, how to question, how to learn. Here's why that needs to change.",
    readTime: "6 min read",
  },
  {
    date: "May 6, 2026",
    title: "Content Writing in the Age of AI",
    excerpt:
      "I've been watching how content writing, copywriting, and marketing work are changing. Some clients have left, thinking AI replaces everything. Here's what I've learned.",
    readTime: "7 min read",
  },
  {
    date: "May 2, 2026",
    title: "Portfolio Website Elements: What to Include",
    excerpt:
      "A professional portfolio website needs more than just a gallery. Here are the essential elements that actually help you land clients.",
    readTime: "5 min read",
  },
  {
    date: "Apr 28, 2026",
    title: "AI Tools for Small Businesses: From Basics to Expert",
    excerpt:
      "A practical guide to AI tools that small businesses can actually use — from simple automation to advanced workflows.",
    readTime: "10 min read",
  },
  {
    date: "Apr 22, 2026",
    title: "How to Optimize Your LinkedIn Profile",
    excerpt:
      "Your LinkedIn profile is your digital storefront. Here's how to optimize it for job opportunities and client inquiries.",
    readTime: "6 min read",
  },
  {
    date: "Apr 18, 2026",
    title: "Negotiation Tips for Freelancers",
    excerpt:
      "Negotiation is one of the most underrated skills for freelancers. Here are practical tips to get better deals.",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Articles"
        description="Writing about solopreneurship, marketing, digital skills, and clear thinking."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-3xl space-y-8">
            {articles.map((post) => (
              <article
                key={post.title}
                className="rounded-lg border border-border bg-card p-6 hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href="/blog"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                >
                  Read more <ArrowRight size={12} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
