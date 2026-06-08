import type { Metadata } from "next";
import { Mic, Podcast, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Speaking & Media",
  description:
    "Podcast appearances, speaking engagements, and media features by Muntasir Mahdi.",
};

const appearances = [
  {
    title: "Mahdi & Mamun Podcast",
    type: "Podcast",
    description:
      "Co-hosted podcast discussing solopreneurship, marketing, and the business landscape in Bangladesh.",
    frequency: "Weekly",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        title="Speaking & Media"
        description="Podcast appearances, interviews, and speaking engagements."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-3xl space-y-6">
            {appearances.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-accent/10 p-2">
                    <Mic size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      {item.type} &middot; {item.frequency}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            <div className="rounded-lg border border-border bg-card p-6 text-center">
              <Podcast size={24} className="mx-auto text-muted-foreground mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Want to Invite Me?
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">
                If you'd like to have me as a guest on your podcast, event, or
                panel — I'd love to hear from you.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline"
              >
                Contact me <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
