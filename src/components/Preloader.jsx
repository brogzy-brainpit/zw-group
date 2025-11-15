import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Palmtree, Plane, PlaneIcon, PlaneLanding, PlaneLandingIcon, Umbrella } from 'lucide-react'
import Link from 'next/link'

function Preloader() {
  const preAnimate={
    initial:{
      opacity:1
    }, 
    enter:{
      opacity:1
    }, 
    exit:{
      opacity:0
    }
  }
 
// const AnimateSvg = {
//   initial: {
//     pathLength: 1 // ⬅️ start invisible
//   },
//   enter: {
//     pathLength: 1, // ⬅️ draw forward
//     transition: { duration: 2, ease: 'easeInOut' }
//   },
//   exit: (i) => ({
//     pathLength: 0, // ⬅️ reverse “cleaning” direction (end → start)
//     transition: { duration: 2, ease: 'easeInOut' }
//   })
// }


const AnimateSvg = {
  initial: {
    pathLength: 1 ,// ⬅️ start invisible
    // pathOffset: 1
  },
  enter: {
    pathLength: 1, // ⬅️ draw forward
    // pathOffset: 1 ,
    transition: { duration: 2, ease: 'easeInOut' }
  },
  exit: (i) => ({
    pathLength: 0, // ⬅️ reverse “cleaning” direction (end → start)
    // pathOffset: 0 ,
    transition: { duration: 2, ease: 'easeInOut',delay:0.8 }
    
  })
}
  return (
    <motion.div  className='z-preloader fixed top-0 left-0 bg-slate600 h-screen w-full'>
      <div className="relative w-full h-full">
        <div className='mx-auto absolute inset-0 z-[100] bgslate-500 flex items-center justify-center w-[80%] h-full'>
          <Logo/>
          </div>
<div className='absolute w-full h-full inset-0 bg-red50 z-50'>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 3222 3114" fill="none" preserveAspectRatio="none" class="transition-scribble text-brand-background">
<motion.path d="M299.654 453.865C505.574 319.225 711.494 184.585 836.054 109.945C960.614 35.3048 997.574 24.7448 944.014 110.385C890.454 196.025 745.254 378.185 571.454 634.385C397.654 890.585 199.654 1215.3 110.854 1382.58C22.0544 1549.86 48.4544 1549.86 77.8944 1540.62C107.334 1531.38 139.014 1512.9 367.854 1319.9C596.694 1126.9 1021.73 759.945 1255.21 555.065C1488.69 350.185 1517.73 318.505 1527.41 306.145C1537.09 293.785 1526.53 301.705 1346.85 618.625C1167.17 935.545 818.694 1561.22 635.214 1896.74C451.734 2232.26 443.814 2258.66 447.654 2268.3C451.494 2277.94 467.334 2270.02 511.134 2236.9C554.934 2203.78 626.214 2145.7 966.534 1817.46C1306.85 1489.22 1914.05 892.585 2263.81 557.505C2613.57 222.425 2687.49 166.985 2741.41 129.185C2795.33 91.3848 2827.01 72.9048 2843.33 67.3448C2859.65 61.7848 2859.65 69.7048 2849.09 96.2248C2838.53 122.745 2817.41 167.625 2584.77 544.505C2352.13 921.385 1370.37 2165.43 1139.25 2537.83C908.134 2910.23 902.854 2926.07 902.774 2939.51C902.694 2952.95 907.974 2963.51 1255.21 2613.87C1602.45 2264.23 2829.73 1017.54 2903.53 1071.46C2977.33 1125.38 2176.12 2817.04 2128 3037C2079.88 3256.96 2911.24 2018.56 3172 1793"
 stroke="currentColor" 
 stroke-width="37%" 
 stroke-linecap="round" 
 variants={AnimateSvg} 
 transition={{duration:2,ease:'easeIn'}} 
  animate={'enter'}  initial='initial' exit='exit'
 
 ></motion.path></svg>

</div>
      </div>
      
      </motion.div>
  )
}





