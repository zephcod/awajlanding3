import { clsx, type ClassValue } from "clsx"
import { env } from "@/env.mjs"
import { isClerkAPIResponseError } from "@clerk/nextjs"
import { twMerge } from "tailwind-merge"
import { toast } from "sonner"
import * as z from "zod"
import dayjs from "dayjs"


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }

//
  
export function slugify(str: string) {
return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

//

// export function isMacOs(){
//   return window.navigator.userAgent.includes('Mac');
// }

//

export function formatPrice(
  price: number | string,
  currency: "USD" | "EUR" | "GBP" | "BDT" = "USD",
  notation: "compact" | "engineering" | "scientific" | "standard" = "standard"
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
  }).format(Number(price))
}

//

export function formatDate(date: Date | string) {
  return dayjs(date).format("MMMM D, YYYY")
}

//

export function catchClerkError(err: unknown) {
  const unknownErr = "Something went wrong, please try again later."

  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })
    return toast(errors.join("\n"))
  } else if (isClerkAPIResponseError(err)) {
    return toast.error(err.errors[0]?.longMessage ?? unknownErr)
  } else {
    return toast.error(unknownErr)
  }
}

//

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

//

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

//

export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })
    return toast(errors.join("\n"))
  } else if (err instanceof Error) {
    return toast(err.message)
  } else {
    return toast("Something went wrong, please try again later.")
  }
}