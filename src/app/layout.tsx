import type { Metadata } from "next";
import { Work_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { siteUrl } from "@/lib/site";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Banner from "@/components/banner/banner";
import Footer from "@/components/footer/footer";
import BodyCTA from "@/components/others/body-cta";
import DeferredAnalytics from "@/components/others/deferred-analytics";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const title = "Chrysal Core: Digital Presence for Local Business";
const description =
  "High-speed websites with extensive customization and support focused on small businesses and startups. We focus on ensuring a successful online presence for local businesses, guaranteeing the best possible ranking.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Chrysal Core",
  },
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "digital presence",
    "local optimization",
    "websites for local business",
    "customizable landing pages",
    "enhance seo",
    "chrysal core",
    "landings",
    "web develop for pymes",
  ],
  authors: [{ name: "Ordnay Perez Hernandez" }],
  appleWebApp: {
    title: "Chrysal Core",
  },
  openGraph: {
    title: "Chrysal Core",
    description,
    url: siteUrl,
    siteName: "Chrysal Core",
    type: "website",
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
      className={`h-full antialiased ${workSans.variable} ${spaceGrotesk.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <>
          <Header />
          <BodyCTA />
          <main className="main">
            <Hero />
            <Banner />
            {children}
          </main>
          <Footer />
        </>
      </body>
      <DeferredAnalytics gaId={gaId} />
    </html>
  );
}
