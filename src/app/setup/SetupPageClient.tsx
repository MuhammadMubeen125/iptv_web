"use client"

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/badge";
import FaqSetup from "@/components/sections/FaqSetup";
import { setupContent, DeviceInfo, SetupStep } from "./setupContent";

export default function SetupPageClient() {
  // Destructure content sections for easier access
  const { hero, quickStart, devices, support } = setupContent;

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <Badge className="bg-accent-primary/20 text-accent-primary border-accent-primary/20 px-4 py-1">
              {hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">{hero.title.main}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-primary/80">
                {hero.title.highlighted}
              </span>
            </h1>
            <p className="max-w-2xl text-muted-foreground text-lg md:text-xl">
              {hero.description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <Button size="lg" className="bg-accent-primary hover:bg-accent-primary/90 text-primary-foreground" asChild>
                <Link href={hero.buttons.primary.href} className="flex items-center">
                  {hero.buttons.primary.text} <hero.buttons.primary.icon className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-[#18181b80]" asChild>
                <Link href={hero.buttons.secondary.href} className="flex items-center">
                  {hero.buttons.secondary.text} <hero.buttons.secondary.icon className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section id="quick-start" className="w-full py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">{quickStart.title}</h2>
            <p className="max-w-2xl text-muted-foreground text-lg">
              {quickStart.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {quickStart.steps.map((step) => (
              <SetupStepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Supported Devices Section */}
      <section className="w-full py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">{devices.title}</h2>
            <p className="max-w-2xl text-muted-foreground text-lg">
              {devices.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {devices.supportedDevices.map((device, index) => (
              <DeviceCard key={index} device={device} />
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting FAQ Section */}
      <FaqSetup />

      {/* Contact Support Section */}
      <section className="w-full py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[#18181b80] p-8 rounded-xl border border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{support.title}</h3>
                <p className="text-zinc-400">{support.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
                <Button 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 flex items-center justify-center gap-2 w-full sm:w-auto"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.Tawk_API) {
                      window.Tawk_API.toggle();
                    }
                  }}
                >
                  <support.buttons.primary.icon className="h-4 w-4" />
                  {support.buttons.primary.text}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-border hover:bg-[#18181b80] text-white px-4 py-2 flex items-center justify-center gap-2 w-full sm:w-auto" 
                  asChild
                >
                  <Link href={support.buttons.secondary.href}>
                    <support.buttons.secondary.icon className="h-4 w-4 text-emerald-500" />
                    {support.buttons.secondary.text}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for device cards
function DeviceCard({ device }: { device: DeviceInfo }) {
  const { icon: Icon, title, description } = device;
  
  return (
    <Card className="bg-[#18181b80] border-border relative group overflow-hidden">
      <div className="absolute inset-0 from-accent-secondary/0 to-accent-primary/0 group-hover:from-accent-secondary/10 group-hover:to-accent-primary/10 transition-all duration-300"></div>
      <CardHeader className="pb-2 flex flex-col items-center relative z-10">
        <div className="p-3 rounded-full bg-accent-primary/10 mb-4">
          <Icon className="h-8 w-8 text-accent-primary" aria-hidden="true" />
        </div>
        <CardTitle className="text-center text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center relative z-10">
        <CardDescription className="text-base text-center text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

// Component for setup step cards
function SetupStepCard({ step }: { step: SetupStep }) {
  const { title, icon: Icon, description, links } = step;

  return (
    <Card className="bg-[#18181b80] border-border relative group overflow-hidden">
      <div className="absolute inset-0 from-accent-secondary/0 to-accent-primary/0 group-hover:from-accent-secondary/10 group-hover:to-accent-primary/10 transition-all duration-300"></div>
      <CardHeader className="pb-2 flex flex-col items-center relative z-10">
        <div className="p-3 rounded-full bg-accent-primary/10 mb-4">
          {Icon ? (
            <Icon className="h-8 w-8 text-accent-primary" aria-hidden="true" />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center text-accent-primary font-bold text-xl">2</div>
          )}
        </div>
        <CardTitle className="text-center text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center relative z-10">
        <CardDescription className="text-base text-center text-muted-foreground">
          {description}
        </CardDescription>
        {links && links.length > 0 && (
          <div className="mt-2 flex gap-4">
            {links.map((link, index) => (
              <Button key={index} asChild size="sm" variant="link" className="text-accent-primary">
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
} 