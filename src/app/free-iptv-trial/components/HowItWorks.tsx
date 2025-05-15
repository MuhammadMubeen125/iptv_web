import { Badge } from "@/components/ui/badge";
import { MessageCircle, User, PlayCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <MessageCircle
          className="h-10 w-10 text-accent-primary"
          aria-hidden="true"
        />
      ),
      title: "Request Your IPTV Trial",
      description:
        "Reach out through Live Chat, Email, Discord, or Telegram to request your free IPTV trial access.",
    },
    {
      icon: (
        <User className="h-10 w-10 text-accent-secondary" aria-hidden="true" />
      ),
      title: "Personalized Trial Setup",
      description:
        "Tell us your device type (Firestick, Android, iOS), email address, and country for an optimized trial experience.",
    },
    {
      icon: (
        <PlayCircle
          className="h-10 w-10 text-accent-primary"
          aria-hidden="true"
        />
      ),
      title: "Start Your Free IPTV Streaming",
      description:
        "We'll send you login credentials and setup instructions to begin watching premium IPTV channels instantly.",
    },
  ];

  return (
    <section className="py-16" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="bg-accent-secondary/20 text-accent-secondary border-accent-secondary/20 px-4 py-1 mb-4">
            HOW TO GET YOUR FREE TRIAL
          </Badge>
          <h2 id="how-it-works-heading" className="text-3xl font-bold mb-4">
            Get Your Free IPTV Trial in 3 Simple Steps
          </h2>
          <p className="text-muted-foreground">
            Starting your free IPTV trial is quick and easy - we&apos;ll have
            you streaming in minutes
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              {/* Connected line between steps */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent-secondary to-accent-primary transform -translate-x-1/2"
                  aria-hidden="true"
                />
              )}

              <div className="bg-card-transparent border border-border rounded-xl p-8 h-full relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="rounded-full p-4 bg-background inline-block">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