function Logo({preLoaderOut=null,width='100%'}) {
  const svgRef=useRef(null)
  const inView= useInView(svgRef,{once:false})
    const svgSlide={
    initial:{}
,
     enter:{
       // clipPath:'inset(0 0 0 0)',
      transition: {
        duration:1,
        delayChildren:0.2, // 👈 wait before starting
        staggerDelay:1,  
        staggerChildren:0.09,  
            // 👈 delay between items
      },
    },
    exit:{
       transition: {
        duration:1,
        delayChildren:0.2, // 👈 wait before starting
        staggerDelay:1,  
        staggerChildren:0.09,  
            // 👈 delay between items
      },
    },
  }
  const pathSlide={
    initial:(i)=>({
      y:100,
      opacity:0,
      clipPath: i==1?'inset(0 0 100% 0)':'inset(100% 0 0 0)',

    }),
     enter:(i)=>({
      y:0,
      opacity:1,
      clipPath:'inset(0 0 0 0)',
      transition:{ type: "spring",
        stiffness:120,
        damping:17,
        ease:[0.76, 0, 0.24, 1]
      },
    }),
    exit:(i)=>({
        y:-100,
      opacity:0,
      clipPath: i==1?'inset(0 0 100% 0)':'inset(100% 0 0 0)',
        transition:{ type: "spring",
        stiffness:120,
        damping:10,
        mass:0.1,
        ease:[0.76, 0, 0.24, 1]
      },
    }),
  }
  return (
     <div>
       <motion.svg ref={svgRef} variants={svgSlide} initial='initial' exit='exit' animate={inView?'enter':'initial'} width={width} viewBox="0 0 651 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path variants={pathSlide}  d="M4.47035e-08 73.2L43.44 21.6H4.47035e-08V2.40002H69.84V21.6L26.28 73.2H69.84V92.4H4.47035e-08V73.2Z" fill={'#fff'}/>
<motion.path variants={pathSlide}  d="M120.34 92.4H101.14L75.8203 2.40002H95.0203L110.74 58.44L116.98 36.48L107.38 2.40002H126.58L142.3 58.32L158.14 2.40002H177.34L151.9 92.4H132.7L126.58 70.56L120.34 92.4ZM185.198 64.92V55.56H214.238V64.92H185.198Z" fill={'#fff'}/>
<motion.path variants={pathSlide} fill={'#fff'}  d="M299.11 13.08L285.55 27.48C280.63 21.84 273.67 19.32 266.83 19.32C253.99 19.32 241.63 27.36 241.63 47.4C241.63 85.44 280.27 85.56 274.03 57L269.95 38.4H289.63L301.39 92.4H281.83L280.87 87.84C262.75 104.16 222.07 91.92 222.07 47.4C222.07 18.96 239.83 1.95503e-05 266.71 1.95503e-05C280.15 1.95503e-05 291.31 4.80002 299.11 13.08Z"/>
<motion.path variants={pathSlide} fill={'#fff'}  d="M369.903 27.36L354.303 41.28C369.543 41.64 377.103 50.16 377.103 66.84V92.4H357.903V69.72C357.903 65.28 355.383 61.08 350.703 61.08H334.743V33.72L348.303 21.6H328.983V92.4H307.383V2.40002H369.903V27.36Z"/>
<motion.path variants={pathSlide} fill={'#fff'}  d="M427.846 75.48C439.966 75.48 452.926 67.44 452.926 47.4C452.926 27.36 439.966 19.32 427.846 19.32C415.006 19.32 402.646 27.36 402.646 47.4C402.646 67.44 415.006 75.48 427.846 75.48ZM383.086 47.4C383.086 18.96 400.846 1.95503e-05 427.726 1.95503e-05C454.606 1.95503e-05 472.366 18.96 472.366 47.4C472.366 75.84 454.606 94.8 427.726 94.8C400.846 94.8 383.086 75.84 383.086 47.4Z" />
<motion.path variants={pathSlide} fill={'#fff'}  d="M478.359 59.88V2.40002H497.559V59.88C497.559 70.32 502.839 75.6 513.279 75.6C523.719 75.6 528.879 70.32 528.879 59.88V2.40002H548.079V59.88C548.079 83.28 536.679 94.8 513.279 94.8C489.879 94.8 478.359 83.28 478.359 59.88Z"/>
<motion.path variants={pathSlide} fill={'#fff'}  d="M554.063 2.40002H596.063C616.583 2.40002 623.783 11.4 623.783 30.12C623.783 48.48 616.583 57.6 596.063 57.6H575.663V92.4H554.063V2.40002ZM575.663 38.52H594.983C599.663 38.52 602.183 34.32 602.183 29.88C602.183 25.2 599.663 21.6 594.983 21.6H575.663V38.52Z"/>
{/* <motion.path variants={pathSlide} fill={'#fff'}  d="M635.406 85.92C635.406 82.96 636.126 80.88 637.566 79.68C639.006 78.48 640.726 77.88 642.726 77.88C644.806 77.88 646.566 78.48 648.006 79.68C649.526 80.88 650.286 82.96 650.286 85.92C650.286 88.8 649.526 90.88 648.006 92.16C646.566 93.44 644.806 94.08 642.726 94.08C640.726 94.08 639.006 93.44 637.566 92.16C636.126 90.88 635.406 88.8 635.406 85.92Z" /> */}
</motion.svg>
     </div>

  )
}

export default Preloader



































