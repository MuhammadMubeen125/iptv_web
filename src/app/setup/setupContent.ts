// Setup Page Content Types

import {
  ChevronRight,
  Download,
  Laptop,
  Smartphone,
  Tv,
  Wifi,
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

// Type definitions for content
export interface DeviceInfo {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SetupStep {
  id: string;
  title: string;
  icon: LucideIcon | null;
  description: string;
  links?: {
    text: string;
    url: string;
  }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  "@type": string;
  name: string;
  text: string;
}

export interface HowToStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  step: HowToStep[];
}

export interface SetupPageData {
  hero: {
    badge: string;
    title: {
      main: string;
      highlighted: string;
    };
    description: string;
    buttons: {
      primary: {
        text: string;
        href: string;
        icon: LucideIcon;
      };
      secondary: {
        text: string;
        href: string;
        icon: LucideIcon;
      };
    };
  };
  quickStart: {
    title: string;
    description: string;
    steps: SetupStep[];
  };
  devices: {
    title: string;
    description: string;
    supportedDevices: DeviceInfo[];
  };
  support: {
    title: string;
    description: string;
    buttons: {
      primary: {
        text: string;
        icon: LucideIcon;
      };
      secondary: {
        text: string;
        href: string;
        icon: LucideIcon;
      };
    };
  };
  faq: {
    title: string;
    description: string;
    items: FaqItem[];
  };
  structuredData: {
    howTo: HowToStructuredData;
  };
}

// Setup Page Content
export const setupContent: SetupPageData = {
  hero: {
    badge: "IPTV SETUP GUIDE",
    title: {
      main: "Setup Your",
      highlighted: "NakedTurtle IPTV Service",
    },
    description:
      "Get started in just a few minutes. Our simple setup guides will help you access premium TV channels on all your devices.",
    buttons: {
      primary: {
        text: "Go to Quick Start Guide",
        href: "#quick-start",
        icon: ChevronRight,
      },
      secondary: {
        text: "View Troubleshooting Help",
        href: "#troubleshooting",
        icon: HelpCircle,
      },
    },
  },
  quickStart: {
    title: "Quick Start Guide",
    description:
      "Follow these simple steps to get started with NakedTurtle using the IPTV Smarters app.",
    steps: [
      {
        id: "download",
        title: "Step 1: Download",
        icon: Download,
        description:
          "Download our IPTV app from your device's app store or choose your preferred version below:",
        links: [
          {
            text: "IPTV Smarters",
            url: "https://www.iptvsmarters.com/#downloads",
          },
          {
            text: "Smarters Pro",
            url: "https://smarterspro.com/",
          },
        ],
      },
      {
        id: "login",
        title: "Step 2: Login",
        icon: null, // We'll use a numeric icon instead
        description:
          "Open the app, select 'Add User', choose 'URL' login type, and enter your NakedTurtle credentials.",
      },
      {
        id: "enjoy",
        title: "Step 3: Enjoy",
        icon: Tv,
        description:
          "Start streaming your favorite channels and content on any device.",
      },
    ],
  },
  devices: {
    title: "Supported Devices",
    description:
      "NakedTurtle works on all your favorite devices. Set up once, watch everywhere with maximum flexibility.",
    supportedDevices: [
      {
        icon: Tv,
        title: "Smart TVs",
        description:
          "Samsung, LG, Android TV, Apple TV. Enjoy seamless streaming directly on your Smart TV.",
      },
      {
        icon: Smartphone,
        title: "Mobile Devices",
        description:
          "iOS and Android phones and tablets. Stream on the go with our mobile app.",
      },
      {
        icon: Laptop,
        title: "Computers",
        description:
          "Windows, Mac, Linux via web browsers. Watch directly in your browser for easy access.",
      },
      {
        icon: Wifi,
        title: "IPTV Boxes",
        description:
          "MAG, Formuler, Dreamlink, Buzztv. Optimized for dedicated IPTV boxes and streaming devices.",
      },
    ],
  },
  support: {
    title: "Still have questions?",
    description: "Our support team is here to help 24/7.",
    buttons: {
      primary: {
        text: "Live Chat",
        icon: MessageSquare,
      },
      secondary: {
        text: "Contact Support",
        href: "/contact",
        icon: ShieldCheck,
      },
    },
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Find answers to common setup and troubleshooting questions.",
    items: [], // FAQ items will be managed in a separate component
  },
  structuredData: {
    howTo: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Quick Start Guide for NakedTurtle IPTV Service",
      description:
        "Follow these simple steps to get started with NakedTurtle using the IPTV Smarters app.",
      step: [
        {
          "@type": "HowToStep",
          name: "Download",
          text: "Download our IPTV app from your device's app store or choose your preferred version: IPTV Smarters, Smarters Pro.",
        },
        {
          "@type": "HowToStep",
          name: "Login",
          text: "Open the app, select 'Add User', choose 'URL' login type, and enter your NakedTurtle credentials.",
        },
        {
          "@type": "HowToStep",
          name: "Enjoy",
          text: "Start streaming your favorite channels and content on any device.",
        },
      ],
    },
  },
};
