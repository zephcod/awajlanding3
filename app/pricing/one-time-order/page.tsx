import type { Metadata } from 'next'
import { Shell } from '@/components/shells/shell';
import { Skeleton } from '@/components/UI/skeleton';
import { Card, CardHeader, CardContent, CardFooter} from '@/components/UI/card';
import { AspectRatio } from '@/components/UI/aspect_ratio';
import { Icons } from '@/components/UI/icons';

export const metadata: Metadata = {
  title: 'Awaj Career',
  description: 'Awaj Advertising Agency Careers',
}



const Team = () => {
  return (
    <Shell className='relative mt-14'>
      <div className="space-y-2">
        <Skeleton className="h-10 w-28" />
        <Skeleton className="h-4 w-48" />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-14" />
          <Skeleton className="h-9 w-20" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader className="border-b p-0">
                <AspectRatio ratio={4 / 3}>
                  <div className="flex h-full items-center justify-center bg-secondary">
                    <Icons.placeholder
                      className="h-9 w-9 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                </AspectRatio>
              </CardHeader>
              <CardContent className="grid gap-2.5 p-4">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/4" />
              </CardContent>
              <CardFooter className="p-4">
                <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
                  <Skeleton className="h-8 w-full rounded-sm" />
                  <Skeleton className="h-8 w-full rounded-sm" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Shell>
  )
}

export default Team