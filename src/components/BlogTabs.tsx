"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, CheckCircle, AlertCircle } from "lucide-react";
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
      <p className="text-sm text-muted py-8">
        No {tab === "thoughts" ? "thoughts" : "articles"} yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article key={post._id}>
          <Link href={`/blog/${post.slug}`} className="group block">
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

function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setMessage("Subscribed! Check your inbox.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-foreground mb-1">
        Join the conversation
      </h3>
      <p className="text-sm text-muted mb-4">
        No spam. Just the highest quality ideas.
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle size={16} />
          <p className="text-sm font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            required
            disabled={status === "sending"}
            className="flex-1 min-w-0 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity shrink-0 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Subscribe"}
            <ArrowRight size={14} />
          </button>
        </form>
      )}

      {status === "error" && (
        <div className="mt-3 flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle size={14} />
          <span>{message}</span>
        </div>
      )}
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
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-12 max-w-lg">
          <NewsletterCard />
        </div>

        <div className="mb-10">
          <p className="text-center text-xs text-accent/60 tracking-[0.6em] select-none">
            . . .
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-6 border-b border-border">
            <button
              onClick={() => setActiveTab("thoughts")}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "thoughts"
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              Thoughts
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
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
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-48 rounded-md border border-border bg-background pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground mb-6">
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
