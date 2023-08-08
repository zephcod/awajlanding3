import { type Product } from "@/db/schema"
import type { Option } from "@/types"

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
        title: "Kick starter",
        description: "The board itself.",
        image: "/images/deck-one.webp",
        slug: "kick_starter",
      },
      {
        title: "SEO ranking",
        description: "The wheels that go on the board.",
        image: "/images/wheel-one.webp",
        slug: "seo_ranking",
      },
      {
        title: "Influencers",
        description: "The trucks that go on the board.",
        image: "/images/truck-one.webp",
        slug: "influencers",
      },
      {
        title: "Marketing intelligence",
        description: "The bearings that go in the wheels.",
        image: "/images/bearing-one.webp",
        slug: "marketing_intelligence",
      },
      {
        title: "Content management",
        description: "The griptape that goes on the board.",
        image: "/images/griptape-one.webp",
        slug: "content_management",
      },
      {
        title: "Social media",
        description: "The hardware that goes on the board.",
        image: "/images/hardware-one.webp",
        slug: "social_media",
      },
      {
        title: "Digital ads",
        description: "The tools that go with the board.",
        image: "/images/tool-one.webp",
        slug: "digital_ads",
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
