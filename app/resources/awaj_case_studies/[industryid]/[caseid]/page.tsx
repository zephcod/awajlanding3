import React from 'react'
import { cases } from '@/config/cases'
import type { Metadata, ResolvingMetadata } from 'next'
import { Breadcrumbs } from '@/components/pagers/breadcrumbs'
import { toTitleCase, unslugify } from '@/app/utils/utils'
import UnderConstruction from '@/components/under_construction'

interface IndustryPageProps {
    params: {
      caseid: string
    }
  }

export async function generateMetadata(
    {params}: IndustryPageProps,
    parent?: ResolvingMetadata
  ): Promise<Metadata> {
      return {
      title: `Awaj AI - ${unslugify(toTitleCase(params.caseid))}`,
      description: `Awaj digital marketing case studies for ${params.caseid} industry in Ethiopia.`
    }
  }

const Cases = ({ params }: IndustryPageProps) => {
  const cas = cases.find(ind =>{
      return ind.id === params.caseid
  })
  return (
    <div>
      <div className='pt-2 pl-4'>
        <Breadcrumbs
          segments={[
            {
              title: "Awaj AI Case Studies",
              href: "/resources/awaj_case_studies",
            },
            {
              title: unslugify(toTitleCase(cas!.cat)),
              href: `/resources/awaj_case_studies/${cas?.cat}`,
            },
            {
              title: `${cas?.title}`,
              href: `/resources/awaj_case_studies/${cas?.cat}/${cas?.id}`,
            },
          ]}
        />
      </div>
      <UnderConstruction title={cas!.title} date={''}/>
    </div>
  )
}

export default Cases