import Apps from '@/public/casestudy/app.png'
import B2B from '@/public/casestudy/b2b.png'
import Campaign from '@/public/character/social-deal.png'
  export type Cases = {
    name: string;
    slug: string;
    desc: string;
    image?: string;
  };
  export type Strategy = {
    title: string;
    desc: string;
    image?: string;
  };
  
  export const industry: { id:string; title: string; strategy:string; desc: string; image: string; process: Strategy[]; cases: Cases[] }[] = [
    {
      title: 'Apps',
      id:'apps',
      image: Apps.src,
      desc: 'We help apps to increase their exposure and bring them to more devices with a custom ASO (App Store Optimization), which leverages impressions and ensures traffic and downloads.',
      strategy:'Our Four-Pillar Approach for App Brands',
      process: [
        {
            title: '01. Strategy',
            desc: 'Growing your app brand starts with hand-crafting a strategy for technical SEO. Our GR0 experts combine experience and research to conduct detailed audits on your site. These audits help us make personalized recommendations to make sure your site is as usable and indexable as possible. After auditing your App website, we will know how to create and optimize content that is highly visible to your target audience on Google.',
            image: Campaign.src,
        },
        {
            title: '02. Optimization',
            desc: 'Next, we will analyze the pages that already exist on your app website, looking for opportunities to boost it for Google best practices. Our on page SEO services make it easier for organic traffic to reach your site by tweaking content and metadata. In this step, we make meaningful changes to meta descriptions, headers, URL structure, and titles, as well as page-specific improvements to make your pages easy for users to find on Google.',
            image: Campaign.src,
        },
        {
            title: '03. Content',
            desc: 'Now it is time to let our content creators work their magic. We will pair you with a long-form content creator experienced in the realm of apps, app trends, and mobile or desktop device technologies. All of our writers are in-house and specialized in the relevant industry to ensure you get top-quality copy, every time.',
            image: Campaign.src,
        },
        {
            title: '04. Performance',
            desc: 'Finally, we will use our strong partnerships and connections to improve your growth even further. Link features on trusted sites are one way we do this, resulting in improved trust from Google and better search rankings. We also leverage special relationships with influencers, agencies, and public figures around Los Angeles and beyond to bring your brand direct exposure from fans that fit the target audience for your app.',
            image: Campaign.src,
        },
        ],
      cases: [
        {
          name: 'BeU Delivery',
          slug: 'beu_delivery',
          desc: '',
          image: Campaign.src,
        },
        {
          name: 'Afriwork',
          slug: 'afriwork',
          desc: '',
          image: Campaign.src,
        },
        {
          name: 'Ahun',
          slug: 'ahun',
          desc: '',
          image: Campaign.src,
        },
      ],
    },
    {
      title: 'B2B',
      id:'b2b',
      image: B2B.src,
      desc: 'We help apps to increase their exposure and bring them to more devices with a custom ASO (App Store Optimization), which leverages impressions and ensures traffic and downloads.',
      strategy:'Our Four-Pillar Approach for App Brands',
      process: [
        {
            title: '01. Strategy',
            desc: 'Growing your app brand starts with hand-crafting a strategy for technical SEO. Our GR0 experts combine experience and research to conduct detailed audits on your site. These audits help us make personalized recommendations to make sure your site is as usable and indexable as possible. After auditing your App website, we will know how to create and optimize content that is highly visible to your target audience on Google.',
            image: Campaign.src,
        },
        {
            title: '02. Optimization',
            desc: 'Next, we will analyze the pages that already exist on your app website, looking for opportunities to boost it for Google best practices. Our on page SEO services make it easier for organic traffic to reach your site by tweaking content and metadata. In this step, we make meaningful changes to meta descriptions, headers, URL structure, and titles, as well as page-specific improvements to make your pages easy for users to find on Google.',
            image: Campaign.src,
        },
        {
            title: '03. Content',
            desc: 'Now it is time to let our content creators work their magic. We will pair you with a long-form content creator experienced in the realm of apps, app trends, and mobile or desktop device technologies. All of our writers are in-house and specialized in the relevant industry to ensure you get top-quality copy, every time.',
            image: Campaign.src,
        },
        {
            title: '04. Performance',
            desc: 'Finally, we will use our strong partnerships and connections to improve your growth even further. Link features on trusted sites are one way we do this, resulting in improved trust from Google and better search rankings. We also leverage special relationships with influencers, agencies, and public figures around Los Angeles and beyond to bring your brand direct exposure from fans that fit the target audience for your app.',
            image: Campaign.src,
        },
        ],
      cases: [
        {
          name: 'BeU Delivery',
          slug: 'resources/awaj_case_studies/apps/beu_delivery',
          desc: '',
          image: Campaign.src,
        },
        {
          name: 'Afriwork',
          slug: 'resources/awaj_case_studies/apps/afriwork',
          desc: '',
          image: Campaign.src,
        },
        {
          name: 'Ahun',
          slug: 'resources/awaj_case_studies/apps/ahun',
          desc: '',
          image: Campaign.src,
        },
      ],
    },
    {
      title: 'Case Studies',
      id:'health',
      desc: '',
      strategy:'',
      process: [{
        title: '',
        desc: '',
        image: Campaign.src,
      }],
      image: 'LineChart',
      cases: [
        {
          name: 'Awaj Case Studies',
          slug: 'resources/awaj_case_studies',
          desc: '',
          image: 'Create meaningful Loading UI for specific parts of an app',
        },
        {
          name: 'Awaj Gallery',
          slug: 'resources/awaj_gallery',
          desc: '',
          image: 'Create Error UI for specific parts of an app',
        },
      ],
    },
    {
      title: 'Learning Hub',
      id:'realestate',
      desc: '',
      strategy:'',
      process: [{
        title: '',
        desc: '',
        image: Campaign.src,
      }],
      image: 'BookMarked',
      cases: [
        {
          name: 'Advertising',
          slug: 'resources/learning/advertising',
          desc: '',
          image: 'Streaming data fetching from the server with React Suspense',
        },
        {
          name: 'Content',
          slug: 'resources/learning/content',
          desc: '',
          image: 'Generate static pages',
        },
        {
          name: 'Social Media',
          slug: 'resources/learning/social-media',
          desc: '',
          image: 'Server-render pages',
        },
      ],
    },
    {
      title: 'Awaj Contents',
      id:'tech',
      desc: '',
      strategy:'',
      process: [{
        title: '',
        desc: '',
        image: Campaign.src,
      }],
      image: 'Presentation',
      cases: [
        {
          name: 'Gallery',
          slug: 'resources/gallery',
          desc: '',
          image: 'Streaming data fetching from the server with React Suspense',
        },
        {
          name: 'Awaj Tools',
          slug: 'resources/awaj_tools',
          desc: '',
          image: 'Generate static pages',
        },
        {
          name: 'Giveaways',
          slug: 'resources/giveaways',
          desc: '',
          image: 'Server-render pages',
        },
      ],
    },
  ];
  