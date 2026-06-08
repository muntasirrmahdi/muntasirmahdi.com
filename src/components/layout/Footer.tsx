import Link from "next/link";
import { footerLinks } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href || "#"}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted tracking-wider">
          &copy; {new Date().getFullYear()} MUNTASIR MAHDI
        </div>
      </div>
    </footer>
  );
}
