"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";

export default function TrialFAQ() {
  // Keep track of open FAQ items
  const [openItems, setOpenItems] = useState<string[]>([]);

  // FAQ specific to the trial page
  const faqItems = [
    {
      question: "How long is the free trial?",
      answer:
        "Our free trial gives you 24-hour access to test our IPTV service. This is enough time to thoroughly evaluate the quality, channel selection, and compatibility with your devices.",
    },
    {
      question: "Why do I need to contact support for a free trial?",
      answer:
        "We provide personalized trial setup for each user based on your specific device, location, and preferences. This ensures you get the best possible experience tailored to your needs.",
    },
    {
      question: "How quickly will I receive my trial credentials?",
      answer:
        "Our support team typically sets up trials within minutes during business hours. If you contact us via Live Chat, you can often get immediate assistance.",
    },
    {
      question: "What information do I need to provide?",
      answer:
        "To set up your trial, we'll need to know your device type (Firestick, Android, iOS, etc.), email address, and your country. This helps us configure the optimal settings for your trial.",
    },
    {
      question: "Can I upgrade after the trial?",
      answer:
        "Absolutely! After your trial ends, you can easily upgrade to one of our subscription plans. Our support team will help you with the transition.",
    },
    {
      question: "What channels are included in the free trial?",
      answer:
        "The free trial gives you access to our full channel lineup, just like our paid subscribers. This includes premium sports, entertainment, movies, news, and international channels.",
    },
  ];

  // Generate structured data for the FAQPage using JSON‑LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-accent-primary/20 text-accent-primary border-accent-primary/20 px-4 py-1 mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our free IPTV trial.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion
              type="multiple"
              value={openItems}
              onValueChange={setOpenItems}
              className="space-y-4"
            >
              {faqItems.map((item, index) => {
                const itemValue = `faq-${index}`;
                return (
                  <AccordionItem
                    key={itemValue}
                    value={itemValue}
                    className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-input"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors text-left flex items-center">
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-card-transparent text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
