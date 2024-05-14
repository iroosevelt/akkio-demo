import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akkio: AI Data Platform for Agencies",
  description: "The only AI data platform built for agencies and their clients",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon-logo-green.svg",
        href: "/icon-logo-green.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon-logo-green.svg",
        href: "/icon-logo-green.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-suisseIntl">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
