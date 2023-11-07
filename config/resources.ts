import { LucideIcon,
  Presentation, 
  BookMarked,
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
        name: 'Downloads',
        slug: 'resources/downloads',
        description: 'Render multiple pages in the same layout',
      },
      {
        name: 'How it works',
        slug: 'resources/how_it_works',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Overview Tour',
        slug: 'resources/overview',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    title: 'Case Studies',
    icon: LineChart,
    items: [
      {
        name: 'Awaj Case Studies',
        slug: 'resources/awaj_case_studies',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'Awaj Gallery',
        slug: 'resources/awaj_gallery',
        description: 'Create Error UI for specific parts of an app',
      },
    ],
  },
  {
    title: 'Learning Hub',
    icon: BookMarked,
    items: [
      {
        name: 'Advertising',
        slug: 'resources/learning/advertising',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'Content',
        slug: 'resources/learning/content',
        description: 'Generate static pages',
      },
      {
        name: 'Social Media',
        slug: 'resources/learning/social-media',
        description: 'Server-render pages',
      },
    ],
  },
  {
    title: 'Awaj Contents',
    icon: Presentation,
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
