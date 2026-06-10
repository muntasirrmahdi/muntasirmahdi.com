import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header, Footer, ThemeProvider } from "@/components/layout";
import { NewsletterForm } from "@/components/NewsletterForm";
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';if(t==='light')document.documentElement.classList.add('light');}catch(e){}})()`,
          }}
        />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <NewsletterForm />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
