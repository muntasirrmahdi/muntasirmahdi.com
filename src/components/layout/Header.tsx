"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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
            className={`flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors ${
            mobile ? "min-h-[44px] py-2.5" : ""
          }`}
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
                : "absolute right-0 top-full w-56 rounded-lg border border-border bg-card py-2 shadow-lg"
            }
          >
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href || "#"}
                target={child.external ? "_blank" : undefined}
                rel={child.external ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors ${
                  mobile ? "py-2.5 min-h-[44px]" : "px-4 py-2"
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
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors ${
        mobile ? "min-h-[44px] py-2.5" : ""
      }`}
      onClick={onNavClick}
    >
      {item.label}
      {item.external && <ExternalLink size={12} />}
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains("light"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      {/* Backdrop overlay when mobile menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[-1] bg-black/30 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="mx-auto w-full max-w-[1110px] flex min-h-14 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={isLight ? "/images/logo-black.png" : "/images/logo-white.png"}
            alt="Muntasir Mahdi"
            width={400}
            height={100}
            className="h-12 sm:h-[100px] w-auto transition-all"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-muted hover:text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav panel with smooth transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-background">
          <nav className="flex flex-col px-4 py-4 gap-1">
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
      </div>
    </header>
  );
}
