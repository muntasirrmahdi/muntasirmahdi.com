import type { Metadata } from "next";
import { Calendar, BookOpen, Cpu } from "lucide-react";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "What I'm Doing Now",
  description:
    "What Muntasir Mahdi is currently focused on — projects, writing, and learning.",
};

const nowItems = [
  {
    icon: BookOpen,
    title: "Writing",
    description:
      "Writing articles on clear thinking, learning systems, and AI tools for solopreneurs.",
  },
  {
    icon: Cpu,
    title: "Building",
    description:
      "Rebuilding muntasirmahdi.com with Next.js, and working on agentic AI tools for content creation.",
  },
  {
    icon: Calendar,
    title: "Teaching",
    description:
      "Running the Inner Circle and Mastermind communities — mentoring solopreneurs on digital skills.",
  },
];

export default function NowPage() {
  return (
    <>
      <PageHeader
        title="What I'm Doing Now"
        description="This page was last updated in June 2026."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm text-muted leading-relaxed mb-8">
              This is a /now page — inspired by{" "}
              <a
                href="https://nownownow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                nownownow.com
              </a>
              . It shares what I'm currently focused on.
            </p>

            <div className="space-y-6">
              {nowItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={20} className="text-accent" />
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
