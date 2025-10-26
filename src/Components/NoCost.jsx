import React from 'react'
import Button from './Button'
import useScrollAnimation from '../hooks/useScrollAnimation'
const NoCost = ({img,pretext,text}) => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const listRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const buttonRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  
    const nocost = [
        {
            text:"Private Consultation up to 30 Mins"
        },
        {
            text:"Personalized Protocol"
        },
        {
            text:"Consult with Board Certified Physician"
        },
        {
            text:"No obligation, no cost"
        },
        {
            text:"In Person or By Phone"
        }
    ]
  return (
    <div className=' rounded-3xl grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2    w-full bg-[#FDF9E9] overflow-hidden'>
        <div className='h-full   lg:p-6 lg:py-3 py-6 lg:px-6 px-3'>
        <div ref={subtitleRef} className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full  bg-[#FD8124]"></span>
            <span className="figee lg:text-[1.8vh] md:text-[2vw]  text-gray-600 tracking-wide">
           {pretext}

            </span>
            </div>
            <h2 ref={titleRef} className='figee text-[#34160E] lg:text-4xl  md:text-3xl text-4xl mt-2 '>{text}</h2>

            <div ref={listRef} className="w-full grid grid-cols-1 lg:gap-8 gap-4 lg:mt-5 mt-4 pb-5">
            {
                    nocost.map((elem,index)=>{
                        return(
                            <h2 key={index} className='figee lg:text-sm text-[4vw] md:text-sm  text-[#56514C]'  >{elem.text}</h2>

                        )
                    })
                }
            </div>
            <Button ref={buttonRef}
              btn="Book an appointment" 
              bgcolor="#FD8124" 
              textcolor="white" 
              fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'
              padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3"               border="border" 
              hoverEffect={true}
              to="https://calendly.com/admin-klearmindclinics/30min?month=2025-07"
            />
        </div>
        <div className='h-ful '>
            <img src={img} alt="" className='h-full  rounded-3xl w-full object-cover' />
        </div>
      
    </div>
  )
}

export default NoCost
