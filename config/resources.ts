import { LucideIcon,
  BookUp2, 
  GalleryThumbnails,
  LineChart,} from "lucide-react";

export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { title: string; icon: LucideIcon; items: Item[] }[] = [
  {
    title: 'Getting Started',
    icon: GalleryThumbnails,
    items: [
      {
        name: 'Quick start',
        slug: 'resources/getting_started',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'How it works',
        slug: 'resources/how_it_works',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Overview',
        slug: 'resources/overview',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: 'Downloads',
        slug: 'resources/downloads',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    title: 'Case Studes',
    icon: LineChart,
    items: [
      {
        name: 'Awaj Case Studies',
        slug: 'resources/awaj_cases',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'Other Case Studies',
        slug: 'resources/other_cases',
        description: 'Create Error UI for specific parts of an app',
      },
    ],
  },
  {
    title: 'Content Hub',
    icon: BookUp2,
    items: [
      {
        name: 'Gallery',
        slug: 'resources/gallery',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'Awaj Tools',
        slug: 'resources/awaj_tools',
        description: 'Generate static pages',
      },
      {
        name: 'Giveaways',
        slug: 'resources/giveaways',
        description: 'Server-render pages',
      },
    ],
  },
];
