export function PersonStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muntasir Mahdi",
    url: "https://muntasirmahdi.com",
    jobTitle: "Author & Educator",
    sameAs: [
      "https://www.facebook.com/muntasirmahdi.official",
      "https://www.youtube.com/@MuntasirMahdi",
      "https://www.linkedin.com/in/muntasirmahdi",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BlogPostingStructuredData({
  title,
  description,
  publishedAt,
  updatedAt,
  url,
  authorName = "Muntasir Mahdi",
}: {
  title: string;
  description?: string;
  publishedAt: string;
  updatedAt?: string;
  url: string;
  authorName?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description || title,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    url,
    author: {
      "@type": "Person",
      name: authorName,
      url: "https://muntasirmahdi.com",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muntasir Mahdi",
    url: "https://muntasirmahdi.com",
    description:
      "Articles and thoughts on digital business, productivity, mental tools, income systems, and applied AI from Muntasir Mahdi.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://muntasirmahdi.com/blog?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
