import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Metadata } from "next";
import { termsContent, ListItem, ContactItem, ContentItem } from './termsContent';

export const metadata: Metadata = {
  title: "Terms of Service | KyoStream",
  description: "Review KyoStream's complete terms of service, including subscription details, refund policy, and acceptable use guidelines for our premium IPTV streaming service.",
  alternates: {
    canonical: "https://kyostream.com/terms",
  },
  keywords: "KyoStream terms, IPTV terms of service, streaming service terms, KyoStream policies, IPTV service agreement",
  openGraph: {
    title: "Terms of Service | KyoStream",
    description: "Review KyoStream's complete terms of service for using our premium IPTV streaming service, including subscription policies and guidelines.",
    url: "https://kyostream.com/terms",
    siteName: "KyoStream",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | KyoStream",
    description: "KyoStream's complete terms of service for our premium IPTV streaming platform.",
  },
};

export default function TermsPage() {
  // Helper function to render content item based on its type
  const renderContentItem = (item: ContentItem, index: number) => {
    if (typeof item === 'string') {
      return <p key={index}>{item}</p>;
    } else if ('type' in item) {
      if (item.type === 'list') {
        const listItem = item as ListItem;
        return (
          <ul key={index} className="list-disc pl-6 space-y-2 mb-4">
            {listItem.items.map((listItemText: string, i: number) => (
              <li key={i}>{listItemText}</li>
            ))}
          </ul>
        );
      } else if (item.type === 'contact') {
        const contactItem = item as ContactItem;
        return (
          <p key={index} className="mt-2">
            <strong>Email:</strong> <a href={`mailto:${contactItem.email}`} className="text-accent-500 hover:underline">{contactItem.email}</a>
          </p>
        );
      }
    }
    return null;
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-text-primary mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Last updated: {termsContent.lastUpdated}
          </p>
        </div>
        
        {/* Terms Content */}
        <div className="prose max-w-none text-text-secondary">
          {termsContent.sections.map((section) => (
            <section key={section.id} className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">{section.title}</h2>
              {section.content.map((item, index) => renderContentItem(item, index))}
            </section>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-6">
            By using our service, you acknowledge that you have read and understand these Terms of Service.
          </p>
          <Button variant="accent">
            <Link href="/" className="w-full h-full inline-flex items-center justify-center">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
