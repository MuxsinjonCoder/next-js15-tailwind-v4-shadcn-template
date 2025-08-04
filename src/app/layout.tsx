import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import AppHeader from "@/components/app-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Next.js Template for CRM, ERP & Admin Panels",
  description:
    "High-performance Next.js template featuring Tailwind CSS v4, latest ShadCN UI (23.07.2025), and Framer Motion. Built by Muxsinjon Maxsudovich, optimized for building scalable CRM, ERP, and admin dashboards with best-in-class UI and SEO structure.",
  keywords: [
    "Next.js template",
    "Tailwind CSS v4",
    "ShadCN UI 2025",
    "Framer Motion",
    "CRM template",
    "ERP template",
    "Admin panel",
    "React dashboard",
    "SEO optimized",
    "Muxsinjon Maxsudovich",
  ],
  authors: [{ name: "Muxsinjon Maxsudovich", url: "https://muxsinjon.cv" }],
  creator: "Muxsinjon Maxsudovich",
  publisher: "Muxsinjon Maxsudovich",
  icons: "/logos/logo.png",
  openGraph: {
    title: "Modern Next.js Template for CRM, ERP & Admin Panels",
    description:
      "Next.js template using Tailwind CSS v4, ShadCN UI (23.07.2025), and Framer Motion. Perfect for CRM, ERP, and admin projects.",
    url: "https://muxsinjon.cv",
    siteName: "Next.js CRM Template",
    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Next.js Template Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Next.js Template for CRM, ERP & Admin Panels",
    description:
      "Built with Tailwind CSS v4, ShadCN UI, and Framer Motion. Optimized for modern web apps.",
    images: ["/logos/logo.png"],
    creator: "@muxsinjon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden flex`}
      >
        <Providers>
          <AppSidebar />
          <main className="mx-5 flex-1 h-full overflow-auto flex flex-col">
            <AppHeader />
            <div className="flex-1 overflow-auto">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
