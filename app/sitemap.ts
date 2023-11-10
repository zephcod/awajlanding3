import { type MetadataRoute } from "next"
import { allPosts } from "contentlayer/generated"

import { productCategories } from "@/config/products"
import { siteConfig } from "@/config/site"
import { getProductsAction } from "@/app/_actions/product"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productsTransaction = await getProductsAction({
    limit: 50,
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
    url: `${siteConfig.url}${post.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = [
    "",
    "/pricing",
    "/pricing/build-campaign",
    "/pricing/awaj-mela",
    "/pricing/deals",

    "/blog",
    "/contact",
    "/help_center",
    "/about",
    "/influencers",
    "/team",

    "/resources/downloads",
    "/resources/getting_started",
    "/resources/tools",
    "/resources/giveaways",
    "/resources/awaj_case_studies",
    "/resources/how_it_works",
    "/resources/content_hub",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...products, ...categories, ...subcategories, ...posts]
}
