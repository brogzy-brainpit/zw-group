import SlideUpText from '@/effects/SlideUpText'
import React, { useEffect, useRef } from 'react'
import ScaleUpContent from '@/effects/ScaleUpContent'
import FadeInText from '@/effects/FadeInText'
import { motion, useInView} from 'framer-motion'
import RubberSection from './RubberSection'
import SnapCarousel from './embla/EmblaCarousel';
import StaggerText from '@/effects/StaggerText'
import { Cross, Plus } from 'lucide-react'
import Image from 'next/image'
import SlideUpElement from '@/effects/SlideUpElement'
import EmblaCarousel from './embla/EmblaCarousel'
import Section from '@/layout/Section'
import GridColumn from '@/layout/GridColumn'
import Heading2 from '@/typography/Heading2'
import Paragraph from '@/typography/Paragraph'
import CustomBtn from './CustomButton'
import Heading1 from '@/typography/Heading1'
import Display from '@/typography/Display'


function Section3() {
   const ref = useRef(null);
  // const inView = useInView(ref, { amount:0.7});
  // const inView = useInView(ref);

const slides =[
 
 {text:' Bulk Cement Trailer',reverse:false,
      url:'#',img:'https://img.waimaoniu.net/2044/2044-202510301558219244.jpg?x-oss-process=image/format,webp',y:-70,desc:"The bulk cement trailer is suitable for the transportation and air pressure unloading of dry materials such as fly ash, cement, lime powder and ore powder with a particle diameter of not more than 0.1mm. When the discharge height reaches 15m, the horizontal conveying distance can reach 5m. "
    }, {text:'hot sale tri axle semi fuel tanker trailer',reverse:true,
      url:'#',img:'https://img.waimaoniu.net/2044/2044-202309071423402448.jpg?x-oss-process=image/format,webp',y:-120,desc:"ZW Group fuel tanker trailer can be designed in any capacities: 30 cubics, 40 cubics, 50 cubics, etc. Our fuel tanker trailer use different materials: carbon steel, stainless steel, aluminium alloy."
    }, {text:'safety regulations for oil tank semi trailers',reverse:false,
      url:'#',img:'https://img.waimaoniu.net/2044/2044-202010161830203602.jpg?x-oss-process=image/format,webp',y:-170,desc:"1.The oil tank semi-trailer should have a reliable grounding device and a protective device that forms a static conductive path between the oil tank semi-trailer and the liquid equipment."
    }
  ]
  return (
    <div ref={ref} className='relative bg-brand-background text-white '>
      <Section>
        <GridColumn>
          {/* col1 */}
      <div className='col-span-full lg:sticky lg:top-5  lg:mb-giant lg:col-span-4 bgred-400'>
        <Heading2  className="font-bold uppercase font-custom text-neutral-200">
            our <br/> products
        </Heading2>
    </div> 
     {/* col2 */}
    <div className='col-span-full  lg:col-start-5 lg:col-span8 lg:mb-giant bgpurple-600'>
    <div className='grid grid-cols-8 gap-[1.25rem] lg:gap-[2.5rem] bg-purple200 '>
    <div className=' col-span-5 lg:col-span-4'>
<Paragraph className={'mb-para text-neutral-200'}>
 No matter where you are located, zw-trailer can handle all of your trucks needs.
</Paragraph>


    </div>
     <div className='col-span-full lg:col-span-4 col-start-4'>
        
    <Heading2 className="!mt-0 font-custom text-neutral-200">
    <SlideUpElement once={false} margin='-100px' gap='6px' >
    {'We don’t just make vehicles — we build confidence. With advanced engineering, durable materials, and global support, ZW stands as a trusted name in heavy-duty transport solutions.'.split(' ').map((word)=>{
      return (
    <span className=''>{word}</span>
      )
    })}
  </SlideUpElement>
    </Heading2>


    </div>


    </div>
      </div>


   {/* col3 */}
 <div className='lg:col-span-4 col-span-full lg:row-start-2 lg:col-start-1 bgred-400'>
      <div className='lg:sticky lg:top-1/2'>
      <ScaleUpContent once={true}>
    <CustomBtn className="col-span-full lg:col-span-4 font-body flex-1 lg:flex-none  flex items-center border border-[#000000] bg-[#000000] whitespace-nowrap">
       <span className="p-4 hidden lg:block">learn more about us</span>
  <span className="inline-fle p-4 block lg:hidden">learn more</span>
  <span className="inline-flex p-4">
  <Plus className="w-5 h-5 p text-white" />
  </span>
    </CustomBtn>

      </ScaleUpContent>
      </div>

    </div>
      
      {/* col4 */}
     <div className='mt-para lg:mt-0 col-span-full border-t border-neutral-200  lg:col-start-5 grid grid-cols-8
      gap-[1.25rem] lg:gap-[2.5rem] bg-purple200  bg-purple600 mb-64'>

    <div className='col-span-full lg:col-span-4'>
<Heading2 className=' text-neutral-200'>
<SlideUpElement margin='-100px' gap='6px' >
     {'Shizhong district, Jinan City, Shandong Province ID#'.split(' ').map((word)=>{
      return (
    <span className=''>{word}</span>
      )
    })}
  </SlideUpElement>
</Heading2>

    </div>
     <div className='col-span-full lg:col-span-4 col-start-4'>
  <Display className={'break-all text-neutral-200'}>
 <FadeInText className = 'gap-[0px]' text={'I D R 0 0 0 2 0 5 4 7 6'}/>  
  </Display>

    </div>
     <div className='bg-blue600 col-span-full'>
<EmblaCarousel>
  {slides.map(({img,text,url,y,desc},index) => (
              <div className="embla__slide" key={index}>
                <div className="rounded-md h-full overflow-hidden">
                  <div className="embla__parallax__layer relative w-full h-full flex justify-center">
               
                <ImgSection img={img} title={text} desc={desc}/>
                  </div>
                </div>
              </div>
            ))}
</EmblaCarousel>

    </div>
    <div className=' lg:block hidden bg-blue600 col-span-full'>

 {slides.map(({img,text,url,y,desc,reverse},index) => (
              
                <ImgSection reverse={reverse} img={img} title={text} desc={desc}/>
                
            ))}
{/* <ImgSection img={'/images/service01.png'} title='environmentally friendly'/>
<ImgSection reverse img={'/images/service02.png'} title='processing & testing'/>
<ImgSection img={'/images/service03.png'} title='treating & recycling'/> */}
    </div>



    </div>

        </GridColumn>
      </Section>


 </div>
  )
}

