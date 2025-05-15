import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KyoStream",
  description: "Learn how KyoStream collects, uses, and protects your personal information. Review our privacy practices, data security measures, and your rights as a user of our IPTV service.",
  alternates: {
    canonical: "https://kyostream.com/privacy",
  },
  keywords: "KyoStream privacy, IPTV privacy policy, streaming data protection, KyoStream data security, IPTV user privacy",
  openGraph: {
    title: "Privacy Policy | KyoStream",
    description: "Learn how KyoStream collects, uses, and protects your personal information when you use our premium IPTV streaming service.",
    url: "https://kyostream.com/privacy",
    siteName: "KyoStream",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | KyoStream",
    description: "KyoStream's complete privacy policy for our premium IPTV streaming service users.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Last updated: January 1, 2024
          </p>
        </div>
        
        {/* Privacy Policy Content */}
        <div className="prose max-w-none text-text-secondary">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Introduction</h2>
            <p>
              KyoStream (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our service, you acknowledge that you have read, 
              understood, and agree to be bound by all the terms of this Privacy Policy and our Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-text-primary mb-3">2.1 Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Create an account</li>
              <li>Subscribe to our service</li>
              <li>Contact our customer support</li>
              <li>Sign up for our newsletter</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>
              This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Billing address</li>
              <li>Payment information</li>
              <li>Phone number</li>
              <li>Device information</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mb-3">2.2 Automatically Collected Information</h3>
            <p>
              When you access our service, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Usage data (pages visited, time spent, etc.)</li>
              <li>Referral source</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mb-3">2.3 Cookies and Similar Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
              Cookies are small files placed on your device that allow us to enhance your experience on our platform.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">3. How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to customer service requests and support needs</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Monitor usage of our services for technical administration</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may share your information in the following situations:
            </p>
            <h3 className="text-xl font-medium text-text-primary mb-3">4.1 With Service Providers</h3>
            <p>
              We may share your information with third-party service providers that perform services on our behalf, 
              such as payment processing, data analysis, email delivery, hosting services, and customer service.
            </p>

            <h3 className="text-xl font-medium text-text-primary mb-3">4.2 For Business Transfers</h3>
            <p>
              We may share or transfer your information in connection with, or during negotiations of, any merger, 
              sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </p>

            <h3 className="text-xl font-medium text-text-primary mb-3">4.3 With Your Consent</h3>
            <p>
              We may disclose your personal information for any other purpose with your consent.
            </p>

            <h3 className="text-xl font-medium text-text-primary mb-3">4.4 Legal Requirements</h3>
            <p>
              We may disclose your information where we are legally required to do so in order to comply with applicable law, 
              governmental requests, judicial proceedings, court orders, or legal processes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Data Security</h2>
            <p>
              We use appropriate technical and organizational measures designed to protect the information we collect 
              and store. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
            </p>
            <p>
              In the event that any information under our control is compromised as a result of a breach of security, 
              we will take reasonable steps to investigate the situation and, where appropriate, notify those individuals 
              whose information may have been compromised.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. 
              We will retain and use your information to the extent necessary to comply with our legal obligations, 
              resolve disputes, and enforce our policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">7. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The right to access the personal information we have about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the &ldquo;Contact Us&rdquo; section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Children&apos;s Privacy</h2>
            <p>
              Our service is not directed to children under the age of 18. We do not knowingly collect personally identifiable 
              information from children under 18. If you are a parent or guardian and you are aware that your child has provided 
              us with personal information, please contact us. If we become aware that we have collected personal information from 
              children without verification of parental consent, we will take steps to remove that information from our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
              are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> <a href="mailto:privacy@kyostream.com" className="text-accent-500 hover:underline">privacy@kyostream.com</a>
            </p>
          </section>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-6">
            By using our service, you acknowledge that you have read and understand this Privacy Policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent">
              <Link href="/" className="w-full h-full inline-flex items-center justify-center">
                Return to Homepage
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/terms" className="w-full h-full inline-flex items-center justify-center">
                View Terms of Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 