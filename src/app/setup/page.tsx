import { Metadata } from "next";
import SetupPageClient from "./SetupPageClient";
import { setupContent } from "./setupContent";

export const metadata: Metadata = {
  title: "Setup Guide | NakedTurtle",
  description:
    "Quick and easy setup guide for NakedTurtle IPTV service. Set up your account on Smart TVs, mobile devices, computers, and IPTV boxes in minutes.",
  alternates: {
    canonical: "https://NakedTurtle.com/setup",
  },
  keywords:
    "NakedTurtle setup, IPTV setup guide, IPTV installation, NakedTurtle devices, streaming setup, IPTV Smarters",
  openGraph: {
    title: "Setup Guide | NakedTurtle IPTV Service",
    description:
      "Set up NakedTurtle on all your devices in minutes. Easy step-by-step setup instructions for Smart TVs, mobile devices, and IPTV boxes.",
    url: "https://NakedTurtle.com/setup",
    siteName: "NakedTurtle",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setup Guide | NakedTurtle IPTV Service",
    description:
      "Set up NakedTurtle on all your devices in minutes with our easy-to-follow guide.",
  },
  other: {
    "script:ld+json": JSON.stringify(setupContent.structuredData.howTo),
  },
};

export default function SetupPage() {
  return <SetupPageClient />;
}
