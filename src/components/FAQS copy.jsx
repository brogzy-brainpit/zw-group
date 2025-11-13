import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import Heading1 from '@/typography/Heading1'
import Paragraph from '@/typography/Paragraph'
import React, { useRef, useState } from 'react'
import Button from './Button'
import CustomButton from './CustomButton'
import Image from 'next/image'
import Heading2 from '@/typography/Heading2'
import { motion, useInView } from 'framer-motion'
import SlideUpText from '@/effects/SlideUpText'
import { Plus, PlusIcon } from 'lucide-react'
import ScaleUpContent from '@/effects/ScaleUpContent'

function FAQS() {
  return (
    <div className='bg-brand-background'>
      <Section className={'h-ful'} >
            <GridColumn className={'w-full  bg-slate300'}>
           {/* <div className='col-span-full lg:col-span-5 bg-purpl-400'>
          <ScaleUpContent className='w-full h-full bg-slate-200'>
              <div className='flex h-full justify-center items-center bg-gray-700 rounded-md'>
               <h2 className={'capitalize text-gray-200 text-[30em] font-custom leading-none '}>
            ?
            </h2>
            </div>
          </ScaleUpContent>
           </div> */}
           <div className='bg-purpl-600 fle col-span-full lgcol-span-7 bg-slate500'>
           <Heading2 className={'capitalize text-left mb-6 font-custom'}>
            frequently asked questions
            </Heading2>
            <Questions/>
           </div>


          </GridColumn> 
      </Section>

    </div>
  )
}

const Questions=()=>{
  const  QA= [
    {
      q:'what service do our agency offers?',
      a:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officia.'
    },  {
      q:'do you offer customizable travel packages?',
      a:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officia.'
    },
    {
      q:"what's included in your travel packages?",
      a:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officia.'
       }, 
      {
      q:'what is your cancelation or refund policy?',
      a:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officia.'
    },
     {
      q:'how many travel packages do you have?',
      a:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officia.'
    },
    {
      q:'do you offer honeymoon arrangement within europe',
      a:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, officia.'
    },
  ]
 
  const [open,setOpen]= useState(false)
  return (
    <div>
      {QA.map(({q,a})=>{
        return (
          <div className='border-t border-gray-800 py-4 '>
            <div className='flex justify-between items-center'>
            <Paragraph className='font-custom'>{q}</Paragraph>
            <PlusIcon className='cursor-pointer'/>
            </div>
            {/* <motion.div variants={openQa} initial='initial' animate={open?'enter':'initial'} exit='exit' className='h-full '>
            <Paragraph className='font-body mt-5'>{q}</Paragraph>
{open?'open':'closed'}
            </motion.div> */}
          </div>
        )
      })}
    </div>
  )
}

export default FAQS