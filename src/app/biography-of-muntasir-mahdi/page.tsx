import type { Metadata } from "next";
import { ArrowRight, BookOpen, GraduationCap, Cpu } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muntasir Mahdi is an author and educator from Bangladesh. He writes about clear thinking, better learning, and building systems.",
};

const topics = [
  {
    icon: BookOpen,
    title: "Clear Thinking",
    description:
      "Most of our problems come from unclear thinking. Muntasir writes about how to think clearly, make better decisions, and cut through the noise that modern life throws at us.",
  },
  {
    icon: GraduationCap,
    title: "Better Learning",
    description:
      "The education system teaches us to give the right answer, not to think. Muntasir explores how we can design better learning systems for ourselves and others.",
  },
  {
    icon: Cpu,
    title: "Systems & AI",
    description:
      "How to build digital assets, use AI tools effectively, and create systems that work without you. Practical advice for the modern knowledge worker.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Muntasir Mahdi"
        description="Author, educator, and solopreneur from Sylhet, Bangladesh."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="aspect-[3/4] rounded-lg border border-border bg-card flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Photo</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-xl font-mono font-semibold text-foreground mb-4">
                Biography
              </h2>
              <div className="space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  Muntasir Mahdi was born in 1997 in Sylhet, Bangladesh. He is an
                  author of 10+ books on marketing, sales, copywriting, and
                  digital skills. His work has helped thousands of people in
                  Bangladesh learn how to build online businesses.
                </p>
                <p>
                  For nearly 7 years, he has mentored 30,000+ people through his
                  books, articles, courses, and communities. He runs{" "}
                  <strong className="text-foreground">Learn with Muntasir</strong>,
                  a platform dedicated to teaching practical digital skills that
                  bridge the gap between school and work.
                </p>
                <p>
                  He also co-hosts the{" "}
                  <strong className="text-foreground">
                    Mahdi & Mamun Podcast
                  </strong>
                  , where he discusses solopreneurship, marketing, and the
                  business landscape in Bangladesh.
                </p>
                <p>
                  Muntasir believes better thinking builds better lives, and
                  better learning builds better futures. He writes in English
                  about clear thinking, learning systems, and building digital
                  assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-mono font-semibold text-foreground mb-10">
            What I Write About
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.title}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <div className="rounded-full bg-accent/10 p-2 inline-flex mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-mono font-semibold text-foreground mb-6">
            Learn with Muntasir
          </h2>
          <p className="text-sm text-muted leading-relaxed max-w-2xl mb-8">
            A platform dedicated to teaching practical digital skills --
            marketing, copywriting, freelancing, and solopreneurship. Courses
            designed to close the gap between what school teaches and what the
            market needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
