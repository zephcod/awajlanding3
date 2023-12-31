import Link from "next/link"
import { notFound } from "next/navigation"
import { db } from "@/db"
import { solutions, stores } from "@/db/schema"
import { env } from "@/env.mjs"
import { and, desc, eq, not } from "drizzle-orm"

import { formatPrice, toTitleCase, unslugify } from "@/app/utils/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion"
import { Separator } from "@/components/UI/separator"
import { AddToCartForm } from "@/components/forms/add-to-cart-form"
import { Breadcrumbs } from "@/components/pagers/breadcrumbs"
import { ProductCard } from "@/components/product_card"
import { ProductImageCarousel } from "@/components/product-image-carousel"
import { Shell } from "@/components/shells/shell"
import type { Metadata, ResolvingMetadata } from 'next'


interface ProductPageProps {
  params: {
    productId: string
  }
}

 
export async function generateMetadata(
  {params}: ProductPageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const productId = Number(params.productId)
 
  const product = await db.query.solutions.findFirst({
    where: eq(solutions.id, productId),
  })
 
 
  return {
    title: product?.name,
    description: product?.description
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.productId)

  const product = await db.query.solutions.findFirst({
    where: eq(solutions.id, productId),
  })

  if (!product) {
    notFound()
  }

  const store = await db.query.stores.findFirst({
    columns: {
      id: true,
      name: true,
    },
    where: eq(stores.id, product.storeid),
  })

  const productsFromStore = store
    ? await db
        .select()
        .from(solutions)
        .limit(4)
        .where(
          and(
            eq(solutions.storeid, product.storeid),
            not(eq(solutions.id, productId))
          )
        )
        .orderBy(desc(solutions.inventory))
    : []

  return (
    <Shell className="mt-14">
      <Breadcrumbs
        segments={[
          {
            title: "Solutions",
            href: "/categories/solutions",
          },
          {
            title: unslugify(toTitleCase(product.subcategory)),
            href: `/categories/solutions?subcategory=${product.subcategory}`,
          },
          {
            title: product.name,
            href: `/product/${product.id}`,
          },
        ]}
      />
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        <ProductImageCarousel
          className="w-full md:w-1/2"
          images={product.images ?? []}
          options={{
            loop: true,
          }}
        />
        <Separator className="mt-4 md:hidden" />
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{product.name}</h2>
            <p className="text-base text-muted-foreground">
              {formatPrice(product.price)}
            </p>
            {store ? (
              <p>{store.name}</p>
              // <Link
              //   href={`/products?store_ids=${store.id}`}
              //   className="line-clamp-1 inline-block text-base text-muted-foreground hover:underline"
              // >
              //   {store.name}
              // </Link>
            ) : null}
          </div>
          <Separator className="my-1.5" />
          <AddToCartForm productId={productId} />
          <Separator className="mt-5" />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                {product.description ??
                  "No description is available for this product."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {store && productsFromStore.length > 0 ? (
        <div className="overflow-hidden md:pt-6">
          <h2 className="line-clamp-1 flex-1 text-2xl font-bold">
            More solutions from {store.name}
          </h2>
          <div className="overflow-x-auto pb-2 pt-6">
            <div className="flex w-fit gap-4">
              {productsFromStore.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="min-w-[260px]"
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </Shell>
  )
}
