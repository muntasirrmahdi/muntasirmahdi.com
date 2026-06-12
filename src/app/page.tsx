import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Newspaper,
  Mail,
  CheckCircle,
} from "lucide-react";
import { PersonStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  openGraph: {
    title: "Muntasir Mahdi - Author from Bangladesh",
    description:
      "Muntasir Mahdi writes about mental tools, income systems, and applied AI. 10+ books. 30,000+ students. Author from Bangladesh.",
    url: "https://muntasirmahdi.com",
  },
  twitter: {
    title: "Muntasir Mahdi - Author from Bangladesh",
    description:
      "Muntasir Mahdi writes about mental tools, income systems, and applied AI. 10+ books. 30,000+ students. Author from Bangladesh.",
  },
  alternates: {
    canonical: "https://muntasirmahdi.com",
  },
};

const books = [
  {
    title: "Brainfluence: The Psychology of Marketing",
    description:
      "How psychological marketing techniques influence our brain — the hacks, tips, and tricks that shape every buying decision.",
  },
  {
    title: "Content Marketing Mastery",
    description:
      "How to use content for marketing — finding audience needs, building strategy, and publishing in the right places.",
  },
  {
    title: "Digital Marketing e Hatekhari",
    description:
      "A beginner's guide to digital marketing told through stories — for anyone starting a career in this space.",
  },
  {
    title: "Copywriting: The Future of Content",
    description:
      "The magical world of copywriting and why it's the most valuable skill in the content economy.",
  },
  {
    title: "Digital Product e Hatekhari",
    description:
      "How digital products took a complete beginner from zero to crore in 5 years — a step-by-step story.",
  },
  {
    title: "Digital Sales: The Future of Sales",
    description:
      "The first book on digital sales in Bangladesh — written from 10 years of hands-on sales experience.",
  },
  {
    title: "Client Hunting",
    description:
      "From buyer persona to client communication — an effective guide to mastering client hunting.",
  },
  {
    title: "Social Media Marketing Handbook",
    description:
      "Formulas, strategies, and frameworks to take your social media presence from ordinary to extraordinary.",
  },
  {
    title: "Facebook A to Z: Marketing, Sales and Branding",
    description:
      "A complete guide to using Facebook the right way for your business — marketing, sales, and branding.",
  },
  {
    title: "How to Sell Like Hell",
    description:
      "Powerful sales tactics, sales psychology, and a money-making mindset — compact and actionable.",
  },
];

const blogPosts = [
  {
    date: "May 11, 2026",
    title: "SuperOC: Persistent Memory Stack for Your Agentic Tools",
    excerpt:
      "Since early 2026, I've been spending nearly every day with agentic coding tools — OpenCode, Claude Code, Hermes Agents...",
  },
  {
    date: "May 7, 2026",
    title: "16 Years of Learning the Wrong Thing",
    excerpt:
      "For 16 years of our lives, we've only learned one thing: how to give the right answer. We never learned how to think, how to question...",
  },
  {
    date: "May 6, 2026",
    title: "Content Writing in the Age of AI",
    excerpt:
      "I've been watching how content writing, copywriting, and marketing work are changing. Some clients have left, thinking AI replaces everything...",
  },
];

