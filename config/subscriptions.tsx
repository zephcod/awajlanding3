import { env } from "@/env.mjs"
import { type SubscriptionPlan } from "@/types"

export const storeSubscriptionPlans: SubscriptionPlan[] = [
  {
    id: "basic",
    name: "Essential",
    description: "Perfect for small businesses that want to sell online.",
    features: 
      [
        "Adaptive content strategy", 
        "Awaj content store free access",
        "Performance monitoring", 
        "Weekley insight report",
        "SEO on-page optimization", 
        "Landing page optimization",
        "Lead generation strategy", 
        "Sales funnel automation",
      ],
    stripePriceId: "",
    price: 2000,
  },
  {
    id: "standard",
    name: "Business",
    description: "Perfect for midsize businesses that want to sell online.",
    features: 
    [
      "All essential features included", 
      "Awaj AI Meda free access",
      "Ad targeting strategy", 
      "SEO backlink building",
      "SMS automation", 
      "Email automation",
      "Community building strategy", 
      "Conversion rate optimization",
    ],
    stripePriceId: 'env.STRIPE_STD_MONTHLY_PRICE_ID',
    price: 5000,
  },
  {
    id: "pro",
    name: "Enterprise",
    description: "Perfect for big businesses that want to sell online.",
    features: 
    [
      "All business features included", 
      "High quality authorative content",
      "Brand tone development", 
      "A/B testing workflows",
      "CI/CD workflows", 
    ],
    stripePriceId: 'env.STRIPE_PRO_MONTHLY_PRICE_ID',
    price: 10000,
  },
]
