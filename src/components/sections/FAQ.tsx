"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Monitor, ShieldCheck, HelpCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";

// Tawk.to chat API types
// declare global {
//   interface Window {
//     Tawk_API?: {
//       toggle: () => void;
//     };
//   }
// }

export default function FAQ() {
  // Keep track of open FAQ items
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Categorized FAQ items
  const faqCategories = [
    {
      name: "General",
      icon: <HelpCircle className="h-5 w-5 text-blue-500" />,
      items: [
        {
          question: "What is NakedTurtle IPTV service and how does it work?",
          answer:
            "NakedTurtle IPTV delivers premium television content over the internet rather than through traditional satellite or cable formats. Our reliable IPTV service gives you access to 15,000+ channels and 50,000+ on-demand movies and shows, all streaming in HD quality through your internet connection on virtually any device.",
        },
        {
          question: "Do you offer a free IPTV trial?",
          answer:
            "Yes! We offer a 24-hour free IPTV trial so you can test our premium streaming service before subscribing. Our free trial includes full access to all channels, movies, and features. No credit card required - simply visit our free trial page or contact our support team to get started.",
        },
        {
          question:
            "What makes NakedTurtle different from other IPTV providers?",
          answer:
            "NakedTurtle stands out with our 99.9% uptime reliability, no-buffering technology, extensive channel selection (15,000+), premium 4K/HD quality, 7-day catchup feature, and 24/7 dedicated customer support. We&apos;ve optimized our infrastructure to deliver the most stable IPTV streaming experience possible.",
        },
      ],
    },
    {
      name: "Technical",
      icon: <Monitor className="h-5 w-5 text-purple-500" />,
      items: [
        {
          question:
            "What devices are compatible with NakedTurtle IPTV service?",
          answer:
            "Our IPTV service works seamlessly on virtually any device with an internet connection. This includes Firestick, Android TV boxes, NVIDIA Shield, Smart TVs (Samsung, LG, Sony), Apple TV, iOS/Android smartphones and tablets, Windows/Mac computers, and more. We support all major IPTV apps including IPTV Smarters, TiviMate, and VLC.",
        },
        {
          question:
            "What internet speed do I need for buffer-free IPTV streaming?",
          answer:
            "For smooth, buffer-free IPTV streaming, we recommend a minimum of 10 Mbps for SD content, 15 Mbps for HD content, and 25 Mbps for 4K content. However, connection stability is often more important than raw speed. Our optimized servers ensure minimal buffering even during peak hours.",
        },
        {
          question: "How do I set up NakedTurtle IPTV on my device?",
          answer:
            "Setting up NakedTurtle is simple. After subscribing or starting your free trial, you&apos;ll receive detailed setup instructions via email with your login credentials. We provide comprehensive setup guides for all supported devices and players like Firestick, Android TV, Smart TVs, and more. Our customer support team is also available 24/7 to assist with any setup questions.",
        },
      ],
    },
    {
      name: "Subscription",
      icon: <CreditCard className="h-5 w-5 text-emerald-500" />,
      items: [
        {
          question:
            "How many simultaneous IPTV connections can I have with NakedTurtle?",
          answer:
            "Depending on your subscription plan, you can have 1-5 simultaneous connections with NakedTurtle IPTV. This means your household can watch different channels on different devices at the same time. Our multi-connection plans are perfect for families or sharing with friends.",
        },
        {
          question:
            "What payment methods does NakedTurtle accept for IPTV subscriptions?",
          answer:
            "We accept all major credit cards, PayPal, and cryptocurrency payments for your convenience and security. All transactions are processed securely, and we never store your complete payment information.",
        },
        {
          question: "Can I cancel my NakedTurtle IPTV subscription anytime?",
          answer:
            "Yes, you can cancel your IPTV subscription at any time. We don&apos;t believe in long-term contracts or cancellation fees. If you cancel before your billing period ends, you&apos;ll still have access to all our premium channels and features until that period expires.",
        },
      ],
    },
  ];

  // Generate structured data for the FAQPage using JSON‑LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <section id="faq" className="relative" aria-labelledby="faq-heading">
        <div className="absolute inset-0 from-accent-secondary/20 to-accent-primary/20 z-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20 px-4 py-1 mb-4">
              FREQUENTLY ASKED QUESTIONS
            </Badge>
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Common Questions About Our IPTV Service
            </h2>
            <p className="text-zinc-300 text-lg">
              Find answers to frequently asked questions about
              NakedTurtle&apos;s premium IPTV streaming service, features, and
              subscription plans.
            </p>
          </div>

          {/* Quick navigation */}
          <div className="max-w-3xl mx-auto mb-10">
            <Tabs defaultValue="General" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3 bg-zinc-800/50 text-zinc-400 p-1 rounded-lg">
                  {faqCategories.map((category) => (
                    <TabsTrigger
                      key={category.name}
                      value={category.name}
                      className="rounded-md py-2 flex items-center justify-center gap-2 data-[state=active]:bg-zinc-700 data-[state=active]:text-white"
                    >
                      <span
                        className="hidden sm:inline-flex"
                        aria-hidden="true"
                      >
                        {category.icon}
                      </span>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {faqCategories.map((category) => (
                <TabsContent
                  key={category.name}
                  value={category.name}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span aria-hidden="true">{category.icon}</span>
                    <h3 className="text-xl font-medium">
                      {category.name} Questions
                    </h3>
                  </div>

                  <Accordion
                    type="multiple"
                    value={openItems}
                    onValueChange={setOpenItems}
                    className="space-y-4"
                  >
                    {category.items.map((item, index) => {
                      const itemValue = `${category.name}-${index}`;
                      return (
                        <AccordionItem
                          key={itemValue}
                          value={itemValue}
                          className="border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-zinc-700"
                        >
                          <AccordionTrigger
                            className="px-6 py-4 hover:bg-zinc-900/50 transition-colors text-left flex items-center"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleItem(itemValue);
                            }}
                          >
                            <div className="flex items-center gap-3 w-full">
                              <div
                                className={`w-2 h-2 rounded-full bg-${
                                  category.name === "General"
                                    ? "blue"
                                    : category.name === "Technical"
                                    ? "purple"
                                    : "emerald"
                                }-500`}
                                aria-hidden="true"
                              ></div>
                              <span>{item.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 bg-zinc-900/30 text-zinc-300">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Additional questions and support */}
          <div className="mt-16 max-w-3xl mx-auto bg-zinc-900/30 p-6 md:p-8 rounded-xl border border-zinc-800">
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">
                  Still have questions about our IPTV service?
                </h3>
                <p className="text-zinc-400">
                  Our IPTV support team is here to help 24/7. We&apos;re always
                  ready to answer your questions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {/* <Button
                  className="bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-2 w-full sm:w-auto"
                  onClick={() => {
                    if (typeof window !== "undefined" && window.Tawk_API) {
                      window.Tawk_API.toggle();
                    }
                  }}
                  aria-label="Start live chat with support"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Live Chat Support
                </Button> */}
                <Button
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-800 text-white flex items-center justify-center gap-2 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact" aria-label="Contact our support team">
                    <ShieldCheck
                      className="h-4 w-4 text-emerald-500"
                      aria-hidden="true"
                    />
                    Contact IPTV Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
