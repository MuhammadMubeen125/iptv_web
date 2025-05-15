import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Tv, Film, CloudIcon, HeadphonesIcon } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      value: "10,000+",
      label: "Live Channels",
      icon: Tv,
    },
    {
      value: "50,000+",
      label: "Movies & Shows",
      icon: Film,
    },
    {
      value: "99.9%",
      label: "Uptime",
      icon: CloudIcon,
    },
    {
      value: "24/7",
      label: "Support",
      icon: HeadphonesIcon,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-0 sm:pt-0">
      {/* Gradient background - exactly matching Features.tsx */}
      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-4 sm:py-8 md:py-16">
          {/* Content grid - stack vertically on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12 items-center">
            {/* Text content - center aligned on mobile */}
            <div className="space-y-5 sm:space-y-7 text-center md:text-center">
              <Badge className="bg-accent-primary/20 text-accent-primary border-accent-primary/20 px-4 py-1.5 text-sm font-medium mx-auto inline-flex">
                PREMIUM IPTV SERVICE
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-foreground drop-shadow-sm">
                  NakedTurtle
                </span>
                <span className="block text-foreground drop-shadow-sm">
                  Premium IPTV Service
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-primary/80 mt-1">
                  Reliable Streaming Experience
                </span>
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                Enjoy over 10,000+ live channels, 50,000+ movies, and TV shows
                on any device – all with crystal-clear quality and no buffering,
                anytime, anywhere.
              </p>

              {/* Center buttons on mobile, left aligned on desktop */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Link href="/#pricing" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="trial"
                    className="font-medium group w-full sm:w-auto py-6 sm:py-4 text-base rounded-xl shadow-lg shadow-accent-primary/20 transition-transform active:scale-95 hover:scale-105"
                  >
                    View Pricing Plans
                  </Button>
                </Link>
                <Link href="/free-iptv-trial" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-500 text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white group w-full sm:w-auto py-6 sm:py-4 text-base rounded-xl shadow-md transition-transform active:scale-95 hover:scale-105 active:bg-emerald-600"
                  >
                    Try Free IPTV Trial
                  </Button>
                </Link>
              </div>

              {/* Limited time offer - centered on mobile */}
              <div className="flex items-center text-sm text-muted-foreground pt-1 justify-center">
                <Clock className="mr-2 h-4 w-4 text-accent-primary flex-shrink-0" />
                <span>
                  <span className="text-foreground font-medium">
                    24-hour free IPTV trial
                  </span>{" "}
                  - No credit card required
                </span>
              </div>

              {/* Reviews - centered on mobile */}
              <div className="pt-2">
                <div className="flex items-center gap-2 justify-center flex-wrap">
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-accent-primary fill-accent-primary"
                      />
                    ))}
                    <div className="relative w-5 h-5">
                      <Star className="absolute w-5 h-5 text-accent-primary" />
                      <div className="absolute overflow-hidden w-[90%]">
                        <Star className="w-5 h-5 text-accent-primary fill-accent-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="text-accent-primary font-medium">
                      4.9/5
                    </span>{" "}
                    from over <span className="font-medium">2,500</span> reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - improved spacing and responsive sizing */}
        <div className="mt-8 sm:mt-0">
          <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center p-3 sm:p-4"
                >
                  <stat.icon
                    className="h-8 w-8 sm:h-10 sm:w-10 text-white mb-2 sm:mb-3"
                    strokeWidth={1.5}
                  />
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-1 sm:mb-2 transform-gpu">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
