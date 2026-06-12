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
      <div className="mx-auto w-full max-w-[1110px] px-4 py-2 min-h-[44px] flex items-center justify-between text-sm">
        <div className="flex-1 flex items-center justify-center pr-4">
          <span className="text-accent-foreground">
            Under Development by Muntasir&apos;s SuperOC.
          </span>
        </div>
        <button
          onClick={dismiss}
          className="shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center hover:opacity-70 transition-opacity"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
