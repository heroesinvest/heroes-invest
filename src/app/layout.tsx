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
  title: "Heroes Invest - Professional Investment Management",
  description: "Build your wealth with professional investment strategies. Portfolio management, real-time market data, and expert financial advice.",
  keywords: ["investment", "portfolio", "finance", "wealth management", "stocks", "bonds"],
  authors: [{ name: "Heroes Invest" }],
  creator: "Heroes Invest",
  publisher: "Heroes Invest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heroesinvest.com",
    siteName: "Heroes Invest",
    title: "Heroes Invest - Professional Investment Management",
    description: "Build your wealth with professional investment strategies. Portfolio management, real-time market data, and expert financial advice.",
    images: [
      {
        url: "/images/business-overview.png",
        width: 1200,
        height: 630,
        alt: "Heroes Invest - Investment Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heroes Invest - Professional Investment Management",
    description: "Build your wealth with professional investment strategies. Portfolio management, real-time market data, and expert financial advice.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
