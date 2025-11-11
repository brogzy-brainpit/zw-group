import React, { useRef, useState } from 'react'
import { motion,} from 'framer-motion'
import StaggerText from '@/effects/StaggerText'
import SlideUpText from '@/effects/SlideUpText'
import { ArrowRightToLine, ArrowUpWideNarrow, Play } from 'lucide-react'
import SlideUpElement from '@/effects/SlideUpElement'
import Section from '@/layout/Section'
import GridRow from '@/layout/GridRow'
import GridColumn from '@/layout/GridColumn'
import Heading2 from '@/typography/Heading2'
import CustomBtn from './CustomButton'
import Paragraph from '@/typography/Paragraph'


function Section2() {
  //  const ref = useRef(null);
  // const inView = useInView(ref, { amount:0.4});
  // const inView = useInView(ref, { amount:0.9});
  // const inView = useInView(ref);const ref = useRef(null);
//  const ref = useRef(null);
 const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  
 
  return (
 <div ref={ref} className='relative'>
<Section className={'bg-purple500 min-h-screen h-screen lg:h-fit'}>
  <GridRow>
     <GridColumn>
        <div className='col-span-full  lg:col-start-6'>
          {/* animated-line */}
          <motion.div className='origin-left h-[1px] lg:h-[2px] bg-neutral-900 w-full'  initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{ once: false }} transition={{duration:0.6,}} />
          {/* animated-line */}

         <Heading2 className='font-custom !mt-5 italic'>
        <SlideUpElement gap='6px' once={false} >
          <span className="inline-block w-[0.7em] h-[0.7em] mr-2 align-baseline translate-y-[0.05em]">
            <img
              src="/images/rotate.png"
              className="w-[0.7em] h-[0.7em]"
              style={{ animation: "spin 3s linear infinite" }}
              alt="rotate icon"
            />
          </span>
          {'With intelligent and international manufacturing workshops, Shandong Zhuowei International Trading Co.,ltd . can satisfy with various maunfacturing requirements of products. Every key process is equipped with top welding equipment to complete welding automatically. All of these inject brand new vitality to the company.'.split(' ').map((word)=>{
            return (
          <span className=''>{word}</span>

            )
          })}
        </SlideUpElement>
         </Heading2>
          </div>
      </GridColumn>

<GridColumn className={'bgpurple-600'}>
<div className='col-span-full lg:col-span-8'>
<div className='flex flex-wrap'>
  {/* <SlideUpElement delay={0.2} margin='-130px' gap='4px' once={false} > */}
   {/* button 001 */}
    <CustomBtn className='flex-1 lg:flex-none mr-2.5 flex items-center  whitespace-nowrap border border-brand-bacbg-brand-background bg-brand-background' href='/'>
    <span className="p-4 hidden lg:block">Learn More about Us</span>
     <span className="inline-fle p-4 block lg:hidden">Learn More</span>
     <span className="inline-flex p-4">
     <ArrowRightToLine className="w-5 h-5 p text-white" />
     </span>
     </CustomBtn>
     {/* button 002 */}
 <CustomBtn className="font-body ml-2.5 flex items-center border border-neutral-900 bg-transparent whitespace-nowrap">
  <span className="inline-fle p-4 lg:block hidden text-neutral-900">Play Video</span>
  <span className="inline-flex p-4">
  <Play className="w-5 h-5 text-neutral-900" />
  </span>
 </CustomBtn>
{/* </SlideUpElement> */}
</div>

</div>
<div className=' col-span-full lg:col-span-4 sm:col-start6 self-end bg-slate600 flex justify-end'>
<Paragraph className={'text-neutral-900'}>
  <SlideUpText duration={0.40} delay={0.1} once={false} className={''} text={'Copyright© 2021-2031'}/>
</Paragraph>

</div>
 

</GridColumn>

</GridRow>
</Section>

 </div>

  )
}

export default Section2


