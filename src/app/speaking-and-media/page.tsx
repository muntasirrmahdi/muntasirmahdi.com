import type { Metadata } from "next";
import { Mic, Quote, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Speaking & Media",
  description:
    "Podcast appearances, speaking engagements, and media features by Muntasir Mahdi.",
  alternates: {
    canonical: "https://muntasirmahdi.com/speaking-and-media",
  },
};

const clients = [
  "Learn with Muntasir",
  "Inner Circle",
  "Mastermind",
  "University of Dhaka",
  "BRAC University",
  "Southeast University",
  "Bangladesh Brand Forum",
  "Startup Bangladesh",
  "eGeneration",
  "Bdjobs",
];

const podcastAppearances = [
  {
    title: "Mahdi & Mamun Podcast",
    type: "Podcast",
    description:
      "Co-hosted weekly podcast discussing solopreneurship, marketing, and the business landscape in Bangladesh. Topics range from digital strategy and content marketing to the realities of building a business in the local ecosystem.",
    frequency: "Weekly",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        title="Speaking & Media"
        description="I speak, teach, and host conversations about digital marketing, solopreneurship, and the Bangladesh business landscape. Below is a selection of organizations I have worked with, past appearances, and how to invite me to your event."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Organizations I Have Worked With
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            {clients.slice(0, -1).join(", ")}, and {clients.slice(-1)}.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <blockquote className="border-l-2 border-accent pl-4 sm:pl-6">
            <div className="mb-2">
              <Quote size={20} className="text-accent/60" />
            </div>
            <p className="text-base sm:text-lg text-foreground leading-relaxed italic">
              I have attended a lot of workshops over the years, but
              Muntasir&apos;s session on digital marketing was different. He did
              not just throw around buzzwords — he showed us exactly how to
              build a content engine from scratch. Within three months of
              applying his framework, our engagement numbers had doubled. That
              is the kind of practical insight he brings to every room.
            </p>
            <footer className="mt-4 text-sm text-muted not-italic">
              <strong className="text-foreground">Shahrin Afroz</strong>
              &nbsp;&mdash;&nbsp;Marketing Lead, Aceredo Digital
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Podcast & Media
          </h2>
          <div className="space-y-4">
            {podcastAppearances.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-5 sm:p-6"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-full bg-accent/10 p-2 shrink-0 mt-0.5">
                    <Mic size={18} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      {item.type} &middot; {item.frequency}
                    </p>
                    <p className="text-sm text-muted leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Interested in Having Me Speak at Your Event?
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-8">
            I welcome invitations to speak, teach, or run workshops. Here is how
            the process works.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-semibold shrink-0 mt-0.5">
                1
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Send an Email
                </h3>
                <p className="text-sm text-muted leading-relaxed mt-1">
                  Reach out to{" "}
                  <a
                    href="mailto:hello@muntasirmahdi.com"
                    className="text-accent hover:underline"
                  >
                    hello@muntasirmahdi.com
                  </a>{" "}
                  with a brief introduction and the nature of your event.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-semibold shrink-0 mt-0.5">
                2
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Share the Details
                </h3>
                <p className="text-sm text-muted leading-relaxed mt-1">
                  Tell me about your event — the date, format (in-person or
                  virtual), expected audience size, and what you hope attendees
                  will take away.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-semibold shrink-0 mt-0.5">
                3
              </span>
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Suggest Topics
                </h3>
                <p className="text-sm text-muted leading-relaxed mt-1">
                  Let me know which areas you would like covered — digital
                  marketing, solopreneurship, content strategy, or the
                  Bangladesh business landscape. I tailor every session to the
                  audience.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">
            I do my best to accommodate requests, but I prioritize events that
            align with my expertise.
          </p>

          <div className="mt-8">
            <Link
              href="mailto:hello@muntasirmahdi.com"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-black hover:bg-accent/90 transition-colors"
            >
              <Mail size={16} />
              Send an Invite
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
            Want to Stay in Touch?
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-lg mx-auto">
            Join the Inner Circle newsletter for practical insights on digital
            marketing, solopreneurship, and building a business that lasts.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-black hover:bg-accent/90 transition-colors"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
