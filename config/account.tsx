import { LucideIcon,
    CreditCard,
    Settings,
    PlusCircle,
    Gauge,
    User2,} from "lucide-react";
  
  export type Item = {
    name: string;
    slug: string;
    description?: string;
  };
  
  export const dashItems: { title: string; icon: LucideIcon; items: Item[] }[] = [
    {
      title: 'Dashboard',
      icon: Gauge,
      items: [
        {
          name: 'Projects',
          slug: 'dashboard/main',
          description:
            'Create meaningful Loading UI for specific parts of an app',
        },
        {
          name: 'Tools',
          slug: 'dashboard/tools',
          description: 'Create Error UI for specific parts of an app',
        },
      ],
    },
    {
        title: 'Account',
        icon: User2,
        items: [
          {
            name: 'Account',
            slug: 'dashboard/account',
            description: 'Create UI that is shared across routes',
          },
          {
            name: 'Verification',
            slug: 'signup/verify',
            description: 'Organize routes without affecting URL paths',
          },
          {
            name: 'Edit Account',
            slug: 'dashboard/account/edit',
            description: 'Render multiple pages in the same layout',
          },
          {
            name: 'Log out',
            slug: 'dashboard/account/logout',
            description: 'Render multiple pages in the same layout',
          },
        ],
      },
    {
      title: 'Billings',
      icon: CreditCard,
      items: [
        {
          name: 'Awaj Mela',
          slug: 'dashboard/billing/awajmela',
          description: 'Awaj mela coins status',
        },
        {
          name: 'Subscriptions',
          slug: 'dashboard/billing/subscriptions',
          description: 'Generate static pages',
        },
        {
          name: 'Orders',
          slug: 'dashboard/billing',
          description: 'Server-render pages',
        },
      ],
    },
    {
      title: 'Support',
      icon: PlusCircle,
      items: [
        {
          name: 'Get Support',
          slug: 'dashboard/support',
          description: 'Contact customer support',
        },
        {
          name: 'Open Ticket',
          slug: 'dashboard/support/ticket',
          description: 'Open tickets with customer support',
        },
      ],
    },
    {
      title: 'Settings',
      icon: Settings,
      items: [
        {
          name: 'Settings',
          slug: 'dashboard/setting',
          description:'Streaming data fetching from the server with React Suspense',
        },
      ],
    },
  ];
  