import type { FooterItem, MainNavItem } from "@/types"

import { productCategories } from "@/config/products"
import { slugify } from "@/app/utils/utils"

export type SiteConfig = typeof siteConfig

const links = {
  twitter: "https://twitter.com/sadmann17",
  github: "https://github.com/sadmann7/skateshop",
  githubAccount: "https://github.com/sadmann7",
  discord: "https://discord.com/users/sadmann7",
  calDotCom: "https://cal.com/sadmann7",
}

export const siteConfig = {
  name: "Awaj",
  description:
    "All in one digital advertisng platform with everything included to boost your ad campaigns.",
  url: "https://gennbi.com",
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
          title: "One-time Orders",
          href: "/pricing/one-time-order",
          description: "Check from our list one-time orders.",
          items: [],
        },
        {
          title: "Build a Campaign",
          href: "/build_campaign",
          description: "Build your own custom campaign.",
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
      title: "Resources",
      items: [
        {
          title: "Downloads",
          href: "/downloads",
          description: "Subscription plans and pricings",
          items: [],
        },
        {
          title: "Getting started",
          href: "/getting_started",
          description: "Check from our list one-time orders.",
          items: [],
        },
        {
          title: "Giveaways",
          href: "/giveaways",
          description: "Build your own custom campaign.",
          items: [],
        },
        {
          title: "Case studies",
          href: "/awaj_cases",
          description: "Subscription plans and pricings",
          items: [],
        },
        {
          title: "Content hub",
          href: "/content_hub",
          description: "Check from our list one-time orders.",
          items: [],
        },
        {
          title: "Awaj tools",
          href: "/tools",
          description: "Build your own custom campaign.",
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
          description: "Subscription plans and pricings",
          items: [],
        },
        {
          title: "Help center",
          href: "/help_center",
          description: "Check from our list one-time orders.",
          items: [],
        },
        {
          title: "For influencers",
          href: "/influencers",
          description: "Build your own custom campaign.",
          items: [],
        },
        {
          title: "Team",
          href: "/team",
          description: "Subscription plans and pricings",
          items: [],
        },
        {
          title: "Insight reports",
          href: "/reports",
          description: "Check from our list one-time orders.",
          items: [],
        },
        {
          title: "FAQs",
          href: "/faqs",
          description: "Build your own custom campaign.",
          items: [],
        },
        {
          title: "Blog",
          href: "/blog",
          description: "Check from our list one-time orders.",
          items: [],
        },
        {
          title: "Contact",
          href: "/contact",
          description: "Build your own custom campaign.",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
  links,

//

  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "OneStopShop",
          href: "https://onestopshop.jackblatch.com",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "https://acme-corp.jumr.dev",
          external: true,
        },
        {
          title: "craft.mxkaske.dev",
          href: "https://craft.mxkaske.dev",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Twitter",
          href: links.twitter,
          external: true,
        },
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Discord",
          href: links.discord,
          external: true,
        },
        {
          title: "cal.com",
          href: links.calDotCom,
          external: true,
        },
      ],
    },
    {
      title: "Lofi",
      items: [
        {
          title: "beats to study to",
          href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
          external: true,
        },
        {
          title: "beats to chill to",
          href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
          external: true,
        },
        {
          title: "a fresh start",
          href: "https://www.youtube.com/watch?v=rwionZbOryo",
          external: true,
        },
        {
          title: "coffee to go",
          href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
}
