import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Muntasir Mahdi - Author & Educator",
    template: "%s | Muntasir Mahdi",
  },
  description:
    "Muntasir Mahdi is an author, educator, and solopreneur from Bangladesh. He writes about clear thinking, better learning systems, and building digital assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
