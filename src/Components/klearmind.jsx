import React from 'react'
import Button from './Button'
import flora from "../assets/images/flora.png"
import { Link } from 'react-router-dom'
import useScrollAnimation from '../hooks/useScrollAnimation'
const Klearmind = () => {
  
  // Animation refs
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const boxesRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const buttonRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  const imageRef = useScrollAnimation({ animationType: 'fadeInLeft', delay: 200, duration: 1 })
  
    const boxes = [
        {
            id: 1,
            bgcolor:"white",
            tittle:"OverWhelmed?",
            desc:"Anxiety PTSD - biposar Discorder"
        },
        {
            id: 2,

            bgcolor:"white",
            tittle:"Feeling hopeless?",

            desc:"Dipperession low self esteem"

        },
        {
            id: 3,

            bgcolor:"white",
            tittle:"in constant pain?",

            desc:"Chronic pain"

        }
    ]
  return (
    <div className=' lg:w-[70%] md:w-[95%] m-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 bg-[#FDF9E9]  lg:p-5 px-6 lg:py-2 py-3'>
        <div className='h-full'>
        <div ref={subtitleRef} className='flex items-center gap-2 justify-start  lg:pb-0 pb-1'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] md:text-[2vw] text-[3vw]  text-gray-600 tracking-wide">
            What Is Klearmind?
            </span>
            </div>           
             <h1 ref={titleRef} className='fontspring lg:text-[2.5vw] text-[7vw] md:text-[3vw]'>Is This Right for Me?</h1>

            <div ref={boxesRef} className='grid lg:grid-col-3 grid-cols-1 lg:gap-3 gap-3 lg:mt-7 mt-5 lg:pb-8 pb-6 '>
            {
                boxes.map((elem,index)=>{
                    return(
                        <Link key={index} to={`/klearmind/${elem.id}`}>
                        <div
                          className="lg:h-[12vh] h-19 p-3 hover:scale-105 transition"
                          style={{ backgroundColor: elem.bgcolor }}
                        >
                          <h3 className="figee lg:text-[1.1vw] text-[4vw] md:text-[2vw]">{elem.tittle}</h3>
                          <h2 className="text-[#A4A1A1] lg:text-[1.1vw] md:text-[2vw] text-[3.7vw]">{elem.desc}</h2>
                        </div>
                      </Link>
                      

                    )
                })
            }
            </div>
 
            <Button ref={buttonRef} btn="am i a candidate" padding="py-3 px-9" fontSize='lg:text-[1vw] md:text-[1.2vw] text-[3vw]' hoverEffect={false}/>
           
        </div>
        <div ref={imageRef} className='h-full w-full lg:-mt-15 mt-8'>
  <img src={flora} className='lg:h-[45vw] md:h-[52vw] h-full w-full object-contain' alt="" />
</div>
      
    </div>
  )
}

export default Klearmind
