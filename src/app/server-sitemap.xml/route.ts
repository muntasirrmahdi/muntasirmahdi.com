import { getServerSideSitemap } from "next-sitemap";
import { client } from "@/lib/sanity";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const posts = await client.fetch<Array<{ slug: string; publishedAt: string }>>(
    `*[_type == "post"] | order(publishedAt desc) {
      "slug": slug.current,
      publishedAt
    }`
  );

  const fields = posts.map((post) => ({
    loc: `https://muntasirmahdi.com/blog/${post.slug}`,
    lastmod: post.publishedAt,
    changefreq: "monthly" as const,
    priority: 0.6,
  }));

  return getServerSideSitemap(fields);
}
