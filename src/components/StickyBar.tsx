"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("stickybar_dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem("stickybar_dismissed", "1");
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-50 bg-accent text-accent-foreground">
      <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between text-sm">
        <div className="flex-1 text-center pr-4">
          <span className="text-accent-foreground">
            Get actionable insights every week — the BanglayAI newsletter
          </span>
        </div>
        <button
          onClick={dismiss}
          className="shrink-0 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
