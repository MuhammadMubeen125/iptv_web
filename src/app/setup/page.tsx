import { Metadata } from "next";
import SetupPageClient from "./SetupPageClient";
import { setupContent } from "./setupContent";

export const metadata: Metadata = {
  title: "Setup Guide | KyoStream",
  description: "Quick and easy setup guide for KyoStream IPTV service. Set up your account on Smart TVs, mobile devices, computers, and IPTV boxes in minutes.",
  alternates: {
    canonical: "https://kyostream.com/setup",
  },
  keywords: "KyoStream setup, IPTV setup guide, IPTV installation, KyoStream devices, streaming setup, IPTV Smarters",
  openGraph: {
    title: "Setup Guide | KyoStream IPTV Service",
    description: "Set up KyoStream on all your devices in minutes. Easy step-by-step setup instructions for Smart TVs, mobile devices, and IPTV boxes.",
    url: "https://kyostream.com/setup",
    siteName: "KyoStream",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setup Guide | KyoStream IPTV Service",
    description: "Set up KyoStream on all your devices in minutes with our easy-to-follow guide.",
  },
  other: {
    "script:ld+json": JSON.stringify(setupContent.structuredData.howTo),
  },
};

export default function SetupPage() {
  return <SetupPageClient />;
}
