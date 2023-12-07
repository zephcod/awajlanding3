import Apps from '@/public/casestudy/app.png'
import B2B from '@/public/casestudy/b2b.png'
import Campaign from '@/public/character/social-deal.png'
import Bulb from '@/public/character/adv-538.png'
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
            desc: 'Growing your app brand starts with hand-crafting a strategy for technical SEO. Awaj experts combine experience and research to conduct detailed audits on your site. These audits help us make personalized recommendations to make sure your site is as usable and indexable as possible. After auditing your App website, we will know how to create and optimize content that is highly visible to your target audience on Google.',
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
            desc: 'Finally, we will use our strong partnerships and connections to improve your growth even further. Link features on trusted sites are one way we do this, resulting in improved trust from Google and better search rankings. We also leverage special relationships with influencers, agencies, and public figures around Ethiopia and beyond to bring your brand direct exposure from fans that fit the target audience for your app.',
            image: Campaign.src,
        },
        ],
      cases: [
        {
          name: 'BeU Delivery',
          slug: 'beu_delivery',
          desc: '',
          image: Bulb.src,
        },
        {
          name: 'Afriwork',
          slug: 'afriwork',
          desc: '',
          image: Bulb.src,
        },
        {
          name: 'Ahun',
          slug: 'ahun',
          desc: '',
          image: Bulb.src,
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
            desc: 'Your B2B brand campaign starts with technical SEO. In this crucial step, we conduct in-depth reviews to identify areas for improvement in Google best practices on your B2B site. Based on our finding, we will make personalized recommendations to increase usability, indexability, and structure on your brand`s site. With all of these areas optimized, nothing behind-the-scenes stops visitors in your target demographic from finding your site. This step helps us ensure that all the content we create and optimize throughout your campaign is as visible on Google as possible.',
            image: Campaign.src,
        },
        {
            title: '02. Optimization',
            desc: 'During this step, we will take an in-depth look at the existing pages of content on your B2B website, looking for opportunities to tweak it for Google best practices. Our on page SEO services help to direct well-targeted organic traffic to your site by proposing adjustments to copy and metadata — including meta tags, blog post titles, content headers, and your pages URL structure or more specific technical improvements — to make your whole site as Google-friendly as possible.',
            image: Campaign.src,
        },
        {
            title: '03. Content',
            desc: 'The next step is matching you with a long form content writer who knows everything about business-to-business interaction and connection. With your site spruced up and a keyword calendar in place, we will be able to fill your site, and Google search results, with top-quality blog content. All of our SEO content writers are in-house and highly experienced in B2B content, so you can relax knowing that you are getting the most high-end copy available.',
            image: Campaign.src,
        },
        {
            title: '04. Performance',
            desc: 'As B2B specialists, you understand the importance of partnerships in business. To help grow your brand further, we will partner with reputable sources from our vast network of industry connections. One way we do this is by featuring your links on trusted, popular sites to improve your sites trustworthiness in the eyes of Google. We will also secure promotion for your products and services through agencies, public figures, and celebrities we are close to in order to get direct exposure for your brand to individuals interested in B2B.',
            image: Campaign.src,
        },
        ],
      cases: [
        {
          name: '2Merkato',
          slug: '2merkato',
          desc: '',
          image: Campaign.src,
        },
      ],
    },
  ];
  