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
        <div className="w-full px-4 sm:px-6 py-16 sm:py-20 text-center">
      <h1 className="text-5xl sm:text-6xl font-mono font-semibold tracking-tight text-foreground leading-tight mb-6">
        How can I help?
      </h1>
      <p className="text-muted text-lg sm:text-xl mt-4">
            Do you have a question or are you interested in working with me?
            Just fill out the form fields below.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
