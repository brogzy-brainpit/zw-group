import GridColumn from '@/layout/GridColumn'
import GridRow from '@/layout/GridRow'
import Section from '@/layout/Section'
import Heading1 from '@/typography/Heading1'
import Heading2 from '@/typography/Heading2'
import Paragraph from '@/typography/Paragraph'
import { ArrowRight, ArrowRightCircle } from 'lucide-react'
import React from 'react'

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
          <div className='col-span-3 bg-brand-background text-white lg:col-span-4 flex justify-center items-center flex-col my-4'>
            <Paragraph>
              Experts
            </Paragraph>
            <Heading1 className={'capitalize text-white'}>
              our team
            </Heading1>
            <ArrowRightCircle/>
</div>
      {members.map(({name,role,comment,img})=>{
        return (
          <div className='col-span-3 lg:col-span-4 flex justify-center items-center flex-col my-4'>
        <img src={img} className='w-[4em] h-[4em] rounded-full shadow-sm'/>
        <div className='flex flex-col justify-center items-center my-3'>
          <h2 className='font-custom text-para capitalize font-bold'>{name}</h2>
          <h2 className='font-body text-para capitalize'>{role}</h2>
        </div>
        <p className='text-center w-5/6 font-body text-para'>{comment}</p>
         <div className='flex justify-center gap-2 items-center my-3'>
          <img src='images/linkedIn.svg'/>
          <img src='images/X.svg'/>
          <img src='images/dribble.svg'/>
        </div>
      </div>
        )
      })}
      

        </GridColumn>
      {/* <GridRow>
        
      </GridRow> */}
      </Section>
      
      </div>
  )
}

export default Section5