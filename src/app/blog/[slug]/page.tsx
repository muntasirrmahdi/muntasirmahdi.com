import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { sanityFetch, postBySlugQuery, allSlugsQuery, urlFor, type SanityPost } from "@/lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { BlogPostingStructuredData } from "@/lib/structured-data";

const ptComponents = {
  types: {
    image: ({ value }: { value: { asset: SanityImageSource; alt?: string; caption?: string } }) => (
      <figure className="my-8 relative w-full" style={{ aspectRatio: "16/9" }}>
        <Image
          src={urlFor(value.asset).width(800).url()}
          alt={value.alt || ""}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          loading="lazy"
        />
        {value.caption && (
          <figcaption className="mt-2 text-center text-xs text-muted-foreground">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    code: ({ value }: { value: { language?: string; code?: string } }) => (
      <pre className="my-6 rounded-lg bg-zinc-900 p-4 overflow-x-auto text-sm">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="mt-10 mb-4 text-xl font-semibold text-foreground">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-8 mb-3 text-lg font-semibold text-foreground">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-2 border-accent pl-4 italic text-muted">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="my-4 text-base text-muted leading-relaxed">{children}</p>
    ),
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: allSlugsQuery,
    tags: ["post-slugs"],
  });

  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<SanityPost | null>({
    query: postBySlugQuery,
    params: { slug },
    tags: [`post-${slug}`],
  });

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://muntasirmahdi.com/blog/${slug}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<SanityPost | null>({
    query: postBySlugQuery,
    params: { slug },
    tags: [`post-${slug}`],
  });

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full px-4 sm:px-6 py-12 sm:py-16">
      <BlogPostingStructuredData
        title={post.title}
        description={post.excerpt}
        publishedAt={post.publishedAt}
        url={`https://muntasirmahdi.com/blog/${slug}`}
      />
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to blog
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          {post.category && <span>{post.category.title}</span>}
          {post.readTime && <span>{post.readTime} min read</span>}
          <span className="text-[10px] uppercase tracking-wider">
            {post.language === "bn" ? "বাংলা" : "EN"}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-mono font-semibold tracking-tight text-foreground leading-tight">
          {post.title}
        </h1>

        <time className="mt-3 block text-sm text-muted">
          {formatDate(post.publishedAt)}
        </time>
      </header>

      <div className="prose-custom">
        {post.body ? (
          <PortableText value={post.body} components={ptComponents} />
        ) : (
          post.excerpt && <p className="text-base text-muted leading-relaxed">{post.excerpt}</p>
        )}
      </div>
    </article>
  );
}
