"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { footerLinks } from "@/lib/nav";
import { useTheme } from "@/components/layout";

export function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-border">
      <div className="w-full px-4 sm:px-6 py-12">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 items-center">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href || "#"}
              className="min-h-[44px] inline-flex items-center text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-muted hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </nav>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted tracking-wider">
          &copy; {new Date().getFullYear()} Muntasir Mahdi. Made by{" "}
          <a
            href="https://github.com/opencode-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-2"
          >
            Opencode
          </a>
          {" & "}
          <a
            href="https://deepseek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline underline-offset-2"
          >
            Deepseek
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
