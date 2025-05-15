// Terms of Service content types

// Type definitions for content items
export interface TextItem {
  type?: 'text';
  content: string;
}

export interface ListItem {
  type: 'list';
  items: string[];
}

export interface ContactItem {
  type: 'contact';
  email: string;
}

export type ContentItem = string | ListItem | ContactItem;

export interface TermsSection {
  id: string;
  title: string;
  content: ContentItem[];
}

export interface TermsData {
  lastUpdated: string;
  sections: TermsSection[];
}

// Terms of Service content
export const termsContent: TermsData = {
  lastUpdated: "January 1, 2024",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        "Welcome to KyoStream. These Terms of Service (\"Terms\") govern your use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.",
        "If you do not agree with any part of these terms, you may not use our services."
      ]
    },
    {
      id: "account-registration",
      title: "2. Account Registration",
      content: [
        "When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your password and for all activities that occur under your account.",
        "We reserve the right to disable any user account if, in our opinion, you have violated any provision of these Terms."
      ]
    },
    {
      id: "subscription-billing",
      title: "3. Subscription and Billing",
      content: [
        "KyoStream offers a single subscription plan. By subscribing to our service, you agree to pay the applicable fee. The subscription fee is billed at the beginning of your subscription and upon each renewal.",
        "The subscription automatically renews unless cancelled at least 24 hours before the end of the current billing period. You can cancel your subscription at any time through your account settings.",
        "We reserve the right to change our subscription fee. Any changes will be posted on our website and will take effect upon your next billing cycle."
      ]
    },
    {
      id: "refund-policy",
      title: "4. Refund Policy",
      content: [
        "We provide a free trial period for our service. If you decide to continue using our service after the trial, please note that there are no refunds available.",
        "Since we offer a single subscription plan, all subscriptions are non-refundable."
      ]
    },
    {
      id: "acceptable-use",
      title: "5. Acceptable Use",
      content: [
        "Our service is for personal, non-commercial use only. You agree not to:",
        {
          type: "list",
          items: [
            "Share your account credentials with others",
            "Use the service for public performances",
            "Redistribute or rebroadcast any content",
            "Attempt to circumvent any technological measures that control access to the service",
            "Use the service in violation of applicable laws"
          ]
        },
        "Violation of these restrictions may result in immediate termination of your account without refund."
      ]
    },
    {
      id: "content-ip",
      title: "6. Content and Intellectual Property",
      content: [
        "KyoStream provides access to content from various sources. All content provided through our service is protected by copyright, trademark, and other intellectual property laws.",
        "We do not claim ownership of third-party content accessible through our service. All company names, logos, trademarks, and channel names belong to their respective owners."
      ]
    },
    {
      id: "service-availability",
      title: "7. Service Availability",
      content: [
        "While we strive to provide uninterrupted service, we do not guarantee that our service will be available at all times. We may experience interruptions due to maintenance, technical issues, or circumstances beyond our control.",
        "We are not liable for any service interruptions or delays. We will make reasonable efforts to notify users of scheduled maintenance."
      ]
    },
    {
      id: "limitation-liability",
      title: "8. Limitation of Liability",
      content: [
        "To the maximum extent permitted by law, KyoStream shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of or in connection with these Terms or the use or inability to use our services.",
        "Our total liability for any claim arising from or related to these Terms shall not exceed the amount you paid to us for the service during the three months preceding the claim."
      ]
    },
    {
      id: "termination",
      title: "9. Termination",
      content: [
        "We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including a breach of these Terms.",
        "Upon termination, your right to use the service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability."
      ]
    },
    {
      id: "changes-terms",
      title: "10. Changes to Terms",
      content: [
        "We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on our website and updating the \"Last updated\" date.",
        "Your continued use of our service after such changes constitutes your acceptance of the new Terms. If you do not agree to the new terms, you must stop using the service."
      ]
    },
    {
      id: "contact-us",
      title: "11. Contact Us",
      content: [
        "If you have any questions about these Terms, please contact us at:",
        {
          type: "contact",
          email: "legal@kyostream.com"
        }
      ]
    }
  ]
}; 