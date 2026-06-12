"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("You're subscribed! Check your inbox for a confirmation.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section className="border-t border-border">
      <div className="w-full px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center">
          <p className="text-sm text-muted mb-6">
            Get notified about new articles, books, and resources.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <CheckCircle size={18} />
              <p className="text-sm font-medium">{message}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto"
            >
              <div className="flex-1 w-full relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={status === "sending"}
                  className="w-full rounded-lg border border-border bg-background px-3 min-h-[44px] text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 min-h-[44px] text-sm font-medium text-accent-foreground hover:scale-105 hover:opacity-90 transition-all duration-200 disabled:opacity-50 shrink-0"
              >
                {status === "sending" ? "Sending..." : "Subscribe"}
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          {status === "error" && (
            <div className="flex items-center justify-center gap-2 mt-3 text-red-500 text-sm">
              <AlertCircle size={16} />
              <span>{message}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
