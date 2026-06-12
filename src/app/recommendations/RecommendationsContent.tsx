"use client";

import { useState } from "react";
import { Wrench, BookOpen, Globe } from "lucide-react";

const tabs = [
  { id: "tools", label: "Tools I Use" },
  { id: "books", label: "Recommended Books" },
  { id: "services", label: "Services" },
];

const tools = [
  { name: "OpenCode", description: "AI coding assistant I use daily" },
  { name: "Claude Code", description: "for complex reasoning tasks" },
  { name: "Hermes Agents", description: "for automated workflows" },
  { name: "Next.js", description: "framework for this website" },
  { name: "Tailwind CSS", description: "utility-first styling" },
];

const books = [
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Sapiens", author: "Yuval Noah Harari" },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
  },
];

const services = [
  { name: "Vercel", description: "hosting and deployment" },
  { name: "Cloudflare", description: "CDN and security" },
  { name: "Brevo", description: "email marketing" },
  { name: "GitHub", description: "version control" },
];

export function RecommendationsContent() {
  const [activeTab, setActiveTab] = useState("tools");

  return (
    <>
      <section className="border-t border-border">
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={
                  activeTab === tab.id
                    ? "rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
                    : "rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted hover:text-foreground"
                }
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "tools" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <div className="flex items-start gap-3">
                    <Wrench size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-muted mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "books" && (
            <div className="space-y-3">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <div className="flex items-start gap-3">
                    <BookOpen size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted mt-1">{book.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "services" && (
            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <div className="flex items-start gap-3">
                    <Globe size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