export default function Home() {
  return (
    <>
      <PersonStructuredData />
      {/* HERO — Large tagline + book cover + CTAs */}
      <section className="w-full px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <p className="font-mono text-sm font-medium text-accent mb-4">
              Author & Educator
            </p>
            <h1 className="text-3xl sm:text-4xl font-mono font-semibold tracking-tight text-foreground leading-tight">
              Mental tools, income systems, and applied AI.
            </h1>
            <p className="mt-5 text-base text-muted leading-relaxed">
              I write about how people think, learn, and build in Bangladesh.
              For nearly 7 years, I've mentored 30,000+ people to become
              solopreneurs through my books, articles, and courses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/biography-of-muntasir-mahdi"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:scale-105 hover:opacity-90 transition-all duration-200"
              >
                Start Here
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/banglay-solopreneurship-newsletter-by-muntasir-mahdi"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:scale-105 hover:bg-card transition-all duration-200"
              >
                Read the Newsletter
                <Newspaper size={16} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="w-52 aspect-[3/4] rounded-md bg-background border border-border flex items-center justify-center">
              <div className="text-center px-4">
                <BookOpen size={40} className="mx-auto text-muted-foreground mb-3" />
                <p className="text-xs font-mono font-medium text-foreground">
                  Brainfluence
                </p>
                <p className="text-xs text-muted mt-1">
                  The Psychology of Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HI, I'M MUNTASIR — Bio + Newsletter preview (2-column) */}
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Bio + Stats */}
            <div>
              <h2 className="text-2xl font-mono font-semibold text-foreground mb-4">
                Hi, I'm Muntasir
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-4">
                For nearly 7 years, I've mentored 30,000+ people on how to make
                money online and become solopreneurs through my books, articles,
                and courses. I write about mental tools, income systems, and
                applied AI.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-6">
                I believe better thinking builds better lives, and better
                learning builds better futures. I care about how people think,
                learn, and build in Bangladesh. This is where I think in public.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-lg border border-border bg-card p-3 text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">
                    30K+
                  </p>
                  <p className="text-xs text-muted mt-0.5">Mentored</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-3 text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">
                    10+
                  </p>
                  <p className="text-xs text-muted mt-0.5">Books</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-3 text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">
                    7+
                  </p>
                  <p className="text-xs text-muted mt-0.5">Years</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-3 text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">
                    77+
                  </p>
                  <p className="text-xs text-muted mt-0.5">Newsletters</p>
                </div>
              </div>

              <Link
                href="/biography-of-muntasir-mahdi"
                className="mt-5 inline-flex items-center gap-1 text-sm text-accent hover:underline"
              >
                Read my full story <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: Latest Newsletter preview */}
            <div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="rounded-full bg-accent/10 p-2">
                    <Newspaper size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-foreground text-sm">
                      Banglay Solopreneurship
                    </h3>
                    <p className="text-xs text-muted">Weekly Newsletter</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground font-mono mb-2">
                  Latest Issue
                </p>
                <p className="text-sm text-foreground leading-relaxed mb-3">
                  My weekly newsletter on solopreneurship, marketing, and
                  digital skills — now 77+ issues strong.
                </p>
                <p className="text-xs text-muted leading-relaxed mb-5">
                  Each issue covers actionable insights on building digital
                  assets, marketing strategies that work in Bangladesh, and the
                  solopreneur mindset.
                </p>

                <Link
                  href="/banglay-solopreneurship-newsletter-by-muntasir-mahdi"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-xs font-medium text-accent-foreground hover:scale-105 hover:opacity-90 transition-all duration-200"
                >
                  Read the Latest Issue
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL COURSE / CTA — 2-column: value prop + signup prompt */}
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-mono font-semibold text-foreground mb-4">
                Get actionable insights every week
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Join 77+ subscribers who get my weekly newsletter on
                solopreneurship, mental tools, and digital skills. No spam.
                Unsubscribe anytime.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-muted">
                    Practical frameworks for mental tools and income
                    systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-muted">
                    Actionable strategies for building digital assets and
                    solopreneurship
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-muted">
                    Marketing and sales tactics that work specifically in
                    Bangladesh
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="rounded-full bg-accent/10 p-3 inline-flex mb-4">
                <Mail size={28} className="text-accent" />
              </div>
              <h3 className="text-lg font-mono font-semibold text-foreground mb-2">
                Banglay Solopreneurship
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                One actionable insight delivered to your inbox every week.
              </p>
              <Link
                href="/banglay-solopreneurship-newsletter-by-muntasir-mahdi"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:scale-105 hover:opacity-90 transition-all duration-200"
              >
                Subscribe Free
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-mono font-semibold text-foreground">
                Books
              </h2>
              <p className="mt-1 text-sm text-muted">
                Books on marketing, sales, copywriting, and digital skills
              </p>
            </div>
            <Link
              href="/books-by-muntasir-mahdi"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.slice(0, 6).map((book) => (
              <div
                key={book.title}
                className="rounded-lg border border-border bg-card p-5 flex flex-col"
              >
                <div className="w-full aspect-[3/4] rounded-md bg-background flex items-center justify-center mb-4 border border-border">
                  <BookOpen size={32} className="text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-sm leading-relaxed">
                  {book.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed line-clamp-3">
                  {book.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/books-by-muntasir-mahdi"
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
            >
              View all books <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* COMMUNITIES */}
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-mono font-semibold text-foreground mb-10">
            My Communities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-accent/10 p-2">
                  <Users size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Inner Circle</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                By joining the Inner Circle, you can access everything from
                Learn with Muntasir for free.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-accent/10 p-2">
                  <Users size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Mastermind</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                By joining the Mastermind, you can network with positive-minded
                people and get 1-1 live support for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-mono font-semibold text-foreground">
                Latest Articles
              </h2>
              <p className="mt-1 text-sm text-muted">
                Thoughts on solopreneurship, marketing, and digital skills
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <p className="text-xs text-muted-foreground font-mono mb-2">
                  {post.date}
                </p>
                <h3 className="font-semibold text-foreground text-sm">
                  {post.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href="/blog"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                >
                  Read more <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
            >
              View all articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
