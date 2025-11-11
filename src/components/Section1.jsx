import GridColumn from '@/layout/GridColumn'
import GridRow from '@/layout/GridRow'
import Section from '@/layout/Section'
import Heading1 from '@/typography/Heading1'
import Paragraph from '@/typography/Paragraph'
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import CustomButton from './CustomButton'
import Image from 'next/image'
import Heading2 from '@/typography/Heading2'
import { AnimatePresence, motion } from 'framer-motion'
import SlideUpText from '@/effects/SlideUpText'
import { ArrowRightToLine, Plane, Play, Plus, Volume, Volume2Icon, VolumeOff, X } from 'lucide-react'
import LandingVideo from './LandingVideo'
import hero from '../../public/images/hhero.png'
import Logo from './Logo'
import CustomBtn from './CustomButton'
import SlideUpElement from '@/effects/SlideUpElement'

function Section1({preLoaderOut}) {
   const [play,setPlay]=useState(false)
  const [isMute,setIsMute]=useState(true)
    const videoRef = useRef(null)
  

  useEffect(() => {
      if (play && videoRef.current) {
        videoRef.current.play().catch(() => {})
      }
    }, [play])

    useEffect(() => {
  if (videoRef.current) {
    videoRef.current.muted = isMute
  }
}, [isMute])



  const playVideo=()=>{
    setPlay(true)
  }
   const textSlide={
    initial:(i)=>({
      y:70,
       skew:-30,
      rotateY:-30,
      opacity:0,
      // clipPath: i==1?'inset(0 0 100% 0)':'inset(100% 0 0 0)',

    }),
     enter:(i)=>({
      y:0,
      skew:0,
      rotateY:0,
      opacity:1,
      // clipPath:'inset(0 0 0 0)',
      transition:{duration:1.4,delay:i==1?0.1:0, ease:[0.76, 0, 0.24, 1]},
    }),
    exit:(i)=>({
      y:70,
       skew:-30,
      rotateY:-30,
      opacity:0,
      // clipPath: i==1?'inset(0 0 100% 0)':'inset(100% 0 0 0)',

    }),
  }
  const ease=[0.76, 0, 0.24, 1];

    const playVid={
    initial:(i)=>({
      // y:70,
      //  skew:-30,
      // rotateY:-30,
      // opacity:0,
      clipPath:'inset(50% 0 50% 0)',
    }),
     enter:(i)=>({
      // y:0,
      // skew:0,
      // rotateY:0,
      // opacity:1,
      clipPath:'inset(0 0 0 0)',
      transition:{duration:1.4,delay:.2, ease:[0.76, 0, 0.24, 1]},
    }),
    exit:(i)=>({
      // y:70,
      //  skew:-30,
      // rotateY:-30,
      // opacity:0,
      clipPath:'inset(50% 0 50% 0)',
      transition:{duration:1.4,delay:.2, ease:[0.76, 0, 0.24, 1]},


    }),
  }

  const MotionImage=motion(Image)
 
   
  return (
    <div className='bg-brand-text-dark  single-vimeo-background relative w-full h-svh overflow-hidden single-vimeo-background'>
      {/* <LandingVideo preLoaderOut={preLoaderOut} link={"/videos/hero.mp4"}/> */}
     <MotionImage transition={{duration:2.8,delay:0.4,ease:[1, 0.24, 0.80, 1]}} initial={{scale:1.3}} animate={{scale:preLoaderOut?1:1.3}} exit={{scale:1.3}}
  src={hero}
  fill
  className="object-cover object-[50%_40%]"
  alt=""
/>
<div className='absolute inset-0 w-full h-full bg-black/55'/>
 <Section className={'relative z-[1] h-full w-full pt'} >
 <GridRow className='py-6'>
<GridColumn className={' border-b border-brand-background/95 py-4'}>
    <div className='col-span-8 bg-slate500 flex justify-center'>
           <Heading1 className={'text-left text-white leading-[1] mb-2 lg:mb-0'}>
          <SlideUpText center={false}  preLoaderOut={preLoaderOut} gap='8px' text={"Tractor-Truak unlimited Power, leading the Future"}/>
           </Heading1>
           </div>
  <div className="col-span-4 bg-pink900">
     <Paragraph className={'flex text-left mb-4 text-white'}>
          <SlideUpText delay={0.04}  center={false}  preLoaderOut={preLoaderOut} gap='8px' text={"ZW Vehicle Group — engineered semi-trailers & trucks built to carry more, last longer, and arrive on time."}/>

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
     <ArrowRightToLine className="w-5 h-5 p text-white" />
     </span>
     </CustomBtn>
     {/* button 002 */}
 <div onClick={playVideo} className="cursor-pointer font-body ml-2.5 flex items-center border border-brand-background bg-transparent whitespace-nowrap">
  <span className="inline-fle p-4 lg:block hidden text-white">Play Video</span>
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

<AnimatePresence mode='wait'>
  {play &&
   <motion.div  variants={playVid} initial='initial' animate={play?'enter':'exit'} exit='exit' className='w-full h-full fixed inset-0 bg-blue-500/65 z-header'>

 <video
            
            ref={videoRef}
            loop
            muted={isMute}
            playsInline
            className=" blur-x z-[5] absolute inset-0 top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2  w-[100%] h-[100vh] object-cover"
          >
            <source src="https://img.waimaoniu.net/2044/202501071514140698.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div initial={{scale:0}} animate={{scale:1,transition:{delay:1.6,duration:0.6,ease}}}  exit={{scale:0,transition:{delay:0.1,duration:0.6,ease}}}  onClick={()=>{setPlay(!play)}} className=' z-10 absolute cursor-pointer top-5 right-5 flex items-center justify-center h-[4em] w-[4em] rounded-full bg-brand-background text-white'>
            <X/>

          </motion.div>
            <motion.div onClick={()=>setIsMute(!isMute)} initial={{scale:0}} animate={{scale:1,transition:{delay:1.6,duration:0.6,ease}}}  exit={{scale:0,transition:{delay:0.1,duration:0.6,ease}}}  className=' z-10 absolute cursor-pointer bottom-5 left-5 flex items-center justify-center h-[4em] w-[4em] rounded-full bg-brand-background text-white'>
           {isMute?<VolumeOff/>:<Volume2Icon />}

          </motion.div>
</motion.div> }
 
</AnimatePresence>
    </div>
  )
}

export default Section1