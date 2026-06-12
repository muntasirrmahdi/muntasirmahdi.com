import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms & Disclaimer",
  description:
    "Privacy policy, terms of use, and earnings disclaimer for MuntasirMahdi.com.",
  alternates: {
    canonical: "https://muntasirmahdi.com/terms-and-disclaimer",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Disclaimer"
        description="Privacy policy, terms of use, and legal information."
      />

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="space-y-10 text-sm text-muted leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Overview
              </h2>
              <p>
                This website (MuntasirMahdi.com) respects your privacy. By using
                this site, you agree to the following terms and policies. "We,"
                "our," or "me" refers to Muntasir Mahdi. "You" or "your" refers
                to any visitor, reader, customer, or user of this site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Earnings Disclaimer
              </h2>
              <p>
                If you click on a link from this site, you should assume I might
                earn money from it — cash, free tools, or other benefits. If I
                mention a product, course, or service, please assume I received
                some benefit. I only recommend things I believe are useful for
                you.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Cookies & Tracking
              </h2>
              <p>
                Like most websites, I use cookies — small files that help
                remember things when you visit. I use them for analytics (to see
                what content people read most), personalization, and security. I
                may use tools like Google Analytics or Facebook Pixel to
                understand how visitors use my site. If you don't want cookies,
                you can turn them off in your browser.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Email Addresses
              </h2>
              <p>
                If you give me your email (for newsletters, free guides, or
                updates), I will only use it for the purpose you agreed to. You
                can unsubscribe anytime. I do not sell your email to others.
                Ever.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Sharing of Data
              </h2>
              <p>
                I don't sell your personal information. Some third-party
                services (like email providers or analytics tools) may process
                data, but only for helping me run this site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Terms of Use
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Read and enjoy my work, but do not misuse the content.</li>
                <li>You will not copy or steal content without permission.</li>
                <li>
                  Results may vary. What worked for me or someone else may not
                  work exactly the same for you.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Disclaimer
              </h2>
              <p>
                All content on this site is for education and inspiration only.
                I am not your lawyer, doctor, or financial advisor. Please use
                your own judgment before making big decisions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Contact
              </h2>
              <p>
                If you have any questions about this policy, please email{" "}
                <a
                  href="mailto:hello@muntasirmahdi.com"
                  className="text-accent hover:underline"
                >
                  hello@muntasirmahdi.com
                </a>
                .
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Last updated: October 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
