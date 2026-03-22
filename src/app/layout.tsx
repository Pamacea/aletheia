import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import { QueryClientProvider } from "@/lib/react-query/providers";
import { SidebarWrapper } from "@/ui/components/SidebarWrapper";
import { ToastProvider } from "@/ui/molecules/ToastProvider";
import { JsonLd } from "@/ui/atoms/JsonLd";
import { getWebSiteSchema } from "@/lib/utils/structured-data";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "700"],
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://aletheia.vercel.app';

export const metadata: Metadata = {
  title: {
    default: "Aletheia - Étude Philosophique",
    template: "%s | Aletheia",
  },
  description: "Un écosystème de pensée non-linéaire pour l'étude de la philosophie. Explorez les concepts, philosophes et courants à travers un graphe de connaissances interactif.",
  keywords: ["philosophie", "concepts philosophiques", "philosophes", "histoire des idées", "éducation", "connaissances"],
  authors: [{ name: "Aletheia", url: SITE_URL }],
  creator: "Aletheia",
  publisher: "Aletheia",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Aletheia - Étude Philosophique",
    description: "Un écosystème de pensée non-linéaire pour l'étude de la philosophie",
    url: SITE_URL,
    siteName: "Aletheia",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/aletheia.jpg",
        width: 1200,
        height: 630,
        alt: "Aletheia - Étude Philosophique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aletheia - Étude Philosophique",
    description: "Un écosystème de pensée non-linéaire pour l'étude de la philosophie",
    images: ["/aletheia.jpg"],
    creator: "@aletheia_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="RngM7SyDMb5xACx10fCkpCN6tsXHl8t2Y8FTNGsq9Cc" />
        <JsonLd data={getWebSiteSchema()} />
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${caveat.variable} font-serif bg-paper-50 text-ink m-0 p-0`}>
        <QueryClientProvider>
          <ToastProvider>
              <div className="flex min-h-screen">
                <SidebarWrapper />
                <main className="main-content-with-sidebar w-full min-w-0 overflow-x-hidden">
                  {children}
                </main>
              </div>
          </ToastProvider>
        </QueryClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
