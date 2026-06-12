import type { Metadata } from "next";
import { Newspaper, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/ui";
import { NewsletterForm } from "@/components/NewsletterForm";
import issuesData from "@/data/newsletter-issues.json";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Banglay Solopreneurship — a weekly newsletter on solopreneurship, marketing, and digital skills by Muntasir Mahdi. 78+ issues published.",
  alternates: {
    canonical: "https://muntasirmahdi.com/banglay-solopreneurship-newsletter-by-muntasir-mahdi",
  },
};

interface NewsletterIssue {
  date: string;
  title: string;
  url: string;
}

interface NewsletterYear {
  year: number;
  issues: NewsletterIssue[];
}

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(dateStr: string): string {
  const [, month, day] = dateStr.split("-");
  return `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}`;
}

function buildNewsletterData(): NewsletterYear[] {
  const grouped: Record<number, NewsletterIssue[]> = {};

  for (const item of issuesData as { title: string; url: string; date: string }[]) {
    const year = parseInt(item.date.slice(0, 4), 10);
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push({
      date: formatDate(item.date),
      title: item.title,
      url: item.url,
    });
  }

  return Object.entries(grouped)
    .map(([year, issues]) => ({ year: parseInt(year), issues }))
    .sort((a, b) => b.year - a.year);
}

const newsletterData = buildNewsletterData();

const linkedinUrl =
  "https://www.linkedin.com/newsletters/banglay-solopreneurship-7184909304753516544/";

function AsteriskSeparator() {
  return (
    <div className="w-full px-4 sm:px-6">
      <div className="mx-auto">
        <div className="flex items-center justify-center gap-3 py-8 select-none">
          <span className="text-muted-foreground text-xs font-mono">*</span>
          <span className="text-muted-foreground text-xs font-mono">*</span>
          <span className="text-muted-foreground text-xs font-mono">*</span>
        </div>
      </div>
    </div>
  );
}

function NewsletterArchive() {
  if (newsletterData.length === 0) return null;

  return (
    <section className="border-t border-border">
      <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Newspaper size={20} className="text-accent" />
            <h2 className="text-lg font-mono font-semibold text-foreground">
              All Newsletters
            </h2>
          </div>

          <div className="space-y-10">
            {newsletterData.map((yearGroup) => (
              <div key={yearGroup.year}>
                <h3 className="text-sm font-mono font-medium text-accent mb-4">
                  {yearGroup.year}
                </h3>
                <div className="space-y-1.5">
                  {yearGroup.issues.map((issue, idx) => (
                    <a
                      key={`${yearGroup.year}-${idx}`}
                      href={issue.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-4 py-1.5 -mx-2 px-2 rounded-sm hover:bg-card/50 transition-colors"
                    >
                      <span className="shrink-0 text-xs font-mono text-muted-foreground w-16 tabular-nums">
                        {issue.date}
                      </span>
                      <span className="text-base text-foreground group-hover:text-accent transition-colors">
                        {issue.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function NewsletterPage() {
  return (
    <div lang="bn">
      <PageHeader
        title="Banglay Solopreneurship"
        description="A weekly newsletter on solopreneurship, marketing, and digital skills — written by Muntasir Mahdi. 78+ issues published on LinkedIn."
      />

      <section className="border-t border-border">
      <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto">
          <div className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-mono font-semibold text-foreground leading-snug">
                Banglay Solopreneurship
                </h2>
                <p className="italic text-base text-muted leading-relaxed border-l-2 border-accent/50 pl-4">
                  Practical insights on building a solo business — marketing
                  strategy, digital tools, mindset shifts, and real experience
                  from the journey.
                </p>
                <p className="text-base text-muted leading-relaxed">
                  Every week, Muntasir shares actionable lessons on
                  solopreneurship, content marketing, copywriting, client
                  hunting, and the systems that keep a one-person business
                  running. No fluff. Just what works.
                </p>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:scale-105 hover:opacity-90 transition-all duration-200"
                >
                  Read on LinkedIn
                  <ExternalLink size={16} />
                </a>
              </div>
          </div>
        </div>
      </section>

      <NewsletterForm />

      <AsteriskSeparator />

      <NewsletterArchive />
    </div>
  );
}
