import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Analytics} from "@vercel/analytics/react"

import Header from "./header";
import Footer from "./footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Padgett | bass-baritone",
  description: "Classical singer, web developer. Built in Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head><link rel="icon" href="/favicon.ico" sizes="any" /></head> */}
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Header />
        {/* Scrollable main content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
