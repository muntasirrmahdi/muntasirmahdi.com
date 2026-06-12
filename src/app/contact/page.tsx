import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Muntasir Mahdi — for advice, customer service, speaking, or partnerships.",
  alternates: {
    canonical: "https://muntasirmahdi.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            How can I help?
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact Me
          </h1>
          <p className="text-muted text-base max-w-lg mx-auto">
            Do you have a question or are you interested in working with me?
            Just fill out the form fields below.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
