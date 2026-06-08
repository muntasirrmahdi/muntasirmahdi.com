import type { Metadata } from "next";
import { Newspaper, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Banglay Solopreneurship — a weekly newsletter on solopreneurship, marketing, and digital skills by Muntasir Mahdi. 77+ issues published.",
};

interface NewsletterIssue {
  date: string;
  title: string;
}

interface NewsletterYear {
  year: number;
  issues: NewsletterIssue[];
}

const newsletterData: NewsletterYear[] = [
  {
    year: 2026,
    issues: [
      {
        date: "Jun 4",
        title:
          "On building digital assets, the power of consistency, and why most people quit too early",
      },
      {
        date: "May 28",
        title:
          "On pricing your services, saying no to bad clients, and the art of negotiation",
      },
      {
        date: "May 21",
        title:
          "On content systems, repurposing one idea across platforms, and batch creation",
      },
      {
        date: "May 14",
        title:
          "On email marketing, building a list from zero, and the welcome sequence",
      },
      {
        date: "May 7",
        title:
          "On personal branding, thought leadership, and writing what you know",
      },
    ],
  },
  {
    year: 2025,
    issues: [
      {
        date: "Dec 17",
        title:
          "On client hunting, negotiation tactics, and closing the deal",
      },
      {
        date: "Nov 19",
        title:
          "On SEO basics, Google ranking factors, and writing for search",
      },
      {
        date: "Oct 22",
        title:
          "On AI tools for marketing, automating workflows, and staying ahead",
      },
      {
        date: "Sep 24",
        title:
          "On storytelling in business, narrative arcs, and emotional connection",
      },
      {
        date: "Aug 27",
        title:
          "On sales psychology, objection handling, and building trust",
      },
      {
        date: "Jul 30",
        title:
          "On content strategy, finding your niche, and the long game",
      },
      {
        date: "Jun 25",
        title:
          "On time management, deep work, and the 80/20 rule for solopreneurs",
      },
      {
        date: "May 28",
        title:
          "On building an audience, newsletter growth tactics, and retention",
      },
    ],
  },
  {
    year: 2024,
    issues: [
      {
        date: "Dec 18",
        title:
          "On content marketing, copywriting frameworks, and persuasive writing",
      },
      {
        date: "Nov 20",
        title:
          "On digital products, creating your first offer, and validation",
      },
      {
        date: "Oct 23",
        title:
          "On social media algorithms, organic reach, and platform strategy",
      },
      {
        date: "Sep 25",
        title:
          "On mindset, overcoming imposter syndrome, and taking action",
      },
      {
        date: "Aug 28",
        title:
          "On freelancing, building a personal brand, and getting started",
      },
    ],
  },
];

const linkedinUrl =
  "https://www.linkedin.com/newsletters/banglay-solopreneurship-7184909304753516544/";

function AsteriskSeparator() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
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
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
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
                  {yearGroup.issues.map((issue) => (
                    <a
                      key={`${yearGroup.year}-${issue.date}`}
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline gap-4 py-1.5 -mx-2 px-2 rounded-sm hover:bg-card/50 transition-colors"
                    >
                      <span className="shrink-0 text-xs font-mono text-muted-foreground w-16 tabular-nums">
                        {issue.date}
                      </span>
                      <span className="text-sm text-foreground group-hover:text-accent transition-colors">
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
    <>
      <PageHeader
        title="Banglay Solopreneurship"
        description="A weekly newsletter on solopreneurship, marketing, and digital skills — written by Muntasir Mahdi. 77+ issues published on LinkedIn."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
              <div className="md:col-span-3 space-y-5">
                <h2 className="text-xl sm:text-2xl font-mono font-semibold text-foreground leading-snug">
                  Banglay Solopreneurship
                </h2>
                <p className="italic text-sm text-muted leading-relaxed border-l-2 border-accent/50 pl-4">
                  Practical insights on building a solo business — marketing
                  strategy, digital tools, mindset shifts, and real experience
                  from the journey.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Every week, Muntasir shares actionable lessons on
                  solopreneurship, content marketing, copywriting, client
                  hunting, and the systems that keep a one-person business
                  running. No fluff. Just what works.
                </p>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  Read on LinkedIn
                  <ExternalLink size={16} />
                </a>
              </div>

              <div className="md:col-span-2">
                <div className="rounded-lg border border-border bg-card p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-accent" />
                    <h3 className="text-sm font-mono font-semibold text-foreground">
                      Get it in your inbox
                    </h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Subscribe to receive new issues directly via email. No spam,
                    unsubscribe anytime.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      disabled
                    />
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center justify-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground opacity-60 cursor-not-allowed"
                    >
                      Subscribe
                      <ArrowRight size={14} />
                    </button>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Email integration coming soon. For now, follow on LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AsteriskSeparator />

      <NewsletterArchive />
    </>
  );
}
