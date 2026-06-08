import type { Metadata } from "next";
import { Newspaper, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Banglay Solopreneurship — weekly newsletter on solopreneurship, marketing, and digital skills by Muntasir Mahdi.",
};

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        title="Banglay Solopreneurship"
        description="A weekly newsletter on solopreneurship, marketing, and digital skills. 77+ issues published."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="rounded-lg border border-border bg-card p-8 sm:p-12">
              <Newspaper size={32} className="text-accent mb-4" />
              <h2 className="text-xl font-mono font-semibold text-foreground mb-3">
                What is Banglay Solopreneurship?
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-4">
                A weekly newsletter where Muntasir shares practical insights on
                building a solo business — marketing strategies, digital tools,
                mindset shifts, and real experiences from his own journey.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Published on LinkedIn with 77+ issues and growing. Topics
                range from content marketing and copywriting to AI tools and
                business systems.
              </p>
              <a
                href="https://www.linkedin.com/newsletters/banglay-solopreneurship-7184909304753516544/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Read on LinkedIn
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
