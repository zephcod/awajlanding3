import { type MetadataRoute } from "next"
import { allPosts } from "contentlayer/generated"

import { productCategories } from "@/config/products"
import { siteConfig } from "@/config/site"
import { getProductsAction } from "@/app/_actions/product"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productsTransaction = await getProductsAction({
    limit: 10,
    offset: 0,
    sort: "createdAt.desc",
  })

  const products = productsTransaction.items.map((product) => ({
    url: `${siteConfig.url}/product/${product.id}`,
    lastModified: new Date().toISOString(),
  }))

  const categories = productCategories.map((category) => ({
    url: `${siteConfig.url}/categories/${category.title}`,
    lastModified: new Date().toISOString(),
  }))

  const subcategories = productCategories
    .map((category) =>
      category.subcategories.map((subcategory) => ({
        url: `${siteConfig.url}/categories/${category.title}/${subcategory.slug}`,
        lastModified: new Date().toISOString(),
      }))
    )
    .flat()

  const posts = allPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = [
    "",
    "/solutions",
    "/build_campaign",
    "/pricing",
    "/one-time-order",
    "/blog",
    "/contact",
    "/categories",
    "/help_center",
    "/downloads",
    "/getting_started",
    "/tools",
    "/awaj_cases",
    "/how_it_works",
    "/content_hub",
    "/giveaways",
    "/product",
    "/build-a-board",
    "/email-preferences",
    "/about",
    "/influencers",
    "/faqs",
    "/reports",
    "/team",
    "/contact",
    "/career",
    "/terms",
    "/pricing",
    "/privacy",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...products, ...categories, ...subcategories, ...posts]
}
