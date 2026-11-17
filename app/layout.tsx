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
  // PLACEHOLDER — final wording to be confirmed in Phase 6
  title: "Boubkeur Bouchama — Data Science & AI Engineer",
  description:
    "Portfolio of Boubkeur Bouchama, a Data Science and AI engineer pursuing opportunities in Data Science, Machine Learning, and AI.",
};

import Navbar from "@/components/layout/Navbar";
import FloatingActions from "@/components/layout/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <div className="flex-1">{children}</div>
        <FloatingActions />
      </body>
    </html>
  );
}