function ImgSection({reverse,img,desc,title}){
const variants={
  initial:{
    scaleY:1,y:20,opacity:0
  },
  enter:{scaleY:1,y:0,opacity:1},
  exit:{scaleY:1,y:20,opacity:0}
}
const imgInview = useRef(null)
const inview = useInView(imgInview,{once:true})
  return (
    <div className='bg-green700'>
      <div className={`${ reverse?'lg:flex-row-reverse':''} lg:flex-row flex-col flex w-full justify-between bg-slate400`}>
       <div   className='relative lg:w-[50%] w-full overflow-hidden '>
        <motion.img transition={{duration:0.8,delay:0.1,ease:"easeInOut"}} animate={inview?'enter':''} ref={imgInview} variants={variants} initial='initial'exit='exit' className=' lg:h-[500px] h-[300px] w-full object-cover' src={img} alt='img'/>  
       </div>
     <div className=' my-4 lg:my-0 relative lg:w-[50%] flex justify-between  flex-col lg:px-4 lg:pb-4 bgred-600'>
      
        <Heading2  className={` ${reverse?'bg-purple600 lg:text-right pt-2':'text-left'} capitalize text-neutral-200 font-custom`}>
     {title}
        </Heading2>
        <Paragraph  className='font-body leading-tight '>
       {desc}
        </Paragraph>

     </div>
      </div>
    </div>
  )
}
export default Section3