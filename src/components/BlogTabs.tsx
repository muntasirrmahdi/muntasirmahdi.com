"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { SanityPost } from "@/lib/sanity";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostList({ posts, tab }: { posts: SanityPost[]; tab: string }) {
  if (posts.length === 0) {
    return (
      <p className="text-sm text-muted py-12 text-center">
        No {tab === "thoughts" ? "thoughts" : "articles"} yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="divide-y divide-border">
      {posts.map((post) => (
        <article key={post._id}>
          <Link href={`/blog/${post.slug}`} className="group block py-5 sm:py-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <span className="shrink-0 text-xs text-muted-foreground font-mono whitespace-nowrap">
                {formatDate(post.publishedAt)}
              </span>
            </div>
            {post.excerpt && (
              <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            )}
            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
              {post.category && <span>{post.category.title}</span>}
              {post.readTime && <span>{post.readTime} min read</span>}
              {post.language === "bn" && (
                <span className="text-[10px] uppercase tracking-wider">বাংলা</span>
              )}
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

interface BlogTabsProps {
  thoughts: SanityPost[];
  articles: SanityPost[];
}

export function BlogTabs({ thoughts, articles }: BlogTabsProps) {
  const [activeTab, setActiveTab] = useState<"thoughts" | "articles">(
    "thoughts"
  );
  const [search, setSearch] = useState("");

  const filteredArticles = search.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(search.toLowerCase()) ||
          (a.excerpt &&
            a.excerpt.toLowerCase().includes(search.toLowerCase()))
      )
    : articles;

  return (
    <section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-center justify-between mb-10">
          <div className="flex gap-8 border-b border-border">
            <button
              onClick={() => setActiveTab("thoughts")}
              className={`pb-4 text-xl font-mono font-semibold border-b-2 transition-colors ${
                activeTab === "thoughts"
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              Thoughts
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`pb-4 text-xl font-mono font-semibold border-b-2 transition-colors ${
                activeTab === "articles"
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              Articles
            </button>
          </div>

          {activeTab === "articles" && (
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-60 rounded-md border border-border bg-background pl-10 pr-4 py-3 text-base text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground mb-8">
          {activeTab === "thoughts"
            ? `${thoughts.length} thought${thoughts.length !== 1 ? "s" : ""}`
            : `${filteredArticles.length} article${
                filteredArticles.length !== 1 ? "s" : ""
              }`}
        </p>

        <PostList
          posts={activeTab === "thoughts" ? thoughts : filteredArticles}
          tab={activeTab}
        />
      </div>
    </section>
  );
}
