import { client } from "@/lib/sanity";
import { type SanityPost } from "@/lib/sanity";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const posts = await client.fetch<SanityPost[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, "slug": slug.current, publishedAt, excerpt, category->{ title }
    }`
  );

  const siteUrl = "https://muntasirmahdi.com";

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt || ""}]]></description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      ${post.category ? `<category>${post.category.title}</category>` : ""}
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Muntasir Mahdi - Blog &amp; Thoughts</title>
    <link>${siteUrl}</link>
    <description>Articles and thoughts on digital business, productivity, clear thinking, AI, and building systems from Muntasir Mahdi</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
