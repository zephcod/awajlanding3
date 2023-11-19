import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    CLERK_SECRET_KEY: z.string('sk_test_RChscSwKLC1wixP2fYYpjZoHUWqb0QwyQZCIK0pY81'),
    RESEND_API_KEY: z.string("re_DezGELzD_6k9PMZrR4uNy8dDS3s44RjDH"),
    EMAIL_FROM_ADDRESS: z.string().email("cto@gebeyaw.com"),
    
    UPLOADTHING_SECRET: z.string("sk_live_630074e7a117be444d0929d1e3d42d3de2f0c02f810cdcff870f4b0047a49bcb"),
    UPLOADTHING_APP_ID: z.string("pjkq008pqs"),
    
    CHAPA_SECRET:z.string(process.env.CHAPA_SECRET),
    POSTGRES_URL: z.string("postgres://default:6pkql7TQhEYi@ep-withered-poetry-08252282-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb"),
    
    APPWRITE_ENDPOINT:z.string(process.env.APPWRITE_ENDPOINT),
    APPWRITE_PROJECT:z.string(process.env.APPWRITE_PROJECT),
    APPWRITE_DATABASE:z.string(process.env.APPWRITE_DATABASE),

    APPWRITE_COLLECTION_USER:z.string(process.env.APPWRITE_COLLECTION_USER),
    APPWRITE_COLLECTION_SOLUTIONS:z.string(process.env.APPWRITE_COLLECTION_SOLUTIONS),
    APPWRITE_COLLECTION_CAMPAIGNS:z.string(process.env.APPWRITE_COLLECTION_CAMPAIGNS),

    APPWRITE_BUCKET_IMAGE:z.string(process.env.APPWRITE_BUCKET_IMAGE),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(process.env.NEXT_PUBLIC_APP_URL),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string('pk_test_aG9seS1jYWltYW4tNTcuY2xlcmsuYWNjb3VudHMuZGV2JA'),

    APPWRITE_P_ENDPOINT:z.string('https://cloud.appwrite.io/v1'),
    APPWRITE_P_PROJECT:z.string('6504c902cef3dc9b138c'),
    APPWRITE_P_DATABASE:z.string('650a05f49ac5d9e273b8'),

    APPWRITE_P_COLLECTION_USER:z.string('650a062ace779e21c647'),
    APPWRITE_P_COLLECTION_SOLUTIONS:z.string('650c8281e11da97327c9'),
    APPWRITE_P_COLLECTION_CAMPAIGNS:z.string('650e36335fababaad21d'),

    APPWRITE_P_BUCKET_IMAGE:z.string('650d2f3abd9c8148bda2'),

  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,

    POSTGRES_URL: process.env.POSTGRES_URL,
    // POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    // POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    // POSTGRES_USER: process.env.POSTGRES_USER,
    // POSTGRES_HOST: process.env.POSTGRES_HOST,
    // POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    // POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,

    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS,
    UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
    UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,

    CHAPA_SECRET:process.env.CHAPA_SECRET,

    APPWRITE_ENDPOINT:process.env.APPWRITE_ENDPOINT,
    APPWRITE_PROJECT:process.env.APPWRITE_PROJECT,
    APPWRITE_DATABASE:process.env.APPWRITE_DATABASE,

    APPWRITE_COLLECTION_USER:process.env.APPWRITE_COLLECTION_USER,
    APPWRITE_COLLECTION_SOLUTIONS:process.env.APPWRITE_COLLECTION_SOLUTIONS,
    APPWRITE_COLLECTION_CAMPAIGNS:process.env.APPWRITE_COLLECTION_CAMPAIGNS,

    APPWRITE_BUCKET_IMAGE:process.env.APPWRITE_BUCKET_IMAGE,

    APPWRITE_P_ENDPOINT:'https://cloud.appwrite.io/v1',
    APPWRITE_P_PROJECT:'6504c902cef3dc9b138c',
    APPWRITE_P_DATABASE:'650a05f49ac5d9e273b8',

    APPWRITE_P_COLLECTION_USER:'650a062ace779e21c647',
    APPWRITE_P_COLLECTION_SOLUTIONS:'650c8281e11da97327c9',
    APPWRITE_P_COLLECTION_CAMPAIGNS:'650e36335fababaad21d',

    APPWRITE_P_BUCKET_IMAGE:'650d2f3abd9c8148bda2',

  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
