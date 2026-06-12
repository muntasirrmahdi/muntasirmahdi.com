import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "What I'm Doing Now",
  description:
    "What Muntasir Mahdi is currently focused on — projects, writing, and learning.",
  alternates: {
    canonical: "https://muntasirmahdi.com/now",
  },
};

export default function NowPage() {
  return (
    <>
      <PageHeader
        title="What I'm Doing Now"
        description="What I'm currently focused on — writing, building, teaching, and learning."
      />

      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-sm text-muted leading-relaxed mb-2">
            (This is a{" "}
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              /now
            </a>{" "}
            page — what I'm focused on right now.)
          </p>
          <p className="text-xs text-muted-foreground font-mono mb-16">
            Updated June 2026, from Sylhet, Bangladesh.
          </p>

          <div className="space-y-16">
            <section>
              <h2 className="text-xl font-mono font-semibold text-foreground mb-4">
                Writing & Creating
              </h2>
              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                  I've been writing more consistently this year. Mostly about
                  mental tools, income systems, and how solopreneurs can use
                  AI tools without getting distracted by the hype. The central
                  question I keep coming back to: what actually moves the needle
                  for a one-person business?
                </p>
                <p>
                  Right now I'm working through a series on mental models for
                  content creators. Not the usual "think like a CEO" fluff —
                  more like specific cognitive tools that help you decide what to
                  write, when to ship, and how to know if it's working. I've
                  found that most solopreneurs don't have a clarity problem.
                  They have a filtering problem. Too many inputs, not enough
                  signal.
                </p>
                <p>
                  I'm also experimenting with shorter, more frequent pieces.
                  Long-form has its place, but there's something about a tight
                  500-word essay that forces you to actually have a point.
                  Learning to kill your darlings in public.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-mono font-semibold text-foreground mb-4">
                Building the Website
              </h2>
              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                  This website — muntasirmahdi.com — is being rebuilt from
                  scratch with Next.js and Tailwind CSS. The old version worked,
                  but it didn't feel like me. Too many templates, too much noise.
                  I wanted something lean, fast, and honest. A place where the
                  content leads and the design gets out of the way.
                </p>
                <p>
                  The migration has been slower than I'd like. Every page is an
                  opportunity to rethink what matters. Do I need this section?
                  Does this page serve the reader or my ego? The /now page you're
                  on right now is part of that redesign. I'm shipping it page by
                  page instead of waiting for a complete launch. Perfect is a
                  dangerous delay tactic.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-mono font-semibold text-foreground mb-4">
                Teaching & Mentoring
              </h2>
              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                  I run two communities: Inner Circle and Mastermind. Inner
                  Circle is the larger group — structured training on digital
                  marketing, content strategy, and building online. Mastermind
                  is smaller, higher-touch. A dozen or so solopreneurs who meet
                  regularly to work through real business problems together.
                </p>
                <p>
                  What I'm learning from both: everyone wants the system, but
                  nobody wants to do the work. The people who actually ship —
                  week after week, even when it's ugly — are the ones who see
                  results. My job as a mentor isn't to give better advice. It's
                  to create an environment where people feel compelled to act on
                  what they already know.
                </p>
                <p>
                  The Mastermind group has been running for over a year now. We
                  went from "let's try this and see" to a waiting list. That
                  tells me there's real hunger for accountability over
                  information. People are drowning in courses and starving for
                  execution.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-mono font-semibold text-foreground mb-4">
                Reading & Learning
              </h2>
              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                  I'm currently rereading Daniel Kahneman's Thinking, Fast and
                  Slow — but this time with a writer's eye, not a reader's.
                  Noticing how he structures uncertainty, how he makes statistical
                  concepts feel personal. Also picking through Shane Parrish's
                  Clear Thinking for the same reason. I read differently when I'm
                  studying craft alongside content.
                </p>
                <p>
                  On the technical side, I've been deep in the AI tools space.
                  Not the newsletter summaries — actual hands-on testing. Running
                  local LLMs, building small agent workflows, understanding where
                  the curve is real and where it's just venture capital theater.
                  My take so far: the gap between what these tools can do and what
                  most people use them for is enormous. That gap is where the
                  opportunity lives.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-mono font-semibold text-foreground mb-4">
                Podcast
              </h2>
              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                  The Mahdi & Mamun Podcast is still going. Mamun and I record
                  whenever our schedules align — no fixed cadence, just real
                  conversations when they need to happen. We talk about
                  solopreneurship, content creation, AI, and whatever else feels
                  relevant at the moment.
                </p>
                <p>
                  The format has shifted toward longer, more unedited
                  conversations. Less "here's a topic, here's my scripted take"
                  and more "what are you actually wrestling with right now?" The
                  best episodes we've done were unplanned — just two friends
                  working through something in real time. I'm trying to have more
                  of those and fewer produced segments.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
