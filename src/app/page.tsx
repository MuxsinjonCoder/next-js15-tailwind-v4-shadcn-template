import { ChartAreaInteractive } from "@/components/pages/dashboard/big-chart";
import DashboardNumber from "@/components/pages/dashboard/dashboard-number";
import { TopActiveUsers } from "@/components/pages/dashboard/top-active-users";
import { UsersVisitedMost } from "@/components/pages/dashboard/users-visited-most";
import { VisitorsByAge } from "@/components/pages/dashboard/visitors-by-age";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Analytics Panel by Muxsinjon Maxsudovich",
  description:
    "Interactive and responsive analytics dashboard with charts and key metrics. Built with Next.js, Tailwind CSS v4, and ShadCN UI by Muxsinjon Maxsudovich.",
  keywords: [
    "Analytics Dashboard",
    "Next.js Dashboard",
    "Admin Panel",
    "Tailwind CSS v4",
    "Framer Motion",
    "Top Users",
    "Visitors by Age",
    "User Analytics",
    "ShadCN UI",
    "Muxsinjon Maxsudovich",
  ],
  authors: [{ name: "Muxsinjon Maxsudovich", url: "https://muxsinjon.cv" }],
  creator: "Muxsinjon Maxsudovich",
  publisher: "Muxsinjon Maxsudovich",
  icons: "/logos/logo.png",
  openGraph: {
    title: "Dashboard | Analytics Panel by Muxsinjon Maxsudovich",
    description:
      "Feature-rich admin dashboard with charts and user analytics. Perfect for monitoring activity and engagement metrics.",
    url: "https://muxsinjon.cv",
    siteName: "Next.js CRM Dashboard",
    images: [
      {
        url: "/logos/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | Analytics Panel by Muxsinjon Maxsudovich",
    description:
      "Built using Next.js and Tailwind CSS v4. Visualize user engagement and key metrics easily.",
    images: ["/logos/og-image.png"],
    creator: "@muxsinjon",
  },
};

export default function Home() {
  return (
    <>
      <div className="mb-10">
        <DashboardNumber />
        <ChartAreaInteractive />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          <TopActiveUsers />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <VisitorsByAge />
            <UsersVisitedMost />
          </div>
        </div>
      </div>
    </>
  );
}
