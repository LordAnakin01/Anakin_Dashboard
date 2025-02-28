import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "The Anakin Dynasty",
  description: "Employee Dashboard with Onboarding & Time Tracking Interface",
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
    shortcut: '/favicon.ico'
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="h-full bg-gray-50 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
