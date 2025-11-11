import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from "../../public/images/logo.svg"
import Image from 'next/image.js'
import Button from './Button'
import {AnimatePresence, motion} from 'framer-motion'
import { Umbrella } from 'lucide-react'
import Logo from './Logo'

function Header({preLoaderOut}) {
    const [isScrolled, setIsScrolled]=useState(false)
    const [isScrollingUp, setIsScrollingUp]=useState(false)
    const [lastScrollY, setLastScrollY]=useState(0)
  const [isOpen,setIsOpen]= useState(false)

    
  const Links = [
    { title: "Home", url: "about" },
    { title: "About", url: "about" },
    { title: "Services", url: "about" },
    { title: "Blog", url: "about" },
    { title: "Faq", url: "about" },
  ];

    useEffect(()=>{

          const root= document.documentElement
          root.style.setProperty("--anouncement-height", isScrolled?"0px":"40px");
          root.style.setProperty("--header-height", isScrolled?"64px":"80px");
          const handleScroll=()=>{
           const currentScrollY= window.scrollY;
           setIsScrollingUp(currentScrollY<lastScrollY);
           setLastScrollY(currentScrollY)
            setIsScrolled(currentScrollY>400)
          }
          window.addEventListener("scroll",handleScroll,{passive:true,})
          return ()=> window.removeEventListener("scroll",handleScroll )
    
    },[lastScrollY,isScrolled])
    const showNav={
      initial:{
        y:'-100%'
      },
       enter:{
        y:'0%',
      transition:{duration:0.4, ease:[0.76, 0, 0.24, 1]},

      },
       exit:{
        y:'-100%',
      transition:{duration:0.4, ease:[0.76, 0, 0.24, 1]},

      },
    }
  return (
    <>
      <AnimatePresence mode='wait'>
    {isOpen && 
    <motion.div initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:isOpen?1:0}} className='z-[2] fixed top-0 right-0 w-full h-svh backdrop-blur-lg bgred-600'>
    <div className='px-5 pt-[12em] w-[80%] h-svh bgred-200'>
   <div className='flex flex-col gap-2 mix-blend-difference '>
    {Links.map(({ title, url }) => (
              <Link scroll={false}
                key={title}
                className="mix-blend-difference cursor-pointer text-heading2 font-custom text-brand-text text-links capitalize"
                href={`/${url}`}
              >
            {title}
              </Link>

            ))}
   </div>
  </div>
</motion.div>
}
      </AnimatePresence>
    <div className={` --header-height fixed w-full z-40 transition-transform duration-500 ease-in-out ${!isScrollingUp && isScrolled?'-translate-y-full':'translate-y-0'}`}>
   
  <motion.header variants={showNav} initial='initial' exit='exit' animate={preLoaderOut?'enter':'initial'} className={` transition-all duration-500  ease-in-out border-b ${isScrolled?"backdrop-blur-lg shadow-lg border-transparent max-h-[60px":"bg-transparent border-transparent"}`}>
<div className='container mx-auto w-full'>
<div className={`block w-full text-center relative transition-all duration-300 ease-in-out px-4 ${isScrolled?"py-4":"py-[2.2em] md:py-[2em]"}`}>
<div className='flex justify-between items-center relative w-full'>
 {/* <div className='w-[10em'>
 </div> */}
  <Logo preLoaderOut={preLoaderOut} width='100'/>
<ul className= " hidden md:flex md:flex-row md:gap-6 mx-aut">
            {Links.map(({ title, url }) => (
              <Link scroll={false}
                key={title}
                className="cursor-pointer font-custom text-white text-links capitalize"
                href={`/${url}`}
              >
            {title}
              </Link>

            ))}
          </ul>

<div className='f gap-2 items-center justify-center lg:hidden block'>
  {/* <Button link='#book-a-call' label={"book a call"} className='hidden lg:block'/> */}
<Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
</div>
</div>

</div>
</div>
  </motion.header>
    </div>
  </>
  )
}


const Menu=({isOpen,setIsOpen})=>{
  return (
<div onClick={()=>{setIsOpen(!isOpen)}} className='lg:hidden cursor-pointer bg-brand-background p- rounded-full h-[4em] w-[4em] flex justify-center items-center'>
  <div className={`flex pointer-events-none justify-center items-center flex-col burger w-full ${isOpen?'activeBurger':''}`}>

  </div>
 
      </div>
  )
}

export default Header