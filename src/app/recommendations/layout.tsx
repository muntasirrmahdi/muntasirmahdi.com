import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recommendations",
  description:
    "Tools, books, and resources recommended by Muntasir Mahdi.",
};

export default function RecommendationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
