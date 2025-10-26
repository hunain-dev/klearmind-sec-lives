import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const StartGuide = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const stepsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  
    const treatment = [
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68750e7c020e2c4eb5bf8560_Frame%201410133864%20(3).avif",
            paragh:"1. Talk to your VA mental health provider about your diagnosis and lack of response to prior therapies.",
        },
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68750e7c5157cc102b82061d_Frame%201410133873.avif",
            paragh:"2. Request a Community Care referral to Klearmind Clinics for IV ketamine therapy. ",

        },
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68750e7c831fe32d928d137c_Frame%201410133872.avif",
            paragh:"3. Klearmind will coordinate with your VA team to ensure streamlined approval and treatment access. ",


        },
    
    ]
  return (
    <div className='     w-full grid mt-20 grid-cols-1 lg:px-40'>
        <div className='h-full grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2
        '>
            <div ref={subtitleRef} className='h-full lg:p-0 p-2'>
            <div className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full bg-amber-700 "></span>
            <span className="figee lg:text-[1.7vh] md:text-[1.4vw] text-[3.3vw]  text-gray-600 tracking-wide">
           Start Guide

            </span>
            </div>
            <h2 ref={titleRef} className='figee lg:text-4xl text-[6.4vw] lg:mt-2 md:text-[3.6vw] text-[#32140C]' >
            Steps to Get Started
            </h2>
            </div>
           
        </div>
        <div ref={stepsRef} className='lg:mt-7 mt-3 grid lg:grid-cols-3  grid-cols-1 md:grid-cols-3 gap-5 p-5'>
            {
                treatment.map((elem,index)=>{
                    return(
                        <div key={index} className='g-full overflow-hidden ' style={{backgroundColor:elem.bgcolor}} >
                        <div className='w-full ' style={{backgroundColor:elem.innercolor}}>
                            <img src={elem.innerimg} className='lg:h-[30vh]  rounded-2xl  w-full object-cover' alt="" />
                        </div>
                        <h6 className='figee lg:text-[1vw] lg:mt-5 text-[#6d6c6b]  md:text-[1.5vw] text-[4vw] mt-2'>{elem.paragh}</h6>
                    </div>
                    )
                })
            }
          
        </div>
      
    </div>
  )
}

export default StartGuide
