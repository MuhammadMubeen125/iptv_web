"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className="relative z-10 bg-zinc-900/95 backdrop-blur-sm text-zinc-400 pointer-events-auto">
      {/* Gradient overlay behind the footer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent-primary opacity-20"></div>
      </div>

      <div className="container mx-auto px-3 py-6 relative z-10">
        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Column 1: Branding & Socials */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/UpdatedLogo.svg"
                alt="KyoStream Logo"
                width={150}
                height={40}
                className="pointer-events-auto"
              />
            </div>
            <p className="text-xs mb-3 select-text">
              The ultimate IPTV solution for all your entertainment needs.
            </p>
            <a href="https://t.me/TurtleIPTV_Bot">
              <Image
                alt="telegramImg"
                src="/Telegram.svg"
                width={28}
                height={28}
              />
            </a>
            {/* <div className="flex space-x-2">
              {[
                {
                  icon: Facebook,
                  label: "Facebook",
                  href: "https://facebook.com",
                },
                {
                  icon: Twitter,
                  label: "Twitter",
                  href: "https://twitter.com",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  href: "https://instagram.com",
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                  href: "https://youtube.com",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-accent-secondary hover:to-accent-primary group transition-colors duration-200 pointer-events-auto"
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon className="h-3.5 w-3.5 text-zinc-300 group-hover:text-white" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-2 flex items-center gap-2 select-text">
              <div className="w-1 h-3 bg-emerald-500 rounded-sm"></div>
              Quick Links
            </h3>
            <ul className="space-y-1">
              {[
                { name: "Home", path: "/" },
                { name: "Pricing", path: "/#pricing" },
                { name: "Features", path: "/#features" },
                { name: "FAQ", path: "/#faq" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li
                  key={link.name}
                  className="hover:translate-x-1 transition-transform relative"
                >
                  <Link
                    href={link.path}
                    className="text-xs hover:text-emerald-500 flex items-center gap-1 group py-0.5 inline-block transition-colors duration-200 pointer-events-auto select-text"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 ml-1 inline transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Legal */}
          <div>
            <h3 className="text-white font-bold mb-2 text-sm select-text">
              Contact Us
            </h3>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-0.5"></div>
                <a
                  href="mailto:support@kyostream.com"
                  className="text-xs hover:text-emerald-500 transition-colors duration-200 pointer-events-auto select-text"
                >
                  support@nakedturtleiptv.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-0.5"></div>
                <Link
                  href="/contact"
                  className="text-xs hover:text-emerald-500 transition-colors duration-200 pointer-events-auto select-text"
                >
                  24/7 Live Chat Support
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-bold mb-2 text-sm select-text">
              Legal
            </h3>
            <ul className="space-y-1">
              {[
                { name: "Terms of Service", link: "/terms" },
                { name: "Privacy Policy", link: "/privacy" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="hover:translate-x-1 transition-transform relative"
                >
                  <Link
                    href={item.link}
                    className="text-xs hover:text-blue-400 flex items-center gap-1 group py-0.5 inline-block transition-colors duration-200 pointer-events-auto select-text"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 ml-1 inline transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-2 text-sm select-text">
              Newsletter
            </h3>
            <p className="text-xs text-zinc-400 mb-2 select-text">
              Get IPTV news & deals in your inbox:
            </p>
            <form
              onSubmit={handleSubscribe}
              className="bg-zinc-800 p-1.5 rounded-lg border border-zinc-700/50 pointer-events-auto"
            >
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-900 text-white text-xs py-1.5 px-2 flex-1 rounded-l-md border-0 focus:ring-1 focus:ring-emerald-500 outline-none select-text"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-accent-secondary to-accent-primary hover:opacity-90 text-white rounded-r-md px-2 transition-colors duration-200 pointer-events-auto"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section: Secure Payment & Copyright */}
        <div className="border-t border-zinc-800 pt-3 flex flex-col md:flex-row items-center justify-between">
          {/* Secure Payment */}
          <div className="flex flex-wrap items-center gap-2 mb-3 md:mb-0">
            {["visa", "mastercard", "paypal", "bitcoin"].map((payment) => (
              <div
                key={payment}
                className="bg-zinc-800 p-1 rounded-md pointer-events-auto"
              >
                <Image
                  src={`/payment/${payment}.svg`}
                  alt={payment}
                  width={32}
                  height={20}
                  className="h-4 w-auto object-contain opacity-80"
                />
              </div>
            ))}
          </div>
          {/* Copyright */}
          <p className="text-xs text-center text-zinc-400 select-text">
            &copy; {currentYear} KyoStream IPTV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
