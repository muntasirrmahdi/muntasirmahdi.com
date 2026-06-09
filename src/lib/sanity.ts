import { createClient, type QueryParams } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pt5maea8",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  perspective: "published",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: 60,
      tags,
    },
  });
}

// ─── Queries ────────────────────────────────────────────

export const postsQuery = `*[_type == "post" && (!defined($postType) || postType == $postType)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  postType,
  language,
  publishedAt,
  readTime,
  excerpt,
  category->{ title, "slug": slug.current }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  postType,
  language,
  publishedAt,
  readTime,
  body,
  excerpt,
  category->{ title, "slug": slug.current }
}`;

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description
}`;

export const allSlugsQuery = `*[_type == "post" && defined(slug.current)] {
  "slug": slug.current
}`;

// ─── Types ──────────────────────────────────────────────

export interface SanityCategory {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: string;
  postType: "thought" | "article";
  language: "en" | "bn";
  publishedAt: string;
  readTime?: number;
  excerpt?: string;
  category?: SanityCategory;
  body?: any;
}
