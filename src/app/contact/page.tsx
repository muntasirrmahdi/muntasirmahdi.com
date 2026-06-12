import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Do you have a question or are you interested in working with me? Just fill out the form fields below.",
  alternates: {
    canonical: "https://muntasirmahdi.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
          <h1 className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
            How can I help?
          </h1>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Do you have a question or are you interested in working with me?
            Just fill out the form fields below.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
