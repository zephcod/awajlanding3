import type { FooterItem, MainNavItem } from "@/types"

import { productCategories } from "@/config/products"
import { slugify } from "@/app/utils/utils"

export type SiteConfig = typeof siteConfig



export const siteConfig = {
  name: "Awaj AI",
  description:
    "All in one digital marketing and sales platform with everything included to boost your ad campaigns.",
  url: "https://awajai.com",
  ogImage: 'https://gennbi.com/src/under-construction-01.svg',
  mainNav: [
    {
      title: "Pricing",
      items: [
        {
          title: "Subscriptions",
          href: "/pricing",
          description: "Subscription plans and pricings",
          items: [],
        },
        {
          title: "Awaj Mela",
          href: "/pricing/awaj-mela",
          description: "Top up your Awaj Mela coins here.",
          items: [],
        },
        {
          title: "Check Deals",
          href: "/pricing/deals",
          description: "Check recent deals from awaj.",
          items: [],
        },
      ],
    },
    ...productCategories.map((category) => ({
      title: category.title,
      items: [
        {
          title: "All",
          href: `/categories/${slugify(category.title)}`,
          description: `All ${category.title}.`,
          items: [],
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.title,
          href: `/categories/${slugify(category.title)}/${subcategory.slug}`,
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
    {
      title: "AI",
      items: [
        {
          title: "Gallery",
          href: "/ai/gallery",
          description: "Selected generative results.",
          items: [],
        },
        {
          title: "Prompts",
          href: "/ai/prompts",
          description: "Browse prompt lab and collections.",
          items: [],
        },
        {
          title: "Image Generation",
          href: "/ai/image/text-to-image",
          description: "Generate AI Images.",
          items: [],
        },
        {
          title: "Text Generation",
          href: "/ai/conversations",
          description: "Compose AI Texts",
          items: [],
        },
        {
          title: "Audio Generation",
          href: "/ai/audio",
          description: "Generate AI Audios.",
          items: [],
        },
        {
          title: "Expert AI",
          href: "/ai/expert",
          description: "Conversations with expert AI characters.",
          items: [],
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          title: "Downloads",
          href: "/resources/downloads",
          description: "Awaj AI applications and plugins.",
          items: [],
        },
        {
          title: "Getting started",
          href: "/resources/getting_started",
          description: "Instructions to get you up and running.",
          items: [],
        },
        {
          title: "Case studies",
          href: "/resources/awaj_case_studies",
          description: "Case studies on selected projects.", 
          items: [],
        },
        {
          title: "Content Hub",
          href: "/resources/content_hub",
          description: "Collection of free giveaway contents.",
          items: [],
        },
        {
          title: "Overview Tour",
          href: "/resources/overview",
          description: "Quick tour of the Awaj AI software.",
          items: [],
        },
        {
          title: "Learning Hub",
          href: "/resources/giveaways",
          description: "Collection of Awaj learning materials.",
          items: [],
        },
      ],
    },
    {
      title: "Company",
      items: [
        {
          title: "About us",
          href: "/about",
          description: "Get to know Awaj AI.",
          items: [],
        },
        {
          title: "Help center",
          href: "/help_center",
          description: "Get answers from our support team.",
          items: [],
        },
        {
          title: "For influencers",
          href: "/influencers",
          description: "Opportunities for creators & influencers.",
          items: [],
        },
        {
          title: "Team",
          href: "/team",
          description: "Teams and carrer openings",
          items: [],
        },
        // {
        //   title: "Insight reports",
        //   href: "/reports",
        //   description: "Check from our list one-time orders.",
        //   items: [],
        // },
        // {
        //   title: "FAQs",
        //   href: "/faqs",
        //   description: "Build your own custom campaign.",
        //   items: [],
        // },
        {
          title: "Blog",
          href: "/blog",
          description: "Check the latest from Awaj AI.",
          items: [],
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Contact us, we are open 24/7.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],

}
