import React from 'react'
import Button from '../../Components/Button'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const Psychotherapy = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const descriptionRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const buttonRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  const imagesRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 500, duration: 0.8 })
  const buttonsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 600, duration: 0.8 })

  const Psychotherapyobj = [
    {
      img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6838070c3f6fe4cdf7bab760_Frame%201410133877.avif"
    },
    {
      img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6838070c182624f3234a7bf1_Frame%201410133878.avif"
    },
    {
      img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6838070c3cf69a966dea7ac3_Frame%201410133879.avif"
    }
  ]
  return (
    <div className=' w-full grid grid-cols-1 lg:mt-20 md:mt-20 mt-10 lg:pb-30 md:pb-20 pb-12'>
      <div className='h-full flex items-center justify- gap-2 flex-col'>
        <div ref={subtitleRef} className='flex items-center gap-2 justify-center '>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[1.7vh] text-[3.3vw]  md:text-[2vw]  tracking-wide">
            Therapy Pairing


            </span>
            </div>
            <h2 ref={titleRef} className='figee text-[#32140C]  text-center lg:text-4xl text-3xl mt-1' >Ketamine & Psychotherapy

            </h2>
            <p ref={descriptionRef} className='figee text-[#433F3F] text-[3.7vw] lg:text-sm  md:text-[2vw] text-center'>When combined with talk therapy, ketamine can unlock <br />
            new insights and emotional clarity.</p>
            <div ref={buttonRef} className='lg:mt-5 mt-3'>
            <Button  btn="Learn more" padding=" py-3 px-9" to="/Lap" hoverEffect={false}/>

            </div>
        </div>

  
        <div ref={imagesRef} className="h-full flex flex-col sm:flex-row items-center justify-center lg:gap-6 sm:gap-10 mt-5 sm:mt-10">
        {
          Psychotherapyobj.map((elem,index)=>{
            return(
        <img key={index} src={elem.img} className='lg:h-[13vw] h-[28vw] md:h-[16vw] object-contain' alt="" />
               
            )
          })
        }
        

      </div>
      <div ref={buttonsRef} className="h-full flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-3 sm:gap-6 mt-2 sm:mt-9">
      <Button  btn="Schedule A  consultation" to="https://calendly.com/klearmind/consultation-with-board-certified-physician?month=2025-08"    fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'
              padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3"  bgcolor="#FD8124" textcolor="white"/>
      <Button  btn="Oral Ketamine Prescription Renewal" to="https://checkout.square.site/merchant/MLTA69W3FWH1D/checkout/E7O4RL7HFUC4XTO7A2F6ACXV"   padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3   " 
              fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'  hoverEffect={false}/>

      </div>
      
    </div>
  )
}

export default Psychotherapy
