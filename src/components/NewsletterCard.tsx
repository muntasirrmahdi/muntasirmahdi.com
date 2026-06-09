"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
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
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setMessage("Subscribed! Check your inbox.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card p-5 sm:p-6">
      <h3 className="text-sm font-semibold text-foreground mb-1">
        Join the conversation
      </h3>
      <p className="text-sm text-muted mb-4">
        No spam. Just the highest quality ideas.
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle size={16} />
          <p className="text-sm font-medium">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            required
            disabled={status === "sending"}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity shrink-0 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Subscribe"}
            <ArrowRight size={14} />
          </button>
        </form>
      )}

      {status === "error" && (
        <div className="mt-3 flex items-center gap-2 text-red-500 text-sm">
          <AlertCircle size={14} />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
