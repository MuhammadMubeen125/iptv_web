import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NakedTurtle: Reliable IPTV Service - Premium Channels & Free Trial",
  description:
    "Experience reliable, high-quality IPTV streaming with NakedTurtle. Access thousands of channels, VOD, on multiple devices. Start your Free IPTV Trial today!",
  keywords:
    "NakedTurtle, IPTV service, reliable IPTV, premium IPTV, IPTV streaming, fast IPTV, no buffering IPTV, IPTV with VOD",
  alternates: {
    canonical: "https://NakedTurtle.com/",
  },
  openGraph: {
    title: "NakedTurtle: Premium IPTV Streaming Service | Free Trial Available",
    description:
      "Fast & stable IPTV streaming with 15,000+ channels, movies & shows. No buffering, premium quality, 24/7 support. Start your free trial today!",
    url: "https://NakedTurtle.com",
    siteName: "NakedTurtle",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NakedTurtle IPTV - Premium Streaming Made Simple",
    description: "Premium IPTV streaming with no buffering. Try free today!",
  },
};

// Organization schema for homepage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NakedTurtle",
  url: "https://NakedTurtle.com",
  logo: "https://NakedTurtle.com/logo.svg",
  description:
    "Premium IPTV streaming service offering reliable access to thousands of channels and VOD content.",
  sameAs: ["https://discord.gg/nakedturtle", "https://t.me/TurtleIPTV_Bot"],
};

// Service schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "NakedTurtle IPTV",
  provider: {
    "@type": "Organization",
    name: "NakedTurtle",
  },
  serviceType: "IPTV Streaming Service",
  description:
    "Premium IPTV streaming service with 15,000+ live channels, 50,000+ movies & shows, and 99.9% uptime.",
  offers: {
    "@type": "Offer",
    url: "https://NakedTurtle.com/free-iptv-trial",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    description: "24-hour free trial of NakedTurtle premium IPTV service",
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
    </div>
  );
}
