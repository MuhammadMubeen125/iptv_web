import { Metadata } from "next";
import TrialHero from "./components/TrialHero";
import TrialBenefits from "./components/TrialBenefits";
import HowItWorks from "./components/HowItWorks";
import TrialSignupForm from "./components/TrialSignupForm";
import Testimonials from "./components/Testimonials";
import TrialFAQ from "./components/TrialFAQ";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Free IPTV Trial - Premium Channels by NakedTurtle | No Credit Card",
  description:
    "Try NakedTurtle's IPTV service free for 24 hours. Access premium channels, HD quality streaming, and personalized setup. No credit card required for your free IPTV trial.",
  alternates: {
    canonical: "https://NakedTurtle.com/free-iptv-trial",
  },
  keywords:
    "free iptv trial, iptv trial, free trial iptv, premium iptv, iptv service, test iptv, iptv streaming",
  openGraph: {
    title: "Free IPTV Trial - Premium Streaming Service | NakedTurtle",
    description:
      "Start your free 24-hour IPTV trial today. Premium channels, HD quality, personalized setup, and no credit card required.",
    url: "https://NakedTurtle.com/free-iptv-trial",
    siteName: "NakedTurtle",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free IPTV Trial - Premium Streaming Service | NakedTurtle",
    description:
      "Try NakedTurtle's premium IPTV service free for 24 hours. No credit card required.",
  },
};

// Offer schema data for structured data
const offerSchemaData = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Free IPTV Trial",
  description: "24-hour free trial of NakedTurtle premium IPTV service",
  price: "0",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  url: "https://NakedTurtle.com/free-iptv-trial",
  seller: {
    "@type": "Organization",
    name: "NakedTurtle",
    url: "https://NakedTurtle.com",
  },
  offeredBy: {
    "@type": "Organization",
    name: "NakedTurtle",
    url: "https://NakedTurtle.com",
  },
};

export default function FreeTrial() {
  return (
    <div className="w-full">
      <Script id="schema-offer" type="application/ld+json">
        {JSON.stringify(offerSchemaData)}
      </Script>
      <TrialHero />
      <TrialBenefits />
      <HowItWorks />
      <TrialSignupForm />
      <Testimonials />
      <TrialFAQ />
    </div>
  );
}
