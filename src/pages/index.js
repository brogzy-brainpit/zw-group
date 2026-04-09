import {AnimatePresence} from 'framer-motion';
import SmoothScroll from "@/providers/Lenis";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";

import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Section5 from '@/components/Section5';
import FAQS from '@/components/FAQS';
import Newsletter from '@/components/Newsletter';
import NewsletterModal from '@/components/NewsletterModal';
import HorizontalScrollPanel from '@/components/HorizontalScrollPanel';


function PageContent() {
  //  const [isLoading,setIsLoading]=useState(true)
   const [preLoaderOut,setPreLoaderOut]=useState(false)

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
    <SmoothScroll>

    {/* <AnimatePresence initial={false} mode="wait" onExitComplete={()=>{setPreLoaderOut(true)}}>
    {isLoading &&  <Preloader key={'preloader'}/>}
    </AnimatePresence> */}

    {/* <NewsletterModal/> */}
      <Section1 preLoaderOut={preLoaderOut}/>
      <Section2/>
      <HorizontalScrollPanel/>
      <Section5/>
      <Section3/>
      <Section4/>
      <FAQS/>
      <Newsletter/>
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
