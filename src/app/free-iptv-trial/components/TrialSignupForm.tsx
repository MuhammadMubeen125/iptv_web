"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Mail, MessagesSquare, Send } from "lucide-react";

// Define the contact option type for better TypeScript support
interface ContactOption {
  icon: React.ReactNode;
  title: string;
  action: string;
  buttonText: string;
  primary: boolean;
  onClick?: () => void;
  iconBg: string;
}

export default function TrialSignupForm() {
  // Function to open Tawk.to chat using a custom event
  const openLiveChat = () => {
    // Create and dispatch a custom event that we can listen for in layout.tsx
    if (typeof window !== "undefined") {
      const event = new Event("openTawkChat");
      window.dispatchEvent(event);

      // Fallback direct approach (using eval to avoid TypeScript errors)
      try {
        // This is executed at runtime so TypeScript won't check it
        eval(
          "if (window.Tawk_API && window.Tawk_API.maximize) window.Tawk_API.maximize()"
        );
      } catch {
        console.log("Could not open chat");
      }
    }
  };

  const contactOptions: ContactOption[] = [
    {
      icon: <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />,
      title: "Live Chat",
      action: "#",
      buttonText: "Chat Now",
      primary: true,
      onClick: openLiveChat,
      iconBg: "bg-gradient-to-br from-emerald-500/20 to-emerald-500/10",
    },
    {
      icon: <Mail className="h-6 w-6 md:h-7 md:w-7" />,
      title: "Email",
      action: "mailto:trial@NakedTurtle.com",
      buttonText: "Email Us",
      primary: true,
      iconBg: "bg-gradient-to-br from-purple-500/20 to-purple-500/10",
    },
    {
      icon: <MessagesSquare className="h-6 w-6 md:h-7 md:w-7" />,
      title: "Discord",
      action: "https://discord.gg/NakedTurtle",
      buttonText: "Discord",
      primary: true,
      iconBg: "bg-gradient-to-br from-[#5865F2]/20 to-[#5865F2]/10",
    },
    {
      icon: <Send className="h-6 w-6 md:h-7 md:w-7" />,
      title: "Telegram",
      action: "https://t.me/TurtleIPTV_Bot ",
      buttonText: "Telegram",
      primary: true,
      iconBg: "bg-gradient-to-br from-[#0088cc]/20 to-[#0088cc]/10",
    },
  ];

  return (
    <section
      id="trial-signup"
      className="py-10 md:py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Badge className="bg-accent-primary/20 text-accent-primary border-accent-primary/20 px-4 py-1 mb-3 md:mb-4">
              FREE TRIAL
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Get Your Free IPTV Trial Today
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Contact us through any of these channels for your free trial
              setup.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 relative z-10">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="bg-card-transparent border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-[#10b981] group"
              >
                {option.onClick ? (
                  <button
                    onClick={option.onClick}
                    className="w-full flex items-center px-4 py-3 md:py-4 transition-all duration-300 hover:bg-[#10b98108]"
                  >
                    <ContactOptionContent option={option} />
                  </button>
                ) : (
                  <Link
                    href={option.action}
                    target={
                      option.action.startsWith("http") ? "_blank" : "_self"
                    }
                    className="w-full flex items-center px-4 py-3 md:py-4 transition-all duration-300 hover:bg-[#10b98108]"
                  >
                    <ContactOptionContent option={option} />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>
              Please provide your device type, email, and country when
              contacting us.
            </p>
            <p className="mt-2">
              By requesting a free trial, you agree to our{" "}
              <a href="/terms" className="text-accent-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-accent-primary hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted component for the contact option content
function ContactOptionContent({ option }: { option: ContactOption }) {
  return (
    <>
      <div
        className={`flex-shrink-0 p-3 md:p-4 rounded-lg ${option.iconBg} group-hover:scale-105 transition-transform duration-300`}
      >
        <div className="text-foreground">{option.icon}</div>
      </div>

      <div className="ml-4 flex-grow flex items-center">
        <h3 className="font-semibold text-sm md:text-base group-hover:text-[#10b981] transition-colors duration-300">
          {option.title}
        </h3>
      </div>

      <div className="flex-shrink-0 ml-auto">
        <span className="inline-flex items-center px-3 py-1.5 w-[5.5rem] md:w-28 justify-center rounded-full text-xs md:text-sm font-medium bg-[#10b981] text-white group-hover:bg-[#0ea372] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#10b98140]">
          {option.buttonText}
        </span>
      </div>
    </>
  );
}
