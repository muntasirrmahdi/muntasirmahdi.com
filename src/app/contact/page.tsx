import type { Metadata } from "next";
import { MessageSquare, Mail, Mic, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Muntasir Mahdi — for advice, customer service, speaking, or partnerships.",
  alternates: {
    canonical: "https://muntasirmahdi.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Me"
        description="Thank you for wanting to reach out. I read every email personally and will do my best to get back to you. To make sure your message reaches the right place, please use the contact points below."
      />

      {/* Advice & Questions */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-accent shrink-0" />
                <h2 className="font-semibold text-foreground">
                  Advice &amp; Questions
                </h2>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm text-muted leading-relaxed">
                If you have a question about marketing, copywriting,
                freelancing, solopreneurship, or anything I write about — start
                here. I share most of my knowledge for free through these
                resources:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/books"
                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                  >
                    <ArrowRight size={12} />
                    Books
                  </Link>
                  <span className="text-sm text-muted ml-1">
                    — Deep dives into marketing, copywriting, and
                    solopreneurship
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/newsletters/banglay-solopreneurship-7204653483697815553/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                  >
                    <ArrowRight size={12} />
                    Banglay Solopreneurship Newsletter
                  </a>
                  <span className="text-sm text-muted ml-1">
                    — Weekly LinkedIn newsletter in Bangla
                  </span>
                </li>
                <li>
                  <a
                    href="https://learnwithmuntasir.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                  >
                    <ArrowRight size={12} />
                    Learn with Muntasir
                  </a>
                  <span className="text-sm text-muted ml-1">
                    — Courses and communities for serious learners
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-accent shrink-0" />
                <h2 className="font-semibold text-foreground">
                  Customer Service
                </h2>
              </div>
            </div>
            <div className="md:col-span-2 space-y-3">
              <p className="text-sm text-muted leading-relaxed">
                Having trouble with a course, book, or product you purchased?
                Message me on Facebook or send an email and I will help resolve
                it as soon as possible.
              </p>
              <div className="space-y-1.5">
                <a
                  href="https://facebook.com/muntasirmahdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  <ArrowRight size={12} />
                  Facebook page
                </a>
                <br />
                <a
                  href="mailto:hello@muntasirmahdi.com"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  <ArrowRight size={12} />
                  hello@muntasirmahdi.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking & Media */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <Mic size={18} className="text-accent shrink-0" />
                <h2 className="font-semibold text-foreground">
                  Speaking &amp; Media
                </h2>
              </div>
            </div>
            <div className="md:col-span-2 space-y-3">
              <p className="text-sm text-muted leading-relaxed">
                Muntasir Mahdi is an author, educator, and solopreneur who has
                mentored over 30,000 people across marketing, freelancing, and
                digital skills. He is available for podcast interviews, event
                speaking, panel discussions, and media contributions.
              </p>
              <a
                href="mailto:muntasirrahmanmahdi@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
              >
                <ArrowRight size={12} />
                muntasirrahmanmahdi@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships & Collaboration */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <Handshake size={18} className="text-accent shrink-0" />
                <h2 className="font-semibold text-foreground">
                  Partnerships &amp; Collaboration
                </h2>
              </div>
            </div>
            <div className="md:col-span-2 space-y-3">
              <p className="text-sm text-muted leading-relaxed">
                Interested in collaborating, sponsoring a newsletter issue,
                co-creating a project, or exploring a business partnership?
                Send a brief proposal and I will review it personally.
              </p>
              <a
                href="mailto:muntasirrahmanmahdi@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
              >
                <ArrowRight size={12} />
                muntasirrahmanmahdi@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Closing */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Thank you again!
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              I appreciate you taking the time to reach out. Whether you are a
              reader, a student, a fellow creator, or a potential partner —
              your message matters to me. I try to respond to every email
              personally, so please allow a few days for a reply.
            </p>
            <p className="text-sm text-muted leading-relaxed mt-3">
              Until then, keep learning and building.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
