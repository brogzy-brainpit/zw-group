import SlideUpText from '@/effects/SlideUpText'
import React from 'react'
import CustomBtn from './CustomButton'
import { Dribbble, Facebook, FacebookIcon, Instagram, Linkedin } from 'lucide-react'
import SlideUpElement from '@/effects/SlideUpElement'
import Logo from './Logo'

function footer() {
  const texts=[
    {text:'aircraft maintainanc',
      url:'#',background:'pink'
    }, {text:' maintainance & tracking',
      url:'#',background:'#059669'
    }, {text:'aircraft & tracking',
      url:'#',background:'orange'
    }
  ]
  return (
    <div className='bg-brand-secondary w-full relative  flex gap-2 flex-col '>

      <section className=' relative mt-4 w-full h-full gap-6 container-section container mx-auto'>



 <div className="  p-4 grid grid-cols-1 md:grid-cols-3 gap-2  w-full mdw-[50%]">
  {/* Left side - stacked items */}
       {/* <div className={`w-full  items-start gap-2 flex flex-col`}> */}
            <div className={`w-full  -4 rounded-2xl items-end md:items-start justify-between flex gap-[4px] flex-col`}>
         
         <p  className=' text-white font-body  text-para  leading-para'>250 NE 25th St,</p>
         <p  className=' text-white font-body  text-para  leading-para'>Miami, FL 33137,</p>
         <p  className=' text-white font-body  text-para  leading-para'>United States</p>
          </div>
          
 

          <div className={`w-full  -4 rounded-2xl items-end md:items-center justify-between flex gap-[2px] flex-col  borde border-brand-accent`}>

         <p  className=' text-white circular font-bold text-para  leading-pa3a uppercase'> Let's talk</p>
         <p  className=' text-white font-body  text-para  leading-para'> email@domain.com</p>

          </div>
            <div className={`w-full items-end justify-between flex gap-[4px] flex-col`}>
         
         <p  className=' text-white circular font-bold  text-para  leading-p3ra uppercase'>Policies</p>
         <p  className=' text-white font-body  text-para  leading-para'>Privacy policy</p>
         <p  className=' text-white font-body  text-para  leading-para'>Terms and conditions
         </p>

          </div>
  
         
          
  </div>


<div className='relative overflow-hidden w-full'>
              <div className='relative bgpink-50  mx-auto translate-x-[2%] '>
                <Logo  />
             
              </div>

  <div className=" absolut bottom-0 bg-brand-secondary py-4 md:py-[50px] flex gap-2  w-full ">
  {/* Left side - stacked items */}
       <div className={`w-full  items-start gap-2 flex`}>
         
         <p  className=' text-white bg-brand-background rounded-full h-12 w-12 flex items-center justify-center font-body  text-para  leading-para uppercase'><Instagram className='w-6 h-6'/></p>
         <p  className=' text-white bg-brand-background rounded-full h-12 w-12 flex items-center justify-center font-body  text-para  leading-para uppercase'><FacebookIcon fill='#fff' className='w-6 h-6'/></p>
         <p  className=' text-white bg-brand-background rounded-full h-12 w-12 flex items-center justify-center font-body  text-para  leading-para uppercase'><Dribbble className='w-6 h-6'/></p>
       

          </div>
            <div className={`w-full items-center justify-end flex`}>
         
         <p  className=' text-white font-body  text-para  leading-para capitalize'>code by memet </p>

          </div>
  
         
          
  </div>
</div>
   




 
      
      </section>
      </div>
  )
}

export default footer