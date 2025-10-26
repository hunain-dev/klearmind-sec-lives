import React from 'react'
import Button from './Button'
import  { useState } from "react";
import useScrollAnimation from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: "What conditions does ketamine therapy treat?",
    answer: "Ketamine therapy is used to treat depression, anxiety, PTSD, and chronic pain."
  },
  {
    question: "How does ketamine work?",
    answer: "Ketamine works by targeting NMDA receptors in the brain, creating new neural connections."
  },
  {
    question: "Is ketamine therapy safe?",
    answer: "Yes, when administered in a controlled medical environment, it is considered safe."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions depends on individual conditions, usually 6-8 sessions."
  },
  {
    question: "Will I be conscious during the infusion?",
    answer: "Yes, most patients remain conscious but feel deeply relaxed."
  },
  {
    question: "Can I drive after treatment?",
    answer: "No, patients are advised not to drive until the effects wear off."
  }
];
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const buttonsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const faqsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className=' w-full grid lg:grid-cols-2 grid-cols-1  md:grid-cols-2 lg:px-40 px-0 lg:mt-22 lg:pb-0 md:pb-22 pb-40 '>
        <div className='h-full p-3'>
        <div className="flex items-start flex-col gap-2 whitespace-nowrap  ">
            <div ref={subtitleRef} className='flex items-center gap-2 justify-center'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] md:text-[3vw] text-gray-600 tracking-wide">
              FAQS
            </span>
            </div>
           
            <h2 ref={titleRef} className='figee lg:text-4xl md:text-3xl font-[400] text-[#361911]'>What our customers <br /> want to know</h2>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row lg:gap-2 gap-3 mt-1">
            <Button btn="book an appointment" to="https://calendly.com/klearmindclinics"  fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'
              padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3"  bgcolor="#FD8124" textcolor="white"  border="border-none"/>


            <Button btn="Learn more" to="/Blog"     padding="lg:py-3 py-3 lg:px-6 px-11 md:px-8 md:py-2   " 
              fontSize='md:text-[1.8vw] lg:text-[1vw] text-[3.2vw]' hoverEffect={false} textcolor="black" border="border border-black"/>

            </div>
          </div>

        </div>
        <div ref={faqsRef} className='h-full '>
           <div className="lg:py-12 py-9 lg:px-1 px-4">
      <div className="lg:space-y-7 space-y-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-400 lg:pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="figee flex justify-between items-center">
              <h3 className="lg:text-[1.6vw] text-[4.4vw] md:text-[2.1vw] text-[#222221FF] ">{faq.question}</h3>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 ">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      
    </div>
  )
}

export default Faqs
