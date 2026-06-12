"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface CookiePreferencesProps {
  onSave: (preferences: Record<string, boolean>) => void;
  onClose: () => void;
  initialPreferences?: Record<string, boolean>;
}

const categories = [
  {
    key: "functional",
    label: "Functional / Essential",
    description: "Session cookies, CSRF tokens, and essential site functions",
    alwaysOn: true,
  },
  {
    key: "analytics",
    label: "Analytics",
    description: "Google Analytics (GA4) for understanding site usage",
    alwaysOn: false,
  },
  {
    key: "marketing",
    label: "Marketing",
    description: "Personalized content and advertising (future use)",
    alwaysOn: false,
  },
];

export function CookiePreferences({
  onSave,
  onClose,
  initialPreferences,
}: CookiePreferencesProps) {
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: initialPreferences?.analytics ?? false,
    marketing: initialPreferences?.marketing ?? false,
  });

  const toggle = (key: string) => {
    if (key === "functional") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md rounded-lg border border-border bg-background p-6 shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold">Cookie Preferences</h2>
          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-muted hover:scale-105 hover:text-foreground transition-all duration-200 rounded-md"
            aria-label="Close preferences"
          >
            <X size={16} />
          </button>
        </div>

        <p className="text-sm text-muted mb-5 leading-relaxed">
          Manage your cookie preferences below. Functional cookies are required
          for the site to work properly.
        </p>

        <div className="space-y-1 divide-y divide-border">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="flex items-start justify-between gap-4 py-3"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{cat.label}</p>
                <p className="text-xs text-muted mt-0.5">{cat.description}</p>
              </div>
              <button
                role="switch"
                aria-checked={
                  cat.alwaysOn || preferences[cat.key as keyof typeof preferences]
                }
                disabled={cat.alwaysOn}
                onClick={() => toggle(cat.key)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed ${
                  cat.alwaysOn || preferences[cat.key as keyof typeof preferences]
                    ? "bg-accent"
                    : "bg-muted"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    cat.alwaysOn ||
                    preferences[cat.key as keyof typeof preferences]
                      ? "translate-x-5"
                      : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => onSave(preferences)}
            className="w-full min-h-[44px] px-4 py-2 bg-accent text-accent-foreground rounded-md text-sm font-medium hover:scale-105 hover:opacity-90 transition-all duration-200"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
