"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Zap, MessageSquare, Percent } from "lucide-react";
import Link from "next/link";

interface PricingPlanProps {
  deviceCount: number;
  monthly: string;
  quarterly: string;
  biannual: string;
  yearly: string;
  monthlySavings?: string;
  quarterlySavings?: string;
  biannualSavings?: string;
  yearlySavings?: string;
  monthlyRibbon?: string;
  quarterlyRibbon?: string;
  biannualRibbon?: string;
  yearlyRibbon?: string;
}

const benefitDescriptions = {
  "15,000+ Live Channels":
    "Access worldwide sports, news, entertainment & more",
  "50,000+ Movies & Series": "Extensive library of on-demand content",
  "Full HD & 4K Quality": "Crystal-clear picture quality on compatible devices",
  "7-Day Catch-up": "Never miss your favorite shows",
  "24/7 Customer Support": "We're always here to help you",
};

// Sell Auth config
const SHOP_ID = 149768;

type Period = "1 Month" | "3 Months" | "6 Months" | "12 Months";

// type ProductVariant = {
//   productId: number;
//   variantId: number;
// };

const productInfoMapping: Record<
  number,
  Record<
    Period,
    {
      productId: number;
      variantId: number;
      modal: boolean;
      redirectUrl: string;
    }
  >
> = {
  1: {
    "1 Month": {
      productId: 328746,
      variantId: 455029,
      modal: true,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-1mo",
    },
    "3 Months": {
      productId: 328764,
      variantId: 455051,
      modal: true,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-3mo",
    },
    "6 Months": {
      productId: 328766,
      variantId: 455053,
      modal: true,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-6mo",
    },
    "12 Months": {
      productId: 3328767,
      variantId: 455054,
      modal: true,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-12mo",
    },
  },
  2: {
    "1 Month": {
      productId: 3328768,
      variantId: 455055,
      modal: false,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-1mo2d",
    },
    "3 Months": {
      productId: 3328770,
      variantId: 455057,
      modal: false,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-3mo2d",
    },
    "6 Months": {
      productId: 3328771,
      variantId: 455058,
      modal: false,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-6mo2d",
    },
    "12 Months": {
      productId: 3328772,
      variantId: 455059,
      modal: false,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-12mo2d",
    },
  },
  4: {
    "1 Month": {
      productId: 3328773,
      variantId: 455060,
      modal: false,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-1mo4d",
    },
    "3 Months": {
      productId: 3328774,
      variantId: 455061,
      modal: false,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-3mo4d",
    },
    "6 Months": {
      productId: 3328775,
      variantId: 455062,
      modal: false,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-6mo4d",
    },
    "12 Months": {
      productId: 3328776,
      variantId: 455063,
      modal: false,
      redirectUrl: "https://nakediptv.mysellauth.com/product/nakediptv-12mo4d",
    },
  },
};

const PlanButton = ({
  period,
  popular,
  deviceCount,
}: {
  period: Period;
  popular: boolean;
  deviceCount: number;
}) => {
  const commonClass = `w-full transition-transform duration-300 hover:scale-105 ${
    popular
      ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg text-white"
      : "bg-purple-500 hover:bg-purple-600 shadow-lg text-white"
  } px-6 py-3 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-purple-300`;

  const handleCheckout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const productInfo = productInfoMapping[deviceCount]?.[period];
    if (!productInfo) {
      // fallback to homepage or no product found
      window.location.href = "/";
      return;
    }

    if (productInfo.modal) {
      // Open SellAuth modal
      if (
        typeof window !== "undefined" &&
        window.sellAuthEmbed &&
        typeof window.sellAuthEmbed.checkout === "function"
      ) {
        try {
          window.sellAuthEmbed.checkout(event.currentTarget, {
            cart: [
              {
                productId: productInfo.productId,
                variantId: productInfo.variantId,
                quantity: 1,
              },
            ],
            shopId: SHOP_ID,
            modal: true,
          });
        } catch {
          window.location.href = productInfo.redirectUrl;
        }
      } else {
        // fallback to redirect
        window.location.href = productInfo.redirectUrl;
      }
    } else {
      // Just redirect
      window.location.href = productInfo.redirectUrl;
    }
  };

  const enabledDeviceCounts = [1, 2, 4];
  return enabledDeviceCounts.includes(deviceCount) ? (
    <button
      className={commonClass}
      aria-label={`Purchase ${period} plan`}
      onClick={handleCheckout}
    >
      Purchase
    </button>
  ) : (
    <button
      className={commonClass}
      aria-label={`${period} plan coming soon`}
      disabled
    >
      Coming Soon
    </button>
  );
};

