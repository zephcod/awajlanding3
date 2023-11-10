import { LucideIcon,
  MessageSquare, 
  GalleryThumbnails,
  Aperture,
  Headphones,
  VideoIcon,
  Code } from "lucide-react";

export type Item = {
    name: string;
    slug: string;
    description?: string;
  };
  
  export const tabs: { name: string; icon: LucideIcon; items: Item[] }[] = [
    {
      name: 'Gallery',
      icon: GalleryThumbnails,
      items: [
        {
          name: 'Picture Gallery',
          slug: 'ai/gallery',
          description: 'Create UI that is shared across routes',
        },
        {
          name: 'Grouped Layouts',
          slug: 'route-groups',
          description: 'Organize routes without affecting URL paths',
        },
        {
          name: 'Parallel Routes',
          slug: 'parallel-routes',
          description: 'Render multiple pages in the same layout',
        },
      ],
    },
    {
      name: 'Conversations',
      icon: MessageSquare,
      items: [
        {
          name: 'Loading',
          slug: 'loading',
          description:
            'Create meaningful Loading UI for specific parts of an app',
        },
        {
          name: 'Error',
          slug: 'error-handling',
          description: 'Create Error UI for specific parts of an app',
        },
        {
          name: 'Not Found',
          slug: 'not-found',
          description: 'Create Not Found UI for specific parts of an app',
        },
      ],
    },
    {
      name: 'Image Generation',
      icon: Aperture,
      items: [
        {
          name: 'Text to Image',
          slug: 'ai/image/text-to-image',
          description:
            'Streaming data fetching from the server with React Suspense',
        },
        {
          name: 'Static Data',
          slug: 'ssg',
          description: 'Generate static pages',
        },
        {
          name: 'Dynamic Data',
          slug: 'ssr',
          description: 'Server-render pages',
        },
        {
          name: 'Incremental Static Regeneration',
          slug: 'isr',
          description: 'Get the best of both worlds between static & dynamic',
        },
      ],
    },
    {
      name: 'Audio Generation',
      icon: Headphones,
      items: [
        {
          name: 'Client Context',
          slug: 'context',
          description:
            'Pass context between Client Components that cross Server/Client Component boundary',
        },
      ],
    },
    {
      name: 'Video Generation',
      icon: VideoIcon,
      items: [
        {
          name: 'Client Component Hooks',
          slug: 'hooks',
          description: 'Preview the routing hooks available in Client Components',
        },
        {
          name: 'CSS and CSS-in-JS',
          slug: 'styling',
          description: 'Preview the supported styling solutions',
        },
        {
          name: 'Code Snippets',
          slug: 'snippets',
          description: 'A collection of useful App Router code snippets',
        },
      ],
    },
    {
      name: 'Prompts',
      icon: Code,
      items: [
        {
          name: 'Client Component Hooks',
          slug: 'hooks',
          description: 'Preview the routing hooks available in Client Components',
        },
        {
          name: 'CSS and CSS-in-JS',
          slug: 'styling',
          description: 'Preview the supported styling solutions',
        },
        {
          name: 'Code Snippets',
          slug: 'snippets',
          description: 'A collection of useful App Router code snippets',
        },
      ],
    },
  ];
  