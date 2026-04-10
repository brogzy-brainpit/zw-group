import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Magnetic from "@/common/Magnetic";
import Google from '../../public/images/google.png'
import Image from "next/image";



const reviews = [
{
name: "Joshua Mendel",
text: "Had an amazing experience with Gonzalo. Great attention to detail and fair pricing. I left my car while golfing and it was perfectly detailed and kept in the shade.",
rating: 5
},
{
name: "G Qubbe",
text: "Excellent work, truly a luxury detail. Very versatile on any type of vehicle, reliable and with good pricing. Highly recommended.",
rating: 5
},
{
name: "Virginia Ansaldi",
text: "Gonzalo and his crew were easy to schedule with and very efficient. They brought everything needed and transformed my car completely.",
rating: 5
},
{
name: "MMCD",
text: "We’ve hired Gonzalo multiple times and he always delivers amazing results. Whether paint correction or detailing, everything comes out perfect.",
rating: 5
},
{
name: "Ivana Salas",
text: "Super reliable and professional service. Quick appointment, great advice, and excellent quality products. My vehicle was spotless inside and out.",
rating: 5
},
{
name: "Christopher Gonzalez",
text: "Amazing job detailing my car. Spotless.",
rating: 5
},
{
name: "Betiana Viqueira",
text: "Very professional, respectful, and always on time. Great service.",
rating: 5
},
{
name: "Claudia Rodriguez",
text: "Reasonable price and very convenient. Leaving your car while you work and returning to it clean is a huge advantage.",
rating: 4
},
{
name: "Malen",
text: "Exceptional experience. Fast, professional service with great attention to detail. Friendly team and highly recommended.",
rating: 5
},
{
name: "Sofia Salomon",
text: "The car looks amazing. Highly recommended.",
rating: 5
}
];

const Review = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // for slide direction
  const review = reviews[index];

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 40 : -40,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -40 : 40,
      scale: 0.95,
    }),
  };

  return (
    <div id="testimonials" className="px-4 text-center max-w-xl mx-auto overflow-hidden  py-12">
      <h2 
      className="text-heading1 capitalize font-bold mb-4 font-custom leading-[1] text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out">
        Genuine reviews
        </h2>
      <p className="text-sm text-gray-500 mb-2 font-custom-condensed">
        {index + 1} / {reviews.length}
      </p>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
        className="overflow-hidden"
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <p className="text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out text-xl italic mb-4 font-custom-condensed"> &quot; {review.text}&quot;</p>

          <div className="flex justify-center mb-2">
            {Array(review.rating)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="text-brand-background  transition-all duration-500 ease-in-out " />
              ))}
          </div>

          <p className="font-semibold text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out font-body text-para">{review.name}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 my-6">
       
       <Magnetic>
         <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-brand-background text-white flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>
       </Magnetic>
        
       <Magnetic>
         <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-brand-background text-white flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
       </Magnetic>
      </div>

      <a
        href="#"
        className="text-brand-text dark:text-brand-text-dark ease-in-out inline-flex items-center gap-2 border border-brand-background transition-all duration-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100"
      >
        <Image
        width={32}
        height={32}
          src={Google.src}
          loading="lazy"
          alt="real estate Google reviews"
          className="w-8 h-8"
        />
        All Google Reviews
      </a>
    </div>
  );
};

export default Review;
