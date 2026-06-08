"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { navItems, type NavItem } from "@/lib/nav";

function NavLink({
  item,
  mobile,
  onNavClick,
}: {
  item: NavItem;
  mobile?: boolean;
  onNavClick?: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div
        className={`relative ${mobile ? "" : "group"}`}
        onMouseEnter={() => !mobile && setOpen(true)}
        onMouseLeave={() => !mobile && setOpen(false)}
      >
        <button
          onClick={() => mobile && setOpen(!open)}
          className="flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
        >
          {item.label}
          <ChevronDown
            size={14}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {(open || (!mobile && open)) && (
          <div
            className={
              mobile
                ? "pl-4 mt-2 flex flex-col gap-2"
                : "absolute left-0 top-full w-56 rounded-lg border border-border bg-card py-2 shadow-lg"
            }
          >
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href || "#"}
                target={child.external ? "_blank" : undefined}
                rel={child.external ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors ${
                  mobile ? "py-1" : "px-4 py-2"
                }`}
                onClick={onNavClick}
              >
                {child.label}
                {child.external && <ExternalLink size={12} />}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      className="text-sm text-muted hover:text-foreground transition-colors"
      onClick={onNavClick}
    >
      {item.label}
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-foreground hover:text-accent transition-colors"
        >
          Muntasir Mahdi
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-muted hover:text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                mobile
                onNavClick={() => setMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
