import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { env } from "@/env.mjs"
import { allPosts, Post } from "contentlayer/generated"
import { compareDesc, format, parseISO } from 'date-fns'
import { AspectRatio } from "@/components/UI/aspect_ratio"
import { Separator } from "@/components/UI/separator"
import { Header } from "@/components/header"
import { Icons } from "@/components/UI/icons"
import { Shell } from "@/components/shells/shell"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Awaj AI Blog",
  description: "Explore the latest news and updates from the community",
}


function BlogCard (post:Post) {
  return (
      <Link key={post.slug} href={post.slug}>
        <article className="flex flex-col space-y-2.5">
          <AspectRatio ratio={16 / 9}>
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, (min-width: 640px) 224px, 100vw"
                className="rounded-lg object-cover"
              />
            ) : (
              <div
                aria-label="Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex h-full w-full items-center justify-center rounded-lg bg-secondary"
              >
                <Icons.placeholder
                  className="h-9 w-9 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            )}
          </AspectRatio>
          <h2 className="line-clamp-1 text-xl font-semibold">
            {post.title}
          </h2>
          <p className="line-clamp-2 text-muted-foreground">
            {/* {post.description} */}
            Awaj AI - all in one digital marketing and sales involves creating and distributing content that engages 
            and attracts potential customers, as well as measuring and optimizing the performance of the campaigns. 
          </p>
          {post.date ? (
            <p className="text-sm text-muted-foreground">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </p>
          ) : null}
        </article>
      </Link>
  )
}


export default function BlogPage() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <Shell className="md:pb-10 mt-14">
      <Header
        title="Awaj Blog"
        description="Explore the latest news and updates from the community"
      />
      <Separator className="mb-2.5" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post, i) => (
          <BlogCard key={i} {...post}/>
        ))}
      </div>
    </Shell>
  )
}
