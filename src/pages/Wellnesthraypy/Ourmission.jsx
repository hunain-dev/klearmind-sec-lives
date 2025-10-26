import React from 'react'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const Ourmission = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const descriptionRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  
  return (
    <div className='h-full w-full mt-15 lg:px-40 px-4 '>
        <div  className='h-full rounded-4xl w-full overflow-hidden bg-[#FDF9E9] grid grid-cols-2'>
            <div className='h-full  lg:px-7 lg:py-7 py-3 px-0 lg:p-0 md:p-3'>
            <div ref={subtitleRef} className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[1.7vh] text-[4vw] md:text-[1.9vw]  text-gray-600 tracking-wide">
            Our Mission
            </span>
            </div>
            <h3 ref={titleRef} className='figee lg:text-4xl text-[5vw] text-[#32140C] md:text-[4vw] lg:mt-9 mt-3'>At Home IV Therapy
            </h3>
            <h4 ref={descriptionRef} className='figee text-[#55504C] lg:mt-7 mt-3 text-[3.2vw] md:text-[1.7vw] lg:text-[1.2vw]'>Please note, an additional $75 fee (within 10 miles) applies for in-home services.</h4>
           

            </div>
            <div className='relative flex items-end justify-end overflow-hidden lg:h-[38vh] md:h-[25vw] w-full '>
  <img 
    src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68359bb34e245d44a0b9da18_ChatGPT%20Image%20Apr%2024%2C%202025%2C%2001_03_38%20PM%202.avif" 
    alt="" 
    className='absolute lg:left-73 md:left-41 left-8 lg:top-0 -top-11 bottom-0 lg:w-[32vw] md:h-[37vw] md:w-[45vw] lg:h-[19vw] object-cover'
  />
</div>

        </div>
      
    </div>
  )
}

export default Ourmission
