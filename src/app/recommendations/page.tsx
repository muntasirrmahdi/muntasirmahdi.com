import type { Metadata } from "next";
import { Monitor, BookOpen, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Recommendations",
  description:
    "Tools, books, and resources recommended by Muntasir Mahdi.",
};

const categories = [
  {
    icon: Monitor,
    title: "Tools I Use",
    items: [
      "OpenCode — AI coding assistant I use daily",
      "Claude Code — for complex reasoning tasks",
      "Hermes Agents — for automated workflows",
      "Next.js — framework for this website",
      "Tailwind CSS — utility-first styling",
    ],
  },
  {
    icon: BookOpen,
    title: "Recommended Reading",
    items: [
      "Thinking, Fast and Slow — Daniel Kahneman",
      "Atomic Habits — James Clear",
      "Sapiens — Yuval Noah Harari",
      "The Almanack of Naval Ravikant — Eric Jorgenson",
    ],
  },
  {
    icon: Wrench,
    title: "Services",
    items: [
      "Vercel — hosting and deployment",
      "Cloudflare — CDN and security",
      "Brevo — email marketing",
      "GitHub — version control",
    ],
  },
];

export default function RecommendationsPage() {
  return (
    <>
      <PageHeader
        title="Recommendations"
        description="Tools, books, and services I personally use and recommend."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-3xl space-y-10">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} className="text-accent" />
                    <h2 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="text-accent mt-0.5 shrink-0">&bull;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
