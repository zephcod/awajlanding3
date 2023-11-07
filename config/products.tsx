import { type Product } from "@/db/schema"
import type { Option } from "@/types"
import Rocket from '@/public/character/awaj_hero.webp'

export const sortOptions = [
  { label: "Date: Old to new", value: "createdAt.asc" },
  {
    label: "Date: New to old",
    value: "createdAt.desc",
  },
  { label: "Price: Low to high", value: "price.asc" },
  { label: "Price: High to low", value: "price.desc" },
  {
    label: "Alphabetical: A to Z",
    value: "name.asc",
  },
  {
    label: "Alphabetical: Z to A",
    value: "name.desc",
  },
]

export const productCategories = [
  {
    title: "solutions",
    image: "/images/skateboard-one.webp",
    subcategories: [
      {
        title: "Starter Pack",
        description: "Digital marketing essentials.",
        image: Rocket.src,
        slug: "starter_pack",
      },
      // {
      //   title: "SEO ranking",
      //   description: "The wheels that go on the board.",
      //   image: "/images/wheel-one.webp",
      //   slug: "seo_ranking",
      // },
      // {
      //   title: "Influencers",
      //   description: "The trucks that go on the board.",
      //   image: "/images/truck-one.webp",
      //   slug: "influencers",
      // },
      {
        title: "Content management",
        description: "Strategize, create and manage content.",
        image: "/images/griptape-one.webp",
        slug: "content_management",
      },
      {
        title: "Social media",
        description: "Grow, monitor and analyze social media.",
        image: "/images/hardware-one.webp",
        slug: "social_media",
      },
      {
        title: "Paid ads",
        description: "Plan, research and run paid ads.",
        image: "/images/tool-one.webp",
        slug: "digital_ads",
      },
      {
        title: "Marketing & Sales",
        description: "Get customers and analyze preferences.",
        image: "/images/bearing-one.webp",
        slug: "marketing_intelligence",
      },
    ],
  },
] satisfies {
  title: Product["category"]
  image: string
  subcategories: {
    title: string
    description?: string
    image?: string
    slug: string
  }[]
}[]

export const productTags = [
  "new",
  "sale",
  "bestseller",
  "featured",
  "popular",
  "trending",
  "limited",
  "exclusive",
]

export function getSubcategories(category?: string): Option[] {
  if (!category) return []

  const subcategories =
    productCategories
      .find((c) => c.title === category)
      ?.subcategories.map((s) => ({
        label: s.title,
        value: s.slug,
      })) ?? []

  return subcategories
}
