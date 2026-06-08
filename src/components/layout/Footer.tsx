import Link from "next/link";
import { navItems } from "@/lib/nav";

const footerLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Speaking & Media", href: "/speaking-and-media" },
  { label: "Recommendations", href: "/recommendations" },
  { label: "What I'm Doing Now", href: "/now" },
  { label: "Terms & Disclaimer", href: "/terms-and-disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div>
            <p className="font-mono text-sm font-medium text-foreground">
              Muntasir Mahdi
            </p>
            <p className="mt-1 text-sm text-muted">Author & Educator</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Pages
            </p>
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
              More
            </p>
            <nav className="flex flex-col gap-1.5">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
              Contact
            </p>
            <p className="text-sm text-muted">muntasir1315@gmail.com</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Muntasir Mahdi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
