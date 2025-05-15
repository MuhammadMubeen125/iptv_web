"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";

export default function TrialHero() {
  const scrollToSignup = () => {
    const element = document.getElementById("trial-signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="free-trial-heading"
    >
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-accent-primary/20 text-accent-primary border-accent-primary/20 px-4 py-1.5 text-sm font-medium mb-4 inline-flex">
            FREE IPTV TRIAL
          </Badge>

          <h1
            id="free-trial-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6"
          >
            <span className="text-foreground drop-shadow-sm">
              Start Your Free
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-primary/80 mt-1">
              IPTV Trial with NakedTurtle
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Test our premium IPTV service with a free 24-hour trial. Experience
            high-quality streaming, extensive channel selection, and reliable
            service before you commit.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full text-sm">
              <Check className="h-4 w-4" aria-hidden="true" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full text-sm">
              <Check className="h-4 w-4" aria-hidden="true" />
              <span>Personalized Trial Setup</span>
            </div>
            <div className="flex items-center gap-2 bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full text-sm">
              <Check className="h-4 w-4" aria-hidden="true" />
              <span>Premium IPTV Channels</span>
            </div>
          </div>

          <Button
            onClick={scrollToSignup}
            className="px-6 py-6 text-lg bg-[#10b981] hover:bg-[#0ea372] transition-all shadow-lg shadow-[#10b981]/20 rounded-xl font-medium active:scale-95 hover:scale-105"
            aria-label="Contact us to start your free IPTV trial"
          >
            Start My Free IPTV Trial{" "}
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
