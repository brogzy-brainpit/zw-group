import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import Heading2 from '@/typography/Heading2'
import Paragraph from '@/typography/Paragraph'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
   async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      console.log(data)
      if (res.ok) {
        setMessage("✅ You’re subscribed!");
        setEmail("");
      } else {
        setMessage(`⚠️ ${data.error}`);
      }
    } catch (err) {
      setMessage("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='bg-brand-backgroun'>
      <Section>
          <div className='w-[100%] lg:w-[70%] mx-auto'>
            
            <div className='my-10 flex justify-center gap-4 items-center flex-col'>
              <Heading2 className='capitalize text-black text-left mb-2 font-custom'>
              stay updated with our innovations
              </Heading2>
              <Paragraph className={'text-black font-body text-para text-center'}>
                receive the latest insights on truck trailer engineering and transportation solutions.
              </Paragraph>
              <form className='flex gap-4 bgslate-600 w-[95%] lg:w-[80%] flex-wrap'>
                <input type='email'
                value={email}
            onChange={(e) => setEmail(e.target.value)}
                className='p-4 border border-brand-background my2.5 flex-1' placeholder='enter email '/>
               <div onClick={handleSubmit} className="font-body my2.5 flex max-w-fit items-center border border-brand-background bg-brand-background whitespace-nowrap">
 {/* <a href='/' className=' text-black flex w-full justify-between items-center transition-all duration-300 ease-out'> */}
  <span className="p-4 block capitalize"> {loading ? "Subscribing..." : "Subscribe"}</span>
  {/* <span className="inline-fle p-4 block lg:hidden capitalize">contact us</span> */}
  {/* <span className="inline-flex p-4">
  <Plus className="w-5 h-5 p text-black" />
  </span> */}
    </div>
              </form>
                {message &&               <Paragraph>
{message}</Paragraph>}
              
            </div>
          </div>
      </Section>
    </div>
  )
}


export default Newsletter
