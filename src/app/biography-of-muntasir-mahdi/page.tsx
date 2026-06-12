import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Mic,
  Briefcase,
  Heart,
  PenLine,
  Cpu,
  Bookmark,
  Users,
  Star,
} from "lucide-react";
import { PageHeader } from "@/components/ui";
import { PersonStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muntasir Mahdi is an author and educator from Bangladesh. He writes about mental tools, income systems, and applied AI.",
  alternates: {
    canonical: "https://muntasirmahdi.com/biography-of-muntasir-mahdi",
  },
};

const highlights = [
  "Author of 10+ books on marketing, sales, and digital skills",
  "Mentored 30,000+ people over 7+ years",
  "Creator of Learn with Muntasir \u2014 a platform for practical digital skills",
  "Co-host of the Mahdi & Mamun Podcast",
];

const topics = [
  {
    icon: BookOpen,
    title: "Mental Tools",
    description:
      "Frameworks, principles, and models for better decisions. Muntasir writes about the mental tools that help you think clearly, cut through noise, and navigate complexity with confidence.",
  },
  {
    icon: GraduationCap,
    title: "Income Systems",
    description:
      "Systematic income that compounds over time. Muntasir writes about revenue architecture, offer design, and building income streams that don't depend on constant hustle.",
  },
  {
    icon: Cpu,
    title: "Applied AI",
    description:
      "Practical AI for leverage -- not hype, not fear. Muntasir explores how to think alongside AI, build human+machine workflows, and use AI tools to multiply your output without losing your judgment.",
  },
];

const achievements = [
  {
    icon: BookOpen,
    title: "Author",
    items: [
      "10+ books published on marketing, sales, copywriting, and digital skills",
      "Writes in English for a global audience of entrepreneurs and knowledge workers",
      "Books bridge the gap between academic theory and real-world business execution",
    ],
  },
  {
    icon: GraduationCap,
    title: "Creator & Educator",
    items: [
      "Founder of Learn with Muntasir \u2014 a platform teaching practical digital skills",
      "Runs the Banglay Solopreneurship newsletter with actionable business insights",
      "30,000+ students mentored through courses, communities, and content",
    ],
  },
  {
    icon: Mic,
    title: "Speaker",
    items: [
      "Co-host of the Mahdi & Mamun Podcast discussing solopreneurship and marketing",
      "Speaks on digital business, learning systems, and the Bangladesh startup landscape",
      "Regular content creator across YouTube, blog, and social media platforms",
    ],
  },
  {
    icon: Briefcase,
    title: "Background",
    items: [
      "Born in 1997 in Sylhet, Bangladesh \u2014 raised with a passion for ideas and education",
      "Deep background in marketing, copywriting, and digital business strategy",
      "7+ years of experience building audiences, products, and communities online",
    ],
  },
];

const interests = [
  { icon: Star, title: "Digital Marketing" },
  { icon: Heart, title: "Psychology" },
  { icon: PenLine, title: "Content Creation" },
  { icon: Cpu, title: "AI Tools" },
  { icon: Bookmark, title: "Reading" },
  { icon: Users, title: "Teaching & Mentoring" },
];

export default function AboutPage() {
  return (
    <>
      <PersonStructuredData />
      <PageHeader
        title="About Muntasir Mahdi"
        description="Author, educator, and solopreneur from Sylhet, Bangladesh."
      />

      {/* Hero / Intro */}
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-lg border border-border bg-card overflow-hidden">
                <Image
                  src="/images/author.png"
                  alt="Muntasir Mahdi"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-mono font-semibold text-foreground mb-4">
                Hi, I&apos;m Muntasir Mahdi.
              </h2>
              <p className="text-base text-muted leading-relaxed mb-6">
                I was born in 1997 in Sylhet, Bangladesh. Over the last 7+
                years, I have written 10+ books and mentored more than 30,000
                people through my content, courses, and communities. I believe
                better thinking builds better lives, and better learning builds
                better futures.
              </p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy: What I Write About */}
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <div className="mb-12">
            <h2 className="text-2xl font-mono font-semibold text-foreground mb-4">
              What I Write About
            </h2>
            <p className="text-base text-muted leading-relaxed">
              I write for the person who wants to build a better life through
              mental tools, income systems, and applied AI. My work
              sits at the intersection of psychology, technology, and education
              \u2014 because real progress happens when all three come together.
            </p>
          </div>
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
                  <p className="text-base text-muted leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-mono font-semibold text-foreground mb-10">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.title}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-accent/10 p-2 inline-flex">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {block.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-mono font-semibold text-foreground mb-10">
            Interests
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {interests.map((interest) => {
              const Icon = interest.icon;
              return (
                <div
                  key={interest.title}
                  className="rounded-lg border border-border bg-card p-5 flex items-center gap-3"
                >
                  <div className="rounded-full bg-accent/10 p-2 inline-flex shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {interest.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
