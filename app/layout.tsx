import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "@/styles/design-system.css";
import "./globals.css";

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plex-arabic",
});

// Subset of Material Symbols Rounded with only the icons in use — see scripts/update-icon-font.mjs.
const materialSymbols = localFont({
  src: "./fonts/material-symbols-rounded.woff2",
  weight: "400",
  display: "block",
  fallback: [],
  adjustFontFallback: false,
  variable: "--font-material-symbols",
});

export const metadata: Metadata = {
  metadataBase: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    locale: "ar_SA",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${plexArabic.variable} ${materialSymbols.variable}`}>
      <body>{children}</body>
    </html>
  );
}
