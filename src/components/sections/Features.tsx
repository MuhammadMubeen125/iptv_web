"use client";

import { useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Monitor,
  Smartphone,
  Cloud,
  ChevronDown,
  ChevronUp,
  Zap,
  Clock,
} from "lucide-react";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: Zap,
      title: "No Buffering IPTV Service",
      description:
        "Say goodbye to frustrating buffering. Our optimized servers ensure smooth, uninterrupted IPTV streaming even during peak hours.",
    },
    {
      icon: Globe,
      title: "10,000+ Premium IPTV Channels",
      description:
        "Access premium channels from over 50 countries worldwide in HD quality. Sports, news, entertainment, movies - all in one reliable IPTV service.",
    },
    {
      icon: Monitor,
      title: "HD & 4K Ultra-Clear Streaming",
      description:
        "Experience the sharpest picture quality with our HD and 4K IPTV channels, delivering cinema-quality streaming to your favorite devices.",
    },
    {
      icon: Clock,
      title: "7-Day Catch-Up & VOD Library",
      description:
        "Never miss a show with our 7-day catch-up feature and extensive VOD library containing 50,000+ movies and series on demand.",
    },
    {
      icon: Smartphone,
      title: "Multi-Device IPTV Compatibility",
      description:
        "Stream on Smart TVs, Firestick, Android boxes, iOS, smartphones, and more - our IPTV service works seamlessly across all your devices.",
    },
    {
      icon: Cloud,
      title: "99.9% Uptime Reliability",
      description:
        "Our reliable IPTV infrastructure ensures 99.9% uptime with multiple server locations for consistently stable streaming performance.",
    },
  ];

  // Use the existing mobile hook
  const isMobile = useIsMobile();

  // Track which description is expanded (only one at a time for better UX)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = useCallback(
    (index: number) => {
      if (isMobile) {
        setExpandedIndex((prev) => (prev === index ? null : index));
      }
    },
    [isMobile]
  );

  return (
    <section
      id="features"
      className="relative border-b border-border"
      aria-labelledby="features-heading"
    >
      <div className="absolute inset-0 from-accent-secondary/20 to-accent-primary/20 z-0"></div>
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20 px-4 py-1 mb-4">
            KEY FEATURES
          </Badge>
          <h2
            id="features-heading"
            className="text-2xl md:text-4xl font-bold mb-3 md:mb-4"
          >
            Why Choose NakedTurtle For Premium IPTV Streaming
          </h2>
          <p className="text-zinc-300 text-base md:text-lg">
            NakedTurtle delivers the most reliable IPTV service with
            crystal-clear quality, extensive channel selection, and
            uninterrupted entertainment. No more buffering or freezing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index: number) => (
            <div
              key={index}
              className={`bg-zinc-900/50 p-5 md:p-6 rounded-xl border ${
                expandedIndex === index
                  ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                  : "border-zinc-800"
              } 
                transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 
                ${!isMobile && "hover:-translate-y-1"} group`}
            >
              <div className="flex items-start gap-3 md:block">
                <div
                  className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center md:mb-4 shrink-0 group-hover:from-emerald-500/30 group-hover:to-emerald-600/30 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* For mobile: conditionally rendered with animation */}
                  {isMobile ? (
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: expandedIndex === index ? "200px" : "0px",
                        opacity: expandedIndex === index ? 1 : 0,
                        marginBottom: expandedIndex === index ? "8px" : "0px",
                      }}
                    >
                      <p className="text-zinc-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ) : (
                    /* For desktop: always visible */
                    <p className="text-zinc-400 text-base">
                      {feature.description}
                    </p>
                  )}

                  {/* Show button only on mobile */}
                  {isMobile && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDescription(index);
                      }}
                      className="mt-1 pt-1 flex items-center gap-1 text-emerald-500 hover:text-emerald-400 transition-colors duration-200 focus:outline-none"
                      aria-expanded={expandedIndex === index}
                      aria-controls={`feature-description-${index}`}
                    >
                      <span className="text-xs font-medium">
                        {expandedIndex === index ? "Show less" : "Show more"}
                      </span>
                      {expandedIndex === index ? (
                        <ChevronUp className="h-3 w-3" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-3 w-3" aria-hidden="true" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
