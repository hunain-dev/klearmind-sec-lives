import React, { useEffect, useState } from 'react'
import Button from './Button'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Lifedeserve = ({ videoSrc, imageSrc,heading,paragh,classname }) => {
  const [isLoading, setIsLoading] = useState(true)
  
  // Animation refs for hero text elements
  const headingRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const paragraphRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  const buttonsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 600, duration: 0.8 })

  useEffect(() => {
    // Hide loader after 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
      
      // Trigger hero animations after loading completes
      setTimeout(() => {
        if (headingRef.current) {
          headingRef.current.style.opacity = '1'
          headingRef.current.style.transform = 'translate(0, 0)'
        }
        if (paragraphRef.current) {
          paragraphRef.current.style.opacity = '1'
          paragraphRef.current.style.transform = 'translate(0, 0)'
        }
        if (buttonsRef.current) {
          buttonsRef.current.style.opacity = '1'
          buttonsRef.current.style.transform = 'translate(0, 0)'
        }
      }, 100)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // useEffect(() => {
  //   if (!isLoading) {
  //     // GSAP animations sequence
  //     const tl = gsap.timeline()
      
  //     // Set initial states
  //     gsap.set('.video-container', { opacity: 0, y: 50 })
  //     gsap.set('.heading-text', { opacity: 0, y: 30 })
  //     gsap.set('.paragraph-text', { opacity: 0, y: 30 })
  //     gsap.set('.buttons-container', { opacity: 0, y: 30 })

  //     // Animate in sequence with very fast timing
  //     tl.to('.video-container', { 
  //       opacity: 1, 
  //       y: 0, 
  //       duration: 2.3, 
  //       ease: "power2.out" 
  //     })
  //     .to('.heading-text', { 
  //       opacity: 1, 
  //       y: 0, 
  //       duration: 1.3, 
  //       ease: "power2.out" 
  //     }, "-=0.1")
  //     .to('.paragraph-text', { 
  //       opacity: 1, 
  //       y: 0, 
  //       duration: 1.3, 
  //       ease: "power2.out" 
  //     }, "-=0.1")
  //     .to('.buttons-container', { 
  //       opacity: 1, 
  //       y: 0, 
  //       duration: 0.2, 
  //       ease: "power2.out" 
  //     }, "-=0.1")
  //   }
  // }, [isLoading])

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="loader">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FD8124]"></div>
        </div>
      </div>
    )
  }

  return (
<div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-0 lg:px-40">
{/* LEFT SIDE */}
      <div className='video-container h-full overflow-hidden lg:p-3 md:p-4'>
        {videoSrc ? (
          <video
            src={videoSrc}
            className='h-full w-full rounded-4xl object-cover'
            autoPlay
            loop
            muted
          ></video>
        ) : (
          <img
            src={imageSrc}
            alt="Klearmind"
            className='h-full w-full rounded-4xl object-cover'
          />
        )}
      </div>

      <div className='h-full flex overflow-hidden items-center justify-between  flex-col '>
        <div className='w-full flex items-center justify-between   '>
        <h3 ref={headingRef} className={`heading-text text-[#32140C] lg:leading-12  md:text-[4.3vw] ${classname}`}>

        {heading}
          </h3>
        </div>
        <div className='w-full py-1 text-center lg:gap-8 gap-8 flex items-center justify-center flex-col lg:px-9 px-0 '>
          <h3 ref={paragraphRef} className='paragraph-text figee lg:leading-6  lg:text-[1vw] md:text-[1.3vw] lg:mt-0 mt-2 text-[3.2vw]  text-center text-[#413f3f]'>
            {paragh}
          </h3>
          <div ref={buttonsRef} className='buttons-container grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3'>
            <Button 
              btn="Book an appointment" 
              bgcolor="#FD8124" 
              textcolor="white" 
              fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'
              padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3" 
              border="border" 
              hoverEffect={true}
              to="https://calendly.com/klearmindclinics"
              
            />
            <Button 
              btn="Am I a candidate?" 
              padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3   " 
              fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'

              border="border-gray-700" 
              hoverEffect={false}
              to="https://calendly.com/admin-klearmindclinics/30min?month=2025-07"
              
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Lifedeserve
