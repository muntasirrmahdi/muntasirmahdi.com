import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header, Footer, ThemeProvider } from "@/components/layout";
import { NewsletterForm } from "@/components/NewsletterForm";
import { StickyBar } from "@/components/StickyBar";
import { CookieConsent } from "@/components/CookieConsent";
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
    default: "Muntasir Mahdi - Author & Educator",
    template: "%s | Muntasir Mahdi",
  },
  description:
    "Muntasir Mahdi is an author, educator, and solopreneur from Bangladesh. He writes about clear thinking, better learning systems, and building digital assets.",
  keywords: [
    "Muntasir Mahdi",
    "author",
    "educator",
    "solopreneur",
    "Bangladesh",
    "clear thinking",
    "learning systems",
    "digital assets",
  ],
  authors: [{ name: "Muntasir Mahdi" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Muntasir Mahdi",
    title: "Muntasir Mahdi - Author & Educator",
    description:
      "Muntasir Mahdi is an author, educator, and solopreneur from Bangladesh. He writes about clear thinking, better learning systems, and building digital assets.",
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
    title: "Muntasir Mahdi - Author & Educator",
    description:
      "Muntasir Mahdi is an author, educator, and solopreneur from Bangladesh. He writes about clear thinking, better learning systems, and building digital assets.",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://muntasirmahdi.com/feed.xml",
    },
  },
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
          <main className="flex-1">{children}</main>
          <NewsletterForm />
          <Footer />
          <CookieConsent />
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
