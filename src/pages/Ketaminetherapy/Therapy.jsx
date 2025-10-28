import React, { useState, useEffect } from 'react'
import Button from '../../Components/Button'
import fact from "../../assets/images/masks.png"
import Doctor from "../../assets/images/doctor.png"
import energy from "../../assets/images/energy.png"
import smile from "../../assets/images/Smile.png"
import compition from "../../assets/images/compition.png"
import useScrollAnimation from '../../hooks/useScrollAnimation'
const Therapy = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    
    // Animation refs
    const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
    const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
    const buttonRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.max(0, Math.min(scrollTop / docHeight, 1)); // 0 to 1
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const therapyobj = [
        {
            img:fact,
            text:"Initial introduction Call",
            paragh:"A brief 15-minute call to understand your needs and answer initial questions. You can easily schedule your convenience."
        },
        {
            img:Doctor,
            text:"Formal consultation",
            paragh:"A comprehensive 45-minute consultation with our medical team to assess your condition and determine if ketamine therapy is right for you."
        },
        {
            img:energy,
            text:"Schedule 1st Infusion",
            paragh:"You'll schedule your first session within 2–3 days of the consultation. Our team will guide you on preparation and what to expect."
        },
        {
            img:smile,
            text:"Initiate Infusion Series",
            paragh:"A series of 6 infusions over 2–3 weeks, tailored to your unique response and needs. Your comfort and progress are closely monitored throughout."
        },
        {
            img:compition,
            text:"Completion of Series",
            paragh:"After the series, we meet for a closing session to reflect and plan next steps. You'll leave with clarity, tools, and a personalized path forward."
        }
    ]
  return (
    <div className='w-ful lg:mt-32 mt-11 md:mt-30 grid grid-cols-1'>
        <div className='h-full flex items-center justify-center gap-2 flex-col'>
        <div ref={subtitleRef} className='flex items-center gap-2 justify-center '>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[1.7vh] text-[3vw] md:text-[1.3vw]  tracking-wide">
            Treatment Overview

            </span>
            </div>
            <h2 ref={titleRef} className='figee text-[#32140C] lg:text-3xl md:text-[3vw]  text-center text-[5vw] mt-1' >How does Ketamine Therapy work?
            </h2>
            <div ref={buttonRef} className='lg:mt-5 mt-4'>
            <Button  btn="Watch the explainer video"  padding="lg:py-3 py-3 lg:px-6 px-6 md:px-5 md:py-3   " 
              fontSize='md:text-[1vw] lg:text-[1vw] text-[3.2vw]' hoverEffect={false}/>

            </div>
        </div>
        <div className='h-full lg:px-39  '>
            <div className=' w-full'>
            <section className=" grid grid-cols-1 lg:py-6 ">
      <div className="relative">
      <div 
        className="absolute lg:left-[calc(11.1vw+27.1vw)] md:left-[calc(23.1vw+27.1vw)] left-[calc(3vw+1vw)] lg:top-64 top-21  w-[2px] lg:h-[79%] md:h-[86%] h-[97%] transition-all duration-200 ease-out"
        style={{
          background: `linear-gradient(to bottom, 
            rgb(251 146 60) ${scrollProgress * 100}%, 
            rgb(156 163 175) ${scrollProgress * 100}%
          )`
        }}
      ></div>

        
        {therapyobj.map((elem,index)=>{
            return(
                <div  key={index} className="relative lg:mb-0 mb-13 lg:mt-0 mt-8 lg:px-5 flex flex-col md:flex-row items-center gap-16">
                {/* Left Image */}
                <div className="w-full  lg:p-19 p-7 lg:w-1/2   md:w-1/2 md:p-12   flex justify-center">
                  <img
                    src={elem.img}
                    alt="Initial introduction"
                    className="rounded-4xl w-full h-auto object-cover "
                  />
                </div>
        
                {/* Right Content */}
                <div className="w-full md:w-1/2 relative">
                  {/* Circle Number positioned on the main line */}
                  <div className="absolute lg:left-[-4vw] md:left-[-5.7vw] left-[1.4vw] lg:top-5  -top-123  md:-top-1  flex flex-col items-center">
                    <div className="w-6 h-6 bg-[#FD8124] rounded-full flex items-center justify-center text-black figee text-sm font-bold z-10">
                      {index + 1}
                    </div>
                  </div>
        
                  <div className="lg:pl-10 lg:pt-0 -pt-20 lg:mt-0 -mt-17 lg:px-0 px-13">
                    <h3 className="figee lg:text-[1.5vw] text-[6vw] md:text-[2vw] text-[#3F3B3B] mb-2 lg:mb-4">
                      {elem.text}
                    </h3>
                    <p className="text-[#555] figee lg:text-sm md:text-[1.4vw] text-[5vw] lg:mt-8">
                    {elem.paragh}
                    </p>
                  </div>
                </div>
              </div>
            )
        })}
      </div>
  
      
   
    </section>
            </div>
        </div>
      
    </div>
  )
}

export default Therapy
