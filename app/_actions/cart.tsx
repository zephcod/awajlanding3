"use server"
import { NextRequest } from "next/server"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { db } from "@/db"
import { carts, solutions, stores } from "@/db/schema"
import type { CartLineItem } from "@/types"
import { eq, inArray } from "drizzle-orm"
import { number, type z } from "zod"

import type {
  cartItemSchema,
  deleteCartItemSchema,
  deleteCartItemsSchema,
} from "@/lib/validations/cart"

export async function getCartAction(): Promise<CartLineItem[]> {
  const cartId = cookies().get("cartId")?.value

  if (!cartId || isNaN(Number(cartId))) return []

  const cart = await db.query.carts.findFirst({
    where: eq(carts.id, Number(cartId)),
  })

  const productIds = cart?.items?.map((item) => item.productId) ?? []

  if (productIds.length === 0) return []

  const uniqueProductIds = [...new Set(productIds)]

  const cartLineItems = await db
    .select({
      id: solutions.id,
      name: solutions.name,
      images: solutions.images,
      // category: solutions.category,
      subcategory: solutions.subcategory,
      price: solutions.price,
      inventory: solutions.inventory,
      storeid: solutions.storeid,
      storeName: stores.name,
    })
    .from(solutions)
    .leftJoin(stores, eq(stores.id, solutions.storeid))
    .where(inArray(solutions.id, uniqueProductIds))

  const allCartLineItems = cartLineItems.map((item) => {
    const quantity = cart?.items?.find(
      (cartItem) => cartItem.productId === item.id
    )?.quantity

    return {
      ...item,
      quantity,
    }
  })

  return allCartLineItems
}

export async function getCartItemsAction(input: { cartId?: number }) {
  if (!input.cartId || isNaN(input.cartId)) return []

  const cart = await db.query.carts.findFirst({
    where: eq(carts.id, input.cartId),
  })

  return cart?.items
}

export async function addToCartAction(input: z.infer<typeof cartItemSchema>) {
  const cookieStore = cookies()
  const cartId = cookieStore.get("cartId")

  console.log(JSON.stringify(cartId))
  if (!cartId) {
    
    let newcart: Array< {id:number; } > = await db.insert(carts).values({
      items: [input],
    }).returning();

    
    const newcartid = newcart[0];
    console.log(JSON.stringify(newcartid.id))
    // Note: .set() is only available in a Server Action or Route Handler
    cookieStore.set("cartId", String(newcartid.id))

    revalidatePath("/")
    return
  }
  const req = cartId?.value
  const cart = await db.query.carts.findFirst({
    where: eq(carts.id, Number(req)),
  })
  
  if (!cart) {
    cookieStore.set({
      name: "cartId",
      value: "",
      expires: new Date(0),
    })
    throw new Error("Cart not found, please try again.")
  }
  
  const cartItem = cart.items?.find(
    (item) => item.productId === input.productId
    )
    
    if (cartItem) {
      cartItem.quantity += input.quantity
    } else {
      cart.items?.push(input)
    }
    console.log(cart.items)

  await db
    .update(carts)
    .set({
      items: cart.items,
    })
    .where(eq(carts.id, Number(req)))

  revalidatePath("/")
  return cart
}

export async function updateCartItemAction(
  input: z.infer<typeof cartItemSchema>
) {
  const cartId = cookies().get("cartId")?.value

  if (!cartId) {
    throw new Error("cartId not found, please try again.")
  }

  if (isNaN(Number(cartId))) {
    throw new Error("Invalid cartId, please try again.")
  }

  const cart = await db.query.carts.findFirst({
    where: eq(carts.id, Number(cartId)),
  })

  if (!cart) {
    throw new Error("Cart not found, please try again.")
  }

  const cartItem = cart.items?.find(
    (item) => item.productId === input.productId
  )
  if (!cartItem) {
    throw new Error("CartItem not found, please try again.")
  }

  if (input.quantity === 0) {
    cart.items =
      cart.items?.filter((item) => item.productId !== input.productId) ?? []
  } else {
    cartItem.quantity = input.quantity
  }

  await db
    .update(carts)
    .set({
      items: cart.items,
    })
    .where(eq(carts.id, Number(cartId)))

  revalidatePath("/")
}

export async function deleteCartAction() {
  const cartId = Number(cookies().get("cartId")?.value)

  if (!cartId) {
    throw new Error("cartId not found, please try again.")
  }

  if (isNaN(cartId)) {
    throw new Error("Invalid cartId, please try again.")
  }

  await db.delete(carts).where(eq(carts.id, cartId))
}

export async function deleteCartItemAction(
  input: z.infer<typeof deleteCartItemSchema>
) {
  const cartId = cookies().get("cartId")?.value

  if (!cartId) {
    throw new Error("cartId not found, please try again.")
  }

  if (isNaN(Number(cartId))) {
    throw new Error("Invalid cartId, please try again.")
  }

  const cart = await db.query.carts.findFirst({
    where: eq(carts.id, Number(cartId)),
  })

  if (!cart) return

  cart.items =
    cart.items?.filter((item) => item.productId !== input.productId) ?? []

  await db
    .update(carts)
    .set({
      items: cart.items,
    })
    .where(eq(carts.id, Number(cartId)))

  revalidatePath("/")
}

export async function deleteCartItemsAction(
  input: z.infer<typeof deleteCartItemsSchema>
) {
  const cartId = cookies().get("cartId")?.value

  if (!cartId) {
    throw new Error("cartId not found, please try again.")
  }

  if (isNaN(Number(cartId))) {
    throw new Error("Invalid cartId, please try again.")
  }

  const cart = await db.query.carts.findFirst({
    where: eq(carts.id, Number(cartId)),
  })

  if (!cart) return

  cart.items =
    cart.items?.filter((item) => !input.productIds.includes(item.productId)) ??
    []

  await db
    .update(carts)
    .set({
      items: cart.items,
    })
    .where(eq(carts.id, Number(cartId)))

  revalidatePath("/")
}
