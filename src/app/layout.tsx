import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header, Footer, ThemeProvider } from "@/components/layout";
import { NewsletterForm } from "@/components/NewsletterForm";
import { StickyBar } from "@/components/StickyBar";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WebSiteStructuredData } from "@/lib/structured-data";
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
  metadataBase: new URL("https://muntasirmahdi.com"),
  title: {
    default: "Muntasir Mahdi - Author from Bangladesh",
    template: "%s | Muntasir Mahdi",
  },
  description:
    "Muntasir Mahdi writes about mental tools, income systems, and applied AI. 10+ books. 30,000+ students. Author from Bangladesh.",
  keywords: [
    "Muntasir Mahdi",
    "author",
    "educator",
    "solopreneur",
    "Bangladesh",
    "mental tools",
    "income systems",
    "applied AI",
    "digital skills",
    "marketing",
  ],
  authors: [{ name: "Muntasir Mahdi" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Muntasir Mahdi",
    title: "Muntasir Mahdi - Author from Bangladesh",
    description:
      "Muntasir Mahdi writes about mental tools, income systems, and applied AI. 10+ books. 30,000+ students. Author from Bangladesh.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@munrahmah",
    creator: "@munrahmah",
    title: "Muntasir Mahdi - Author from Bangladesh",
    description:
      "Muntasir Mahdi writes about mental tools, income systems, and applied AI. 10+ books. 30,000+ students. Author from Bangladesh.",
  },
  alternates: {
    canonical: "https://muntasirmahdi.com",
    types: {
      "application/rss+xml": "https://muntasirmahdi.com/feed.xml",
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';if(t==='light')document.documentElement.classList.add('light');}catch(e){}})()`,
          }}
        />
        <WebSiteStructuredData />
        <ThemeProvider>
          <StickyBar />
          <Header />
          <main className="flex-1 mx-auto w-full max-w-[1110px] px-4 sm:px-6">{children}</main>
          <NewsletterForm />
          <Footer />
          <CookieConsent />
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
