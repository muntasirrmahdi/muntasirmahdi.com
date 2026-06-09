import type { Metadata } from "next";
import {
  sanityFetch,
  postsQuery,
  type SanityPost,
} from "@/lib/sanity";
import { BlogTabs } from "@/components/BlogTabs";
import { NewsletterCard } from "@/components/NewsletterCard";

export const metadata: Metadata = {
  title: "Blogs & Thoughts | Muntasir Mahdi",
  description:
    "Articles on digital business, productivity, clear thinking, learning & education systems, AI, online business skills, and personal branding.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const [thoughts, articles] = await Promise.all([
    sanityFetch<SanityPost[]>({
      query: postsQuery,
      params: { postType: "thought" },
      tags: ["thoughts"],
    }),
    sanityFetch<SanityPost[]>({
      query: postsQuery,
      params: { postType: "article" },
      tags: ["articles"],
    }),
  ]);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div className="md:col-span-2 space-y-5">
              <h1 className="text-3xl sm:text-4xl font-mono font-semibold tracking-tight text-foreground">
                Blogs &amp; Thoughts
              </h1>
              <p className="text-base text-muted leading-relaxed">
                This page has my best articles on digital business, productivity, clear thinking, learning &amp; education systems, AI, online business skills, and personal branding.
              </p>
              <p className="text-base text-muted leading-relaxed">
                The &lsquo;thoughts&rsquo; you see are RAW and unfiltered. They
                come straight from my brain, and I post them here the moment I
                have them.
              </p>
              <p className="text-base text-muted leading-relaxed">
                Also, I share actionable lessons on thinking clearly, building
                systems, writing without AI, and how to survive and grow in this
                AI era.
              </p>
              <p className="text-base text-muted leading-relaxed">
                You&rsquo;ll also find couple of books I recommend, tools I use,
                and small systems that make life easier.
              </p>
              <p className="text-base text-muted italic">
                Scroll at your own risk.
              </p>
            </div>
            <div>
              <NewsletterCard />
            </div>
          </div>
        </div>
      </section>

      <BlogTabs thoughts={thoughts} articles={articles} />
    </>
  );
}
