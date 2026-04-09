import GridColumn from '@/layout/GridColumn'
import GridRow from '@/layout/GridRow'
import Section from '@/layout/Section'
import Heading1 from '@/typography/Heading1'
import Heading2 from '@/typography/Heading2'
import Paragraph from '@/typography/Paragraph'
import { ArrowRight, ArrowRightCircle } from 'lucide-react'
import React from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

function Section5() {
  const members=[
    {name:'john miller',
      role:'Chief engineer',
      comment:'Veteran designer with 20 years of transportation engineering experience',
      img:'images/service01.png'

    },
     {name:'Emily Rodriguez',
      role:'Design lead',
      comment:'innovative thinker transforming trailer design with cutting-edge techniques.',
      img:'images/service02.png'
    },
     {name:'david chen',
      role:'Production manager',
      comment:'Precision expert ensuring highest quality manufacturing standards.',
      img:'images/service03.png'
    },
      {name:'Robert Thompson',
      role:'Quality control',
      comment:'Rigorous inspector guaranteeing exceptional trailer',
      img:'images/service04.png'
    },
     {name:'Maria Santos',
      role:'Technical specialist',
      comment:'advanced problem solver creating custom trailer solutions.',
      img:'images/service03.png'
    },
    {name:'Lisa Wong',
      role:'Customer relations',
      comment:'Dedicated professional ensuring client satisfaction throughout project.',
      img:'images/service02.png'
    },
  ]
  return (
    <div className='bg-0 text-black min-h-screen'>
      <Section>
        <GridColumn>
          <div className='col-span-4 lg:col-span-6  text-white  flex justify-centr itemscenter flex-col my-4'>
            <h2 className={'font-custom mb-4 text-heading1 leading-[.9] capitalize text-brand-background'}>
              The Difference Is In The Details
            </h2>
            <Paragraph className={'text-brand-background'}>
              See the difference precision detailing makes. Every surface restored, every imperfection refined, leaving your vehicle with a clean, polished, and elevated look.
            </Paragraph>
            <ArrowRightCircle/>
</div>
      <div className='col-span-7 lg:col-span-6'>
        <BeforeAfterSlider beforeImage={'/images/seat02Clean.png'} afterImage={'/images/seat02Dirt.png'}/>
      </div>
      

        </GridColumn>
      {/* <GridRow>
        
      </GridRow> */}
      </Section>
      
      </div>
  )
}

export default Section5