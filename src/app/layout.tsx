import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Commissions - Best AI Tool Affiliate Programs",
    template: "%s | AI Commissions"
  },
  description: "Discover the best AI tools and their affiliate programs. Compare features, pricing, and commission rates for top AI platforms like ChatGPT, Jasper, Copy.ai and more.",
  keywords: "AI tools, affiliate programs, ChatGPT, Jasper, Copy.ai, affiliate marketing, AI software, commission rates",
  authors: [{ name: "AI Commissions" }],
  creator: "AI Commissions",
  publisher: "AI Commissions",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aicommisions.com",
    siteName: "AI Commissions",
    title: "AI Commissions - Best AI Tool Affiliate Programs",
    description: "Discover the best AI tools and their affiliate programs. Compare features, pricing, and commission rates for top AI platforms.",
    images: [
      {
        url: "https://aicommisions.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Commissions - Best AI Tool Affiliate Programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Commissions - Best AI Tool Affiliate Programs",
    description: "Discover the best AI tools and their affiliate programs. Compare features, pricing, and commission rates for top AI platforms.",
    images: ["https://aicommisions.com/images/og-image.png"],
  },
};

// Organization Schema for the site
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI Commissions",
  "url": "https://aicommisions.com",
  "logo": "https://aicommisions.com/images/logo.png",
  "description": "Discover the best AI tools and their affiliate programs with detailed reviews and commission information.",
  "sameAs": [
    "https://twitter.com/aicommisions",
    "https://linkedin.com/company/ai-commissions"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
