"use client";

import { useState, useEffect, useCallback } from "react";
import { CookiePreferences } from "./CookiePreferences";

type ConsentValue = "all" | "essential" | null;

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent");
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const setConsent = useCallback((value: ConsentValue) => {
    if (value) {
      localStorage.setItem("cookie_consent", value);
    } else {
      localStorage.removeItem("cookie_consent");
    }
    setVisible(false);
    window.dispatchEvent(
      new CustomEvent("consent-updated", { detail: value }),
    );
  }, []);

  const handleAcceptAll = useCallback(
    () => setConsent("all"),
    [setConsent],
  );
  const handleRejectAll = useCallback(
    () => setConsent("essential"),
    [setConsent],
  );

  const handleSavePreferences = useCallback(
    (prefs: Record<string, boolean>) => {
      setConsent(prefs.analytics ? "all" : "essential");
      setShowPreferences(false);
    },
    [setConsent],
  );

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 sm:py-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <p className="text-sm text-muted leading-relaxed flex-1">
              We use cookies to improve your experience on muntasirmahdi.com. By
              accepting, you allow analytics and personalization. You can manage
              preferences or reject non-essential cookies.
            </p>
            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              <button
                onClick={() => setShowPreferences(true)}
                className="text-xs text-muted hover:text-foreground underline underline-offset-2 transition-colors min-h-[44px] px-2"
              >
                Preferences
              </button>
              <button
                onClick={handleRejectAll}
                className="min-h-[44px] px-4 py-2 text-xs font-medium text-foreground border border-border rounded-md hover:bg-accent/10 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="min-h-[44px] px-4 py-2 bg-accent text-accent-foreground rounded-md text-xs font-medium hover:opacity-90 transition-opacity"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPreferences && (
        <CookiePreferences
          onSave={handleSavePreferences}
          onClose={() => setShowPreferences(false)}
        />
      )}
    </>
  );
}
