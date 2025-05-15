import { Badge } from "@/components/ui/badge"
import { Clock, Globe, Tv, Shield } from "lucide-react"

export default function TrialBenefits() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-accent-primary" aria-hidden="true" />,
      title: "24-Hour Free IPTV Trial",
      description: "Our support team will set up your IPTV trial based on your specific device and streaming requirements."
    },
    {
      icon: <Globe className="h-8 w-8 text-accent-secondary" aria-hidden="true" />,
      title: "Premium IPTV Channels",
      description: "Access our full library of premium IPTV channels and content during your trial period."
    },
    {
      icon: <Tv className="h-8 w-8 text-accent-primary" aria-hidden="true" />,
      title: "Multi-Device Compatibility",
      description: "Test our IPTV service on IPTV Smarters, Tivimate, VLC, and other popular streaming players."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent-secondary" aria-hidden="true" />,
      title: "No Credit Card Required",
      description: "Start your free IPTV trial without providing any payment information. No hidden fees or commitments."
    }
  ]

  return (
    <section className="py-16" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="bg-accent-secondary/20 text-accent-secondary border-accent-secondary/20 px-4 py-1 mb-4">
            FREE TRIAL BENEFITS
          </Badge>
          <h2 id="benefits-heading" className="text-3xl font-bold mb-4">Why Choose Our Free IPTV Trial?</h2>
          <p className="text-muted-foreground">
            Our risk-free IPTV trial gives you full access to experience the quality and reliability of our premium IPTV streaming service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card-transparent border border-border rounded-xl p-6 hover:border-input transition-all duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 