const PricingPlan = React.memo(
  ({
    deviceCount,
    monthly,
    quarterly,
    biannual,
    yearly,
    monthlySavings,
    quarterlySavings,
    biannualSavings,
    yearlySavings,
    monthlyRibbon,
    quarterlyRibbon,
    biannualRibbon,
    yearlyRibbon,
  }: PricingPlanProps) => {
    const periodConfig: Record<Period, { savings?: string; ribbon?: string }> =
      {
        "1 Month": { savings: monthlySavings, ribbon: monthlyRibbon },
        "3 Months": { savings: quarterlySavings, ribbon: quarterlyRibbon },
        "6 Months": { savings: biannualSavings, ribbon: biannualRibbon },
        "12 Months": { savings: yearlySavings, ribbon: yearlyRibbon },
      };

    const renderPlanCard = (
      period: Period,
      price: string,
      popular: boolean = false
    ) => {
      const { savings: currentSavings, ribbon } = periodConfig[period];
      const planKey = `${period}-${deviceCount}`;

      return (
        <div
          key={planKey}
          className="relative rounded-xl overflow-hidden transition-shadow duration-300 group border-2 border-emerald-500 shadow-lg shadow-emerald-500/20"
        >
          {popular && (
            <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
              BEST VALUE
            </div>
          )}
          {!popular && ribbon && (
            <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
              {ribbon}
            </div>
          )}
          <div className="p-6 bg-[#18181b80]">
            <h3 className="text-xl font-bold mb-2">{period}</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-bold text-white">{price}</span>
            </div>
            <div className="mb-4 h-6">
              {currentSavings && (
                <div className="flex items-center gap-1 text-emerald-500 text-sm">
                  <Percent className="h-3 w-3" />
                  <span>Save {currentSavings}</span>
                </div>
              )}
            </div>
            <PlanButton
              period={period}
              popular={popular}
              deviceCount={deviceCount}
            />
          </div>
          <div className="p-6 bg-[#18181b80]">
            <ul className="space-y-3">
              {[
                "15,000+ Live Channels",
                "50,000+ Movies & Series",
                "Full HD & 4K Quality",
                "7-Day Catch-up",
                "24/7 Customer Support",
                `${deviceCount} ${
                  deviceCount === 1 ? "Device Connection" : "Device Connections"
                }`,
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 group/item">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-500" />
                  <div>
                    <span className="text-sm text-zinc-300">{feature}</span>
                    {benefitDescriptions[
                      feature as keyof typeof benefitDescriptions
                    ] && (
                      <p className="text-xs text-zinc-500 mt-0.5 max-h-0 overflow-hidden opacity-0 group-hover/item:opacity-100 group-hover/item:max-h-10 transition-all duration-300">
                        {
                          benefitDescriptions[
                            feature as keyof typeof benefitDescriptions
                          ]
                        }
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

    return (
      <div className="grid md:grid-cols-4 gap-8">
        {renderPlanCard("1 Month", monthly, false)}
        {renderPlanCard("3 Months", quarterly, false)}
        {renderPlanCard("6 Months", biannual, true)}
        {renderPlanCard("12 Months", yearly, false)}
      </div>
    );
  }
);

PricingPlan.displayName = "PricingPlan";

export default function Pricing() {
  const pricingPlans: PricingPlanProps[] = [
    {
      deviceCount: 1,
      monthly: "$10",
      quarterly: "$25",
      biannual: "$45",
      yearly: "$75",
      quarterlySavings: "17%",
      biannualSavings: "25%",
      yearlySavings: "38%",
      monthlyRibbon: "Most Popular",
      biannualRibbon: "Best Value",
    },
    {
      deviceCount: 2,
      monthly: "$19.99",
      quarterly: "$53.99",
      biannual: "$96.99",
      yearly: "$161.99",
      quarterlySavings: "10%",
      biannualSavings: "19%",
      yearlySavings: "32%",
      biannualRibbon: "Best Value",
    },
    {
      deviceCount: 4,
      monthly: "$34.99",
      quarterly: "$93.99",
      biannual: "$167.99",
      yearly: "$279.99",
      quarterlySavings: "10%",
      biannualSavings: "20%",
      yearlySavings: "33%",
      biannualRibbon: "Best Value",
    },
  ];

  const deviceCounts = [1, 2, 4];

  return (
    <section
      id="pricing"
      className="relative border-b border-border flex flex-col items-center"
    >
      <div className="absolute inset-0 from-accent-secondary/20 to-accent-primary/20 z-0"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20 px-4 py-1 mb-4">
            PRICING
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent & Value-Packed Pricing
          </h2>
        </div>

        <div className="mx-auto">
          <Tabs defaultValue="1" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-zinc-800/50 text-zinc-400 p-1 rounded-lg">
                {deviceCounts.map((count) => (
                  <TabsTrigger
                    key={count}
                    value={count.toString()}
                    className="rounded-md py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-emerald-500 data-[state=active]:text-white transition-all duration-300"
                  >
                    {count} Device{count > 1 && "s"}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {pricingPlans.map((plan) => (
              <TabsContent
                key={plan.deviceCount}
                value={plan.deviceCount.toString()}
              >
                <PricingPlan {...plan} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center from-zinc-900 to-zinc-800 rounded-xl p-8 border border-zinc-700 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-zinc-800 p-2 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Need a Custom Plan?</h3>
              <p className="text-zinc-300 mb-6 max-w-lg mx-auto">
                Looking for more connections or special features? Contact our
                sales team for tailored solutions and reseller opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-white hover:bg-zinc-800 group"
                  >
                    <MessageSquare className="mr-2 h-4 w-4 text-emerald-500" />
                    Contact Sales
                  </Button>
                </Link>
                <Link href="/free-iptv-trial">
                  <Button
                    variant="outline"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white"
                  >
                    <Zap className="mr-2 h-4 w-4 text-emerald-400" />
                    Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative w-[500px] overflow-hidden pb-[20px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // to cover the entire area without distortion
            display: "block",
          }}
        >
          <source src="/Gif.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay or content */}
      </section>
    </section>
  );
}

// "use client";

// import React from "react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/Button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { CheckCircle, Zap, MessageSquare, Percent } from "lucide-react";
// import Link from "next/link";

// interface PricingPlanProps {
//   deviceCount: number;
//   monthly: string;
//   quarterly: string;
//   biannual: string;
//   yearly: string;
//   monthlySavings?: string;
//   quarterlySavings?: string;
//   biannualSavings?: string;
//   yearlySavings?: string;
//   monthlyRibbon?: string;
//   quarterlyRibbon?: string;
//   biannualRibbon?: string;
//   yearlyRibbon?: string;
// }

// const benefitDescriptions = {
//   "15,000+ Live Channels":
//     "Access worldwide sports, news, entertainment & more",
//   "50,000+ Movies & Series": "Extensive library of on-demand content",
//   "Full HD & 4K Quality": "Crystal-clear picture quality on compatible devices",
//   "7-Day Catch-up": "Never miss your favorite shows",
//   "24/7 Customer Support": "We're always here to help you",
// };

// // Sell Auth configuration
// const SHOP_ID = 149768;

// type Period = "1 Month" | "3 Months" | "6 Months" | "12 Months";

// type ProductVariant = {
//   productId: number;
//   variantId: number;
// };

// // Updated mapping for 1, 2, and 4 devices
// const productVariantMapping: Record<number, Record<Period, ProductVariant>> = {
//   1: {
//     "1 Month": { productId: 328746, variantId: 455029 },
//     "3 Months": { productId: 328764, variantId: 455051 },
//     "6 Months": { productId: 328766, variantId: 455053 },
//     "12 Months": { productId: 3328767, variantId: 455054 },
//   },
//   2: {
//     "1 Month": { productId: 3328768, variantId: 455055 },
//     "3 Months": { productId: 3328770, variantId: 455057 },
//     "6 Months": { productId: 3328771, variantId: 455058 },
//     "12 Months": { productId: 3328772, variantId: 455059 },
//   },
//   4: {
//     "1 Month": { productId: 3328773, variantId: 455060 },
//     "3 Months": { productId: 3328774, variantId: 455061 },
//     "6 Months": { productId: 3328775, variantId: 455062 },
//     "12 Months": { productId: 3328776, variantId: 455063 },
//   },
// };

// const PlanButton = ({
//   period,
//   popular,
//   deviceCount,
// }: {
//   period: Period;
//   popular: boolean;
//   deviceCount: number;
// }) => {
//   const commonClass = `w-full transition-transform duration-300 hover:scale-105 ${
//     popular
//       ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg text-white"
//       : "bg-purple-500 hover:bg-purple-600 shadow-lg text-white"
//   } px-6 py-3 rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-purple-300`;

//   // const handleCheckout = () => {
//   //   const mapping = productVariantMapping[deviceCount]?.[period];
//   //   console.log("Checkout requested for:", period, deviceCount, mapping);
//   //   if (!mapping) {
//   //     alert("Product not available for this plan.");
//   //     return;
//   //   }

//   //   const cart = [
//   //     {
//   //       productId: mapping.productId,
//   //       variantId: mapping.variantId,
//   //       quantity: 1, // Required by Sell Auth API
//   //     },
//   //   ];

//   //   if (typeof window !== "undefined" && window.sellAuthEmbed?.checkout) {
//   //     window.sellAuthEmbed.checkout(null, {
//   //       cart,
//   //       shopId: SHOP_ID,
//   //       modal: true,
//   //     });
//   //   } else {
//   //     alert("Payment system not loaded yet. Please try again.");
//   //   }
//   // };

//   // Enable Purchase only for 1, 2, and 4 devices

//   const handleCheckout = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const buttonRef = event.currentTarget;
//     const mapping = productVariantMapping[deviceCount]?.[period];
//     if (!mapping) {
//       alert("Product not available for this plan.");
//       return;
//     }

//     const cart = [
//       {
//         productId: mapping.productId,
//         variantId: mapping.variantId,
//         quantity: 1,
//       },
//     ];

//     if (typeof window !== "undefined" && window.sellAuthEmbed?.checkout) {
//       window.sellAuthEmbed.checkout(buttonRef, {
//         cart,
//         shopId: SHOP_ID,
//         modal: true,
//       });
//     } else {
//       alert("Payment system not loaded yet. Please try again.");
//     }
//   };

//   const enabledDeviceCounts = [1, 2, 4];
//   return enabledDeviceCounts.includes(deviceCount) ? (
//     <button
//       className={commonClass}
//       aria-label={`Purchase ${period} plan`}
//       onClick={handleCheckout}
//     >
//       Purchase
//     </button>
//   ) : (
//     <button
//       className={commonClass}
//       aria-label={`${period} plan coming soon`}
//       disabled
//     >
//       Coming Soon
//     </button>
//   );
// };

// const PricingPlan = React.memo(
//   ({
//     deviceCount,
//     monthly,
//     quarterly,
//     biannual,
//     yearly,
//     monthlySavings,
//     quarterlySavings,
//     biannualSavings,
//     yearlySavings,
//     monthlyRibbon,
//     quarterlyRibbon,
//     biannualRibbon,
//     yearlyRibbon,
//   }: PricingPlanProps) => {
//     const periodConfig: Record<Period, { savings?: string; ribbon?: string }> =
//       {
//         "1 Month": { savings: monthlySavings, ribbon: monthlyRibbon },
//         "3 Months": { savings: quarterlySavings, ribbon: quarterlyRibbon },
//         "6 Months": { savings: biannualSavings, ribbon: biannualRibbon },
//         "12 Months": { savings: yearlySavings, ribbon: yearlyRibbon },
//       };

//     const renderPlanCard = (
//       period: Period,
//       price: string,
//       popular: boolean = false
//     ) => {
//       const { savings: currentSavings, ribbon } = periodConfig[period];
//       const planKey = `${period}-${deviceCount}`;

//       return (
//         <div
//           key={planKey}
//           className="relative rounded-xl overflow-hidden transition-shadow duration-300 group border-2 border-emerald-500 shadow-lg shadow-emerald-500/20"
//         >
//           {popular && (
//             <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
//               BEST VALUE
//             </div>
//           )}
//           {!popular && ribbon && (
//             <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
//               {ribbon}
//             </div>
//           )}
//           <div className="p-6 bg-[#18181b80]">
//             <h3 className="text-xl font-bold mb-2">{period}</h3>
//             <div className="flex items-end gap-1 mb-2">
//               <span className="text-4xl font-bold text-white">{price}</span>
//             </div>
//             <div className="mb-4 h-6">
//               {currentSavings && (
//                 <div className="flex items-center gap-1 text-emerald-500 text-sm">
//                   <Percent className="h-3 w-3" />
//                   <span>Save {currentSavings}</span>
//                 </div>
//               )}
//             </div>
//             <PlanButton
//               period={period}
//               popular={popular}
//               deviceCount={deviceCount}
//             />
//           </div>
//           <div className="p-6 bg-[#18181b80]">
//             <ul className="space-y-3">
//               {[
//                 "15,000+ Live Channels",
//                 "50,000+ Movies & Series",
//                 "Full HD & 4K Quality",
//                 "7-Day Catch-up",
//                 "24/7 Customer Support",
//                 `${deviceCount} ${
//                   deviceCount === 1 ? "Device Connection" : "Device Connections"
//                 }`,
//               ].map((feature, i) => (
//                 <li key={i} className="flex items-start gap-2 group/item">
//                   <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-500" />
//                   <div>
//                     <span className="text-sm text-zinc-300">{feature}</span>
//                     {benefitDescriptions[
//                       feature as keyof typeof benefitDescriptions
//                     ] && (
//                       <p className="text-xs text-zinc-500 mt-0.5 max-h-0 overflow-hidden opacity-0 group-hover/item:opacity-100 group-hover/item:max-h-10 transition-all duration-300">
//                         {
//                           benefitDescriptions[
//                             feature as keyof typeof benefitDescriptions
//                           ]
//                         }
//                       </p>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       );
//     };

//     return (
//       <div className="grid md:grid-cols-4 gap-8">
//         {renderPlanCard("1 Month", monthly, false)}
//         {renderPlanCard("3 Months", quarterly, false)}
//         {renderPlanCard("6 Months", biannual, true)}
//         {renderPlanCard("12 Months", yearly, false)}
//       </div>
//     );
//   }
// );

// PricingPlan.displayName = "PricingPlan";

// export default function Pricing() {
//   const pricingPlans: PricingPlanProps[] = [
//     {
//       deviceCount: 1,
//       monthly: "$10",
//       quarterly: "$25",
//       biannual: "$45",
//       yearly: "$75",
//       quarterlySavings: "17%",
//       biannualSavings: "25%",
//       yearlySavings: "38%",
//       monthlyRibbon: "Most Popular",
//       biannualRibbon: "Best Value",
//     },
//     {
//       deviceCount: 2,
//       monthly: "$19.99",
//       quarterly: "$53.99",
//       biannual: "$96.99",
//       yearly: "$161.99",
//       quarterlySavings: "10%",
//       biannualSavings: "19%",
//       yearlySavings: "32%",
//       biannualRibbon: "Best Value",
//     },
//     {
//       deviceCount: 4,
//       monthly: "$34.99",
//       quarterly: "$93.99",
//       biannual: "$167.99",
//       yearly: "$279.99",
//       quarterlySavings: "10%",
//       biannualSavings: "20%",
//       yearlySavings: "33%",
//       biannualRibbon: "Best Value",
//     },
//   ];

//   // Use only valid device counts here
//   const deviceCounts = [1, 2, 4];

//   return (
//     <section id="pricing" className="relative border-b border-border">
//       <div className="absolute inset-0 from-accent-secondary/20 to-accent-primary/20 z-0"></div>
//       <div className="container mx-auto px-4 py-20 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/20 px-4 py-1 mb-4">
//             PRICING
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Simple, Transparent & Value-Packed Pricing
//           </h2>
//         </div>

//         <div className="mx-auto">
//           <Tabs defaultValue="1" className="w-full">
//             <div className="flex justify-center mb-8">
//               <TabsList className="grid w-full max-w-md grid-cols-3 bg-zinc-800/50 text-zinc-400 p-1 rounded-lg">
//                 {deviceCounts.map((count) => (
//                   <TabsTrigger
//                     key={count}
//                     value={count.toString()}
//                     className="rounded-md py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-emerald-500 data-[state=active]:text-white transition-all duration-300"
//                   >
//                     {count} Device{count > 1 && "s"}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </div>
//             {pricingPlans.map((plan) => (
//               <TabsContent
//                 key={plan.deviceCount}
//                 value={plan.deviceCount.toString()}
//               >
//                 <PricingPlan {...plan} />
//               </TabsContent>
//             ))}
//           </Tabs>
//         </div>
//         <div className="mt-16 max-w-3xl mx-auto">
//           <div className="text-center from-zinc-900 to-zinc-800 rounded-xl p-8 border border-zinc-700 shadow-lg relative overflow-hidden">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent"></div>
//             <div className="relative z-10">
//               <div className="inline-flex items-center justify-center bg-zinc-800 p-2 rounded-full mb-4">
//                 <MessageSquare className="h-6 w-6 text-emerald-500" />
//               </div>
//               <h3 className="text-2xl font-bold mb-2">Need a Custom Plan?</h3>
//               <p className="text-zinc-300 mb-6 max-w-lg mx-auto">
//                 Looking for more connections or special features? Contact our
//                 sales team for tailored solutions and reseller opportunities.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link href="/contact">
//                   <Button
//                     variant="outline"
//                     className="border-zinc-700 text-white hover:bg-zinc-800 group"
//                   >
//                     <MessageSquare className="mr-2 h-4 w-4 text-emerald-500" />
//                     Contact Sales
//                   </Button>
//                 </Link>
//                 <Link href="/free-iptv-trial">
//                   <Button
//                     variant="outline"
//                     className="bg-zinc-800 hover:bg-zinc-700 text-white"
//                   >
//                     <Zap className="mr-2 h-4 w-4 text-emerald-400" />
//                     Free Trial
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
