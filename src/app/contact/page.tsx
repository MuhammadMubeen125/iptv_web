import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NakedTurtle",
  description:
    "Get in touch with NakedTurtle's 24/7 customer support team for questions about our premium IPTV streaming service. Find support via email, live chat, Telegram, and Discord.",
  alternates: {
    canonical: "https://NakedTurtle.com/contact",
  },
  keywords:
    "contact NakedTurtle, IPTV support, streaming support, 24/7 support, NakedTurtle help, IPTV customer service",
  openGraph: {
    title: "Contact NakedTurtle Support | 24/7 Customer Service",
    description:
      "Need help with your IPTV streaming service? NakedTurtle's support team is available 24/7 via email, live chat, Telegram, and Discord.",
    url: "https://NakedTurtle.com/contact",
    siteName: "NakedTurtle",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NakedTurtle Support | 24/7 Customer Service",
    description:
      "Get in touch with NakedTurtle's customer support team for IPTV streaming service assistance.",
  },
};

export default function ContactPage() {
  return (
    <>
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                We&apos;re Here to Help You
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                At NakedTurtle, we take customer support seriously. Our
                dedicated team is ready to assist you with any questions or
                issues related to our premium IPTV streaming service. We offer
                multiple ways to reach us, ensuring you always have the help you
                need.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="w-full sm:w-auto min-h-[3rem] text-base font-medium"
                >
                  <a
                    href="#contact-options"
                    className="px-6 py-2.5 flex items-center justify-center"
                  >
                    Contact Options
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-h-[3rem] text-base font-medium mt-3 sm:mt-0"
                >
                  <Link
                    href="/#faq"
                    className="px-6 py-2.5 flex items-center justify-center"
                  >
                    Read FAQs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section
          id="contact-options"
          className="w-full py-12 sm:py-16 md:py-24 border-t border-border"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              Multiple Ways to Reach Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Customer Support Card */}
              <div className="bg-[#18181b80] border-border rounded-xl p-6 sm:p-8 border transition-all duration-300 hover:border-accent-primary/50 h-full">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  Customer Support
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                  Our friendly support team is available 24/7 to assist you with
                  any questions, technical issues, or account-related queries.
                  We pride ourselves on fast response times and helpful
                  solutions to ensure your streaming experience is always smooth
                  and enjoyable.
                </p>

                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-accent-primary/10 mr-3 flex-shrink-0">
                      <span className="text-accent-primary">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Email Support
                      </p>
                      <a
                        href="mailto:support@NakedTurtle.com"
                        className="text-accent-primary hover:underline inline-block py-1"
                      >
                        support@NakedTurtle.com
                      </a>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        Our email support team typically responds within 2-3
                        hours, 24 hours a day.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-accent-primary/10 mr-3 flex-shrink-0">
                      <span className="text-accent-primary">💬</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Live Chat Support
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        For immediate assistance, our live chat support is
                        available directly through the GreenChat icon in the
                        bottom right corner of this page. Connect with a real
                        person in seconds for real-time help with your streaming
                        needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-accent-primary/10 mr-3 flex-shrink-0">
                      <span className="text-accent-primary">📲</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Telegram Community
                      </p>
                      <a
                        href="https://t.me/TurtleIPTV_Bot "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-primary hover:underline inline-block py-1"
                      >
                        Join our Telegram Channel
                      </a>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        Our most responsive support channel with dedicated
                        moderators providing assistance within minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Inquiries Card */}
              <div className="bg-[#18181b80] border-border rounded-xl p-6 sm:p-8 border transition-all duration-300 hover:border-accent-primary/50 h-full">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  Business Opportunities
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                  Interested in partnering with NakedTurtle? We offer reseller
                  opportunities, bulk subscription discounts, and customized
                  solutions for businesses looking to provide premium IPTV
                  services to their customers. Our business development team is
                  ready to discuss how we can work together to create a mutually
                  beneficial partnership.
                </p>

                <div className="space-y-4 sm:space-y-5">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-accent-primary/10 mr-3 flex-shrink-0">
                      <span className="text-accent-primary">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Business Development
                      </p>
                      <a
                        href="mailto:business@NakedTurtle.com"
                        className="text-accent-primary hover:underline inline-block py-1"
                      >
                        business@NakedTurtle.com
                      </a>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        For reseller program details, partnership opportunities,
                        and business inquiries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-accent-primary/10 mr-3 flex-shrink-0">
                      <span className="text-accent-primary">🎮</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Discord Community
                      </p>
                      <a
                        href="https://discord.gg/NakedTurtle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-primary hover:underline inline-block py-1"
                      >
                        Join our Discord Server
                      </a>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        Connect with other resellers and our business team in
                        our dedicated business channels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="w-full py-12 sm:py-16 md:py-24 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Our Support Commitment
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                At NakedTurtle, we understand that reliable support is just as
                important as reliable streaming. That&apos;s why we&apos;ve
                built a comprehensive support system designed to resolve your
                issues quickly and efficiently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left mt-8 sm:mt-12">
                <div className="bg-[#18181b40] border-border rounded-xl p-5 sm:p-6 border h-full">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    24/7 Availability
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Our support team never sleeps. We&apos;re available around
                    the clock, every day of the year, to ensure your
                    entertainment is never interrupted for long.
                  </p>
                </div>

                <div className="bg-[#18181b40] border-border rounded-xl p-5 sm:p-6 border h-full">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    Expert Assistance
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Our support agents are streaming experts who understand the
                    technical aspects of IPTV and can guide you through any
                    setup or troubleshooting process.
                  </p>
                </div>

                <div className="bg-[#18181b40] border-border rounded-xl p-5 sm:p-6 border h-full sm:col-span-2 md:col-span-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    Fast Response Times
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    We aim to respond to all inquiries within minutes, not
                    hours. Your time is valuable, and we respect that with
                    prompt, helpful responses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Callout Section */}
        <section className="w-full py-12 sm:py-16 md:py-24 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4 sm:mb-6">
                Looking for Quick Answers?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Our comprehensive FAQ section covers common questions about our
                service, billing, technical setup, and troubleshooting. Save
                time by checking if your question has already been answered in
                our detailed knowledge base.
              </p>
              <Button
                size="lg"
                variant="accent"
                className="w-full sm:w-auto min-h-[3rem] rounded-lg px-5 sm:px-8 text-base font-medium"
                asChild
              >
                <Link
                  href="/#faq"
                  className="py-2.5 flex items-center justify-center"
                >
                  Browse Frequently Asked Questions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
