import type { Metadata } from "next";
import { Mail, MessageSquare, Mic, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muntasir Mahdi — for advice, customer service, speaking, or partnerships.",
};

const contactSections = [
  {
    icon: MessageSquare,
    title: "Advice / Mentorship",
    description:
      "Looking for guidance on marketing, copywriting, freelancing, or building a solopreneur business? I offer mentorship through my Inner Circle and Mastermind communities.",
    email: null,
    action: {
      label: "Learn More",
      href: "/",
    },
  },
  {
    icon: Mail,
    title: "Customer Service",
    description:
      "Having issues with one of my courses, books, or products? Please email me and I'll help resolve it.",
    email: "hello@muntasirmahdi.com",
  },
  {
    icon: Mic,
    title: "Speaking & Media",
    description:
      "Want to invite me to speak at your event, podcast, or panel? I'm open to relevant opportunities in marketing, solopreneurship, and digital skills.",
    email: "hello@muntasirmahdi.com",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description:
      "Interested in collaborating, sponsoring, or exploring business opportunities? Let's talk.",
    email: "hello@muntasirmahdi.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="The best way to reach me is by email. Here are the right contacts for different needs."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-3xl space-y-6">
            {contactSections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-accent/10 p-2 shrink-0 mt-0.5">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {section.description}
                      </p>
                      {section.email && (
                        <a
                          href={`mailto:${section.email}`}
                          className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                        >
                          {section.email}
                          <ArrowRight size={14} />
                        </a>
                      )}
                      {section.action && (
                        <Link
                          href={section.action.href}
                          className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                        >
                          {section.action.label}
                          <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
