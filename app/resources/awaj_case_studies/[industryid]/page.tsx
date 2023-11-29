import React from 'react'
import styles from '@/app/resources/awaj_case_studies/[industryid]/page.module.css'
import type { Metadata, ResolvingMetadata } from 'next'
import { industry } from '@/config/industry'
import Image from 'next/image'
import { QuickCampaign } from '@/components/pricing/quick_campaign'
import Faqs from '@/components/faq/faqs'
import Link from 'next/link'
import { buttonVariants } from '@/components/UI/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/UI/card'
import { AspectRatio } from '@/components/UI/aspect_ratio'
import { Icons } from '@/components/UI/icons'
import ScrollLink from '@/components/UI/scroll_link'
import { Breadcrumbs } from '@/components/pagers/breadcrumbs'
import ExpandingArrow from '@/components/expanding_arrow'

interface IndustryPageProps {
    params: {
      industryid: string
    }
  }

export async function generateMetadata(
    {params}: IndustryPageProps,
    parent?: ResolvingMetadata
  ): Promise<Metadata> {
      return {
      title: `Awaj for - ${params.industryid}`,
      description: `Awaj digital marketing case studies for ${params.industryid} industry in Ethiopia.`
    }
  }

const Industry = ({ params }: IndustryPageProps) => {
    const indu = industry.find(ind =>{
        return ind.id === params.industryid
    })
  return (
    <div className='w-full'>
      <div className='pt-4 pl-4'>
      <Breadcrumbs
        segments={[
          {
            title: "Awaj AI Case Studies",
            href: "/resources/awaj_case_studies",
          },
          {
            title: `${indu?.title}`,
            href: `/resources/awaj_case_studies/${indu?.id}`,
          },
        ]}
      />
      </div>
        <div className={styles.container}>
            <h1 className="py-6 text-3xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-4xl">
                {indu?.title}
            </h1>
            <div className={'flex flex-col md:flex-row justify-evenly max-w-4xl items-center'}>
              <Image src={indu!.image} alt='awaj case studies' height={300} width={300}/>
              <div className='text-base text-muted-foreground text-start'>
                <h2 className='text-xl md:text-2xl md:font-bold font-semibold'>
                    Digital Marketing for - {' '}{indu?.title}
                </h2><br/> 
                <p> {indu?.desc} </p>
                <div className='mt-8 flex flex-col items-center text-center text-muted-foreground'>
                  <div className="border-border border-t-2 border-dashed h-8 w-full"></div>
                  <p>See how we help brands grow through effective digital marketing & sales strategies across several industries. </p>
                    <div className='mt-4 flex flex-col md:flex-row gap-4'>
                      <ScrollLink href={'#quick'}>
                        Get a review for your {indu?.title}
                      </ScrollLink>
                      <ScrollLink href={'#cases'}>
                        {indu?.title} Campaign Success Stories
                      </ScrollLink>
                    </div>
                </div>
              </div>
            </div>
            <div className='h-24'></div>
            <div className={styles.headline1_canvas}>
              <h2 className='text-2xl md:text-3xl md:font-bold font-semibold text-muted-foreground'>{indu?.strategy}</h2>
              <div className="-mt-4 flex flex-col gap-4">{indu!.process.map((process) => {
                    return (
                      <div key={process.title} className='flex flex-col md:flex-row gap-4 p-4 items-center'>
                          <Image
                          src={
                            process.image ?? "/images/product-placeholder.webp"
                          }
                          alt={process.title}
                          height={200}
                          width={200}
                          loading="lazy"
                          />
                        <div className='flex flex-col items-start justify-start'>
                          <h3 className='text-xl md:text-2xl md:font-bold font-semibold text-muted-foreground'> {process.title}</h3>
                          <p className='flex-1 text-muted-foreground text-start'>{process.desc}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div id='cases' className='h-12'></div>
            <h2 className="py-6 text-2xl text-center text-muted-foreground font-bold leading-[1.15] lg:text-3xl">
                Selected {indu?.title} Success Stories
            </h2>
            <div className='h-2'></div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">{indu!.cases.map((i) => {
            return (
              <Link href={`/resources/awaj_case_studies/${params.industryid}/${i.slug}`} key={i.name} className='relative group hover:cursor-pointer transition-all'>
              <Card className="h-full overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-lg" >
                <CardHeader className="border-b p-0">
                  <AspectRatio ratio={4 / 3}>
                    {i?.image?.length ? (
                      <Image
                        src={
                          i.image ?? "/images/product-placeholder.webp"
                        }
                        alt={i.name}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        aria-label="Placeholder"
                        role="img"
                        aria-roledescription="placeholder"
                        className="flex h-full w-full items-center justify-center bg-secondary"
                      >
                        <Icons.placeholder
                          className="h-9 w-9 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                  </AspectRatio>
                </CardHeader>
                <CardContent className="grid gap-2.5 p-4">
                  <CardTitle className="line-clamp-1 text-muted-foreground">{i.name}</CardTitle>
                  <CardDescription>we will use our strong partnerships and connections to improve your growth even further.</CardDescription>
                </CardContent>
                <CardFooter className="p-4 items-center">
                <div className='flex flex-row items-center w-full p-2 ring-border ring-1 rounded-md text-muted-foreground justify-center'>
                    <p>View Campaign{' '}</p> 
                    <ExpandingArrow/>
                  </div>
                </CardFooter>
            </Card>
            </Link>);
          })}
        </div>
      </div>
      <div className='h-24'></div>
      <section id='quick'>
        <QuickCampaign/>
      </section>
      <Faqs/>
    </div>
  )
}

export default Industry