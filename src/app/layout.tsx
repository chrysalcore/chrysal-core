import type { Metadata } from "next";
import { Work_Sans, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Banner from "@/components/banner/banner";
import Footer from "@/components/footer/footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const title = "Chrysal Core: Digital Presence for Local Business";
const description =
  "High-speed websites with extensive customization and support focused on small businesses and startups. We focus on ensuring a successful online presence for local businesses, guaranteeing the best possible ranking.";

export const metadata: Metadata = {
  metadataBase: new URL("https://chrysalcore.com"),
  title,
  description,
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
    url: "https://chrysalcore.com",
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
      className={`h-full antialiased ${workSans.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <>
          <Header />
          <main className="main">
            <Hero />
            <Banner />
            {children}
          </main>
          <Footer />
        </>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DE1D7NF5FM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DE1D7NF5FM');
        `}
      </Script>
    </html>
  );
}
