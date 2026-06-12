"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

function GithubIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.enum([
    "General Inquiry",
    "Speaking Engagement",
    "Partnership",
    "Press/Media",
    "Feedback",
    "Other",
  ] as const),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface SubjectOption {
  value: ContactFormData["subject"];
  label: string;
  hint: string;
}

const subjectOptions: SubjectOption[] = [
  {
    value: "General Inquiry",
    label: "General Inquiry",
    hint: "For general questions about my work, books, or content.",
  },
  {
    value: "Speaking Engagement",
    label: "Speaking Engagement",
    hint: "Please include your event details, date, and topic.",
  },
  {
    value: "Partnership",
    label: "Partnership",
    hint: "Include a brief overview of your proposal.",
  },
  {
    value: "Press/Media",
    label: "Press/Media",
    hint: "Include your publication name and any deadlines.",
  },
  {
    value: "Feedback",
    label: "Feedback",
    hint: "I read every piece of feedback personally.",
  },
  {
    value: "Other",
    label: "Other",
    hint: "For anything else — I will route it to the right place.",
  },
];

const socialLinks = [
  {
    href: "https://github.com/muntasirrmahdi",
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: "https://instagram.com/muntasir.mahdi",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://linkedin.com/in/muntasirrahmanmahdi",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: undefined as unknown as ContactFormData["subject"],
      message: "",
    },
  });

  const currentSubject = watch("subject");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to send message");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 text-center">
          <CheckCircle size={40} className="text-accent mx-auto mb-4" />
          <h3 className="font-mono text-lg font-semibold text-foreground mb-2">
            Message sent successfully!
          </h3>
          <p className="text-sm text-muted max-w-md mx-auto">
            Thank you for reaching out. I read every message personally and will get back to you as soon as possible.
          </p>
        </div>
      </section>
    );
  }

  const currentHint = subjectOptions.find((o) => o.value === currentSubject)?.hint ?? "";

  return (
    <>
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <select
                id="subject"
                {...register("subject")}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="" disabled>
                  I&rsquo;d like to chat about&hellip;
                </option>
                {subjectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {currentHint && (
                <p className="mt-1.5 text-xs text-muted italic">{currentHint}</p>
              )}
              {errors.subject && (
                <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <input
                id="firstName"
                type="text"
                {...register("firstName")}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <input
                id="lastName"
                type="text"
                {...register("lastName")}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
              )}
            </div>

            <div>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                placeholder="Message (remember, short &amp; sweet please)"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <p className="text-xs text-muted leading-relaxed">
              By submitting, you agree that I may read and store your message and contact
              information for the purpose of responding to your inquiry.
            </p>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Submit"}
              <Send size={14} />
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h2 className="font-mono text-sm text-muted mb-8">
            Or connect with me on&hellip;
          </h2>
          <div className="flex items-center justify-center gap-10">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={40} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
