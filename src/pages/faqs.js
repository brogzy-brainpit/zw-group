import CustomBtn from '@/components/CustomButton'
import SlideUpText from '@/effects/SlideUpText'
import GridColumn from '@/layout/GridColumn'
import GridRow from '@/layout/GridRow'
import {AnimatePresence,motion} from 'framer-motion';

import Section from '@/layout/Section'
import Landing from '@/PagesComponents/about/Landing'
import Heading1 from '@/typography/Heading1'
import Paragraph from '@/typography/Paragraph'
import { ArrowRightToLine, Play } from 'lucide-react';
import { useEffect, useState } from "react";


function faqs() {
   const [preLoaderOut,setPreLoaderOut]=useState(false)
const ease='linear'
 useEffect(()=>{

   const timer=  setTimeout(() => {
    setPreLoaderOut(true)
    // setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    
    }, 1000);
    return ()=>clearTimeout(timer)
  },[])
  return (
    <div>
      <Section className={'relative z-[1] h-full w-full pt'} >
      <GridRow className='py-6'>
     <GridColumn className={' border-b border-brand-background/95 py-4'}>
         <div className='col-span-8 bg-slate500 flex justify-center'>
                <Heading1 className={'text-left text-brand-text leading-[1] mb-2 lg:mb-0'}>
               <SlideUpText center={false}  preLoaderOut={preLoaderOut} gap='8px' text={"Welcome to Shine carwash Mobile, Your Premium Car Detailing Experts"}/>
                </Heading1>
                </div>
       <div className="col-span-4 bg-pink900">
          <Paragraph className={'flex text-left mb-4 text-brand-text'}>
               <SlideUpText delay={0.04}  center={false}  preLoaderOut={preLoaderOut} gap='8px' text={"Tailored Services: From interior cleaning to exterior polishing and ceramic coatings, we offer customizable packages to meet your needs. Our goal is to fulfill your satisfaction and give you the best service wherever you are. We come to you"}/>
     
                   {/* ZW Vehicle Group — engineered semi-trailers & trucks built to carry more, last longer, and arrive on time. */}
                 </Paragraph>
       </div>
     </GridColumn>
     
     
     
     
     <GridColumn className={' border- border-blu-300 py-4'}>
         <div className='col-span-full bg-slate500  flex items-end w-full '>
           <div className='flex flex-wrap w-full' >
     
               <motion.div initial={{scale:0}} animate={{scale:1,transition:{delay:3.5,duration:0.6,ease}}}  exit={{scale:0,transition:{delay:0.1,duration:0.6,ease}}} className='flex flex-wrap w-full'>
       {/* <SlideUpElement className='w-full flex-nowrap bg-slate-600' initialDelay={3.5} delay={0.06} margin='-30px' gap='4px' once={true} > */}
        {/* button 001 */}
         <CustomBtn className='flex-1 lg:flex-none mr-2.5 flex items-center  whitespace-nowrap border border-brand-background bg-brand-background' href='/'>
         <span className="p-4 hidden lg:block">Learn More about Us</span>
          <span className="inline-fle p-4 block lg:hidden">Learn More</span>
          <span className="inline-flex p-4">
          <ArrowRightToLine className="w-5 h-5 p text-brand-text" />
          </span>
          </CustomBtn>
          {/* button 002 */}
      <div  className="cursor-pointer font-body ml-2.5 flex items-center border border-brand-background bg-transparent whitespace-nowrap">
       <span className="inline-fle p-4 lg:block hidden text-brand-text">Play Video</span>
       <span className="inline-flex p-4">
       <Play className="w-5 h-5 text-brand-background fill-brand-background" fill={true}  />
       </span>
      </div>
     {/* </SlideUpElement> */}
     </motion.div>
           </div>
                </div>
      
     </GridColumn>
     
     
      </GridRow>
              
             
           </Section>
    </div>
  )
}

export default faqs