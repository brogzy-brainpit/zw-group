import GridColumn from '@/layout/GridColumn'
import Section from '@/layout/Section'
import Heading2 from '@/typography/Heading2'
import Paragraph from '@/typography/Paragraph'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

function FAQS() {
  return (
    <div className='bg-brand-background'>
      <Section>
        <GridColumn className='w-full'>
          <div className='col-span-full lgcol-span-7'>
            <Heading2 className='capitalize text-white text-left mb-6 font-custom'>
              Frequently Asked Questions
            </Heading2>
            <Questions />
            <div className='my-10'>
              <Heading2 className='capitalize text-white text-left mb-2 font-custom'>

                still have questions?
              </Heading2>
              <Paragraph className={'text-white font-body text-para'}>
                Our team is ready to provide detailed information about our services
              </Paragraph>
               <div className="font-body my-2.5 flex max-w-fit items-center border border-black bg-black whitespace-nowrap">
 <a href='/' className=' text-white flex w-full justify-between items-center transition-all duration-300 ease-out'>
  <span className="p-4 hidden lg:block capitalize">contact our team</span>
  <span className="inline-fle p-4 block lg:hidden capitalize">contact us</span>
  <span className="inline-flex p-4">
  <Plus className="w-5 h-5 p text-white" />
  </span>
 </a>
    </div>
            </div>
          </div>
        </GridColumn>
      </Section>
    </div>
  )
}

const Questions = () => {
  const QA = [
    { q: 'How much does paint protection film cost?',
      a: 'The cost of paint protection film varies based on the size of the vehicle and the areas covered. On average, prices range from $500 to $2000 for a full front-end application.'
    },
     { q: 'How long does PPF installation take?',
      a: 'PPF installation typically takes 1-2 days depending on the size and complexity of the vehicle.'
    },
     { q: 'How long does paint protection film last?',
      a: 'With proper care, high-quality paint protection film can last 5-10 years before needing replacement.'
    },
    { q: 'Can I wash my car after PPF installation?',
      a: 'You can wash your car after PPF installation, but it’s recommended to wait at least 48 hours to allow the film to fully adhere to the paint. After that, you can wash it as usual, but avoid high-pressure washers directly on the edges of the film for the first few weeks.'
    },
     { q: 'Will PPF change how my car looks?',
      a: 'No, PPF is designed to be virtually invisible, so it won’t change the appearance of your vehicle.'
    },
     { q: 'What is your warranty?',
      a: 'We offer a 10-year warranty on our paint protection film against yellowing, cracking, and peeling under normal conditions.'
    },
    { q: 'can you handle luxury vehicles?',
      a: 'Yes, we have experience working with a wide range of vehicles, including luxury and exotic cars. We use high-quality materials and techniques to ensure the best results for all our clients.'
    },
      
      
      
      ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='divide-y divide-white'>
      {QA.map(({ q, a }, i) => (
        <div key={i} className='py-4'>
          {/* Question Row */}
          <div
            className='flex justify-between items-center cursor-pointer select-none'
            onClick={() => toggle(i)}
          >
            <Paragraph className='font-custom text-white'>{q}</Paragraph>
            {openIndex === i ? (
              <Minus className='w-5 h-5 text-white' />
            ) : (
              <Plus className='w-5 h-5 text-white' />
            )}
          </div>

          {/* Answer */}
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='overflow-hidden'
              >
                <Paragraph className='font-body mt-3 text-white opacity-80 w-[80%]'>
                  {a}
                </Paragraph>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default FAQS
