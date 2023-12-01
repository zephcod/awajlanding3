"use client"

import * as React from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

import { Button } from "@/components/UI/button"
import { Icons } from "@/components/UI/icons"
import appwriteAuthService from "@/db/appwrite_auth"
import useAuth from "@/hooks/use_auth"


export function OAuthSignIn() {
  // const [isLoading, setIsLoading] = React.useState(null)
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const {setAuthStatus} = useAuth()

  async function oauthSignIn(provider: string) {
  }

  async function onSubmit(data: string) {
    startTransition(async () => {
      try {
        const session = await appwriteAuthService.oauthSession(data)
        if (session) {
          setAuthStatus(true)
          router.back()
        }
      } catch (err) {
        toast.message("Error occured while logging in", {
          description: `${err}`,
        })
      }
    })
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
          <Button
            aria-label={`Sign in with Google`}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={() => void onSubmit('google')}
            disabled={isPending}
          >
            {isPending ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Icons.google className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            Google
          </Button><Button
            aria-label={`Sign in with Google`}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={() => void onSubmit('facebook')}
            disabled={isPending}
          >
            {isPending ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Icons.facebook className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            Facebook
          </Button>
    </div>
  )
}
