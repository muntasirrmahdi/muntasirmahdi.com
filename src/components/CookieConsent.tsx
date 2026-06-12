"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // slight delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = useCallback(() => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4 text-sm">
        <p className="text-muted leading-relaxed">
          This site uses cookies for analytics and essential functions.{" "}
          <Link
            href="/terms-and-disclaimer"
            className="text-accent hover:underline underline-offset-2"
          >
            Learn more
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={accept}
            className="min-h-[44px] px-4 py-2 bg-accent text-accent-foreground rounded-md text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Got it
          </button>
          <button
            onClick={accept}
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-muted hover:text-foreground transition-colors"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
