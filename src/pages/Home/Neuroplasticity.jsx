import React from 'react'
import Button from './../../Components/Button'
import fish from "../../assets/images/fish.png"
import useScrollAnimation from '../../hooks/useScrollAnimation'
const Neuroplasticity = () => {
  // Animation refs
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const buttonRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const imageRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 1 })
  
  return (
    <div className=" grid grid-cols-1 w-full bg-gradient-to-b from-[#FFCB48] to-white lg:mt-24 md:mt-20 mt-10">
    <div className='h-full w-full  flex items-center justify-start flex-col py-7 lg:gap-6  gap-5 text-center'>
      <h2 ref={titleRef} className='figee lg:text-[2.5vw] md:text-[3.6vw] text-2xl'>Rewiring Hope Through Neuroplasticity</h2>
      <h3 ref={subtitleRef} className='figee lg:text-[1vw] text-[4.4vw] md:text-[2vw] text-[#4E3F22] lg:leading-6'>Discover how ketamine therapy fuels neuroplasticity   <br />
      - it's already within you, waiting to bloom.</h3>
      <Button ref={buttonRef} btn="Watch the Explainer video" padding="lg:py-3 md:py-3 py-3" fontSize='lg:text-[0.9vw] md:text-[1.3vw] text-[2.7vw]  ' border="border-gray-700" hoverEffect={false} />
      </div>
    <div ref={imageRef} className='h-full   flex items-center justify-center'>
      <img src={fish} alt="" className='lg:h-[35vw] md:h-[45vw]  object-cover' />
    </div>
    </div>
  )
}

export default Neuroplasticity
