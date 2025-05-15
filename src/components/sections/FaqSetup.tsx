import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSetupProps {
  faqs?: FAQ[];
}

const defaultFAQs: FAQ[] = [
  {
    question: "I can't log in to IPTV Smarters app. What should I do?",
    answer:
      "This issue typically arises due to incorrect credentials or connectivity issues. Please try the following steps:\n\n" +
      "1. Verify that your username and password are correct (they are case-sensitive).\n" +
      "2. Ensure you have selected the 'URL' login type.\n" +
      "3. Confirm you are using the correct Portal URL provided to you (please refer to your welcome email or contact support for the accurate URL).\n" +
      "4. Check your internet connection by loading a website on the same device.\n" +
      "5. Update your IPTV Smarters app to the latest version.\n" +
      "6. Restart your device to resolve any temporary glitches.\n\n" +
      "If you continue experiencing login issues, please contact our support team with your account details and device information.",
  },
  {
    question: "I'm experiencing buffering issues. How can I fix this?",
    answer:
      "Buffering can result from a slow or unstable internet connection or temporary server load. Here are some steps to try:\n\n" +
      "1. Run an internet speed test (we recommend a minimum of 10Mbps for HD streaming).\n" +
      "2. If available, switch to a wired ethernet connection rather than Wi-Fi.\n" +
      "3. Restart your modem, router, and streaming device.\n" +
      "4. Lower the streaming quality in the app settings to reduce data usage.\n" +
      "5. Close any other applications that may be using bandwidth.\n" +
      "6. Try streaming different channels to determine if the issue is channel-specific.\n\n" +
      "If the problem persists, please contact our support team.",
  },
  {
    question: "My channels aren't loading. What should I do?",
    answer:
      "If your channels aren’t loading, please follow these troubleshooting steps:\n\n" +
      "1. Ensure your internet connection is stable.\n" +
      "2. Completely close and then reopen the IPTV Smarters app to refresh the channel list.\n" +
      "3. Clear the app cache by navigating to your device's settings, selecting the app, and choosing 'Clear Cache'.\n" +
      "4. If necessary, uninstall and reinstall the app (note: you will need to re-enter your credentials).\n" +
      "5. Check our status page (the link will be provided) for any known service interruptions.\n\n" +
      "If these steps do not resolve the issue, please get in touch with our support team and provide details about your device and the problem.",
  },
  {
    question: "How do I update the IPTV Smarters app to the newest version?",
    answer:
      "Keeping your app up to date is essential for optimal performance and access to the latest features. Please follow these steps based on your device:\n\n" +
      "• **Android TV/Fire TV/Android devices:**\n" +
      "  1. Open the Google Play Store or Amazon App Store.\n" +
      "  2. Search for 'IPTV Smarters Pro'.\n" +
      "  3. If an update is available, tap the 'Update' button.\n\n" +
      "• **iOS devices (iPhone/iPad):**\n" +
      "  1. Open the App Store.\n" +
      "  2. Tap your profile icon at the top.\n" +
      "  3. Scroll to find IPTV Smarters and tap 'Update' if available.\n\n" +
      "• **IPTV Boxes:**\n" +
      "  Check your device settings for system updates or consult your manufacturer’s instructions.",
  },
  {
    question: "Can I use a VPN with KyoStream?",
    answer:
      "Yes, KyoStream is compatible with most VPN services. Using a VPN may even improve your streaming experience if your ISP throttles streaming traffic. Consider these tips when using a VPN:\n\n" +
      "• Choose a reputable VPN service with high-speed servers.\n" +
      "• Connect to a server near your physical location for optimal performance.\n" +
      "• Consider using a VPN that supports split tunneling so that only your streaming traffic is routed through the VPN.\n" +
      "• If you experience reduced streaming speeds with the VPN enabled, try a different server or temporarily disable the VPN.\n\n" +
      "Note: Some public networks may restrict VPN usage. In these cases, consider using an alternative network or mobile data.",
  },
  {
    question: "Why are some channels missing from my lineup?",
    answer:
      "Since KyoStream offers a single, unified plan, missing channels are not due to package differences. Instead, please consider the following reasons:\n\n" +
      "1. **Regional restrictions:** Certain channels may only be available in specific regions due to licensing agreements.\n" +
      "2. **Temporary maintenance:** Some channels may be offline temporarily for maintenance or updates.\n" +
      "3. **Service updates:** Our channel lineup is periodically updated; please review our latest announcements for any changes.\n\n" +
      "If you believe channels that should be available are still missing, please contact our support team with a detailed list of the affected channels.",
  },
];

export default function FaqSetup({ faqs = defaultFAQs }: FAQSetupProps) {
  return (
    <section id="troubleshooting" className="w-full py-16 md:py-24 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Troubleshooting & FAQ</h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Find quick solutions to common issues and get back to streaming. If your question isn’t answered here, please contact our support team.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <Badge className="bg-accent-secondary/20 text-accent-secondary px-4 py-2 text-sm">Login Issues</Badge>
            <Badge className="bg-accent-secondary/20 text-accent-secondary px-4 py-2 text-sm">Streaming Issues</Badge>
            <Badge className="bg-accent-secondary/20 text-accent-secondary px-4 py-2 text-sm">App & Device</Badge>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq: FAQ, index: number) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-left text-muted-foreground whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
