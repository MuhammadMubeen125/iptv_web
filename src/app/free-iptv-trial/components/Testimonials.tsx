import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"
import Script from "next/script"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael T.",
      avatar: "M",
      rating: 5,
      comment: "The free IPTV trial convinced me to subscribe. Excellent channel selection and HD picture quality. Their customer service responded quickly when I had questions about my trial setup."
    },
    {
      name: "Sarah L.",
      avatar: "S",
      rating: 5,
      comment: "I tried several IPTV services before finding Kyostream's free trial. It made it easy to test compatibility with my Firestick and Android devices. The streaming quality during the trial was impressive!"
    },
    {
      name: "David R.",
      avatar: "D",
      rating: 4,
      comment: "Great experience with the free IPTV trial. The setup was quick and the streaming quality was reliable with minimal buffering. The trial gave me enough time to test everything I needed."
    }
  ]

  // Generate structured data for the testimonials
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kyostream IPTV Free Trial",
    "description": "24-hour free trial of premium IPTV streaming service",
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewBody": testimonial.comment
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "3"
    }
  }

  return (
    <>
      <Script id="testimonials-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <section className="py-16" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="bg-accent-secondary/20 text-accent-secondary border-accent-secondary/20 px-4 py-1 mb-4">
              CUSTOMER REVIEWS
            </Badge>
            <h2 id="testimonials-heading" className="text-3xl font-bold mb-4">What Our Free Trial Users Say</h2>
            <p className="text-muted-foreground">
              Read what users who started with our free IPTV trial have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card-transparent border border-border rounded-xl p-6 hover:border-input transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-secondary to-accent-primary flex items-center justify-center text-lg font-semibold" aria-hidden="true">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <div className="flex items-center" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-accent-secondary fill-accent-secondary"
                              : "text-muted-foreground/30"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">&ldquo;{testimonial.comment}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 