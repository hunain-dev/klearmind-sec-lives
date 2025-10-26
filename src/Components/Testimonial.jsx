import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import useScrollAnimation from '../hooks/useScrollAnimation'

const Testimonial = ({img}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const contentRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const imageRef = useScrollAnimation({ animationType: 'fadeInLeft', delay: 300, duration: 0.8 })
  const controlsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })

  const testimonials = [
    {
      name: "Daniel",
      location: "Ketamine Therapy, Sacramento",
      heading: "Ketamine has helped me immensely in my healing.",
      text: "I've been dealing with PTSD, anxiety, and depression for over 25 years. I've been on every kind of medication. Ketamine has helped me immensely in my healing. I wish I would have had this 25 years ago."
    },
    {
      name: "Sarah",
      location: "Ketamine Therapy, Los Angeles",
      heading: "Finally, I feel like myself again. they move us to how feel",
      text: "After years of struggling with treatment-resistant depression, ketamine therapy has been a game-changer. The results were noticeable within just a few sessions. I finally feel like myself again."
    },
    {
      name: "Michael",
      location: "Ketamine Therapy, San Francisco",
      heading: "I can't recommend it enough. for what these thing amoung live",
      text: "The anxiety that controlled my life for decades is now manageable. Ketamine therapy helped me break free from the constant worry and panic attacks. I can't recommend it enough."
    }
  ];

  const handlePrevious = () => {
    setIsFlashing(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setTimeout(() => {
        setIsFlashing(false);
      }, 150);
    }, 150);
  };

  const handleNext = () => {
    setIsFlashing(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => {
        setIsFlashing(false);
      }, 150);
    }, 150);
  };
  return (
    <div className=' lg:w-[78%] w-full m-auto  lg:mt-15 md:mt-10'>
        <div className='h-full  m-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
            <div className='h-full py-5 lg:px-0 px-8  flex items-start justify-start flex-col gap-1'>
            <p ref={subtitleRef} className="figee text-sm text-gray-500 font-medium flex items-center gap-2">
            <div className='flex items-center gap-2 justify-center'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] text-[3vw] md:text-[1.8vw] text-gray-600 tracking-wide">
            Client Testimonials

            </span>
            </div>
          </p>
          <h3 ref={contentRef} className='fontspring lg:text-[2.6vw] lg:leading-9 text-3xl  md:text-[2.5vw] text-[#3A1D16] transition-all duration-500 ease-in-out'>
            {testimonials[currentTestimonial].heading}
          </h3>
         <div className='text-[#383736] figee lg:mt-28 mt-7   flex items-start justify-start flex-col gap-8 transition-all duration-500 ease-in-out'>
            <h4>{testimonials[currentTestimonial].text}</h4>
            <h5>{testimonials[currentTestimonial].name} <br />
            {testimonials[currentTestimonial].location}</h5>
         </div>
            </div>
            <div ref={imageRef} className='h-full   lg:px-26 px-5 md:px-15 '>
                <div className='h-full w-full relative overflow-hidden rounded-3xl'>
                    <div className={`absolute inset-0 bg-white transition-opacity duration-150 ${isFlashing ? 'opacity-100' : 'opacity-0'}`}></div>
                    <img 
                      src={img} 
                      className='h-full w-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105' 
                      alt=""
                      key={currentTestimonial}
                    />
                </div>
            </div>

        </div>
      <div ref={controlsRef} className=' w-full flex items-center justify-center'>
      <div className="flex gap-4 pt-4">
            <button 
              onClick={handlePrevious}
              className="h-10 w-10 rounded-full border border-[#3b2419] flex items-center justify-center text-[#3b2419] hover:bg-[#3b2419] hover:text-white transition">
            <FaLongArrowAltLeft />
            </button>
            <button 
              onClick={handleNext}
              className="h-10 w-10 rounded-full border border-[#3b2419] flex items-center justify-center text-[#3b2419] hover:bg-[#3b2419] hover:text-white transition">
            <FaLongArrowAltRight />
            </button>
          </div>
      </div>
    </div>
  )
}

export default Testimonial
