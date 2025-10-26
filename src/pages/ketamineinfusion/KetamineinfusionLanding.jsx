import React from 'react'
import NoCost from '../../Components/NoCost'
import costing from "../../assets/images/costing.png"
import useScrollAnimation from '../../hooks/useScrollAnimation'

const KetamineinfusionLanding = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const contentRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  
  return (
    <div className=' w-full  grid grid-cols-1'>
        <div ref={subtitleRef} className='h-full w-full  text-center flex items-center lg:gap-4 gap-1 justify-start flex-col'>
        <div className='flex items-center gap-2 justify-center'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[1.7vh] md:text-[1.3vh] text-[3.6vw]  text-gray-600 tracking-wide">
            Affordable, Accessible Care

            </span>
            </div>
            <h2 ref={titleRef} className='fontspring lg:text-5xl md:text-4xl text-[7.9vw] text-[#32140C]'>Invest in Feeling Better
            </h2>
        </div>
        <div ref={contentRef} className='h-full w-full lg:mt-20 mt-9 lg:px-0 px-1'>
            <NoCost img={costing} pretext="Learn if you are a good fit" text={<>
                No Cost <br /> Consultation

                </>}/>
            
              
        </div>

      
    </div>
  )
}

export default KetamineinfusionLanding
