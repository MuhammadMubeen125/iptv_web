import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://kyostream.com"),
  generator: "Next.js",
  category: "entertainment",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://platform.billgang.com/embed.js" defer></script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TN5V8BRT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="site-wrapper">
          <div className="gradient-background">
            <div className="gradient-overlay"></div>
          </div>
          <div className="background-image-container">
            <div className="background-image"></div>
          </div>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>

        {/* Sell Auth script loaded globally */}
        <Script
          src="https://sellauth.com/assets/js/sellauth-embed-2.js"
          strategy="afterInteractive"
        />

        <Analytics />
        <SpeedInsights />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TN5V8BRT');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Tawk.to live chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/67d9acc88164481907e9e370/1iml4lsat';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
            
            // Add event listener for openTawkChat event
            window.addEventListener('openTawkChat', function() {
              if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
                window.Tawk_API.maximize();
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}

// import type React from "react"
// import "./globals.css"
// import { Inter } from "next/font/google"
// import { Header } from "@/components/layout/Header"
// import { Footer } from "@/components/layout/Footer"
// import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from '@vercel/speed-insights/next'
// import Script from 'next/script'

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   metadataBase: new URL('https://kyostream.com'),
//   generator: 'Next.js',
//   category: 'entertainment',
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-image-preview': 'large',
//       'max-video-preview': -1,
//       'max-snippet': -1,
//     },
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         <script src="https://platform.billgang.com/embed.js" defer></script>
//       </head>
//       <body className={inter.className}>
//         {/* Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-TN5V8BRT"
//             height="0"
//             width="0"
//             style={{ display: 'none', visibility: 'hidden' }}
//           ></iframe>
//         </noscript>
//         {/* End Google Tag Manager (noscript) */}
//         <div className="site-wrapper">
//           <div className="gradient-background">
//             <div className="gradient-overlay"></div>
//           </div>
//           <div className="background-image-container">
//             <div className="background-image"></div>
//           </div>
//           <Header />
//           <main className="main-content">
//             {children}
//           </main>
//           <Footer />
//         </div>
//         <Analytics />
//         <SpeedInsights />
//         {/* Google Tag Manager */}
//         <Script id="google-tag-manager" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-TN5V8BRT');
//           `}
//         </Script>
//         {/* End Google Tag Manager */}
//         <Script id="tawk-to" strategy="afterInteractive">
//           {`
//             var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//             (function(){
//               var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//               s1.async=true;
//               s1.src='https://embed.tawk.to/67d9acc88164481907e9e370/1iml4lsat';
//               s1.charset='UTF-8';
//               s1.setAttribute('crossorigin','*');
//               s0.parentNode.insertBefore(s1,s0);
//             })();

//             // Add event listener for openTawkChat event
//             window.addEventListener('openTawkChat', function() {
//               if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
//                 window.Tawk_API.maximize();
//               }
//             });
//           `}
//         </Script>
//       </body>
//     </html>
//   )
// }
