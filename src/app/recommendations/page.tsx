import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { RecommendationsContent } from "./RecommendationsContent";

export const metadata: Metadata = {
  title: "Recommendations",
  description:
    "Tools, books, and services I personally use and recommend.",
  alternates: {
    canonical: "https://muntasirmahdi.com/recommendations",
  },
};

export default function RecommendationsPage() {
  return (
    <>
      <PageHeader
        title="Recommendations"
        description="Tools, books, and services I personally use and recommend."
      />
      <RecommendationsContent />
    </>
  );
}
