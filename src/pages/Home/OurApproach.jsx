import React from 'react'
import aproach from "../../assets/images/aporach.png"
import Button from '../../Components/Button'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const OurApproach = () => {
  // Animation refs
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const buttonRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  
  return (
    <div className='w-full bg-[#F8EEEC] mt-15 overflow-hidden relative'>
      <div className='lg:h-full lg:w-full relative'>
        
        {/* Background Image */}
        <img src={aproach} alt="" className='lg:h-full h-150  lg:w-full object-cover' />

        {/* Overlay */}
        <div className='absolute inset-0 flex items-center justify-center '>
            <div className='lg:py-8 py-10 md:py-7 lg:px-16 md:px-10 lg:p-0 p-1  rounded-4xl bg-[#FDF9E9] gap-8 flex text-center items-center justify-center flex-col'>
                <h2 ref={titleRef} className='figee lg:text-[2.5vw] md:text-[3.5vw] text-3xl text-[#32140C] '>Our Approach
                </h2>

                <h3 ref={subtitleRef} className='figee lg:text-[1vw] text-[3.7vw] md:text-[1.5vw] lg:leading-6'>Discover how ketamine therapy works at Kleamind - <br /> it's already within you, waiting to bloom.

</h3>
<Button ref={buttonRef} btn="Watch the explainer video" padding="lg:py-3 lg:px-5 py-3 md:py-3 md:px-5" fontSize='lg:text-[2vh] md:text-[1.1vh] text-[1.5vh]' hoverEffect={false}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurApproach
