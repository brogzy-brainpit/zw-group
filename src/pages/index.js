import {AnimatePresence} from 'framer-motion';
import SmoothScroll from "@/providers/Lenis";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";

import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';


function PageContent() {
   const [isLoading,setIsLoading]=useState(true)
   const [preLoaderOut,setPreLoaderOut]=useState(false)

  useEffect(()=>{

   const timer=  setTimeout(() => {
    setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    }, 1400);
    return ()=>clearTimeout(timer)
  },[])
  return (
    <SmoothScroll>

    <AnimatePresence initial={false} mode="wait" onExitComplete={()=>{setPreLoaderOut(true)}}>
    {isLoading &&  <Preloader key={'preloader'}/>}
     {/* <Preloader key={'preloader'}/> */}
    </AnimatePresence>
      <Header preLoaderOut={preLoaderOut}/>
      <Section1 preLoaderOut={preLoaderOut}/>
      <Section2/>
      <Section3/>
      <Section4/>
    </SmoothScroll>
           
    
  );
}

export default function Home() {
  return (
    <main>
        <PageContent />
    </main>
  );
}
